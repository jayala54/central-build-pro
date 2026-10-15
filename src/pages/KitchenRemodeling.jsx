import React from 'react';
import InteriorRemodelingServicePage from '@/components/InteriorRemodelingServicePage';

const service = {
  title: 'Kitchen Remodeling Contractor Orlando FL',
  path: '/KitchenRemodeling',
  breadcrumb: 'Kitchen Remodeling',
  schemaName: 'Kitchen Remodeling',
  description: 'Kitchen remodeling in Orlando and Central Florida, including layout changes, cabinetry, countertops, lighting, plumbing, electrical work and finishes.',
  image: '/images/projects/kitchen-interior.webp',
  imageAlt: 'Completed kitchen remodel with island, cabinetry and tile flooring in Central Florida',
  heading: 'Kitchen Remodeling in Orlando & Central Florida',
  intro: 'Plan a coordinated kitchen renovation around the way you cook, gather, store, and move through the room.',
  scopeHeading: 'A complete kitchen scope, not disconnected trades',
  body: [
    'Kitchen remodeling can involve cabinetry, countertops, flooring, lighting, plumbing, electrical work, ventilation, appliances, wall changes, and finish carpentry. The final scope depends on the existing room, approved plans, product selections, and permit requirements.',
    'J&N StructureWorks develops a written construction scope and coordinates the contracted work so layout decisions, rough-ins, lead times, inspections, and installation sequencing are addressed before they become field conflicts.',
  ],
  includes: ['Existing-condition and scope review', 'Selective demolition and protection', 'Cabinetry and countertop coordination', 'Plumbing, electrical, lighting and ventilation work', 'Backsplash, flooring, trim and painting', 'Permit and inspection coordination for the contracted scope'],
  process: [
    { title: 'Review', description: 'Document the existing kitchen, goals, plans, property constraints, and intended investment range.' },
    { title: 'Define', description: 'Confirm layout, scope, allowances, owner selections, permit needs, and construction assumptions.' },
    { title: 'Build', description: 'Coordinate demolition, rough-ins, inspections, cabinetry, surfaces, fixtures, and finishes.' },
    { title: 'Close Out', description: 'Complete the punch list, final inspections when required, and project turnover.' },
  ],
  faqs: [
    { q: 'How much does a kitchen remodel cost in Orlando?', a: 'Pricing depends on existing conditions, layout changes, cabinetry, countertops, appliances, trade work, permits, and finishes. We prepare a project-specific written estimate after reviewing the room and scope.' },
    { q: 'Does an Orlando kitchen remodel require permits?', a: 'Permit requirements depend on the jurisdiction and scope. Electrical, plumbing, gas, structural, ventilation, and other regulated work may require permits. We identify coordination responsibilities in the written scope.' },
    { q: 'Can you remodel a kitchen without changing the layout?', a: 'Yes. A same-layout renovation may focus on cabinetry, surfaces, fixtures, lighting, flooring, and finishes. Existing conditions and code requirements still need to be evaluated.' },
    { q: 'Do selections need to be made before construction?', a: 'Early selections reduce uncertainty and help coordinate dimensions, rough-ins, lead times, and installation. The proposal identifies required selections and any allowances.' },
  ],
  faqTitle: 'Kitchen Remodeling FAQs',
  related: [
    { label: 'Bathroom Remodeling', href: '/BathroomRemodeling/', description: 'Bathrooms, showers, vanities, tile, fixtures, and coordinated trade work.' },
    { label: 'Flooring Installation', href: '/FlooringInstallation/', description: 'Tile, luxury vinyl, engineered products, and floor preparation.' },
    { label: 'Whole-Home Renovations', href: '/WholeHomeRenovations/', description: 'Coordinate kitchen work as part of a larger home renovation.' },
  ],
  ctaLabel: 'kitchen remodeling',
};

export default function KitchenRemodeling() {
  return <InteriorRemodelingServicePage service={service} />;
}
