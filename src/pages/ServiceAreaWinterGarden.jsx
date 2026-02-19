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
  'Outdoor Living Spaces & Patios',
  'Commercial Buildouts & Tenant Improvements',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Familiar with City of Winter Garden and Orange County permitting',
  'Over 100 projects completed across Central Florida since 2020',
  'Transparent pricing with no hidden fees',
  'Fully licensed, bonded, and insured',
  'Clean, professional job sites and respectful crews',
];

const faqs = [
  {
    q: 'How much does a home remodel cost in Winter Garden, FL?',
    a: 'Home remodeling costs in Winter Garden typically range from $125 to $300+ per square foot depending on scope and finishes. Kitchen remodels generally start around $50,000 to $90,000. Whole-home renovations vary based on size and complexity. We provide free, itemized estimates for every project.',
  },
  {
    q: 'Do I need permits for construction in Winter Garden?',
    a: 'Yes. Most construction work in Winter Garden requires permits through the City of Winter Garden Building Department or Orange County, depending on your property\'s jurisdiction. J&N StructureWorks handles all permitting, plan review, and inspection scheduling on your behalf.',
  },
  {
    q: 'Can you build custom homes in Horizon West and the Winter Garden corridor?',
    a: 'Yes. We build custom homes throughout the Winter Garden and Horizon West area, including newer master-planned communities and individual lots. We navigate HOA architectural review processes, community development district (CDD) requirements, and all local building codes.',
  },
  {
    q: 'How long does a room addition take in Winter Garden?',
    a: 'A typical room addition in Winter Garden takes 2 to 4 months from permit approval to completion. Factors include the size of the addition, foundation requirements, and finish selections. We provide a detailed project timeline during your free consultation.',
  },
];

export default function ServiceAreaWinterGarden() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Winter Garden FL | J&N StructureWorks"
        path="/ServiceAreaWinterGarden"
        description="Licensed general contractor in Winter Garden, FL (CBC1269175). Custom homes, remodeling, additions & renovations in west Orange County. Free estimates: (321) 695-4964."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Winter Garden, FL',
            provider: {
              '@type': 'GeneralContractor',
              name: 'J&N StructureWorks',
              url: 'https://j-nsw.com',
              telephone: '+13216954964',
              address: { '@type': 'PostalAddress', addressLocality: 'Winter Garden', addressRegion: 'FL' },
            },
            areaServed: { '@type': 'City', name: 'Winter Garden', addressRegion: 'FL' },
            description: 'Licensed general contractor serving Winter Garden, FL. Custom homes, remodeling, additions, and renovations in west Orange County.',
            url: 'https://j-nsw.com/ServiceAreaWinterGarden',
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
              <span className="text-orange-400 text-sm font-medium">Winter Garden, FL &mdash; Orange County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Winter Garden, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Quality construction and remodeling in Winter Garden's thriving community. J&N StructureWorks serves
              homeowners and businesses from historic downtown to the growing Horizon West corridor.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Construction Services in Winter Garden</h2>
              <p className="text-slate-600 mb-4">
                Winter Garden has become one of the most desirable communities in west Orange County. Its award-winning
                historic downtown along Plant Street features local shops, restaurants, and the Garden Theatre, all
                connected by the popular West Orange Trail. The city blends small-town charm with modern growth,
                making it a top choice for families and professionals looking to build or remodel in the Orlando area.
              </p>
              <p className="text-slate-600 mb-4">
                J&N StructureWorks serves Winter Garden homeowners with a full range of construction services — from
                kitchen and bathroom remodels in established neighborhoods to ground-up custom homes in the expanding
                Horizon West sector. We understand the diverse housing stock in Winter Garden, from the craftsman-style
                homes near downtown to the larger estates in newer communities like Hamlin, Oakland Park, and Summerlake.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), we handle all permitting, inspections, and
                code compliance for projects within the City of Winter Garden and unincorporated west Orange County.
                Whether your project is a targeted renovation or a full custom build, we deliver quality results
                with clear communication and transparent pricing.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Winter Garden</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Winter Garden Homeowners Choose J&N</h3>
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
        <FAQSection faqs={faqs} title="Winter Garden Construction FAQs" />

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Winter Garden Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll help you plan your Winter Garden renovation or new construction project.
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
