import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Ruler, CheckCircle, ChevronRight, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'How much does a kitchen remodel cost in Orlando, FL?',
    a: 'Kitchen remodel costs in Orlando typically range from $25,000 to $75,000+ depending on the scope of work, materials, and finishes selected. A mid-range kitchen remodel averages around $40,000 to $55,000, while a high-end renovation with custom cabinetry, stone countertops, and premium appliances can exceed $80,000. J&N StructureWorks provides detailed, line-item estimates during our free consultation so you know exactly where every dollar goes.',
  },
  {
    q: 'How long does a bathroom renovation take in Central Florida?',
    a: 'A standard bathroom renovation in Central Florida typically takes 3 to 6 weeks from demolition to final walkthrough. A simple cosmetic refresh (new tile, vanity, and fixtures) may take 2 to 3 weeks, while a full gut renovation involving plumbing relocation, structural changes, or expanding the footprint can take 6 to 10 weeks. We provide a detailed project timeline before work begins and keep you updated throughout the process.',
  },
  {
    q: 'Do I need a permit for a kitchen or bathroom remodel in Orlando?',
    a: 'Yes, permits are typically required in Orlando and Orange County for any work involving electrical, plumbing, or structural modifications. Cosmetic updates like painting or replacing cabinet hardware generally do not require permits. As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks handles all permit applications and inspections on your behalf, ensuring your project is fully code-compliant.',
  },
  {
    q: 'What is the ROI on a kitchen or bathroom remodel in Florida?',
    a: 'According to national remodeling cost-vs-value data, a mid-range kitchen remodel typically recoups 60–80% of its cost at resale, while bathroom renovations recoup 55–75%. In the competitive Central Florida real estate market, updated kitchens and bathrooms are among the most valuable improvements you can make. Beyond resale value, these renovations significantly improve daily livability and comfort.',
  },
  {
    q: 'Can I stay in my home during a kitchen or bathroom remodel?',
    a: 'In most cases, yes. For bathroom remodels, you can typically continue living in the home as long as you have access to another bathroom. For kitchen remodels, we help you set up a temporary kitchen area with essentials like a microwave, mini-fridge, and portable cooktop. We also take steps to minimize dust and noise disruption with dust barriers and clear work schedules.',
  },
];

export default function KitchenBathRemodeling() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Kitchen & Bathroom Remodeling Orlando FL"
        path="/KitchenBathRemodeling"
        description="Professional kitchen and bathroom remodeling in Orlando & Central Florida by J&N StructureWorks. Licensed CBC1269175. Custom cabinetry, countertops, tile, fixtures & more. Free estimate: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Kitchen & Bathroom Remodeling',
          provider: { '@type': 'GeneralContractor', name: 'J&N StructureWorks', url: 'https://j-nsw.com' },
          areaServed: ['Orlando, FL', 'Winter Park, FL', 'Lake Mary, FL', 'Kissimmee, FL', 'Central Florida'],
          description: 'Kitchen and bathroom remodeling services in Central Florida. From design to completion, we handle countertops, cabinetry, tile, fixtures, and full renovations.',
          url: 'https://j-nsw.com/KitchenBathRemodeling',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-20 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Ruler className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Kitchen & Bath Remodeling</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kitchen & Bathroom Remodeling in Orlando FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Transform your kitchen and bathrooms with a Florida Certified Building Contractor.
              From custom countertops and cabinetry to complete gut renovations, J&N StructureWorks delivers stunning results on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/Contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-12">
                  Get a Free Estimate <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+13216954964">
                <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 h-12 px-8">
                  <Phone className="w-4 h-4 mr-2" /> (321) 695-4964
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Kitchens & Bathrooms That Elevate Your Home</h2>
              <p className="text-slate-600 mb-4">
                Your kitchen and bathrooms are the most-used spaces in your home — and the rooms that matter most
                when it comes to resale value. Whether you're dreaming of a chef-grade kitchen with quartz countertops
                and soft-close cabinetry or a spa-inspired master bathroom with a frameless glass shower and heated
                tile floors, J&N StructureWorks brings your vision to life. As a Florida Certified Building Contractor
                (CBC1269175), we handle everything from initial design consultation through permitting, construction,
                and final inspection so you can enjoy a stress-free remodeling experience.
              </p>
              <p className="text-slate-600 mb-4">
                We serve homeowners throughout Orange, Seminole, Osceola, and Lake counties — including Orlando,
                Winter Park, Lake Mary, Kissimmee, Sanford, Oviedo, Clermont, Winter Garden, and Windermere.
                Every project begins with a detailed scope of work and a transparent, line-item estimate. No surprises,
                no hidden fees, and no guessing about what's included. We coordinate plumbing, electrical, tile,
                cabinetry, and finish work under one roof so you have a single point of contact from start to finish.
              </p>
              <p className="text-slate-600 mb-8">
                Central Florida homes face unique challenges — from hard water staining and humidity-related mold concerns
                to aging plumbing systems common in homes built during the 1970s through 1990s construction booms.
                Our remodeling crews understand these local conditions and build solutions that last. We use moisture-resistant
                materials in wet areas, install proper ventilation to prevent mold growth, and work with licensed plumbers
                who understand Florida's polybutylene pipe replacement needs. Whether your project is a quick cosmetic
                refresh or a full kitchen gut-and-rebuild, we deliver craftsmanship you can trust.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {[
                  'Custom cabinetry design & installation',
                  'Countertop fabrication (quartz, granite, marble)',
                  'Tile backsplash & floor installation',
                  'Plumbing fixture upgrades & relocation',
                  'Electrical & lighting upgrades',
                  'Shower & tub remodeling',
                  'Vanity & storage solutions',
                  'Permit management & inspections',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Kitchen & Bath Remodeling Process</h3>
              <div className="space-y-4 mb-10">
                {[
                  { step: '1', title: 'Consultation & Design', desc: 'We visit your home, discuss your goals and budget, take measurements, and help you explore layout options, materials, and finishes that fit your style.' },
                  { step: '2', title: 'Detailed Estimate & Material Selection', desc: 'You receive a transparent, line-item estimate. We guide you through material selection — countertops, cabinetry, tile, fixtures — and confirm lead times.' },
                  { step: '3', title: 'Permitting & Pre-Construction', desc: 'We pull all required permits from your local building department and schedule inspections. Your project manager confirms the construction schedule and prepares the workspace.' },
                  { step: '4', title: 'Demolition & Construction', desc: 'Our crews handle demolition, rough-in work (plumbing, electrical, framing), and all finish installations. Dust barriers protect the rest of your home during construction.' },
                  { step: '5', title: 'Final Inspection & Walkthrough', desc: 'After passing all building inspections, we do a detailed walkthrough with you to ensure every detail meets your expectations before we hand over your newly remodeled space.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm sticky top-24 md:top-40">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Choose J&N StructureWorks?</h3>
              <ul className="space-y-3 text-slate-600 text-sm mb-6">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> Florida Certified Building Contractor (CBC1269175)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> 100+ projects completed since 2020</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> Transparent pricing — no hidden fees</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> Licensed, bonded & insured</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> Full permitting & inspection management</li>
              </ul>
              <Link to="/Contact">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Remodel Your Kitchen or Bathroom?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll discuss your vision, materials, budget, and timeline.
          </p>
          <Link to="/Contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-12">
              Start Your Project <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
