import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, Hammer, PlusSquare, Ruler, HardHat } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Custom Home Building',
    description: 'We build new homes from the ground up. You pick the design and finishes, and we make sure it gets built right.',
    href: '/CustomHomes',
  },
  {
    icon: Hammer,
    title: 'Whole-Home Renovations',
    description: 'When your whole house needs an update, we can take it down to the studs and rebuild it the way you actually want it.',
    href: '/WholeHomeRenovations',
  },
  {
    icon: Ruler,
    title: 'Kitchen & Bath Remodels',
    description: 'Kitchens and bathrooms are where most people start. We handle the demo, plumbing, tile, cabinets, and everything in between.',
    href: '/KitchenBathRemodeling',
  },
  {
    icon: PlusSquare,
    title: 'Room Additions',
    description: 'Need more space? We build additions that look and feel like they were always part of your house.',
    href: '/RoomAdditions',
  },
  {
    icon: Building2,
    title: 'Commercial Tenant Buildouts',
    description: 'We turn empty commercial shells into ready-to-go offices, shops, and restaurants. Permits, build-out, the whole thing.',
    href: '/CommercialBuildouts',
  },
  {
    icon: HardHat,
    title: 'Commercial Renovations',
    description: 'If your business space is looking tired, we can update the layout, finishes, and fixtures to make it work better for your team and your customers.',
    href: '/CommercialRenovations',
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
            What We Build
          </h2>
          <p className="text-slate-600 text-lg">
            Homes, renovations, and commercial projects. Here's the kind of work we do every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link key={idx} to={service.href}>
              <motion.div
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-500 cursor-pointer hover:shadow-xl h-full"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
