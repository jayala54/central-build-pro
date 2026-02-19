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
  'Commercial Buildouts & Tenant Improvements',
  'Outdoor Living Spaces & Patios',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Knowledgeable about Osceola County permitting and zoning codes',
  'Over 100 projects completed across Central Florida since 2020',
  'Transparent pricing with detailed written estimates',
  'Fully licensed, bonded, and insured',
  'Bilingual team members to serve our diverse community',
];

const faqs = [
  {
    q: 'How much does it cost to build a home in Kissimmee, FL?',
    a: 'New home construction in Kissimmee generally ranges from $175 to $350+ per square foot depending on design, lot conditions, and finishes. Kissimmee offers some of the most competitive building costs in the Orlando metro area. Contact us for a free estimate specific to your project.',
  },
  {
    q: 'What permits do I need for construction in Kissimmee?',
    a: 'Most construction projects in Kissimmee require permits through either the City of Kissimmee Building Department or Osceola County, depending on your property location. J&N StructureWorks handles all permit applications, plan reviews, and inspections on your behalf.',
  },
  {
    q: 'Can you remodel vacation rental properties near the theme parks?',
    a: 'Yes. We work with property owners and investors who own short-term vacation rentals in the Kissimmee and US-192 corridor. We handle kitchen upgrades, bathroom remodels, and full property renovations designed to maximize rental appeal and ROI.',
  },
  {
    q: 'How long does a home addition take in Kissimmee?',
    a: 'A typical room addition in Kissimmee takes 2 to 4 months depending on size and complexity. This includes permitting, foundation work, framing, and finish-out. We keep you informed with regular progress updates throughout the process.',
  },
];

export default function ServiceAreaKissimmee() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Kissimmee FL | J&N StructureWorks"
        path="/ServiceAreaKissimmee"
        description="Licensed general contractor in Kissimmee, FL (CBC1269175). Custom homes, remodeling, additions & commercial buildouts in Osceola County. Free estimates: (321) 695-4964."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Kissimmee, FL',
            provider: {
              '@type': 'GeneralContractor',
              name: 'J&N StructureWorks',
              url: 'https://j-nsw.com',
              telephone: '+13216954964',
              address: { '@type': 'PostalAddress', addressLocality: 'Kissimmee', addressRegion: 'FL' },
            },
            areaServed: { '@type': 'City', name: 'Kissimmee', addressRegion: 'FL' },
            description: 'Licensed general contractor serving Kissimmee, FL. Custom homes, remodeling, additions, and commercial construction in Osceola County.',
            url: 'https://j-nsw.com/ServiceAreaKissimmee',
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
              <span className="text-orange-400 text-sm font-medium">Kissimmee, FL &mdash; Osceola County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Kissimmee, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Reliable construction and remodeling services in Kissimmee and throughout Osceola County.
              J&N StructureWorks serves homeowners, investors, and businesses in one of Central Florida's fastest-growing areas.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Construction Services in Kissimmee</h2>
              <p className="text-slate-600 mb-4">
                Kissimmee sits at the heart of Osceola County, just minutes from Walt Disney World, Universal Studios,
                and the attractions along the US-192 corridor. Once a quiet cattle town, Kissimmee has transformed into
                one of Central Florida's most dynamic residential and investment markets. New master-planned communities
                are rising alongside established neighborhoods, creating demand for quality contractors who understand
                the area's unique building landscape.
              </p>
              <p className="text-slate-600 mb-4">
                J&N StructureWorks serves Kissimmee homeowners, property investors, and businesses with a full range
                of construction services. Whether you're building a new home in a growing subdivision near Poinciana,
                remodeling a property in the Historic Downtown Kissimmee district, or upgrading a vacation rental near
                the theme parks, we deliver professional results backed by our Florida Certified Building Contractor
                license (CBC1269175).
              </p>
              <p className="text-slate-600 mb-8">
                Osceola County's rapid growth brings unique construction challenges — from impact fees and utility
                assessments to evolving land-use regulations. We navigate these complexities for you, managing every
                permit, inspection, and approval so your project stays on track and on budget.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Kissimmee</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Kissimmee Homeowners Choose J&N</h3>
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
        <FAQSection faqs={faqs} title="Kissimmee Construction FAQs" />

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Kissimmee Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll help you plan and execute your Kissimmee construction project from start to finish.
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
