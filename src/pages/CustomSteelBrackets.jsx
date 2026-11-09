import React from 'react';
import { Wrench } from 'lucide-react';
import ServiceLandingPage from '@/components/ServiceLandingPage';

const service = {
  title: 'Custom Steel Bracket Fabrication Orlando FL',
  path: '/CustomSteelBrackets',
  parentLabel: 'Construction Services',
  parentHref: '/Services/',
  breadcrumb: 'Custom Steel Brackets',
  schemaName: 'Custom Steel Bracket Fabrication',
  description: 'Custom CNC-cut and welded steel bracket fabrication in Central Florida for pavilions, posts, beams and specialty construction from approved plans.',
  serviceTypes: ['Custom steel bracket fabrication', 'CNC-cut steel brackets', 'Welded post brackets', 'Pavilion brackets', 'Post and beam connectors'],
  image: '/images/services/custom-steel-bracket-fabrication-central-florida.webp',
  imageAlt: 'Representative CNC-cut and welded steel brackets for timber posts and pavilion framing',
  imageWidth: 1600,
  imageHeight: 800,
  representativeImage: true,
  icon: Wrench,
  eyebrow: 'CNC-Cut & Custom Welded Components',
  heading: 'Custom Steel Bracket Fabrication in Central Florida',
  intro: 'Project-specific post, beam, pavilion, and specialty construction brackets fabricated from approved engineering plans and specifications.',
  formService: 'custom-steel-brackets',
  ctaLabel: 'Request a Fabrication Quote',
  scopeHeading: 'Custom components for J&N projects and fabrication-only orders',
  body: [
    'J&N StructureWorks fabricates custom CNC-cut and welded steel brackets for pavilions, structural posts, beams, timber assemblies, and specialty construction applications. Brackets can be incorporated into a construction project managed by J&N or quoted as a fabrication-only order for contractors, builders, property owners, and other customers.',
    'Components intended for structural use are fabricated from approved engineering plans, shop details, or project specifications that identify the required geometry, material, thickness, hole pattern, welds, fasteners, finish, and installation conditions. We review the available documents and clarify fabrication information before material is cut.',
    'Engineering, load calculations, testing, special inspection, coating, delivery, and installation are included only when identified in the written proposal. J&N does not assign load ratings or represent a custom component as engineered unless the applicable design documentation and project approvals are in place.',
  ],
  includesHeading: 'Fabrication scope options',
  includes: ['Approved-plan and specification review', 'CNC-cut plates and project-specific profiles', 'Custom fit-up and welded assemblies', 'Bolt, anchor, and fastener hole layouts', 'One-off components and repeat quantities', 'Finish, delivery, and installation coordination when contracted'],
  applicationsHeading: 'Custom bracket applications',
  applicationsIntro: 'Each component is quoted around the approved documents, material requirements, quantity, tolerances, finish, and intended project use.',
  applications: [
    ['Pavilion brackets', 'Custom connectors for pavilion posts, beams, rafters, braces, bases, and exposed timber assemblies.'],
    ['Post bases and caps', 'Project-specific steel base plates, post shoes, caps, and mounting assemblies with defined anchor and fastener layouts.'],
    ['Post-to-beam connectors', 'Welded plate assemblies and saddles fabricated to connect approved timber, steel, or structural framing components.'],
    ['Gussets and reinforcement plates', 'CNC-cut gussets, splice plates, stiffeners, and reinforcement components made to the approved dimensions and details.'],
    ['Specialty construction brackets', 'One-off or repeat components for custom homes, commercial projects, outdoor structures, renovations, and repairs.'],
    ['Fabrication-only orders', 'Bracket packages produced for outside contractors and customers who provide complete, approved fabrication information.'],
  ],
  processHeading: 'Our custom bracket fabrication process',
  process: [
    ['Submit the project information', 'Send the approved plans or details, dimensions, material requirements, thicknesses, hole patterns, weld information, quantity, finish, and required date.'],
    ['Scope and document review', 'Review the fabrication information, identify unanswered questions, confirm the quoted responsibilities, and prepare a written estimate.'],
    ['Cut, fit, and weld', 'Fabricate the approved components in the documented configuration and complete the contracted finish preparation or coating coordination.'],
    ['Verify and turn over', 'Check the completed order against the contracted fabrication information and coordinate pickup, delivery, or installation when included.'],
  ],
  faqs: [
    { q: 'Can you fabricate brackets from approved engineering plans?', a: 'Yes. Custom structural-use brackets can be fabricated from approved engineering plans and project specifications that provide the necessary material, dimensions, weld, hole, fastener, and finish information.' },
    { q: 'Do you accept fabrication-only orders?', a: 'Yes. We can quote fabrication-only bracket orders for contractors, builders, property owners, and other customers. The order must include enough approved information to define the components and fabrication requirements.' },
    { q: 'What information is needed for a bracket quote?', a: 'Provide drawings or sketches, approved engineering details when structural use is intended, overall dimensions, steel thickness or grade, quantity, hole sizes and locations, weld requirements, finish, installation needs, and target completion date.' },
    { q: 'Can you design or assign a load rating to my bracket?', a: 'Load ratings and structural design must come from the appropriate qualified design professional. We fabricate from the approved plans and specifications supplied or coordinated for the project.' },
    { q: 'Can the brackets be installed as part of my J&N project?', a: 'Yes. Fabrication and installation can be incorporated into a J&N construction project when both are included in the written scope. Fabrication-only orders are also available.' },
  ],
  faqTitle: 'Custom Steel Bracket FAQs',
  related: [
    { label: 'Metal Buildings', href: '/MetalBuildings/', description: 'Permitted metal building projects with foundation and slab options.' },
    { label: 'Custom Homes', href: '/CustomHomes/', description: 'Ground-up construction with project-specific structural and finish coordination.' },
    { label: 'Commercial Construction', href: '/Commercial/', description: 'Commercial project coordination from preconstruction through closeout.' },
  ],
  finalHeading: 'Need custom brackets for an upcoming project?',
  finalText: 'Send the approved plans or details, dimensions, material and thickness, quantity, hole pattern, weld and finish requirements, installation needs, and target date.',
};

export default function CustomSteelBrackets() {
  return <ServiceLandingPage service={service} />;
}
