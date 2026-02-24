import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ChevronRight, Phone } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

const services = [
  'Custom Home Building',
  'Kitchen & Bathroom Remodeling',
  'Room Additions & Home Extensions',
  'Whole-Home Renovations',
  'Garage Conversions & ADUs',
  'Outdoor Living Spaces & Screen Enclosures',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Familiar with Seminole County and City of Oviedo permitting',
  'Over 100 projects completed across Central Florida since 2020',
  'Transparent pricing with detailed written estimates',
  'Fully licensed, bonded, and insured',
  'Dedicated project managers for every job',
];

const faqs = [
  {
    q: 'How much does a home remodel cost in Oviedo, FL?',
    a: 'Remodeling costs in Oviedo typically range from $100 to $300+ per square foot depending on the scope of work. Kitchen remodels average $50,000 to $85,000, while whole-home renovations depend on the size and finish level. We provide detailed, no-obligation estimates during your free consultation.',
  },
  {
    q: 'Do I need a permit for home improvements in Oviedo?',
    a: 'Yes. Most structural, electrical, plumbing, and mechanical work requires a building permit through the City of Oviedo or Seminole County Building Department. J&N StructureWorks handles all permit applications and coordinates inspections so you don\'t have to.',
  },
  {
    q: 'Can you work in Oviedo communities with HOA restrictions?',
    a: 'Absolutely. We regularly work in HOA-governed communities throughout Oviedo, including neighborhoods near Oviedo on the Park and around the UCF area. We review architectural guidelines, prepare HOA submittals, and ensure all construction meets community standards.',
  },
  {
    q: 'How long does it take to build a custom home in Oviedo?',
    a: 'Custom home construction in Oviedo typically takes 8 to 14 months from permit approval to completion. Timeline depends on design complexity, lot conditions, and material availability. We provide a detailed project schedule during your initial consultation.',
  },
];

export default function ServiceAreaOviedo() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Oviedo FL | J&N StructureWorks"
        path="/ServiceAreaOviedo"
        description="Licensed general contractor in Oviedo, FL (CBC1269175). Custom homes, remodeling, additions & renovations in Seminole County near UCF. Free estimates: (321) 219-9007."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Oviedo, FL',
            provider: {
              '@type': 'GeneralContractor',
              name: 'J&N StructureWorks',
              url: 'https://j-nsw.com',
              telephone: '+13212199007',
              address: { '@type': 'PostalAddress', addressLocality: 'Oviedo', addressRegion: 'FL' },
            },
            areaServed: { '@type': 'City', name: 'Oviedo', addressRegion: 'FL' },
            description: 'Licensed general contractor serving Oviedo, FL. Custom homes, remodeling, additions, and renovations in Seminole County.',
            url: 'https://j-nsw.com/ServiceAreaOviedo',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a }
            }))
          }
        ]}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-20 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Oviedo, FL &mdash; Seminole County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Oviedo, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Trusted construction and remodeling services in Oviedo's family-friendly neighborhoods.
              J&N StructureWorks delivers quality builds for homeowners across Oviedo and eastern Seminole County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/Contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-12">
                  Get a Free Estimate <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+13212199007">
                <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 h-12 px-8">
                  <Phone className="w-4 h-4 mr-2" /> (321) 219-9007
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Quality Construction for Oviedo Families</h2>
              <p className="text-slate-600 mb-4">
                Oviedo is one of Seminole County's most sought-after communities, known for its excellent schools,
                family-oriented neighborhoods, and the charming Oviedo on the Park town center. Located just minutes
                from the University of Central Florida, Oviedo attracts families, professionals, and investors
                looking for quality homes in a connected yet suburban setting. J&N StructureWorks is proud to serve
                this growing community with construction services built on quality and integrity.
              </p>
              <p className="text-slate-600 mb-4">
                Whether you're upgrading a home in an established neighborhood near the Oviedo Mall, adding a room
                to accommodate a growing family, or building a custom home on available land near the UCF area,
                our team understands the local market and the expectations of Oviedo homeowners. We work within
                HOA guidelines, manage city and county permits, and deliver results that add lasting value to your property.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks handles every aspect
                of your Oviedo construction project — from initial design and permitting through construction
                and final inspection. We are fully licensed, bonded, and insured for your peace of mind.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Oviedo</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {services.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm sticky top-24 md:top-40">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Oviedo Homeowners Choose J&N</h3>
              <ul className="space-y-3 text-slate-600 text-sm mb-6">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
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
        <FAQSection faqs={faqs} title="Oviedo Construction FAQs" />

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Oviedo Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll help you plan your Oviedo home renovation or new build.
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
