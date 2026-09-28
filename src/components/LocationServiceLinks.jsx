import React from 'react';
import RelatedServices from '@/components/RelatedServices';

const services = [
  { label: 'Custom Homes', href: '/CustomHomes/', description: 'Ground-up residential construction from planning through closeout.' },
  { label: 'Home Renovations', href: '/WholeHomeRenovations/', description: 'Whole-home updates, structural changes, and modernization.' },
  { label: 'Home Additions', href: '/RoomAdditions/', description: 'Expanded living space, garage conversions, porches, and lanais.' },
  { label: 'Commercial Construction', href: '/CommercialBuildouts/', description: 'Tenant improvements, retail, restaurant, and office buildouts.' },
  { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Reconfiguration and updates for existing commercial properties.' },
];

export default function LocationServiceLinks() {
  return <RelatedServices title="Residential and Commercial Services" services={services} />;
}
