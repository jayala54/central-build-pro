#!/usr/bin/env node
import puppeteer from 'puppeteer';

const baseUrl = process.env.QA_BASE_URL || 'http://127.0.0.1:5173';
const routes = ['/', '/Contact/', '/FreeQuote/', '/Commercial/', '/CommercialBuildouts/', '/Demolition/', '/ServiceAreaOrlando/', '/ServiceAreaSaintCloud/'];
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 1000 },
];
const issues = [];
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

try {
  for (const viewport of viewports) {
    for (const route of routes) {
      const page = await browser.newPage();
      const consoleErrors = [];
      page.on('console', (message) => {
        if (message.type() === 'error') consoleErrors.push(message.text());
      });
      await page.setViewport(viewport);
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 75));
        }
        window.scrollTo(0, 0);
        await Promise.all([...document.images].map((image) => {
          if (image.complete) return Promise.resolve();
          return new Promise((resolve) => {
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
            setTimeout(resolve, 3000);
          });
        }));
      });
      await new Promise((resolve) => setTimeout(resolve, 300));

      const result = await page.evaluate(() => ({
        title: document.title,
        h1: document.querySelector('h1')?.textContent.trim() || '',
        horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        brokenImages: [...document.images]
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src),
      }));

      if (!result.title) issues.push(`${viewport.name} ${route}: missing document title`);
      if (!result.h1) issues.push(`${viewport.name} ${route}: missing H1`);
      if (result.horizontalOverflow > 1) issues.push(`${viewport.name} ${route}: ${result.horizontalOverflow}px horizontal overflow`);
      if (result.brokenImages.length) issues.push(`${viewport.name} ${route}: broken images ${result.brokenImages.join(', ')}`);
      if (consoleErrors.length) issues.push(`${viewport.name} ${route}: console errors ${consoleErrors.join(' | ')}`);

      if (viewport.name === 'mobile' && route !== '/FreeQuote/') {
        const menuButton = await page.$('button[aria-controls="mobile-navigation"]');
        if (!menuButton) {
          issues.push(`mobile ${route}: navigation toggle is missing`);
        } else {
          await menuButton.evaluate((button) => button.click());
          await new Promise((resolve) => setTimeout(resolve, 500));
          const expanded = await menuButton.evaluate((button) => button.getAttribute('aria-expanded'));
          const menu = await page.$('#mobile-navigation');
          if (expanded !== 'true' || !menu) {
            issues.push(`mobile ${route}: navigation did not open`);
          } else {
            const menuState = await menu.evaluate((element) => ({
              visible: getComputedStyle(element).display !== 'none',
              scrollable: element.scrollHeight <= element.clientHeight || getComputedStyle(element).overflowY === 'auto',
            }));
            if (!menuState.visible) issues.push(`mobile ${route}: navigation did not open`);
            if (!menuState.scrollable) issues.push(`mobile ${route}: navigation can be clipped on short screens`);
          }
        }
      }

      console.log(`${viewport.name.padEnd(7)} ${route.padEnd(28)} overflow=${result.horizontalOverflow} brokenImages=${result.brokenImages.length}`);
      await page.close();
    }
  }
} finally {
  await browser.close();
}

if (issues.length) {
  console.error(`\nBrowser QA found ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exitCode = 1;
} else {
  console.log(`\nBrowser QA passed for ${routes.length} routes at mobile and desktop widths.`);
}
