import React from 'react';
import RelatedServices from '@/components/RelatedServices';

const services = [
  { label: 'Custom Homes', href: '/CustomHomes/', description: 'Ground-up residential construction from planning through closeout.' },
  { label: 'Home Renovations', href: '/WholeHomeRenovations/', description: 'Whole-home updates, structural changes, and modernization.' },
  { label: 'Home Additions', href: '/RoomAdditions/', description: 'Expanded living space, garage conversions, porches, and lanais.' },
  { label: 'Commercial Construction', href: '/Commercial/', description: 'Commercial contracting, buildouts, renovations, and project coordination.' },
  { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Reconfiguration and updates for existing commercial properties.' },
  { label: 'Complete Demolition', href: '/Demolition/#complete-demolition', description: 'Entire-structure removal with site preparation and debris removal.' },
  { label: 'Selective Demolition', href: '/Demolition/#selective-demolition', description: 'Controlled removal of specific building components while preserving the remaining structure.' },
];

export default function LocationServiceLinks() {
  return <RelatedServices title="Residential and Commercial Services" services={services} />;
}
