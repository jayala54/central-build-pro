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
  'Outdoor Living Spaces & Screen Enclosures',
  'Smart Home Integration',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Experience building in master-planned communities like Lake Nona',
  'Over 100 projects completed across Central Florida since 2020',
  'Modern construction techniques and energy-efficient building practices',
  'Fully licensed, bonded, and insured',
  'Familiar with Lake Nona community standards and HOA processes',
];

const faqs = [
  {
    q: 'How much does it cost to build a custom home in Lake Nona?',
    a: 'Custom home construction in Lake Nona typically ranges from $225 to $450+ per square foot depending on the community, lot conditions, design complexity, and finish selections. Lake Nona\'s modern aesthetic and energy-efficiency standards often influence material choices and costs. We provide detailed estimates during a free consultation.',
  },
  {
    q: 'Can you work within Lake Nona\'s architectural guidelines?',
    a: 'Yes. Lake Nona has specific architectural review and design standards that all new construction and renovations must meet. J&N StructureWorks has experience navigating these requirements and will manage all HOA and architectural review board submittals on your behalf.',
  },
  {
    q: 'Do you build energy-efficient and smart homes in Lake Nona?',
    a: 'Absolutely. Lake Nona is known for its forward-thinking, technology-driven community design. We build homes with energy-efficient systems, smart home wiring, high-performance insulation, and impact-rated windows. We coordinate with technology integrators to deliver the connected living experience Lake Nona residents expect.',
  },
  {
    q: 'How long does a home renovation take in Lake Nona?',
    a: 'Timeline depends on scope. A kitchen remodel typically takes 6 to 10 weeks, a room addition 2 to 4 months, and a whole-home renovation 4 to 7 months. Custom home builds run 8 to 14 months. We provide a detailed schedule during your consultation and keep you updated throughout the project.',
  },
];

export default function ServiceAreaLakeNona() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Lake Nona FL | J&N StructureWorks"
        path="/ServiceAreaLakeNona"
        description="Licensed general contractor in Lake Nona, FL (CBC1269175). Custom homes, modern renovations, remodeling & additions in Orlando's premier community. Free estimates: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'General Contractor Services in Lake Nona, FL',
          provider: {
            '@type': 'GeneralContractor',
            name: 'J&N StructureWorks',
            url: 'https://j-nsw.com',
            telephone: '+13216954964',
            address: { '@type': 'PostalAddress', addressLocality: 'Orlando', addressRegion: 'FL' },
          },
          areaServed: { '@type': 'Place', name: 'Lake Nona, Orlando', addressRegion: 'FL' },
          description: 'Licensed general contractor serving Lake Nona in Orlando, FL. Custom homes, modern renovations, remodeling, and additions in Orange County.',
          url: 'https://j-nsw.com/ServiceAreaLakeNona',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Lake Nona, FL &mdash; Orange County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Lake Nona, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Modern construction and renovation services in Orlando's premier master-planned community.
              J&N StructureWorks builds homes that match Lake Nona's innovative, forward-thinking lifestyle.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Building Modern Homes in Lake Nona</h2>
              <p className="text-slate-600 mb-4">
                Lake Nona is one of the most ambitious master-planned communities in the United States. Located
                in southeast Orlando within Orange County, Lake Nona is anchored by Medical City — home to the
                VA Medical Center, Nemours Children's Hospital, and the UCF College of Medicine. The community
                has attracted professionals, families, and innovators drawn to its blend of cutting-edge infrastructure,
                walkable town centers, and meticulously designed residential neighborhoods.
              </p>
              <p className="text-slate-600 mb-4">
                J&N StructureWorks serves Lake Nona residents with construction and renovation services that
                match the community's modern standards. Whether you're building a custom home in Laureate Park,
                remodeling a kitchen in Lake Nona Estates, or adding living space to keep up with a growing family
                in one of Lake Nona's residential villages, we deliver contemporary design, energy-efficient
                building practices, and the clean, modern finishes that define this community.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks manages all aspects
                of construction in Lake Nona — from navigating the community's architectural design guidelines
                and HOA review processes to pulling permits through Orange County and coordinating all required
                inspections. We understand what Lake Nona homeowners expect, and we deliver.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Lake Nona</h3>
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
            <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm sticky top-40">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Lake Nona Homeowners Choose J&N</h3>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Lake Nona Construction FAQs</h2>
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Lake Nona Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll help you build or renovate your Lake Nona home to match the community's modern standards.
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
