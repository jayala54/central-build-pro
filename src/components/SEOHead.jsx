import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'J&N StructureWorks';
const DEFAULT_DESCRIPTION = 'Florida Certified Building Contractor (CBC1269175) serving Orlando & Central Florida. Custom homes, renovations, kitchen & bath remodels, and commercial buildouts in Orange, Seminole, Osceola & Lake counties. Call (321) 695-4964 for a free quote.';
const SITE_URL = 'https://j-nsw.com';

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  type = 'website',
  article = null,
  jsonLd = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `Custom Home Builder Orlando FL | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': SITE_URL,
    name: SITE_NAME,
    alternateName: 'J&N StructureWorks, LLC',
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    telephone: '+1-321-695-4964',
    email: 'jnstructureworks@gmail.com',
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: '$$$$',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Orlando',
      addressRegion: 'FL',
      postalCode: '32801',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5383,
      longitude: -81.3792,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Michael R.' },
        reviewBody: 'J&N StructureWorks built our dream home in Winter Park. Outstanding quality, on time, and within budget. Highly recommend!',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Sarah T.' },
        reviewBody: 'Complete kitchen and bathroom renovation. The team was professional, communicative, and the results exceeded our expectations.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'David & Lisa M.' },
        reviewBody: 'They handled our commercial tenant buildout flawlessly. Great attention to detail and excellent project management.',
      },
    ],
    sameAs: ['https://share.google/feWTzOGTKyUrlkb2o'],
    knowsAbout: [
      'Custom Home Building',
      'Home Renovations',
      'Kitchen Remodeling',
      'Bathroom Remodeling',
      'Commercial Tenant Buildouts',
      'Room Additions',
      'New Home Construction',
      'General Contracting',
    ],
    areaServed: [
      { '@type': 'City', name: 'Orlando', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Winter Park', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Lake Mary', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Kissimmee', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Sanford', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Oviedo', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Clermont', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Winter Garden', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Windermere', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Dr. Phillips', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Lake Nona', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Altamonte Springs', containedInPlace: { '@type': 'State', name: 'Florida' } },
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
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Florida Certified Building Contractor',
      recognizedBy: { '@type': 'Organization', name: 'Florida DBPR' },
      identifier: 'CBC1269175',
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
      <script type="application/ld+json">{JSON.stringify(Array.isArray(structuredData) ? structuredData : structuredData)}</script>
    </Helmet>
  );
}
