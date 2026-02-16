import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Shield, value: 'CBC Certified', label: 'Florida Licensed' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Users, value: '100+', label: 'Happy Clients' },
  { icon: Clock, value: '100%', label: 'On-Time Delivery' }
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"
                alt="Modern farmhouse style home in Central Florida"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">State Certified</p>
                  <p className="text-slate-500 text-sm">Building Contractor</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Crafting Dream Homes
              <span className="block text-orange-600">& Spaces That Inspire</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              As a Florida Certified Building Contractor, we specialize in creating beautiful custom 
              homes and transforming existing spaces through thoughtful renovations. Our attention to 
              detail and personal approach has made us a trusted name in Central Florida.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you're building your forever home, updating your kitchen, or need a commercial 
              tenant buildout, we treat every project like it's our own. Quality craftsmanship and 
              clear communication are at the heart of everything we do.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{stat.value}</p>
                    <p className="text-slate-500 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}