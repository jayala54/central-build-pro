import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ChevronRight, Phone } from 'lucide-react';

const services = [
  'Luxury Custom Home Building',
  'Lakefront Home Construction',
  'Kitchen & Bathroom Remodeling',
  'Whole-Home Renovations',
  'Room Additions & Second Stories',
  'Outdoor Living, Pools & Summer Kitchens',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Experience building luxury and lakefront homes in Windermere',
  'Over 100 projects completed across Central Florida since 2020',
  'Attention to high-end finishes and architectural detail',
  'Fully licensed, bonded, and insured',
  'Discreet, professional service in exclusive communities',
];

const faqs = [
  {
    q: 'How much does it cost to build a luxury home in Windermere?',
    a: 'Luxury custom home construction in Windermere typically ranges from $300 to $600+ per square foot depending on lot conditions, lakefront access, architectural complexity, and finish selections. Lakefront properties on the Butler Chain of Lakes command premium build costs due to site preparation, seawalls, and elevated finishes. We provide detailed estimates during our consultation.',
  },
  {
    q: 'Can you build on lakefront lots along the Butler Chain of Lakes?',
    a: 'Yes. We specialize in lakefront construction in the Windermere area, including lots on the Butler Chain of Lakes. We manage all environmental permits, seawall considerations, setback requirements, and dock approvals in addition to standard building permits.',
  },
  {
    q: 'Do you work in gated communities like Isleworth?',
    a: 'Yes. We serve homeowners in Windermere\'s most prestigious communities including Isleworth, Keenes Pointe, Lake Butler Sound, and Windermere Trails. We work within each community\'s architectural review board requirements and maintain the standards expected in these neighborhoods.',
  },
  {
    q: 'How long does a whole-home renovation take in Windermere?',
    a: 'A comprehensive whole-home renovation in Windermere typically takes 4 to 8 months depending on the size of the home and scope of work. Luxury finishes and custom elements may extend timelines. We provide a detailed project schedule and keep you informed throughout the process.',
  },
];

export default function ServiceAreaWindermere() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Windermere FL | J&N StructureWorks"
        path="/ServiceAreaWindermere"
        description="Licensed general contractor in Windermere, FL (CBC1269175). Luxury custom homes, lakefront builds, remodeling & renovations in Orange County. Free estimates: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'General Contractor Services in Windermere, FL',
          provider: {
            '@type': 'GeneralContractor',
            name: 'J&N StructureWorks',
            url: 'https://j-nsw.com',
            telephone: '+13216954964',
            address: { '@type': 'PostalAddress', addressLocality: 'Windermere', addressRegion: 'FL' },
          },
          areaServed: { '@type': 'City', name: 'Windermere', addressRegion: 'FL' },
          description: 'Licensed general contractor serving Windermere, FL. Luxury custom homes, lakefront construction, remodeling, and renovations in Orange County.',
          url: 'https://j-nsw.com/ServiceAreaWindermere',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Windermere, FL &mdash; Orange County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Windermere, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Luxury home construction and renovation in one of Central Florida's most exclusive communities.
              J&N StructureWorks delivers refined craftsmanship for Windermere's lakefront estates and upscale residences.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Luxury Construction in Windermere</h2>
              <p className="text-slate-600 mb-4">
                Windermere is synonymous with luxury living in Central Florida. Nestled along the Butler Chain of
                Lakes in southwest Orange County, this small town is home to some of the most prestigious
                addresses in the Orlando area — including the world-renowned Isleworth community, Keenes Pointe,
                and the lakefront estates along Butler Chain Drive. Windermere homeowners expect the highest
                standards of design and construction, and J&N StructureWorks is equipped to deliver.
              </p>
              <p className="text-slate-600 mb-4">
                We serve Windermere with luxury custom home builds, comprehensive whole-home renovations, and
                targeted remodeling projects. Whether you're building a new lakefront estate with a private dock,
                renovating a kitchen with imported finishes and professional-grade appliances, or adding an outdoor
                living space with a summer kitchen overlooking the lake, our team brings the expertise and attention
                to detail that Windermere properties demand.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks manages all permitting,
                architectural review board submittals, and inspections for Windermere projects. We coordinate with
                architects, interior designers, and specialty trades to deliver seamless, high-end results from
                concept to completion.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Windermere</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Windermere Homeowners Choose J&N</h3>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Windermere Construction FAQs</h2>
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Windermere Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a private consultation with J&N StructureWorks. We'll discuss your vision for your Windermere home or lakefront estate.
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
