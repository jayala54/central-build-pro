import { articles } from '../src/data/articles.js';

export const SITE_URL = 'https://j-nsw.com';

export const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/Services', changefreq: 'monthly', priority: '0.9' },
  { path: '/Projects', changefreq: 'monthly', priority: '0.8' },
  { path: '/About', changefreq: 'monthly', priority: '0.8' },
  { path: '/Contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/Blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/commercial-remodel-kissimmee-taco-bell', changefreq: 'monthly', priority: '0.8' },
  { path: '/CustomHomes', changefreq: 'monthly', priority: '0.9' },
  { path: '/KitchenBathRemodeling', changefreq: 'monthly', priority: '0.9' },
  { path: '/WholeHomeRenovations', changefreq: 'monthly', priority: '0.9' },
  { path: '/RoomAdditions', changefreq: 'monthly', priority: '0.9' },
  { path: '/CommercialBuildouts', changefreq: 'monthly', priority: '0.9' },
  { path: '/CommercialRenovations', changefreq: 'monthly', priority: '0.9' },
  { path: '/ServiceAreaOrlando', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaWinterPark', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaLakeMary', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaKissimmee', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaSanford', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaOviedo', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaClermont', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaWinterGarden', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaWindermere', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaAltamonteSprings', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaLakeNona', changefreq: 'monthly', priority: '0.8' },
  { path: '/ServiceAreaDrPhillips', changefreq: 'monthly', priority: '0.8' },
  { path: '/PrivacyPolicy', changefreq: 'yearly', priority: '0.3' },
  { path: '/TermsOfService', changefreq: 'yearly', priority: '0.3' },
];

export function getBuildDate() {
  return new Date().toISOString().slice(0, 10);
}

export function getPublishedArticles(buildDate = getBuildDate()) {
  return articles.filter((article) => article.date <= buildDate);
}

export function getBlogRoutes(buildDate = getBuildDate()) {
  return getPublishedArticles(buildDate).map((article) => ({
    path: `/Blog/${article.slug}`,
    lastmod: article.date,
    changefreq: 'monthly',
    priority: '0.7',
  }));
}

export function getCanonicalRoutes(buildDate = getBuildDate()) {
  return [...staticRoutes, ...getBlogRoutes(buildDate)];
}
