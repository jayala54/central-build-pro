import React from 'react';
import { Link } from 'react-router-dom';

const areas = [
  ['Orlando', '/ServiceAreaOrlando/'],
  ['Saint Cloud', '/ServiceAreaSaintCloud/'],
  ['Kissimmee', '/ServiceAreaKissimmee/'],
  ['Lake Nona', '/ServiceAreaLakeNona/'],
  ['Winter Park', '/ServiceAreaWinterPark/'],
  ['Windermere', '/ServiceAreaWindermere/'],
  ['Lake Mary', '/ServiceAreaLakeMary/'],
  ['Sanford', '/ServiceAreaSanford/'],
  ['Oviedo', '/ServiceAreaOviedo/'],
  ['Clermont', '/ServiceAreaClermont/'],
  ['Winter Garden', '/ServiceAreaWinterGarden/'],
  ['Altamonte Springs', '/ServiceAreaAltamonteSprings/'],
  ['Dr. Phillips', '/ServiceAreaDrPhillips/'],
];

export default function ServiceAreaLinks() {
  return (
    <section className="mt-12 border-y border-slate-200 py-8" aria-labelledby="service-area-links-heading">
      <h2 id="service-area-links-heading" className="text-2xl font-bold text-slate-900 mb-4">Central Florida Service Areas</h2>
      <p className="text-slate-600 mb-5">J&N StructureWorks serves residential and commercial clients across Orlando and surrounding Central Florida communities.</p>
      <div className="flex flex-wrap gap-3">
        {areas.map(([label, href]) => (
          <Link key={href} to={href} className="border border-slate-200 rounded-md px-4 py-2 text-sm font-medium text-slate-700 hover:border-orange-300 hover:text-orange-600 transition-colors">
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
