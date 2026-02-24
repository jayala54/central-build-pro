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
  'Historic Home Restorations',
  'Commercial Buildouts & Tenant Improvements',
  'Pre-Construction & Feasibility Studies',
  'Permit Management & Inspections',
];

const whyChoose = [
  'Licensed Florida Certified Building Contractor (CBC1269175)',
  'Experience with Sanford historic district building guidelines',
  'Familiar with Seminole County permitting processes',
  'Over 100 projects completed across Central Florida since 2020',
  'Transparent pricing with no hidden fees',
  'Fully licensed, bonded, and insured',
];

const faqs = [
  {
    q: 'How much does a home renovation cost in Sanford, FL?',
    a: 'Home renovation costs in Sanford vary by scope but typically range from $100 to $275+ per square foot. Sanford offers some of the most favorable construction costs in the Orlando metro area, making it an excellent market for home improvements and investment properties. We provide free detailed estimates.',
  },
  {
    q: 'Are there special requirements for renovating in the Sanford Historic District?',
    a: 'Yes. Properties within the Sanford Historic District may require approval from the Historic Preservation Board. Exterior modifications, additions, and demolitions often need additional review. J&N StructureWorks has experience working within these guidelines and will manage the approval process for you.',
  },
  {
    q: 'Can you build a new home on a lakefront lot near Lake Monroe?',
    a: 'Absolutely. Lakefront construction near Lake Monroe and other Sanford-area lakes requires attention to setback requirements, flood zone regulations, and environmental considerations. We conduct thorough lot evaluations and manage all permitting to ensure your lakefront home is built to code.',
  },
  {
    q: 'How long does a full home remodel take in Sanford?',
    a: 'A whole-home renovation in Sanford typically takes 3 to 6 months depending on scope and complexity. Smaller projects like a kitchen or bathroom remodel usually run 6 to 10 weeks. We provide a detailed timeline during your free consultation.',
  },
];

export default function ServiceAreaSanford() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="General Contractor Sanford FL | J&N StructureWorks"
        path="/ServiceAreaSanford"
        description="Licensed general contractor in Sanford, FL (CBC1269175). Custom homes, historic renovations, remodeling & additions in Seminole County. Free estimates: (321) 219-9007."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Sanford, FL',
            provider: {
              '@type': 'GeneralContractor',
              name: 'J&N StructureWorks',
              url: 'https://j-nsw.com',
              telephone: '+13212199007',
              address: { '@type': 'PostalAddress', addressLocality: 'Sanford', addressRegion: 'FL' },
            },
            areaServed: { '@type': 'City', name: 'Sanford', addressRegion: 'FL' },
            description: 'Licensed general contractor serving Sanford, FL. Custom homes, historic renovations, remodeling, and additions in Seminole County.',
            url: 'https://j-nsw.com/ServiceAreaSanford',
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
              <span className="text-orange-400 text-sm font-medium">Sanford, FL &mdash; Seminole County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              General Contractor in Sanford, FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Professional construction and renovation services in Sanford's revitalized historic district and
              growing residential communities. J&N StructureWorks brings quality craftsmanship to Seminole County's county seat.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Building in Sanford's Revitalized Community</h2>
              <p className="text-slate-600 mb-4">
                Sanford has undergone a remarkable transformation in recent years. The historic downtown along First
                Street is now a vibrant destination with breweries, restaurants, and boutique shops overlooking
                Lake Monroe. The Sanford RiverWalk, SunRail connectivity, and an influx of new residents have made
                the city one of the most exciting markets in Central Florida for both renovation and new construction.
              </p>
              <p className="text-slate-600 mb-4">
                J&N StructureWorks serves homeowners and investors across Sanford — from the Craftsman bungalows and
                Queen Anne homes in the Historic Residential District to the newer subdivisions along the city's
                expanding edges. We understand the unique appeal of Sanford's character homes and the importance
                of preserving architectural integrity while modernizing interiors, systems, and living spaces.
              </p>
              <p className="text-slate-600 mb-8">
                As a Florida Certified Building Contractor (CBC1269175), we are licensed to manage all phases of
                construction in the City of Sanford and unincorporated Seminole County. From historic renovations
                requiring preservation board approval to ground-up custom builds on lakefront lots, J&N StructureWorks
                handles permitting, construction, and inspections from start to finish.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services We Offer in Sanford</h3>
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
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Sanford Homeowners Choose J&N</h3>
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
        <FAQSection faqs={faqs} title="Sanford Construction FAQs" />

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Sanford Project?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. Whether you're renovating a historic home or building new, we're here to help.
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
