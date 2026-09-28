import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RelatedServices({ title = 'Related Services', services }) {
  return (
    <section className="mt-12" aria-labelledby="related-services-heading">
      <h2 id="related-services-heading" className="text-2xl font-bold text-slate-900 mb-5">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            key={service.href}
            to={service.href}
            className="group border border-slate-200 bg-white p-5 rounded-lg hover:border-orange-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
              {service.label}
            </h3>
            {service.description && <p className="text-sm text-slate-600 mt-2">{service.description}</p>}
            <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 mt-3">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
