import React from 'react';
import InteriorRemodelingServicePage from '@/components/InteriorRemodelingServicePage';

const service = {
  title: 'Interior Renovation Services Central Florida',
  path: '/KitchenBathRemodeling',
  breadcrumb: 'Interior Renovation Services',
  schemaName: 'Interior Renovation Services',
  description: 'Explore coordinated kitchen remodeling, bathroom remodeling and flooring installation services for homes in Orlando and Central Florida.',
  image: '/images/projects/kitchen-interior.webp',
  imageAlt: 'Completed Central Florida home interior with remodeled kitchen and tile flooring',
  heading: 'Kitchen, Bathroom & Flooring Renovation Services',
  intro: 'Plan connected interior improvements through one construction scope, whether the project involves one room or several areas of the home.',
  scopeHeading: 'Coordinate the rooms and systems together',
  body: [
    'Interior renovation projects often cross room boundaries. Flooring transitions, plumbing and electrical work, ventilation, cabinetry, tile, trim, paint, product lead times, and inspections all need to follow a practical sequence.',
    'J&N StructureWorks can coordinate kitchen remodeling, bathroom remodeling, and flooring installation as individual projects or as part of a larger home renovation. Each proposal is based on the property, existing conditions, plans, selections, and contracted scope.',
  ],
  includes: ['Kitchen remodeling and layout changes', 'Bathroom remodeling and wet-area coordination', 'Flooring removal, preparation, and installation', 'Selective demolition and protection', 'Plumbing, electrical, lighting, and ventilation coordination', 'Permit and inspection coordination for the contracted scope'],
  process: [
    { title: 'Review', description: 'Document the property, rooms, existing conditions, goals, plans, budget range, and schedule.' },
    { title: 'Scope', description: 'Define included work, selections, allowances, permit needs, responsibilities, and assumptions.' },
    { title: 'Coordinate', description: 'Sequence demolition, building systems, inspections, installations, and finishes.' },
    { title: 'Complete', description: 'Address punch work, required final inspections, and project turnover.' },
  ],
  faqs: [
    { q: 'Can one contractor coordinate the kitchen, bathrooms, and flooring?', a: 'Yes. When those areas are included in the contracted scope, one project plan can coordinate demolition, building systems, inspections, product lead times, installations, transitions, and finishes.' },
    { q: 'Can I renovate only one room?', a: 'Yes. Kitchen remodeling, bathroom remodeling, and flooring installation are available as focused scopes. The project size and feasibility are confirmed after reviewing the property and requested work.' },
    { q: 'How is an interior renovation priced?', a: 'Pricing depends on existing conditions, plans, layout changes, trade work, products, quantities, permits, access, and finish selections. We prepare a project-specific written estimate after scope review.' },
    { q: 'Should flooring be selected before cabinets and fixtures?', a: 'Selections should be coordinated early because product thicknesses, installation methods, transitions, cabinet details, fixture locations, and lead times can affect sequencing and finished dimensions.' },
  ],
  faqTitle: 'Interior Renovation FAQs',
  related: [
    { label: 'Kitchen Remodeling', href: '/KitchenRemodeling/', description: 'Layouts, cabinetry, countertops, building systems, and finishes.' },
    { label: 'Bathroom Remodeling', href: '/BathroomRemodeling/', description: 'Showers, waterproofing, tile, fixtures, ventilation, and trade work.' },
    { label: 'Flooring Installation', href: '/FlooringInstallation/', description: 'Removal, substrate preparation, flooring systems, and transitions.' },
  ],
  ctaLabel: 'interior renovation',
};

export default function KitchenBathRemodeling() {
  return <InteriorRemodelingServicePage service={service} />;
}
