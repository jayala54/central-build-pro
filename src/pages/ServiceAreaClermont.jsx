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
  'Outdoor Living Spaces & Patios',
  'Lakefront Home Construction',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Experienced with Lake County permitting and building requirements',
  'Over 100 projects completed across Central Florida since 2020',
  'Transparent pricing with no hidden fees or surprises',
  'Fully licensed, bonded, and insured',
  'Responsive communication throughout your project',
];

const faqs = [
  {
    q: 'How much does it cost to build a custom home in Clermont, FL?',
    a: 'Custom home construction in Clermont typically ranges from $180 to $350+ per square foot depending on lot conditions (especially elevation changes on hillside lots), design complexity, and finish selections. Clermont offers competitive building costs compared to closer-in Orlando suburbs. Contact us for a tailored estimate.',
  },
  {
    q: 'What permits are needed for building in Clermont?',
    a: 'Construction in Clermont requires permits through either the City of Clermont Building Department or Lake County, depending on your property\'s jurisdiction. Impact fees, utility connection fees, and tree removal permits may also apply. J&N StructureWorks manages all permitting on your behalf.',
  },
  {
    q: 'Can you build on hillside or sloped lots in Clermont?',
    a: 'Yes. Clermont is unique in Central Florida for its rolling hills and elevation changes. We have experience building on sloped lots, which may require specialized foundation work, retaining walls, and drainage solutions. We evaluate each lot during our pre-construction process.',
  },
  {
    q: 'Do you build lakefront homes in the Clermont area?',
    a: 'Absolutely. The Clermont chain of lakes offers some of the best lakefront living in Central Florida. We build custom lakefront homes with attention to setback requirements, flood zone regulations, dock permits, and the elevated finishes lakefront homeowners expect.',
  },
];

export default function ServiceAreaClermont() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Clermont FL | J&N StructureWorks"
        path="/ServiceAreaClermont"
        description="Licensed general contractor in Clermont, FL (CBC1269175). Custom homes, lakefront builds, remodeling & additions in Lake County. Free estimates: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'General Contractor Services in Clermont, FL',
          provider: {
            '@type': 'GeneralContractor',
            name: 'J&N StructureWorks',
            url: 'https://j-nsw.com',
            telephone: '+13216954964',
            address: { '@type': 'PostalAddress', addressLocality: 'Clermont', addressRegion: 'FL' },
          },
          areaServed: { '@type': 'City', name: 'Clermont', addressRegion: 'FL' },
          description: 'Licensed general contractor serving Clermont, FL. Custom homes, lakefront construction, remodeling, and additions in Lake County.',
          url: 'https://j-nsw.com/ServiceAreaClermont',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Clermont, FL &mdash; Lake County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Clermont, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Custom home building and renovation services in Clermont's scenic hills and lakefront communities.
              J&N StructureWorks brings expert construction to Lake County's fastest-growing city.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Building in Clermont's Growing Community</h2>
              <p className="text-slate-600 mb-4">
                Clermont stands out in Central Florida for its rolling hills, scenic lakes, and rapidly expanding
                residential communities. Located on the western edge of the Orlando metro area in Lake County,
                Clermont has grown from a small citrus town into one of the region's most popular destinations for
                families and homebuilders. The city's unique topography — including some of the highest elevations
                in Florida — creates opportunities for stunning hilltop and lakefront homes that you simply can't
                find in the flatter areas closer to Orlando.
              </p>
              <p className="text-slate-600 mb-4">
                J&N StructureWorks serves Clermont homeowners with custom home builds, full renovations, and targeted
                remodeling projects. From the established neighborhoods around downtown Clermont to the newer
                master-planned communities like Olympia, Wellness Way, and the developments along Hartwood Marsh Road,
                we bring quality craftsmanship and code-compliant construction to every project.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), we are fully licensed to pull permits and
                manage construction in both the City of Clermont and unincorporated Lake County. We handle hillside
                lot preparation, lakefront setback requirements, and all the unique considerations that come with
                building in this beautiful part of Central Florida.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Clermont</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Clermont Homeowners Choose J&N</h3>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Clermont Construction FAQs</h2>
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Clermont Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll discuss your vision for your Clermont home or lakefront property.
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
