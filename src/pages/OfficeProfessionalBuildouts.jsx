import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import ServiceLandingPage from '@/components/ServiceLandingPage';

const service = {
  title: 'Office Buildout Contractor Orlando FL',
  path: '/OfficeProfessionalBuildouts',
  parentLabel: 'Commercial Construction',
  parentHref: '/Commercial/',
  breadcrumb: 'Office & Professional Buildouts',
  schemaName: 'Office and Professional Space Buildouts',
  description: 'Office buildout contractor serving Orlando and Central Florida with professional interiors, permits, accessibility, systems and finishes.',
  serviceTypes: ['Office buildouts', 'Professional office construction', 'Medical office buildouts', 'Tenant improvements', 'Commercial interior construction'],
  image: '/images/services/office-professional-buildout-orlando.webp',
  imageAlt: 'Representative completed office and professional-space buildout',
  representativeImage: true,
  icon: BriefcaseBusiness,
  eyebrow: 'Office & Professional Interiors',
  heading: 'Office Buildout Contractor in Orlando & Central Florida',
  intro: 'Work-focused commercial interiors coordinated around workflow, accessibility, building systems, technology, finishes, inspections, and occupancy requirements.',
  formService: 'office-professional-buildout',
  ctaLabel: 'Request an Office Buildout Estimate',
  scopeHeading: 'A workplace planned for the way your business operates',
  body: [
    'Office and professional buildouts connect employee workflow, client experience, privacy, accessibility, data, lighting, mechanical comfort, restrooms, break areas, storage, and future flexibility. The right scope begins with the existing space, lease documents, approved use, and project plans.',
    'J&N StructureWorks coordinates the contracted construction with the tenant or owner, landlord, property manager, design professionals, and trade contractors. We identify existing-condition questions and long-lead considerations before work begins, then manage the field sequence and required inspections.',
    'Medical and regulated professional spaces may involve additional design, equipment, privacy, utility, agency, or life-safety requirements. Those requirements must be established by the qualified project team and reviewing authorities before construction and pricing are finalized.',
  ],
  includes: ['Space and construction-document review', 'Private offices, conference rooms, and reception', 'Partitions, doors, ceilings, and finishes', 'Restrooms, break rooms, and accessibility work', 'Lighting, electrical, data, plumbing, and HVAC coordination', 'Permits, inspections, and contracted closeout'],
  applicationsHeading: 'Office and professional-space projects',
  applicationsIntro: 'Every workplace is configured around its occupancy, workflow, equipment, privacy, accessibility, and building-system needs.',
  applications: [
    ['General offices', 'Reception, private offices, open work areas, conference rooms, storage, break rooms, and support spaces.'],
    ['Professional practices', 'Client-facing suites coordinated around reception, consultation rooms, privacy, records, workflow, and finishes.'],
    ['Medical and wellness offices', 'Project-specific interiors coordinated with the design team around equipment, privacy, utilities, accessibility, and applicable agency requirements.'],
    ['Second-generation offices', 'Existing office layouts evaluated for selective demolition, reuse, reconfiguration, system updates, and new finishes.'],
    ['Shell-space buildouts', 'Complete interior construction from partitions and rough-ins through ceilings, finishes, inspections, and closeout.'],
    ['Occupied renovations', 'Phasing, access, dust control, utility interruptions, and safety needs evaluated for work in an operating property.'],
  ],
  process: [
    ['Site and needs review', 'Document existing conditions, lease requirements, workflow, headcount, plans, technology, budget, and schedule.'],
    ['Design and estimate', 'Coordinate constructability questions and prepare a project-specific scope and estimate around available documents.'],
    ['Permitting and construction', 'Coordinate approvals, access, trades, inspections, and documented changes during the field work.'],
    ['Closeout and occupancy', 'Address punch items and required final inspections, then coordinate turnover records for the contracted scope.'],
  ],
  faqs: [
    { q: 'What is included in an office buildout?', a: 'A project may include selective demolition, partitions, doors, ceilings, flooring, millwork, restrooms, break areas, lighting, electrical, data pathways, plumbing, HVAC coordination, accessibility work, permits, inspections, and finishes.' },
    { q: 'Can you renovate an occupied office?', a: 'We can evaluate phasing, access, noise, dust control, safety, utility interruptions, and scheduling. Whether the office can remain occupied depends on the approved scope and site conditions.' },
    { q: 'Do you build medical and professional offices?', a: 'Yes. We can construct medical, wellness, and professional interiors when the project team has identified the applicable design, equipment, utility, privacy, accessibility, and agency requirements.' },
    { q: 'How long does an office buildout take?', a: 'The schedule depends on design, landlord approval, permitting, existing conditions, long-lead products, utility work, inspections, and scope. We develop a project-specific schedule after reviewing the space and documents.' },
  ],
  faqTitle: 'Office Buildout FAQs',
  related: [
    { label: 'Tenant Buildouts', href: '/CommercialBuildouts/', description: 'Commercial tenant improvements from planning through closeout.' },
    { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Update or reconfigure an existing commercial property.' },
    { label: 'Restaurant & Retail Buildouts', href: '/RetailRestaurantBuildouts/', description: 'Customer-facing restaurant, cafe, storefront, and retail construction.' },
  ],
  finalHeading: 'Planning an office or professional-space buildout?',
  finalText: 'Send the property, lease status, intended use, available plans, headcount, scope, budget range, and target occupancy date.',
};

export default function OfficeProfessionalBuildouts() {
  return <ServiceLandingPage service={service} />;
}
