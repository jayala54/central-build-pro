import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onContactClick }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80" 
          alt="Custom Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Florida Certified Building Contractor</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Custom Homes &
            <span className="block text-orange-500">Expert Renovations</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transforming houses into dream homes throughout Central Florida. From custom builds 
            to complete renovations and commercial tenant buildouts.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-14 text-base shadow-lg shadow-orange-500/50"
              onClick={onContactClick}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-white/20 h-14 text-base"
              onClick={() => window.location.href = '/Projects'}
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: Award, label: 'Licensed & Insured', value: 'State Certified' },
              { icon: Clock, label: 'Experience', value: '15+ Years' },
              { icon: Shield, label: 'Projects Completed', value: '200+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <stat.icon className="w-5 h-5 text-blue-400 mb-2 mx-auto sm:mx-0" />
                <p className="text-white font-semibold text-lg">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}