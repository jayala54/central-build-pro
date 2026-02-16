import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';

const counties = [
  'Orange County',
  'Seminole County',
  'Osceola County',
  'Lake County',
  'Volusia County',
  'Brevard County',
  'Polk County',
  'Sumter County'
];

export default function ServiceAreasSection() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-medium text-sm tracking-wider uppercase">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Proudly Serving
              <span className="block text-orange-500">Central Florida</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              From the heart of Orlando to the beautiful coastal communities, we bring our expertise 
              and commitment to quality construction throughout Central Florida's diverse counties.
            </p>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-blue-500/30">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Based in Orlando</p>
                <p className="text-slate-400 text-sm">Serving all of Central Florida</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {counties.map((county, idx) => (
              <motion.div
                key={county}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-orange-500/50 hover:bg-slate-800/50 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-white font-medium">{county}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}