import React from 'react';
import { Construction } from 'lucide-react';
import ServiceLandingPage from '@/components/ServiceLandingPage';

const service = {
  title: 'Complete Demolition Contractor Orlando FL',
  path: '/CompleteDemolition',
  parentLabel: 'Demolition Services',
  parentHref: '/Demolition/',
  breadcrumb: 'Complete Demolition',
  schemaName: 'Complete Structure Demolition',
  description: 'Complete demolition contractor serving Orlando and Central Florida with permit coordination, structure removal, debris cleanup and site turnover.',
  serviceTypes: ['Complete demolition', 'Structure demolition', 'Garage demolition', 'Commercial demolition', 'Debris removal'],
  image: '/images/projects/demolition/active-commercial-demolition.webp',
  imageAlt: 'Equipment completing structural demolition on a Central Florida project',
  imageWidth: 1600,
  imageHeight: 1200,
  icon: Construction,
  eyebrow: 'Entire-Structure Removal',
  heading: 'Complete Demolition Contractor in Orlando & Central Florida',
  intro: 'Coordinated removal of an entire approved structure, including scope planning, applicable permits, utility coordination, debris handling, cleanup, and site turnover.',
  formService: 'complete-demolition',
  ctaLabel: 'Request a Demolition Estimate',
  scopeHeading: 'Remove the full structure with the next use in mind',
  body: [
    'Complete demolition removes an entire approved structure rather than selected components. The work must be planned around property boundaries, access, utilities, adjacent improvements, hazardous-material responsibilities, debris handling, permit requirements, and the condition expected at turnover.',
    'J&N StructureWorks defines the contracted removal limits and coordinates the applicable demolition work with the owner, project documents, utility requirements, reviewing agencies, and the planned redevelopment or replacement construction. Site-specific conditions determine equipment access, sequence, protection, and cleanup.',
    'Testing, environmental assessment, utility disconnection, tree work, grading, underground structures, and final site conditions are not assumed. The proposal identifies included responsibilities and exclusions so the demolition scope is clear before work begins.',
  ],
  includes: ['Site and structure review', 'Defined limits and protection requirements', 'Applicable permit coordination', 'Utility-disconnection coordination as contracted', 'Structure removal and debris handling', 'Cleanup and documented turnover condition'],
  applicationsHeading: 'Complete demolition applications',
  applicationsIntro: 'The approved scope depends on the structure, property, access, materials, utility conditions, and what will happen after removal.',
  applications: [
    ['Detached garages', 'Full removal of approved detached garage structures, coordinated with access, utilities, debris cleanup, and the planned site condition.'],
    ['Residential structures', 'House or accessory-structure demolition planned around permits, neighboring improvements, utilities, debris, and redevelopment.'],
    ['Commercial structures', 'Complete removal of approved commercial buildings with project-specific safety, access, utility, and agency coordination.'],
    ['Fire-damaged structures', 'Demolition considered when an approved scope calls for removal rather than repair, subject to structural, insurance, environmental, and permit requirements.'],
    ['Replacement construction', 'Removal coordinated with the plans and site needs for a new home, commercial building, addition, or other approved replacement.'],
    ['Site turnover', 'Cleanup and turnover requirements defined around the next project phase rather than an undefined promise of a build-ready site.'],
  ],
  process: [
    ['Site review', 'Review the structure, property, access, plans, utilities, adjacent improvements, available reports, and intended next use.'],
    ['Scope and permitting', 'Define removal limits, responsibilities, exclusions, debris handling, notices, and applicable permit requirements.'],
    ['Preparation and removal', 'Coordinate contracted utility and site preparation, then complete the approved demolition in planned stages.'],
    ['Cleanup and turnover', 'Remove included debris and leave the property in the turnover condition defined by the contracted scope.'],
  ],
  faqs: [
    { q: 'What does complete demolition include?', a: 'Complete demolition removes the entire approved structure. The proposal defines permits, utility coordination, protection, equipment access, debris removal, cleanup, and the required turnover condition.' },
    { q: 'Do I need a demolition permit?', a: 'Permit requirements depend on the jurisdiction, structure, property, and scope. Complete-structure demolition commonly requires permits and utility-related documentation. We coordinate applicable requirements for our contracted work.' },
    { q: 'Can you demolish a fire-damaged garage or building?', a: 'Yes, when complete demolition is the approved path. The project may require structural, insurance, environmental, utility, and permit coordination before removal begins.' },
    { q: 'Does complete demolition include site grading?', a: 'Only when grading or related site work is specifically included in the proposal. Demolition, foundation removal, backfill, grading, drainage, and preparation for new construction should be defined as separate scope items.' },
  ],
  faqTitle: 'Complete Demolition FAQs',
  related: [
    { label: 'Demolition Services', href: '/Demolition/', description: 'Compare complete and selective demolition services.' },
    { label: 'Selective Demolition', href: '/SelectiveDemolition/', description: 'Remove identified components while protecting construction that remains.' },
    { label: 'Commercial Construction', href: '/Commercial/', description: 'Coordinate the construction phase that follows demolition.' },
  ],
  finalHeading: 'Planning complete structure removal?',
  finalText: 'Send the property address, structure type, photos, available reports, utility information, intended next use, and target schedule.',
};

export default function CompleteDemolition() {
  return <ServiceLandingPage service={service} />;
}
