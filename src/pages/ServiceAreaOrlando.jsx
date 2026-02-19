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
  'Deep familiarity with Orange County permitting and zoning codes',
  'Over 100 projects completed across the Orlando metro area since 2020',
  'Transparent pricing with no hidden fees or change-order surprises',
  'Fully licensed, bonded, and insured for your protection',
  'Dedicated project managers who communicate at every milestone',
];

const faqs = [
  {
    q: 'How much does home construction cost in Orlando, FL?',
    a: 'New home construction in Orlando typically ranges from $200 to $400+ per square foot depending on lot conditions, design complexity, and finish selections. Remodeling projects generally start around $50,000 for a major kitchen renovation. Contact us for a detailed, no-obligation estimate tailored to your Orlando property.',
  },
  {
    q: 'Do I need a permit for remodeling in Orlando?',
    a: 'Yes. Most structural, electrical, plumbing, and mechanical work in the City of Orlando requires a building permit through the Orange County Building Division or the City of Orlando Permitting Services. J&N StructureWorks handles all permit applications and inspections on your behalf.',
  },
  {
    q: 'How long does a typical home renovation take in Orlando?',
    a: 'Timeline depends on project scope. A kitchen remodel may take 6 to 10 weeks, while a whole-home renovation or addition can take 3 to 6 months. Custom home builds typically run 8 to 14 months. We provide a detailed project schedule during your free consultation.',
  },
  {
    q: 'Do you work in all Orlando neighborhoods?',
    a: 'Yes. We serve homeowners and businesses throughout Orlando including Downtown Orlando, College Park, Thornton Park, Mills 50, Lake Nona, Baldwin Park, Colonialtown, Audubon Park, and surrounding communities in Orange County.',
  },
];

export default function ServiceAreaOrlando() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Orlando FL | J&N StructureWorks"
        path="/ServiceAreaOrlando"
        description="J&N StructureWorks is a licensed general contractor in Orlando, FL (CBC1269175). Custom homes, remodeling, additions & commercial buildouts in Orange County. Free estimates: (321) 695-4964."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Orlando, FL',
            provider: {
              '@type': 'GeneralContractor',
              name: 'J&N StructureWorks',
              url: 'https://j-nsw.com',
              telephone: '+13216954964',
              address: { '@type': 'PostalAddress', addressLocality: 'Orlando', addressRegion: 'FL' },
            },
            areaServed: { '@type': 'City', name: 'Orlando', addressRegion: 'FL' },
            description: 'Licensed general contractor serving Orlando, FL. Custom home building, remodeling, additions, and commercial construction in Orange County.',
            url: 'https://j-nsw.com/ServiceAreaOrlando',
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
              <span className="text-orange-400 text-sm font-medium">Orlando, FL &mdash; Orange County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Orlando, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Licensed residential and commercial construction services throughout Orlando and Orange County.
              From Downtown Orlando to Lake Nona, J&N StructureWorks delivers quality builds on time and on budget.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Trusted Construction Services in Orlando</h2>
              <p className="text-slate-600 mb-4">
                Orlando is the heart of Central Florida — a dynamic city where historic bungalows in College Park sit
                just minutes from the modern high-rises of Downtown and the master-planned neighborhoods of Lake Nona.
                J&N StructureWorks has completed projects across every corner of Orlando, from the tree-lined streets of
                Thornton Park to the eclectic Mills 50 district. We understand the unique character of each neighborhood
                and the specific building requirements that come with working in Orange County.
              </p>
              <p className="text-slate-600 mb-4">
                Whether you are planning a full custom home build on an infill lot in Baldwin Park, a kitchen renovation
                in Colonialtown, or a commercial tenant improvement near the Central Business District, our team brings
                the same attention to detail and code compliance to every project. As a Florida Certified Building
                Contractor (CBC1269175), we are fully licensed to pull permits, manage inspections, and deliver
                turnkey construction throughout the City of Orlando and unincorporated Orange County.
              </p>
              <p className="text-slate-600 mb-8">
                Orlando's rapid growth means navigating evolving zoning regulations, impact fees, and HOA requirements.
                We stay current on all local codes so you don't have to. From your first consultation to your final
                walkthrough, J&N StructureWorks is your single point of contact for construction in Orlando, FL.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Orlando</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Orlando Homeowners Choose J&N StructureWorks</h3>
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
        <FAQSection faqs={faqs} title="Orlando Construction FAQs" />

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Orlando Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll discuss your vision, budget, and timeline for your Orlando home or business.
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
