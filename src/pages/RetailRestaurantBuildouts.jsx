import React from 'react';
import { Store } from 'lucide-react';
import ServiceLandingPage from '@/components/ServiceLandingPage';

const service = {
  title: 'Restaurant & Retail Buildout Contractor Orlando',
  path: '/RetailRestaurantBuildouts',
  parentLabel: 'Commercial Construction',
  parentHref: '/Commercial/',
  breadcrumb: 'Restaurant & Retail Buildouts',
  schemaName: 'Restaurant and Retail Buildout Construction',
  description: 'Restaurant and retail buildout contractor serving Orlando and Central Florida with permitting, interiors, restrooms, systems and closeout.',
  serviceTypes: ['Restaurant buildouts', 'Retail buildouts', 'Commercial kitchen coordination', 'Storefront interiors', 'Tenant improvements'],
  image: '/images/services/restaurant-retail-buildout-orlando.webp',
  imageAlt: 'Representative finished restaurant and retail buildout interior',
  representativeImage: true,
  icon: Store,
  eyebrow: 'Customer-Facing Commercial Construction',
  heading: 'Restaurant & Retail Buildout Contractor in Orlando',
  intro: 'Coordinated construction for restaurant, cafe, storefront, and retail interiors from scope review and permitting through inspections and closeout.',
  formService: 'retail-restaurant-buildout',
  ctaLabel: 'Request a Buildout Estimate',
  scopeHeading: 'Build the space around operations, customers, and approvals',
  body: [
    'Restaurant and retail spaces must balance customer experience with circulation, accessibility, employee workflow, utilities, equipment, life-safety systems, durable finishes, and agency requirements. The buildout scope starts with the lease, existing conditions, approved use, and construction documents.',
    'J&N StructureWorks coordinates the contracted work with owners, tenants, landlords, design professionals, trade contractors, property management, and reviewing agencies. Existing utility capacity, change of use, grease and exhaust requirements, fire review, health review, and accessibility can materially affect restaurant projects.',
    'Retail projects may emphasize storefront conditions, displays, lighting, fitting rooms, point-of-sale areas, stock rooms, restrooms, and customer circulation. Each estimate is based on the actual space and approved scope rather than a generic per-square-foot promise.',
  ],
  includes: ['Existing-space and plan review', 'Landlord and design-team coordination', 'Partitions, ceilings, lighting, and finishes', 'Restrooms and accessibility work', 'Plumbing, electrical, HVAC, and equipment coordination', 'Permits, inspections, and contracted closeout'],
  applicationsHeading: 'Restaurant and retail project types',
  applicationsIntro: 'The intended use and existing property conditions determine design, agency, utility, and construction requirements.',
  applications: [
    ['Restaurants and cafes', 'Dining, service, kitchen-support, restroom, and customer areas coordinated around approved plans and operational needs.'],
    ['Quick-service concepts', 'Counter-service spaces planned around queues, pickup, equipment, utilities, durable finishes, and customer circulation.'],
    ['Retail storefronts', 'Sales floors, displays, lighting, checkout areas, stock rooms, fitting rooms, and storefront conditions.'],
    ['Franchise locations', 'Construction coordinated with approved brand documents, landlord requirements, local codes, and site-specific conditions.'],
    ['Second-generation spaces', 'Existing restaurant or retail locations evaluated for reuse, selective demolition, system changes, and new finishes.'],
    ['Shell-space buildouts', 'New interior construction requiring coordinated partitions, systems, accessibility, finishes, inspections, and occupancy closeout.'],
  ],
  process: [
    ['Site and lease review', 'Review existing conditions, landlord documents, intended use, plans, utility information, budget, and opening goals.'],
    ['Scope and preconstruction', 'Coordinate design questions, constructability, allowances, long-lead items, agencies, and a project-specific estimate.'],
    ['Permitting and construction', 'Coordinate approvals and complete the contracted field work in a practical trade and inspection sequence.'],
    ['Inspections and turnover', 'Address correction items, complete required final inspections, and coordinate closeout for the contracted scope.'],
  ],
  faqs: [
    { q: 'Do you build restaurants and retail stores in Orlando?', a: 'Yes. We provide restaurant, cafe, storefront, and retail buildout construction in Orlando and surrounding Central Florida communities, subject to project scope, location, and schedule.' },
    { q: 'Can you build out a second-generation restaurant space?', a: 'Yes. We review which existing improvements may remain and what must change for the new concept, approved plans, equipment, utilities, accessibility, and agency requirements.' },
    { q: 'Do you coordinate restaurant permits and inspections?', a: 'We coordinate building permits and inspections included in our contracted scope. Restaurant projects may also require fire, health, utility, grease, exhaust, or other agency reviews handled by the appropriate project participants.' },
    { q: 'Can you work with franchise plans and landlord requirements?', a: 'Yes. We can coordinate the contracted construction with approved franchise documents, landlord work letters, property-management requirements, design professionals, and local code requirements.' },
  ],
  faqTitle: 'Restaurant & Retail Buildout FAQs',
  related: [
    { label: 'Tenant Buildouts', href: '/CommercialBuildouts/', description: 'General tenant-improvement construction for leased commercial spaces.' },
    { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Reconfigure and update an existing business property.' },
    { label: 'Kissimmee Commercial Project', href: '/commercial-remodel-kissimmee-taco-bell/', description: 'Commercial repipe and bathroom remodel case study.' },
  ],
  finalHeading: 'Planning a restaurant or retail buildout?',
  finalText: 'Share the property, lease status, intended use, available plans, landlord documents, budget range, and target opening schedule.',
};

export default function RetailRestaurantBuildouts() {
  return <ServiceLandingPage service={service} />;
}
