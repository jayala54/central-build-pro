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
const routes = getCanonicalRoutes();
const canonicalPaths = new Set(routes.map((route) => canonicalPath(route.path)));
const inboundLinks = new Map(routes.map((route) => [canonicalPath(route.path), new Set()]));

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

for (const route of routes) {
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
  const canonicalCount = (html.match(/<link\s+rel="canonical"/gi) || []).length;
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
  if (canonicalCount !== 1) issues.push(`Expected one canonical, found ${canonicalCount}: ${route.path}`);
  if (h1Count !== 1) issues.push(`Expected one H1, found ${h1Count}: ${route.path}`);
  if (route.indexable === false && !robots.includes('noindex')) issues.push(`Non-indexable route lacks noindex: ${route.path}`);
  if (route.indexable !== false && robots.includes('noindex')) issues.push(`Indexable route has noindex: ${route.path}`);
  for (const [tag, expression] of requiredSocialTags) {
    if (!expression.test(html)) issues.push(`Missing ${tag}: ${route.path}`);
  }

  addDuplicate(titles, title, route.path);
  addDuplicate(descriptions, description, route.path);

  if ((title.match(/J&amp;N StructureWorks/g) || []).length > 1) {
    issues.push(`Business name repeated in title: ${route.path}`);
  }

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
    if (!canonicalPaths.has(href)) {
      issues.push(`Broken internal route: ${route.path} -> ${href}`);
    } else if (href !== canonicalPath(route.path)) {
      inboundLinks.get(href)?.add(route.path);
    }
  }

  for (const imageMatch of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = imageMatch[0];
    const src = match(tag, /\ssrc="([^"]+)"/i);
    const altMatch = tag.match(/\salt="([^"]*)"/i);
    if (!altMatch) issues.push(`Image missing alt attribute: ${route.path} -> ${src || '(unknown source)'}`);
    if (src.startsWith('/') && !src.startsWith('//')) {
      const imageFile = path.join(dist, src.replace(/^\//, ''));
      if (!fs.existsSync(imageFile)) issues.push(`Missing local image: ${route.path} -> ${src}`);
    }
  }

  const headingLevels = [...html.matchAll(/<h([1-6])\b/gi)].map((heading) => Number(heading[1]));
  for (let index = 1; index < headingLevels.length; index += 1) {
    if (headingLevels[index] > headingLevels[index - 1] + 1) {
      issues.push(`Heading level skips from H${headingLevels[index - 1]} to H${headingLevels[index]}: ${route.path}`);
      break;
    }
  }
}

for (const [title, pages] of titles) {
  if (pages.length > 1) issues.push(`Duplicate title "${title}": ${pages.join(', ')}`);
}

for (const [description, pages] of descriptions) {
  if (pages.length > 1) issues.push(`Duplicate description on: ${pages.join(', ')}`);
}

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((entry) => entry[1]);
for (const route of routes.filter((item) => item.indexable !== false)) {
  const url = `${SITE_URL}${canonicalPath(route.path)}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) issues.push(`Sitemap missing: ${url}`);
}
for (const route of routes.filter((item) => item.indexable === false)) {
  const url = `${SITE_URL}${canonicalPath(route.path)}`;
  if (sitemapUrls.includes(url)) issues.push(`Non-indexable route appears in sitemap: ${url}`);
}
if (new Set(sitemapUrls).size !== sitemapUrls.length) issues.push('Sitemap contains duplicate URLs');

for (const route of routes.filter((item) => item.indexable !== false && item.path !== '/')) {
  const routePath = canonicalPath(route.path);
  if ((inboundLinks.get(routePath)?.size || 0) === 0) issues.push(`Orphan indexable route: ${route.path}`);
}

const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
if (!/^User-agent:\s*\*/im.test(robots)) issues.push('robots.txt lacks a default user-agent group');
if (!new RegExp(`^Sitemap:\\s*${SITE_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/sitemap\\.xml$`, 'im').test(robots)) {
  issues.push('robots.txt lacks the canonical sitemap reference');
}

if (issues.length) {
  console.error(`SEO audit found ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exitCode = 1;
} else {
  console.log(`SEO audit passed for ${routes.length} prerendered routes.`);
}
