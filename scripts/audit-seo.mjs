#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCanonicalRoutes, SITE_URL } from './seo-routes.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const issues = [];
const titles = new Map();
const descriptions = new Map();

function canonicalPath(routePath) {
  return routePath === '/' ? '/' : `${routePath.replace(/\/$/, '')}/`;
}

function pageFile(routePath) {
  return routePath === '/' ? path.join(dist, 'index.html') : path.join(dist, routePath.replace(/^\//, ''), 'index.html');
}

function match(html, expression) {
  return html.match(expression)?.[1]?.trim() || '';
}

function addDuplicate(map, value, routePath) {
  if (!value) return;
  const pages = map.get(value) || [];
  pages.push(routePath);
  map.set(value, pages);
}

for (const route of getCanonicalRoutes()) {
  const file = pageFile(route.path);
  const expectedUrl = `${SITE_URL}${canonicalPath(route.path)}`;
  if (!fs.existsSync(file)) {
    issues.push(`Missing prerendered page: ${route.path}`);
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  const title = match(html, /<title[^>]*>([^<]+)<\/title>/i);
  const description = match(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = match(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const robots = match(html, /<meta\s+name="robots"\s+content="([^"]+)"/i);
  const requiredSocialTags = [
    ['og:title', /<meta\s+property="og:title"\s+content="[^"]+"/i],
    ['og:description', /<meta\s+property="og:description"\s+content="[^"]+"/i],
    ['og:url', /<meta\s+property="og:url"\s+content="[^"]+"/i],
    ['og:type', /<meta\s+property="og:type"\s+content="[^"]+"/i],
    ['og:image', /<meta\s+property="og:image"\s+content="[^"]+"/i],
    ['twitter:card', /<meta\s+name="twitter:card"\s+content="[^"]+"/i],
    ['twitter:title', /<meta\s+name="twitter:title"\s+content="[^"]+"/i],
    ['twitter:description', /<meta\s+name="twitter:description"\s+content="[^"]+"/i],
    ['twitter:image', /<meta\s+name="twitter:image"\s+content="[^"]+"/i],
  ];

  if (!title) issues.push(`Missing title: ${route.path}`);
  if (!description) issues.push(`Missing meta description: ${route.path}`);
  if (canonical !== expectedUrl) issues.push(`Canonical mismatch: ${route.path} -> ${canonical || '(missing)'}`);
  if (h1Count !== 1) issues.push(`Expected one H1, found ${h1Count}: ${route.path}`);
  if (route.indexable === false && !robots.includes('noindex')) issues.push(`Non-indexable route lacks noindex: ${route.path}`);
  if (route.indexable !== false && robots.includes('noindex')) issues.push(`Indexable route has noindex: ${route.path}`);
  for (const [tag, expression] of requiredSocialTags) {
    if (!expression.test(html)) issues.push(`Missing ${tag}: ${route.path}`);
  }

  addDuplicate(titles, title, route.path);
  addDuplicate(descriptions, description, route.path);

  for (const script of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(script[1]);
    } catch {
      issues.push(`Invalid JSON-LD: ${route.path}`);
    }
  }

  for (const hrefMatch of html.matchAll(/href="(\/[^"]*)"/gi)) {
    const href = hrefMatch[1].split('#')[0].split('?')[0];
    if (!href || href === '/' || href.startsWith('/assets/') || href.startsWith('/images/') || href.startsWith('/cdn-cgi/')) continue;
    if (/\.[a-z0-9]+$/i.test(href)) continue;
    if (!href.endsWith('/')) issues.push(`Internal link is not canonical: ${route.path} -> ${href}`);
  }
}

for (const [title, pages] of titles) {
  if (pages.length > 1) issues.push(`Duplicate title "${title}": ${pages.join(', ')}`);
}

for (const [description, pages] of descriptions) {
  if (pages.length > 1) issues.push(`Duplicate description on: ${pages.join(', ')}`);
}

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
for (const route of getCanonicalRoutes().filter((item) => item.indexable !== false)) {
  const url = `${SITE_URL}${canonicalPath(route.path)}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) issues.push(`Sitemap missing: ${url}`);
}

if (issues.length) {
  console.error(`SEO audit found ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exitCode = 1;
} else {
  console.log(`SEO audit passed for ${getCanonicalRoutes().length} prerendered routes.`);
}
