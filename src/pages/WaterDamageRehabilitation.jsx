import React from 'react';
import { Waves } from 'lucide-react';
import ServiceLandingPage from '@/components/ServiceLandingPage';

const service = {
  title: 'Water Damage Rehabilitation Central Florida',
  path: '/WaterDamageRehabilitation',
  parentLabel: 'Construction Services',
  parentHref: '/Services/',
  breadcrumb: 'Water Damage Rehabilitation',
  schemaName: 'Water Damage Rehabilitation and Storm Reconstruction',
  description: 'Water damage rehabilitation contractor serving Central Florida with post-mitigation demolition, reconstruction, flooring, drywall and finish repairs.',
  serviceTypes: ['Water damage rehabilitation', 'Storm damage reconstruction', 'Flood damage reconstruction', 'Post-mitigation repairs', 'Residential and commercial rehabilitation'],
  image: '/images/services/water-damage-rehabilitation-central-florida.webp',
  imageAlt: 'Representative Central Florida home undergoing post-mitigation water damage rehabilitation and reconstruction',
  imageWidth: 1600,
  imageHeight: 819,
  representativeImage: true,
  icon: Waves,
  eyebrow: 'Post-Mitigation Reconstruction',
  heading: 'Water Damage Rehabilitation in Central Florida',
  intro: 'Reconstruction for storm- and flood-impacted homes and commercial properties after emergency water removal, drying, and required environmental work are complete.',
  formService: 'water-damage-rehabilitation',
  ctaLabel: 'Request a Rehabilitation Estimate',
  scopeHeading: 'Rebuild the affected property around documented, dry conditions',
  body: [
    'Flooding and storm-driven water can damage drywall, insulation, flooring, cabinets, framing, electrical components, plumbing fixtures, and interior finishes. J&N StructureWorks coordinates the contracted rehabilitation scope after the source is controlled and qualified mitigation professionals have completed water extraction, drying, and any required environmental or contamination work.',
    'The reconstruction plan begins with the available mitigation records, insurance scope if applicable, photographs, testing or clearance documents, approved plans, and exposed site conditions. We define what must be removed, repaired, or replaced and coordinate the building trades, permits, inspections, finishes, and closeout included in the construction agreement.',
    'We do not advertise emergency water extraction, mold assessment, environmental testing, or public-adjusting services. When those services are required, they must be completed by appropriately qualified providers before or alongside the construction work. Property owners remain responsible for claim decisions and coverage discussions with their insurer and adjuster.',
  ],
  includesHeading: 'Rehabilitation scope options',
  includes: ['Post-mitigation site and document review', 'Selective demolition and removal limits', 'Framing, insulation, and drywall reconstruction', 'Flooring, cabinetry, and interior finish replacement', 'Kitchen, bathroom, electrical, plumbing, and HVAC coordination', 'Permits, inspections, punch work, and contracted closeout'],
  applicationsHeading: 'Storm and water damage reconstruction',
  applicationsIntro: 'The source and category of water, drying records, testing, structural conditions, insurance scope, and intended finishes determine the safe and practical reconstruction plan.',
  applications: [
    ['Flood-impacted homes', 'Reconstruction of approved affected areas after extraction, drying, sanitation, and any required environmental clearance are documented.'],
    ['Storm-driven water intrusion', 'Repairs to interiors and building components affected by wind-driven rain or storm-related openings after the source is corrected.'],
    ['Drywall and insulation replacement', 'Rebuild wall and ceiling assemblies after damaged materials are removed and concealed conditions are evaluated.'],
    ['Flooring and cabinet reconstruction', 'Replace affected flooring, underlayment, baseboards, cabinets, countertops, and related finishes within the approved scope.'],
    ['Kitchen and bathroom rehabilitation', 'Coordinate plumbing, electrical, ventilation, waterproofing, fixtures, cabinets, tile, and finishes in affected wet areas.'],
    ['Commercial property rehabilitation', 'Plan reconstruction for affected offices, retail spaces, restaurants, and other commercial interiors around access, code, and operational needs.'],
  ],
  processHeading: 'Our post-mitigation rehabilitation process',
  process: [
    ['Confirm readiness', 'Review mitigation completion, moisture documentation, testing or clearance requirements, utility status, photographs, plans, and the proposed construction scope.'],
    ['Document and estimate', 'Inspect accessible conditions, define removal and reconstruction limits, identify design or permit needs, and prepare a project-specific written estimate.'],
    ['Reconstruct and coordinate', 'Complete the contracted demolition, repairs, trade work, inspections, and finishes in an organized construction sequence.'],
    ['Inspect and close out', 'Address required corrections and punch items, complete applicable final inspections, and document turnover of the contracted work.'],
  ],
  faqs: [
    { q: 'Do you provide emergency water extraction or drying?', a: 'No. J&N StructureWorks provides post-mitigation rehabilitation and reconstruction. Active water extraction, structural drying, sanitation, mold assessment, and environmental testing should be handled by appropriately qualified providers before reconstruction begins.' },
    { q: 'Can you rebuild a home after flood or storm damage?', a: 'Yes. After the source is controlled and the property is documented as ready for reconstruction, we can evaluate selective demolition, framing, insulation, drywall, flooring, cabinets, kitchens, bathrooms, building systems, finishes, permits, and inspections.' },
    { q: 'Do you work on commercial water damage rehabilitation?', a: 'Yes. We can evaluate post-mitigation reconstruction for offices, retail spaces, restaurants, professional spaces, and other commercial properties based on the location, approved scope, access, and schedule.' },
    { q: 'Will you work from an insurance estimate?', a: 'We can review available insurance scope documents alongside the actual site conditions and construction requirements. Our proposal identifies the work we are contracting to perform. Coverage, valuation, and claim decisions remain between the owner, insurer, and adjuster.' },
    { q: 'What should I send for an estimate?', a: 'Send the property address, photos, mitigation report or drying records, testing or clearance documents if applicable, insurance scope, plans, affected rooms, desired finishes, and target schedule.' },
  ],
  faqTitle: 'Water Damage Rehabilitation FAQs',
  related: [
    { label: 'Whole-Home Renovations', href: '/WholeHomeRenovations/', description: 'Coordinate broader residential reconstruction and modernization.' },
    { label: 'Selective Demolition', href: '/SelectiveDemolition/', description: 'Remove approved damaged components while protecting materials that remain.' },
    { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Reconstruct and update affected business properties.' },
  ],
  finalHeading: 'Is your property ready for reconstruction?',
  finalText: 'Send the property address, affected areas, photos, mitigation documentation, available testing or clearance records, insurance scope, plans, and target schedule.',
};

export default function WaterDamageRehabilitation() {
  return <ServiceLandingPage service={service} />;
}
