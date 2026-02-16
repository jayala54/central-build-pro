import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Hammer, PlusSquare, Ruler, HardHat } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Custom Home Building',
    description: 'Your dream home built from the ground up with premium materials and personalized design.'
  },
  {
    icon: Hammer,
    title: 'Whole-Home Renovations',
    description: 'Complete transformations that modernize and elevate your entire living space.'
  },
  {
    icon: Ruler,
    title: 'Kitchen & Bath Remodels',
    description: 'Stunning kitchen and bathroom upgrades that blend beauty with functionality.'
  },
  {
    icon: PlusSquare,
    title: 'Room Additions',
    description: 'Expand your living space with seamless additions that match your home\'s character.'
  },
  {
    icon: Building2,
    title: 'Commercial Tenant Buildouts',
    description: 'Transform empty spaces into functional offices, retail stores, and restaurants.'
  },
  {
    icon: HardHat,
    title: 'Commercial Renovations',
    description: 'Refresh and modernize your business space to better serve your customers and team.'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Comprehensive Construction Services
          </h2>
          <p className="text-slate-600 text-lg">
            From residential projects to commercial developments, we bring expertise and dedication to every build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-500 cursor-pointer hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-500">
                <service.icon className="w-7 h-7 text-orange-600 group-hover:text-orange-600 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-3 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}