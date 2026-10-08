import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'J&N StructureWorks';
const LEGAL_NAME = 'J&N StructureWorks, LLC';
const DEFAULT_DESCRIPTION = 'J&N StructureWorks is a Florida Certified Building Contractor serving Orlando and Central Florida with residential and commercial construction services.';
const SITE_URL = 'https://j-nsw.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/projects/completed-home.webp`;

function normalizeCanonicalPath(path) {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function normalizePageStructuredData(data) {
  if (!data || typeof data !== 'object') return data;

  if (data['@type'] === 'Service') {
    const serviceUrl = typeof data.url === 'string' && data.url.startsWith(SITE_URL)
      ? `${SITE_URL}${normalizeCanonicalPath(data.url.slice(SITE_URL.length))}`
      : data.url;

    return {
      ...data,
      provider: { '@id': `${SITE_URL}/#business` },
      ...(serviceUrl ? { url: serviceUrl } : {}),
    };
  }

  return data;
}

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  type = 'website',
  article = null,
  jsonLd = null,
  image = DEFAULT_IMAGE,
  imageAlt = 'Custom home built by J&N StructureWorks in Central Florida',
  breadcrumbs = null,
  noIndex = false,
  geoPlace = 'Central Florida',
  preloadImage = false,
}) {
  const fullTitle = title
    ? (title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`)
    : `General Contractor Orlando FL | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${normalizeCanonicalPath(path)}`;

  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    description: DEFAULT_DESCRIPTION,
    url: `${SITE_URL}/`,
    telephone: '+1-321-695-4964',
    email: 'jnstructureworks@gmail.com',
    image: `${SITE_URL}/logo.webp`,
    logo: `${SITE_URL}/logo.webp`,
    knowsAbout: [
      'Custom Home Building',
      'Home Renovations',
      'Kitchen Remodeling',
      'Bathroom Remodeling',
      'Commercial Tenant Buildouts',
      'Room Additions',
      'New Home Construction',
      'General Contracting',
      'Commercial Demolition',
      'Selective Demolition',
    ],
    areaServed: [
      { '@type': 'City', name: 'Orlando', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Winter Park', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Lake Mary', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Kissimmee', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Saint Cloud', containedInPlace: { '@type': 'State', name: 'Florida' } },
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
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complete Demolition' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Selective Demolition' } },
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

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { '@id': `${SITE_URL}/#business` },
  };

  const articleJsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.date,
        dateModified: article.modifiedDate || article.date,
        image,
        author: { '@id': `${SITE_URL}/#business` },
        publisher: { '@id': `${SITE_URL}/#business` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        keywords: article.tags?.join(', '),
      }
    : null;

  const breadcrumbJsonLd = breadcrumbs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: item.href ? `${SITE_URL}${normalizeCanonicalPath(item.href)}` : canonicalUrl,
        })),
      }
    : null;

  const pageStructuredData = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map(normalizePageStructuredData)
    : [];
  const structuredData = [
    businessJsonLd,
    ...(path === '/' ? [websiteJsonLd] : []),
    ...(articleJsonLd ? [articleJsonLd] : []),
    ...(breadcrumbJsonLd ? [breadcrumbJsonLd] : []),
    ...pageStructuredData,
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,follow" />}
      <link rel="canonical" href={canonicalUrl} />
      {preloadImage && <link rel="preload" as="image" href={image} fetchPriority="high" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo / Local SEO */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content={geoPlace} />

      {/* JSON-LD Structured Data */}
      {structuredData.map((data, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
  );
}
