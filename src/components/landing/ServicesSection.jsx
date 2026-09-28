import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, Hammer, PlusSquare, Ruler, HardHat, Warehouse, Store, BriefcaseBusiness } from 'lucide-react';

const residentialServices = [
  { icon: Home, title: 'Custom Home Building', description: 'Ground-up home construction coordinated from preconstruction and permitting through final inspections and closeout.', href: '/CustomHomes/' },
  { icon: Hammer, title: 'Whole-Home Renovations', description: 'Comprehensive renovations that update layouts, building systems, finishes, and the way an existing home works.', href: '/WholeHomeRenovations/' },
  { icon: Ruler, title: 'Kitchen & Bath Remodeling', description: 'Coordinated demolition, plumbing, electrical, cabinetry, tile, fixtures, finishes, permits, and inspections.', href: '/KitchenBathRemodeling/' },
  { icon: PlusSquare, title: 'Home Additions & Conversions', description: 'Bedrooms, living areas, porches, lanais, and garage conversions planned to work with the existing home.', href: '/RoomAdditions/' },
];

const commercialServices = [
  { icon: Building2, title: 'Commercial General Contracting', description: 'One accountable contractor coordinating commercial construction from planning and permits through closeout.', href: '/CommercialBuildouts/' },
  { icon: HardHat, title: 'Tenant Improvements', description: 'Code-compliant partitions, building systems, accessibility work, finishes, inspections, and occupancy coordination.', href: '/CommercialBuildouts/' },
  { icon: Store, title: 'Retail & Restaurant Buildouts', description: 'Customer-facing spaces with coordinated layouts, restrooms, specialized plumbing, finishes, and closeout.', href: '/CommercialBuildouts/' },
  { icon: BriefcaseBusiness, title: 'Office & Professional Spaces', description: 'Office, medical, and professional interiors planned around workflow, accessibility, and building systems.', href: '/CommercialBuildouts/' },
  { icon: Warehouse, title: 'Commercial Renovations', description: 'Selective demolition, repairs, reconfiguration, system updates, and new finishes for existing properties.', href: '/CommercialRenovations/' },
];

function ServiceGrid({ services }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <Link key={service.title} to={service.href}>
          <motion.div
            className="group p-7 rounded-lg bg-slate-50 border border-slate-100 hover:border-orange-300 hover:shadow-lg h-full transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-5">
              <service.icon className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-600 mb-3 transition-colors">{service.title}</h3>
            <p className="text-slate-600">{service.description}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Residential and Commercial Construction</h2>
          <p className="text-slate-600 text-lg">One Florida Certified Building Contractor for ground-up construction, renovations, additions, tenant improvements, and commercial buildouts.</p>
        </motion.div>

        <div className="mb-16">
          <div className="flex items-end justify-between gap-6 mb-7">
            <div>
              <p className="text-sm font-semibold uppercase text-orange-600">Residential Construction</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Build, expand, or renovate your home</h3>
            </div>
            <Link to="/Services/" className="hidden sm:block text-sm font-semibold text-orange-600 hover:text-orange-700">View residential services</Link>
          </div>
          <ServiceGrid services={residentialServices} />
        </div>

        <div>
          <div className="flex items-end justify-between gap-6 mb-7">
            <div>
              <p className="text-sm font-semibold uppercase text-orange-600">Commercial Construction</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Buildouts and renovations for Central Florida businesses</h3>
            </div>
            <Link to="/CommercialBuildouts/" className="hidden sm:block text-sm font-semibold text-orange-600 hover:text-orange-700">Explore commercial construction</Link>
          </div>
          <ServiceGrid services={commercialServices} />
        </div>
      </div>
    </section>
  );
}
