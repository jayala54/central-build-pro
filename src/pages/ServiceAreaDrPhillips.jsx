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
  'Outdoor Living, Pools & Summer Kitchens',
  'Commercial Buildouts & Tenant Improvements',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Experience with upscale residential renovations in Dr. Phillips',
  'Over 100 projects completed across Central Florida since 2020',
  'Attention to premium finishes and high-end materials',
  'Fully licensed, bonded, and insured',
  'Respectful, professional crews for established neighborhoods',
];

const faqs = [
  {
    q: 'How much does a home renovation cost in Dr. Phillips?',
    a: 'Home renovation costs in Dr. Phillips typically range from $150 to $350+ per square foot depending on scope and finish selections. Dr. Phillips homeowners often invest in premium finishes, which can push costs toward the higher end. Kitchen remodels frequently range from $60,000 to $120,000. We provide detailed, transparent estimates during your free consultation.',
  },
  {
    q: 'Do I need permits for remodeling in the Dr. Phillips area?',
    a: 'Yes. Dr. Phillips is an unincorporated community in Orange County, so building permits are obtained through the Orange County Building Division. Most structural, electrical, plumbing, and mechanical work requires permits. J&N StructureWorks manages all permitting and inspections on your behalf.',
  },
  {
    q: 'Can you renovate homes in Bay Hill and other Dr. Phillips communities?',
    a: 'Yes. We serve homeowners throughout the Dr. Phillips area, including Bay Hill, Phillips Landing, Sand Lake Hills, Turkey Lake Estates, and the neighborhoods along Restaurant Row. We work within each community\'s HOA guidelines and architectural standards.',
  },
  {
    q: 'Do you handle commercial buildouts near Restaurant Row?',
    a: 'Yes. We provide commercial tenant improvement and buildout services along the Restaurant Row (Sand Lake Road) corridor and throughout the Dr. Phillips commercial district. We handle permitting, construction, and inspections for restaurants, retail spaces, and offices.',
  },
];

export default function ServiceAreaDrPhillips() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Dr. Phillips FL | J&N StructureWorks"
        path="/ServiceAreaDrPhillips"
        description="Licensed general contractor in Dr. Phillips, FL (CBC1269175). Custom homes, upscale remodeling, renovations & commercial buildouts in Orange County. Free estimates: (321) 695-4964."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Dr. Phillips, FL',
            provider: {
              '@type': 'GeneralContractor',
              name: 'J&N StructureWorks',
              url: 'https://j-nsw.com',
              telephone: '+13216954964',
              address: { '@type': 'PostalAddress', addressLocality: 'Orlando', addressRegion: 'FL' },
            },
            areaServed: { '@type': 'Place', name: 'Dr. Phillips, Orlando', addressRegion: 'FL' },
            description: 'Licensed general contractor serving Dr. Phillips in Orlando, FL. Custom homes, upscale remodeling, renovations, and commercial construction in Orange County.',
            url: 'https://j-nsw.com/ServiceAreaDrPhillips',
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
              <span className="text-orange-400 text-sm font-medium">Dr. Phillips, FL &mdash; Orange County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Dr. Phillips, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Upscale construction and remodeling services in one of Orlando's most established and desirable communities.
              J&N StructureWorks delivers premium craftsmanship for Dr. Phillips homeowners and businesses.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Premium Construction in Dr. Phillips</h2>
              <p className="text-slate-600 mb-4">
                Dr. Phillips is one of Orlando's most recognized and affluent unincorporated communities in Orange
                County. Known for the world-famous Restaurant Row along Sand Lake Road, the prestigious Bay Hill
                neighborhood (home to the Arnold Palmer Invitational), and the Dr. Phillips Center for Performing
                Arts that bears the community's name, this area attracts homeowners who value quality, convenience,
                and an established community character.
              </p>
              <p className="text-slate-600 mb-4">
                J&N StructureWorks serves Dr. Phillips homeowners with upscale remodeling, custom home construction,
                and renovation projects designed to meet the expectations of this premium community. Many homes in
                Dr. Phillips were built in the 1980s and 1990s and are excellent candidates for modernization —
                updated kitchens, expanded master suites, reimagined outdoor living spaces, and whole-home
                renovations that bring classic floor plans into the current era.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), we handle all permitting through the
                Orange County Building Division and manage HOA architectural review submittals for communities
                throughout Dr. Phillips. We also serve the commercial sector along Restaurant Row and Sand Lake
                Road with tenant improvements, restaurant buildouts, and retail renovations.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Dr. Phillips</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Dr. Phillips Homeowners Choose J&N</h3>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Dr. Phillips Construction FAQs</h2>
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Dr. Phillips Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll discuss your vision for your Dr. Phillips home or commercial property.
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
