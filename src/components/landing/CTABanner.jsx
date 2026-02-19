import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Get a free consultation with J&N StructureWorks. Tell us about your vision and we'll
            give you an honest assessment, a realistic budget, and a clear path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-14 text-base shadow-lg shadow-orange-500/30">
                Get a Free Quote <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+13216954964">
              <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 h-14 px-8 text-base">
                <Phone className="w-5 h-5 mr-2" /> (321) 695-4964
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
