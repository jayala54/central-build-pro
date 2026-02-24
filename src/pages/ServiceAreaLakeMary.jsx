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
  'Outdoor Living Spaces & Patios',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Familiar with Seminole County permitting and zoning requirements',
  'Over 100 projects completed across Central Florida since 2020',
  'Transparent pricing with detailed project budgets',
  'Fully licensed, bonded, and insured',
  'Consistent communication from start to finish',
];

const faqs = [
  {
    q: 'How much does a home remodel cost in Lake Mary, FL?',
    a: 'Home remodeling costs in Lake Mary range from $100 to $300+ per square foot depending on the scope of work and finishes. A full kitchen remodel typically runs $50,000 to $90,000, while whole-home renovations vary widely. We provide free, detailed estimates tailored to your specific project.',
  },
  {
    q: 'Do I need a permit for construction in Lake Mary?',
    a: 'Yes. Most construction work in Lake Mary requires permits through the City of Lake Mary Building Department or Seminole County, depending on whether your property is within city limits or unincorporated Seminole County. J&N StructureWorks manages all permitting and inspections for you.',
  },
  {
    q: 'Can you build custom homes in Lake Mary subdivisions with HOA restrictions?',
    a: 'Yes. We regularly work within HOA-governed communities in Lake Mary. We review your HOA architectural guidelines, prepare submittals, and ensure all construction meets both HOA standards and Florida Building Code requirements.',
  },
  {
    q: 'How long does a kitchen remodel take in Lake Mary?',
    a: 'A typical kitchen remodel in Lake Mary takes 6 to 10 weeks from demolition to completion. The timeline depends on the scope, material lead times, and permitting. We provide a detailed project schedule during your consultation.',
  },
];

export default function ServiceAreaLakeMary() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Lake Mary FL | J&N StructureWorks"
        path="/ServiceAreaLakeMary"
        description="Licensed general contractor in Lake Mary, FL (CBC1269175). Custom homes, remodeling, additions & renovations in Seminole County. Free estimates: (321) 219-9007."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Lake Mary, FL',
            provider: {
              '@type': 'GeneralContractor',
              name: 'J&N StructureWorks',
              url: 'https://j-nsw.com',
              telephone: '+13212199007',
              address: { '@type': 'PostalAddress', addressLocality: 'Lake Mary', addressRegion: 'FL' },
            },
            areaServed: { '@type': 'City', name: 'Lake Mary', addressRegion: 'FL' },
            description: 'Licensed general contractor serving Lake Mary, FL. Custom homes, remodeling, additions, and renovations in Seminole County.',
            url: 'https://j-nsw.com/ServiceAreaLakeMary',
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
              <span className="text-orange-400 text-sm font-medium">Lake Mary, FL &mdash; Seminole County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Lake Mary, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Quality construction and remodeling services in one of Seminole County's most desirable communities.
              J&N StructureWorks delivers expert craftsmanship for Lake Mary homeowners and businesses.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Building Better Homes in Lake Mary</h2>
              <p className="text-slate-600 mb-4">
                Lake Mary has earned its reputation as one of the best places to live in Central Florida. With
                top-rated schools, family-friendly neighborhoods, and a growing commercial corridor along International
                Parkway, it's no surprise that homeowners here invest in improving their properties. J&N StructureWorks
                is proud to serve Lake Mary residents with construction services that match the quality of this
                exceptional community.
              </p>
              <p className="text-slate-600 mb-4">
                From renovations in established neighborhoods near Colonial TownPark to custom home builds in newer
                Lake Mary developments, we bring deep knowledge of Seminole County building codes, local permitting
                processes, and the specific requirements of Lake Mary HOAs. Whether you're upgrading your kitchen,
                adding a master suite, or building your dream home from the ground up, our team handles every detail
                with professionalism and precision.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), we are fully licensed to manage every phase
                of your Lake Mary construction project — from initial design coordination through final inspection
                and certificate of occupancy.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Lake Mary</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Lake Mary Homeowners Choose J&N</h3>
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
        <FAQSection faqs={faqs} title="Lake Mary Construction FAQs" />

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Lake Mary Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll help you plan your Lake Mary home improvement or new construction project.
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
