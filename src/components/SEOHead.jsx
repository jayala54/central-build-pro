import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'J&N StructureWorks';
const DEFAULT_DESCRIPTION = 'Florida Certified Building Contractor serving Central Florida. Custom homes, renovations, kitchen & bath remodels, and commercial tenant buildouts in Orange, Seminole, Osceola, and Lake counties.';
const SITE_URL = 'https://j-nsw.com';

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  type = 'website',
  article = null,
  jsonLd = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Custom Homes & Renovations in Central Florida`;
  const canonicalUrl = `${SITE_URL}${path}`;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    telephone: '(407) 555-0123',
    email: 'info@jnstructureworks.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Orlando',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Orange County, FL' },
      { '@type': 'AdministrativeArea', name: 'Seminole County, FL' },
      { '@type': 'AdministrativeArea', name: 'Osceola County, FL' },
      { '@type': 'AdministrativeArea', name: 'Lake County, FL' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Home Building' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole-Home Renovations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen & Bath Remodels' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Room Additions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Tenant Buildouts' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Renovations' } },
      ],
    },
  };

  const articleJsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.date,
        author: { '@type': 'Organization', name: SITE_NAME },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        keywords: article.tags?.join(', '),
      }
    : null;

  const structuredData = jsonLd || articleJsonLd || defaultJsonLd;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Geo / Local SEO */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Orlando" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
