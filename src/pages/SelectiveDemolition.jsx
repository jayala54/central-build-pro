import React from 'react';
import { Hammer } from 'lucide-react';
import ServiceLandingPage from '@/components/ServiceLandingPage';

const service = {
  title: 'Selective Demolition Contractor Orlando FL',
  path: '/SelectiveDemolition',
  parentLabel: 'Demolition Services',
  parentHref: '/Demolition/',
  breadcrumb: 'Selective Demolition',
  schemaName: 'Selective Demolition Services',
  description: 'Selective demolition contractor serving Orlando and Central Florida with controlled interior removal, protection, debris cleanup and renovation preparation.',
  serviceTypes: ['Selective demolition', 'Interior demolition', 'Commercial demolition', 'Renovation preparation', 'Tenant buildout demolition'],
  image: '/images/projects/demolition/selective-demolition-progress.webp',
  imageAlt: 'Selective demolition in progress with portions of a commercial structure retained',
  imageWidth: 1600,
  imageHeight: 1200,
  icon: Hammer,
  eyebrow: 'Controlled, Targeted Removal',
  heading: 'Selective Demolition Contractor in Orlando & Central Florida',
  intro: 'Controlled removal of identified walls, ceilings, finishes, fixtures, and approved structural components while protecting the construction designated to remain.',
  formService: 'selective-demolition',
  ctaLabel: 'Request a Selective Demolition Estimate',
  scopeHeading: 'Clear removal limits protect the renovation that follows',
  body: [
    'Selective demolition is used when only part of a building must be removed. It requires accurate plans or field-defined limits, protection of adjacent finishes and systems, utility awareness, dust and debris control, safe access, and a turnover condition coordinated with the new construction scope.',
    'J&N StructureWorks performs selective demolition as a standalone contracted service or as the opening phase of a renovation, tenant buildout, addition, repair, or system replacement. The scope identifies what comes out, what remains, who addresses utilities, and how the work area will be left.',
    'Concealed conditions can change the planned sequence. When demolition exposes undocumented framing, utilities, water damage, or other conditions, the project team documents the issue and determines any required design, permit, or scope response before affected work continues.',
  ],
  includes: ['Removal-limit and existing-condition review', 'Protection of adjacent work to remain', 'Interior walls, ceilings, finishes, and fixtures', 'Approved structural removal when designed', 'Debris handling and work-area cleanup', 'Turnover coordinated with the next construction phase'],
  applicationsHeading: 'Selective demolition applications',
  applicationsIntro: 'The approved plans and field conditions determine which components may be removed and what protection or temporary support is required.',
  applications: [
    ['Tenant buildouts', 'Remove existing partitions, ceilings, finishes, fixtures, and systems identified for a new commercial layout.'],
    ['Restaurant and retail renovations', 'Targeted interior removal coordinated with equipment, utilities, restrooms, storefronts, and customer-facing improvements.'],
    ['Office reconfiguration', 'Prepare office and professional spaces for new partitions, doors, ceilings, systems, flooring, and finishes.'],
    ['Residential remodeling', 'Controlled removal for kitchens, bathrooms, additions, structural openings, whole-home renovations, and repairs.'],
    ['Fire and water damage', 'Remove approved damaged components while preserving portions determined suitable to remain by the project team.'],
    ['Structural modifications', 'Remove identified structural components only when supported by the approved design, sequence, and temporary-support requirements.'],
  ],
  process: [
    ['Review and mark limits', 'Review plans and conditions, identify removal boundaries, utilities, protection needs, access, and turnover requirements.'],
    ['Plan and prepare', 'Coordinate applicable permits, utility controls, temporary protection, dust control, debris routes, and sequencing.'],
    ['Controlled removal', 'Complete the approved demolition in stages while monitoring adjacent construction and concealed conditions.'],
    ['Clean and document', 'Remove included debris, document newly exposed conditions, and prepare the work area for the next phase.'],
  ],
  faqs: [
    { q: 'What is selective demolition?', a: 'Selective demolition removes only identified building components while preserving the structure, finishes, and systems designated to remain. It is commonly used before renovations and commercial buildouts.' },
    { q: 'Can you remove load-bearing walls?', a: 'Structural components may be removed only when the work is supported by the required design, permits, sequence, and temporary-support plan. A design professional may need to evaluate and document the modification.' },
    { q: 'Can selective demolition be completed in an occupied building?', a: 'Possibly. Phasing, access, dust, noise, life safety, utility interruptions, and business operations must be evaluated. Some scopes require areas or the entire property to be unoccupied.' },
    { q: 'Do you handle debris cleanup?', a: 'Debris removal and work-area cleanup can be included. The estimate defines disposal responsibilities, protection, and the condition expected when the area is turned over.' },
  ],
  faqTitle: 'Selective Demolition FAQs',
  related: [
    { label: 'Demolition Services', href: '/Demolition/', description: 'Compare complete and selective demolition services.' },
    { label: 'Complete Demolition', href: '/CompleteDemolition/', description: 'Remove an entire approved structure and coordinate site turnover.' },
    { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Continue from selective removal into reconstruction and finishes.' },
  ],
  finalHeading: 'Need targeted demolition before renovation?',
  finalText: 'Send the property, plans or marked-up photos, removal scope, areas that must remain, access conditions, and target schedule.',
};

export default function SelectiveDemolition() {
  return <ServiceLandingPage service={service} />;
}
