import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Briefcase, DollarSign, Clock, Wrench, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Certified',
    description: 'Florida Certified Building Contractor (CBC1269175). Fully licensed, bonded, and insured for your protection.',
  },
  {
    icon: Briefcase,
    title: '100+ Projects Completed',
    description: 'From custom homes to commercial buildouts, we\'ve delivered over 100 projects across Central Florida since 2020.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Detailed estimates upfront with no hidden fees or surprise change orders. You know what you\'re paying before we start.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We set realistic timelines and stick to them. Regular progress updates keep you informed at every milestone.',
  },
  {
    icon: Wrench,
    title: 'Full-Service Builder',
    description: 'One point of contact from permits to final walkthrough. We manage every trade so you don\'t have to.',
  },
  {
    icon: Heart,
    title: 'Client-First Approach',
    description: 'Your vision drives every decision. We listen, communicate clearly, and treat your project like it\'s our own.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Why Choose J&N StructureWorks
          </h2>
          <p className="text-slate-600 text-lg">
            We don't just build structures — we build trust. Here's what sets us apart from other contractors in Central Florida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
