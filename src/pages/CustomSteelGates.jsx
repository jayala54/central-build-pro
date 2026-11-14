import React from 'react';
import { Fence } from 'lucide-react';
import ServiceLandingPage from '@/components/ServiceLandingPage';

const service = {
  title: 'Custom Steel Gates Orlando FL',
  path: '/CustomSteelGates',
  parentLabel: 'Construction Services',
  parentHref: '/Services/',
  breadcrumb: 'Custom Steel Gates',
  schemaName: 'Custom Steel Gate Fabrication and Installation',
  description: 'Custom steel gate fabrication in Central Florida for driveways, pedestrian entries, courtyards and commercial properties, with installation when contracted.',
  serviceTypes: ['Custom steel gates', 'Driveway gate fabrication', 'Pedestrian gates', 'Welded metal gates', 'Commercial access gates'],
  image: '/images/services/custom-steel-gate-central-florida.webp',
  imageAlt: 'Representative custom welded black steel driveway gate installed at a Central Florida property',
  imageWidth: 1600,
  imageHeight: 819,
  representativeImage: true,
  icon: Fence,
  eyebrow: 'Custom Fabrication for Residential & Commercial Properties',
  heading: 'Custom Steel Gates in Orlando & Central Florida',
  intro: 'Project-specific welded gates for driveways, pedestrian entries, courtyards, enclosures, and commercial properties, fabricated to fit the opening and intended use.',
  formService: 'custom-gates',
  ctaLabel: 'Request a Custom Gate Quote',
  scopeHeading: 'A gate designed around the property, opening, and daily use',
  body: [
    'J&N StructureWorks fabricates custom steel gates for residential and commercial projects throughout Central Florida. Gate dimensions, framing, hinges, posts, latch hardware, clearances, finish, site conditions, and how the gate will be used are reviewed before the fabrication scope is finalized.',
    'Custom gates can be incorporated into a project managed by J&N or quoted as a standalone fabrication order. Installation, posts, foundations, masonry coordination, finish systems, delivery, gate operators, access controls, electrical work, permitting, and engineering are included only when identified in the written proposal.',
    'Where the gate, supporting structure, wind exposure, opening, operator, or code requirements call for design documentation, fabrication and installation must follow the applicable approved plans and specifications. A custom gate is not represented as engineered, automated, code-compliant, or security-rated unless the required scope and documentation support that claim.',
  ],
  includesHeading: 'Custom gate scope options',
  includes: ['Property opening and use review', 'Project-specific steel frame and infill layout', 'Custom fit-up and welded fabrication', 'Hinge, latch, post, and hardware coordination', 'Finish preparation or coating coordination when contracted', 'Delivery and installation when included in the proposal'],
  applicationsHeading: 'Custom gate applications',
  applicationsIntro: 'The opening width, gate height, support conditions, traffic, clearance, desired appearance, hardware, finish, and operating method determine the practical gate configuration.',
  applications: [
    ['Driveway gates', 'Single- or double-gate configurations fabricated around the driveway opening, posts, clearances, hardware, and intended operation.'],
    ['Pedestrian entry gates', 'Custom walk gates for side yards, entrances, courtyards, fences, and controlled property access.'],
    ['Courtyard and garden gates', 'Welded steel gates coordinated with surrounding walls, columns, fences, landscaping, and architectural character.'],
    ['Commercial access gates', 'Project-specific gates for commercial properties, service areas, storage areas, and controlled vehicle or pedestrian openings.'],
    ['Equipment and enclosure gates', 'Custom gate panels for approved equipment, utility, refuse, pool, or other enclosures subject to applicable clearance and code requirements.'],
    ['Replacement and matching gates', 'New gates fabricated to replace a damaged assembly or coordinate with an existing fence, wall, opening, or architectural pattern.'],
  ],
  processHeading: 'Our custom gate process',
  process: [
    ['Share the project', 'Provide the property, opening measurements, photos, intended use, preferred appearance, gate configuration, hardware, finish, installation needs, and target date.'],
    ['Review and define the scope', 'Verify available site and design information, identify support or coordination questions, and prepare a written fabrication proposal.'],
    ['Fabricate the gate', 'Cut, fit, and weld the contracted gate assembly, then complete the included preparation or coordinate the specified finish.'],
    ['Deliver or install', 'Coordinate fabrication-only pickup or delivery, or complete the contracted installation and final hardware adjustments.'],
  ],
  faqs: [
    { q: 'Do you build custom driveway and pedestrian gates?', a: 'Yes. We can fabricate custom steel driveway gates, pedestrian gates, courtyard gates, enclosure gates, and commercial access gates based on the opening, intended use, design, and project requirements.' },
    { q: 'Can you fabricate a gate for another contractor or customer?', a: 'Yes. Fabrication-only orders are available when the customer provides complete dimensions, configuration, hardware, material, finish, and any required approved plans or specifications.' },
    { q: 'Can J&N install the custom gate?', a: 'Installation can be included after the property, posts, foundation or wall conditions, access, hardware, and required scope are reviewed. The written proposal will identify whether installation is included.' },
    { q: 'Do you provide automatic operators and access controls?', a: 'Gate operators, access controls, safety devices, electrical work, and related permits are not assumed. Those items can be evaluated and coordinated when specifically included in the project scope and completed by the appropriate qualified trades.' },
    { q: 'What should I provide for a custom gate estimate?', a: 'Send the property location, opening width and height, photos, desired gate type and appearance, manual or planned powered operation, post or column conditions, hardware, finish, installation needs, and target completion date.' },
  ],
  faqTitle: 'Custom Steel Gate FAQs',
  related: [
    { label: 'Custom Steel Brackets', href: '/CustomSteelBrackets/', description: 'CNC-cut and welded components for posts, beams, pavilions, and specialty construction.' },
    { label: 'Custom Homes', href: '/CustomHomes/', description: 'Ground-up residential construction with coordinated exterior improvements.' },
    { label: 'Commercial Construction', href: '/Commercial/', description: 'Commercial project coordination from planning through closeout.' },
  ],
  finalHeading: 'Planning a custom gate for your property?',
  finalText: 'Send the opening measurements, photos, intended use, preferred appearance, gate configuration, hardware, finish, installation needs, and target date.',
};

export default function CustomSteelGates() {
  return <ServiceLandingPage service={service} />;
}
