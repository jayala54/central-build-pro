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
  'Historic Home Renovations',
  'Kitchen & Bathroom Remodeling',
  'Room Additions & Second Stories',
  'Whole-Home Renovations',
  'Outdoor Living & Pool Decks',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Experience working with Winter Park historic district guidelines',
  'Over 100 projects completed across Central Florida since 2020',
  'Transparent pricing with no hidden fees',
  'Fully licensed, bonded, and insured',
  'Respectful of your property and your neighbors during construction',
];

const faqs = [
  {
    q: 'How much does a home renovation cost in Winter Park?',
    a: 'Renovation costs in Winter Park typically range from $150 to $350+ per square foot depending on the scope and finishes selected. Kitchen remodels often start around $60,000 to $100,000 due to the higher-end finishes common in the area. We provide detailed estimates during a free on-site consultation.',
  },
  {
    q: 'Are there special permit requirements for historic homes in Winter Park?',
    a: 'Yes. Properties within the Winter Park Historic Districts may require approval from the Historic Preservation Board in addition to standard building permits. J&N StructureWorks has experience navigating these requirements and will manage the entire approval process on your behalf.',
  },
  {
    q: 'Can you add a second story to my Winter Park home?',
    a: 'In many cases, yes. Second-story additions are popular in Winter Park where lot sizes can be limited. We conduct a structural feasibility study first to determine if your existing foundation and framing can support the addition, and we handle all permitting through the City of Winter Park.',
  },
  {
    q: 'Do you build custom homes on vacant lots in Winter Park?',
    a: 'Absolutely. We build custom homes on infill lots throughout Winter Park, including areas near Rollins College, along Park Avenue corridors, and in newer Winter Park subdivisions. We handle lot evaluation, design coordination, permitting, and construction.',
  },
];

export default function ServiceAreaWinterPark() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Winter Park FL | J&N StructureWorks"
        path="/ServiceAreaWinterPark"
        description="Licensed general contractor in Winter Park, FL (CBC1269175). Custom homes, historic renovations, remodeling & additions in Orange County. Free estimates: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'General Contractor Services in Winter Park, FL',
          provider: {
            '@type': 'GeneralContractor',
            name: 'J&N StructureWorks',
            url: 'https://j-nsw.com',
            telephone: '+13216954964',
            address: { '@type': 'PostalAddress', addressLocality: 'Winter Park', addressRegion: 'FL' },
          },
          areaServed: { '@type': 'City', name: 'Winter Park', addressRegion: 'FL' },
          description: 'Licensed general contractor serving Winter Park, FL. Custom homes, historic renovations, remodeling, and additions in Orange County.',
          url: 'https://j-nsw.com/ServiceAreaWinterPark',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Winter Park, FL &mdash; Orange County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Winter Park, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Upscale construction and renovation services in one of Central Florida's most prestigious communities.
              From historic home restorations to new custom builds, J&N StructureWorks brings craftsmanship to every Winter Park project.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Quality Construction in Winter Park</h2>
              <p className="text-slate-600 mb-4">
                Winter Park is known for its tree-canopied streets, upscale historic homes, and the charming boutiques
                along Park Avenue. As one of Central Florida's most desirable communities, Winter Park homeowners expect
                a higher standard of craftsmanship — and that's exactly what J&N StructureWorks delivers. We've completed
                projects ranging from meticulous renovations of 1920s Mediterranean Revival homes to ground-up custom
                builds near Rollins College and the shores of Lake Virginia.
              </p>
              <p className="text-slate-600 mb-4">
                Working in Winter Park often means navigating historic preservation guidelines, mature tree ordinances,
                and strict HOA requirements. Our team understands these local regulations and works closely with the
                City of Winter Park's building and planning departments to ensure your project moves forward smoothly.
                Whether you're restoring a classic home on Interlachen Avenue or building new in a Winter Park enclave,
                we bring the expertise to get it done right.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks is fully licensed to handle
                all aspects of residential and commercial construction in Winter Park and throughout Orange County.
                We manage every detail from permits and engineering to finish carpentry and final inspection.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Winter Park</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Winter Park Homeowners Choose J&N</h3>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Winter Park Construction FAQs</h2>
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Winter Park Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. Let's discuss your vision for your Winter Park home.
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
