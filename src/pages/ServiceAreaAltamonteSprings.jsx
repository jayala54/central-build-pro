import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ChevronRight, Phone } from 'lucide-react';

const services = [
  'Custom Home Building',
  'Kitchen & Bathroom Remodeling',
  'Room Additions & Home Extensions',
  'Whole-Home Renovations',
  'Commercial Buildouts & Tenant Improvements',
  'Outdoor Living Spaces & Patios',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Familiar with Seminole County and City of Altamonte Springs permitting',
  'Over 100 projects completed across Central Florida since 2020',
  'Transparent pricing with no hidden fees',
  'Fully licensed, bonded, and insured',
  'Consistent communication and on-time project delivery',
];

const faqs = [
  {
    q: 'How much does a home remodel cost in Altamonte Springs?',
    a: 'Home remodeling in Altamonte Springs typically ranges from $100 to $275+ per square foot depending on the project scope. Kitchen remodels average $45,000 to $80,000, while whole-home renovations vary by size and finish level. We provide free, detailed estimates tailored to your specific project.',
  },
  {
    q: 'Do I need a permit for construction work in Altamonte Springs?',
    a: 'Yes. Most construction, electrical, plumbing, and mechanical work in Altamonte Springs requires a building permit through the City of Altamonte Springs Building Division or Seminole County. J&N StructureWorks handles all permit applications and inspection coordination for you.',
  },
  {
    q: 'Can you do commercial buildouts in the Altamonte Springs area?',
    a: 'Yes. We handle commercial tenant improvements and buildouts throughout Altamonte Springs, including the Uptown Altamonte and Altamonte Mall corridors. We manage permitting, construction, and inspections for retail, office, and restaurant spaces.',
  },
  {
    q: 'How long does a bathroom remodel take in Altamonte Springs?',
    a: 'A typical bathroom remodel in Altamonte Springs takes 4 to 8 weeks depending on scope. Simple cosmetic updates may be faster, while full gut renovations with layout changes take longer. We provide a detailed timeline during your free consultation.',
  },
];

export default function ServiceAreaAltamonteSprings() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Altamonte Springs FL | J&N StructureWorks"
        path="/ServiceAreaAltamonteSprings"
        description="Licensed general contractor in Altamonte Springs, FL (CBC1269175). Custom homes, remodeling, additions & commercial buildouts in Seminole County. Free estimates: (321) 695-4964."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Altamonte Springs, FL',
            provider: {
              '@type': 'GeneralContractor',
              name: 'J&N StructureWorks',
              url: 'https://j-nsw.com',
              telephone: '+13216954964',
              address: { '@type': 'PostalAddress', addressLocality: 'Altamonte Springs', addressRegion: 'FL' },
            },
            areaServed: { '@type': 'City', name: 'Altamonte Springs', addressRegion: 'FL' },
            description: 'Licensed general contractor serving Altamonte Springs, FL. Custom homes, remodeling, additions, and commercial construction in Seminole County.',
            url: 'https://j-nsw.com/ServiceAreaAltamonteSprings',
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
              <span className="text-orange-400 text-sm font-medium">Altamonte Springs, FL &mdash; Seminole County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Altamonte Springs, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Professional construction and remodeling services in Altamonte Springs and central Seminole County.
              J&N StructureWorks delivers quality results for homeowners and businesses in this centrally located community.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Construction Services in Altamonte Springs</h2>
              <p className="text-slate-600 mb-4">
                Altamonte Springs sits at the crossroads of Central Florida, offering easy access to Orlando,
                Winter Park, and the rest of Seminole County. The city has seen significant reinvestment in recent
                years, anchored by the Uptown Altamonte mixed-use development and the scenic Crane's Roost Park
                that serves as the community's centerpiece. With a mix of established residential neighborhoods,
                condo communities, and growing commercial corridors, Altamonte Springs presents diverse construction
                opportunities for homeowners and business owners alike.
              </p>
              <p className="text-slate-600 mb-4">
                J&N StructureWorks serves Altamonte Springs with comprehensive construction services — from
                kitchen and bathroom remodels in the neighborhoods surrounding Spring Oaks and Westmonte to
                commercial tenant improvements along the SR-436 corridor. We understand the building landscape
                of Altamonte Springs, including its mix of 1970s-80s era homes that are prime candidates for
                modernization and the newer construction in surrounding developments.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), we handle all permitting through the
                City of Altamonte Springs and Seminole County. Our central location makes Altamonte Springs
                one of our most active service areas, and we're proud to help homeowners here increase the
                value and comfort of their properties.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Altamonte Springs</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Altamonte Springs Homeowners Choose J&N</h3>
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
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Altamonte Springs Construction FAQs</h2>
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Altamonte Springs Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll help you plan your Altamonte Springs home improvement or commercial project.
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
