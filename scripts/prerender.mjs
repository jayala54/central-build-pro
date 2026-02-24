#!/usr/bin/env node
import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4173;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

// Every route from the sitemap + router
const ROUTES = [
  '/',
  '/Services',
  '/Projects',
  '/About',
  '/Contact',
  '/Blog',
  '/CustomHomes',
  '/KitchenBathRemodeling',
  '/WholeHomeRenovations',
  '/RoomAdditions',
  '/CommercialBuildouts',
  '/CommercialRenovations',
  '/ServiceAreaOrlando',
  '/ServiceAreaWinterPark',
  '/ServiceAreaLakeMary',
  '/ServiceAreaKissimmee',
  '/ServiceAreaSanford',
  '/ServiceAreaOviedo',
  '/ServiceAreaClermont',
  '/ServiceAreaWinterGarden',
  '/ServiceAreaWindermere',
  '/ServiceAreaAltamonteSprings',
  '/ServiceAreaLakeNona',
  '/ServiceAreaDrPhillips',
  '/PrivacyPolicy',
  '/TermsOfService',
  // Blog articles
  '/Blog/how-much-does-it-cost-to-build-a-home-in-central-florida',
  '/Blog/choosing-the-right-lot-for-your-new-build',
  '/Blog/building-permits-orange-county-florida',
  '/Blog/new-home-construction-timeline',
  '/Blog/open-floor-plan-vs-traditional-layout',
  '/Blog/kitchen-renovation-guide-central-florida',
  '/Blog/seminole-county-building-requirements',
  '/Blog/hurricane-resistant-home-construction',
  '/Blog/choosing-the-right-flooring-for-florida-homes',
  '/Blog/bathroom-renovation-mistakes-to-avoid',
  '/Blog/osceola-county-new-construction-guide',
  '/Blog/energy-efficient-home-features',
  '/Blog/fix-and-flip-construction-orlando',
  '/Blog/how-to-choose-a-contractor-central-florida',
  '/Blog/adu-guest-house-construction-florida',
  '/Blog/lake-county-building-guide',
];

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.join(DIST, urlPath);

      // Serve static files if they exist
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(fs.readFileSync(filePath));
        return;
      }

      // SPA fallback — serve index.html for all routes
      const indexPath = path.join(DIST, 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(indexPath));
    });

    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log(`\nPre-rendering ${ROUTES.length} pages...\n`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Give react-helmet-async time to update <head> tags
      await new Promise((r) => setTimeout(r, 1500));

      let html = await page.content();

      // Ensure proper DOCTYPE
      if (!/^<!DOCTYPE/i.test(html)) {
        html = '<!DOCTYPE html>' + html;
      }

      // Write to dist/[route]/index.html (root route overwrites dist/index.html)
      if (route === '/') {
        fs.writeFileSync(path.join(DIST, 'index.html'), html, 'utf-8');
      } else {
        const segments = route.split('/').filter(Boolean);
        const outDir = path.join(DIST, ...segments);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
      }

      console.log(`  + ${route}`);
      success++;
      await page.close();
    } catch (err) {
      console.error(`  x ${route} -- ${err.message}`);
      failed++;
    }
  }

  await browser.close();
  server.close();

  console.log(
    `\nPre-rendered ${success} pages${failed ? `, ${failed} failed` : ''}\n`
  );

  if (failed > 0) process.exit(1);
}

prerender();
