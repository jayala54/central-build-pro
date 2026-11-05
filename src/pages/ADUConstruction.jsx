import React from 'react';
import { HousePlus } from 'lucide-react';
import ServiceLandingPage from '@/components/ServiceLandingPage';

const service = {
  title: 'ADU Builder Orlando FL',
  path: '/ADUConstruction',
  parentLabel: 'Residential Services',
  parentHref: '/Services/',
  breadcrumb: 'ADU Construction',
  schemaName: 'ADU and Guest House Construction',
  description: 'ADU builder serving Orlando and Central Florida with detached guest houses, attached units, garage conversions, permitting and construction.',
  serviceTypes: ['Accessory dwelling unit construction', 'Detached ADUs', 'Guest houses', 'Garage conversion ADUs', 'In-law suites'],
  image: '/images/services/adu-builder-central-florida.webp',
  imageAlt: 'Representative detached accessory dwelling unit on a Central Florida residential property',
  representativeImage: true,
  icon: HousePlus,
  eyebrow: 'Accessory Dwelling Units & Guest Houses',
  heading: 'ADU Builder in Orlando & Central Florida',
  intro: 'Property-specific planning and construction for detached ADUs, guest houses, attached suites, and eligible garage conversions.',
  formService: 'adu',
  ctaLabel: 'Request an ADU Consultation',
  scopeHeading: 'Start with property eligibility, then design the right unit',
  body: [
    'An accessory dwelling unit is a second independent living space on the same property as a primary home. Depending on the jurisdiction and lot, it may be detached, attached to the home, or created through an eligible conversion. A true dwelling unit typically includes its own sleeping, bathroom, kitchen, and entrance facilities.',
    'Before design or pricing is finalized, the property must be reviewed for zoning, setbacks, lot coverage, access, parking, utilities, drainage, fire separation, and any association restrictions. J&N StructureWorks coordinates the contracted construction scope around the approved plans and project-specific requirements.',
    'ADUs can support multigenerational living, a private guest suite, a home office with residential amenities, or another use allowed by the local code. We do not promise rental eligibility or a particular approval; those determinations belong to the governing jurisdiction and property documents.',
  ],
  includesHeading: 'ADU project coordination',
  includes: ['Property and feasibility review', 'Design-professional coordination', 'Permit and inspection coordination', 'Foundation, structure, and exterior envelope', 'Kitchen, bathroom, and building systems', 'Interior finishes and project closeout'],
  applicationsHeading: 'ADU and guest-house options',
  applicationsIntro: 'The property, approved use, plans, utilities, and budget determine which configuration is practical.',
  applications: [
    ['Detached ADUs', 'A separate compact dwelling planned around setbacks, access, utilities, privacy, and the relationship to the primary home.'],
    ['Attached suites', 'An addition connected to the primary home with project-specific separation, access, utility, and layout requirements.'],
    ['Garage conversions', 'Eligible garage space converted into code-compliant living area with the required structural, moisture, life-safety, and system upgrades.'],
    ['In-law and guest suites', 'Private residential space designed for family or guests, subject to whether the approved plan qualifies as an independent dwelling unit.'],
    ['Backyard cottages', 'Small detached residential structures designed to fit the site while meeting applicable zoning and building requirements.'],
    ['Shell-to-finish construction', 'Coordination from approved site and structural work through kitchens, bathrooms, systems, finishes, inspections, and closeout.'],
  ],
  processHeading: 'Our ADU construction process',
  process: [
    ['Property review', 'Review the address or parcel, ownership, proposed use, site constraints, utilities, budget, and available documents.'],
    ['Feasibility and design', 'Confirm applicable requirements with the project team and coordinate drawings for the proposed configuration.'],
    ['Estimate and permitting', 'Define the contracted scope and pricing, then coordinate permit submission and required revisions.'],
    ['Construction and closeout', 'Build the approved scope, coordinate inspections, address correction items, and complete project turnover.'],
  ],
  faqs: [
    { q: 'Can I build an ADU on my Central Florida property?', a: 'Possibly. Eligibility depends on the jurisdiction, zoning district, lot dimensions, setbacks, lot coverage, utilities, access, parking, association restrictions, and proposed use. A property-specific review is required.' },
    { q: 'Do you build detached guest houses and garage-conversion ADUs?', a: 'Yes. We can evaluate detached units, attached suites, and eligible garage conversions. The approved configuration and scope depend on the property, plans, and local requirements.' },
    { q: 'Can you handle ADU permits and inspections?', a: 'We coordinate permits and required inspections included in the contracted construction scope. Design documents must be prepared and approved by the appropriate professionals and reviewing agencies.' },
    { q: 'How much does an ADU cost in Orlando?', a: 'Cost depends on property eligibility, size, configuration, site work, utilities, foundation, structural design, kitchen and bathroom scope, products, finishes, permits, and access. We prepare a property-specific estimate after scope review.' },
    { q: 'Can I rent the ADU?', a: 'Rental eligibility is a legal and zoning question that depends on local rules, approved use, association restrictions, and other property requirements. Owners should confirm those rules before relying on rental income.' },
  ],
  faqTitle: 'ADU Construction FAQs',
  related: [
    { label: 'Room Additions', href: '/RoomAdditions/', description: 'Expand an existing home with bedrooms, living areas, and connected additions.' },
    { label: 'Custom Homes', href: '/CustomHomes/', description: 'Ground-up residential construction coordinated from planning through closeout.' },
    { label: 'ADU Planning Guide', href: '/Blog/adu-guest-house-construction-florida/', description: 'Read about eligibility, planning, utilities, permits, and construction considerations.' },
  ],
  finalHeading: 'Considering an ADU or guest house?',
  finalText: 'Send the property address or parcel ID, intended use, approximate size, available plans, budget range, and target schedule.',
};

export default function ADUConstruction() {
  return <ServiceLandingPage service={service} />;
}
