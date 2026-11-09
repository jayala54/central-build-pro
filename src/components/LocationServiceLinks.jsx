import React from 'react';
import RelatedServices from '@/components/RelatedServices';

const services = [
  { label: 'Custom Homes', href: '/CustomHomes/', description: 'Ground-up residential construction from planning through closeout.' },
  { label: 'Home Renovations', href: '/WholeHomeRenovations/', description: 'Whole-home updates, structural changes, and modernization.' },
  { label: 'Kitchen Remodeling', href: '/KitchenRemodeling/', description: 'Cabinetry, countertops, layouts, building systems, and finishes.' },
  { label: 'Bathroom Remodeling', href: '/BathroomRemodeling/', description: 'Showers, waterproofing, tile, fixtures, and coordinated trade work.' },
  { label: 'Flooring Installation', href: '/FlooringInstallation/', description: 'Removal, substrate preparation, flooring, and transitions.' },
  { label: 'Home Additions', href: '/RoomAdditions/', description: 'Expanded living space, garage conversions, porches, and lanais.' },
  { label: 'ADUs & Guest Houses', href: '/ADUConstruction/', description: 'Detached ADUs, guest houses, attached suites, and eligible conversions.' },
  { label: 'Water Damage Rehabilitation', href: '/WaterDamageRehabilitation/', description: 'Post-mitigation reconstruction for storm- and flood-impacted properties.' },
  { label: 'Commercial Construction', href: '/Commercial/', description: 'Commercial contracting, buildouts, renovations, and project coordination.' },
  { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Reconfiguration and updates for existing commercial properties.' },
  { label: 'Restaurant & Retail Buildouts', href: '/RetailRestaurantBuildouts/', description: 'Customer-facing restaurant, cafe, storefront, and retail construction.' },
  { label: 'Office & Professional Buildouts', href: '/OfficeProfessionalBuildouts/', description: 'Office, medical, and professional interiors.' },
  { label: 'Metal Buildings', href: '/MetalBuildings/', description: 'Turnkey metal building construction with permitting, installation, and concrete slab options.' },
  { label: 'Custom Steel Brackets', href: '/CustomSteelBrackets/', description: 'CNC-cut and welded brackets fabricated from approved plans and specifications.' },
  { label: 'Complete Demolition', href: '/CompleteDemolition/', description: 'Entire-structure removal with site preparation and debris removal.' },
  { label: 'Selective Demolition', href: '/SelectiveDemolition/', description: 'Controlled removal of specific building components while preserving the remaining structure.' },
];

export default function LocationServiceLinks() {
  return <RelatedServices title="Residential and Commercial Services" services={services} />;
}
