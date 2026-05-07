#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCanonicalRoutes, SITE_URL } from './seo-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const routes = getCanonicalRoutes();

function withTrailingSlash(routePath) {
  if (routePath === '/') return '/';
  return routePath.endsWith('/') ? routePath : `${routePath}/`;
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function makeSitemap() {
  const urls = routes.map((route) => {
    const lastmod = route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : '';

    return `  <url>
    <loc>${escapeXml(`${SITE_URL}${withTrailingSlash(route.path)}`)}</loc>${lastmod}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
}

function makeRedirects() {
  const redirects = routes
    .filter((route) => route.path !== '/')
    .map((route) => `${route.path}  ${withTrailingSlash(route.path)}  301`);
  const legacyRedirects = [
    '/Home  /  301',
    '/Home/  /  301',
  ];

  return `# Canonical URL redirects
# Keep duplicate URL variants from being crawled as separate 200 pages.
${[...legacyRedirects, ...redirects].join('\n')}

# Cloudflare Pages SPA fallback
# All routes that don't match a static file serve index.html
/*  /index.html  200
`;
}

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), makeSitemap(), 'utf-8');
fs.writeFileSync(path.join(PUBLIC_DIR, '_redirects'), makeRedirects(), 'utf-8');

console.log(`Generated sitemap.xml and _redirects for ${routes.length} canonical routes.`);
