import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Building2, CheckCircle, ChevronRight, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'How much does a commercial tenant buildout cost in Orlando?',
    a: 'Commercial tenant buildout costs in Orlando typically range from $50 to $200+ per square foot depending on the type of space, complexity of the build, and finish level. A basic office buildout with standard finishes may cost $50 to $80 per square foot, while a restaurant buildout requiring grease traps, hood systems, and specialized plumbing can exceed $150 to $250 per square foot. We provide detailed, line-item estimates based on your specific space and requirements during our free consultation.',
  },
  {
    q: 'How long does a commercial buildout take in Central Florida?',
    a: 'Commercial buildout timelines in Central Florida typically range from 4 to 16 weeks depending on the size and complexity of the project. A straightforward office buildout (2,000–5,000 sq ft) may take 4 to 8 weeks, while a restaurant buildout or medical office with specialized systems can take 10 to 16 weeks. The permitting process typically adds 2 to 6 weeks before construction begins. We work with you to establish a realistic timeline that aligns with your lease commencement date.',
  },
  {
    q: 'Can you help with lease negotiations for tenant improvement allowances?',
    a: 'While we do not negotiate leases directly, we regularly assist tenants and their brokers by providing detailed construction cost estimates, space plans, and scope-of-work documents that support TI allowance negotiations with landlords. Having accurate buildout pricing before signing a lease gives you leverage to negotiate appropriate tenant improvement dollars. We can also review landlord work letters to help you understand what the landlord is providing versus what you need to fund.',
  },
  {
    q: 'What permits are required for a commercial buildout in Orlando?',
    a: 'Commercial buildouts in Orlando and Orange County require building permits for construction, electrical permits, plumbing permits (if applicable), mechanical permits for HVAC work, and fire alarm/suppression permits. Restaurant and food service buildouts also require Health Department approvals. Depending on the location, you may need zoning approval and a Certificate of Use. As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks manages all permit applications and inspections throughout the project.',
  },
  {
    q: 'Do you handle ADA compliance for commercial spaces?',
    a: 'Yes. All commercial buildouts we construct are designed and built to comply with the Americans with Disabilities Act (ADA) requirements as well as the Florida Accessibility Code. This includes accessible entrances, restroom clearances, counter heights, door widths, signage, and parking requirements. We work with architects and designers who specialize in ADA-compliant commercial spaces and ensure all accessibility requirements are addressed in the design phase, not as costly afterthoughts during construction.',
  },
];

export default function CommercialBuildouts() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Commercial Tenant Buildouts Orlando FL"
        path="/CommercialBuildouts"
        description="Professional commercial tenant buildouts in Orlando & Central Florida by J&N StructureWorks. Licensed CBC1269175. Office, retail, restaurant buildouts & ADA compliance. Free estimate: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Commercial Tenant Buildouts',
          provider: { '@type': 'GeneralContractor', name: 'J&N StructureWorks', url: 'https://j-nsw.com' },
          areaServed: ['Orlando, FL', 'Winter Park, FL', 'Lake Mary, FL', 'Kissimmee, FL', 'Central Florida'],
          description: 'Commercial tenant buildout services in Central Florida. Office buildouts, retail spaces, restaurant buildouts, ADA compliance, and tenant improvements.',
          url: 'https://j-nsw.com/CommercialBuildouts',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Building2 className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Commercial Buildouts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Commercial Tenant Buildouts in Orlando FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Build out your commercial space with a Florida Certified Building Contractor.
              From office buildouts and retail spaces to restaurant construction and ADA compliance, J&N StructureWorks delivers on time and on budget.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Space, Built for Business</h2>
              <p className="text-slate-600 mb-4">
                A well-executed commercial buildout is the foundation of a successful business. Whether you're
                opening a new office, launching a restaurant, building out a retail storefront, or preparing a
                medical practice, the quality of your space directly impacts your employees, customers, and bottom
                line. At J&N StructureWorks, we specialize in commercial tenant buildouts that transform raw or
                existing shell space into functional, code-compliant, and aesthetically polished environments.
                As a Florida Certified Building Contractor (CBC1269175), we have the licensing and expertise to
                handle everything from structural modifications and mechanical systems to finish carpentry and
                ADA compliance.
              </p>
              <p className="text-slate-600 mb-4">
                Orlando's commercial real estate market is one of the most active in the Southeast, with businesses
                of all sizes leasing space across downtown, the I-Drive corridor, the Medical City area, Maitland,
                Lake Mary, and suburban growth centers throughout Central Florida. Whether you're a first-time
                tenant negotiating a landlord work letter or an experienced operator opening your fifth location,
                we bring the construction expertise to help you make informed decisions about your buildout scope,
                budget, and timeline. We work closely with your architect, designer, landlord, and property
                management team to ensure your project stays on track from lease signing through Certificate of
                Occupancy.
              </p>
              <p className="text-slate-600 mb-8">
                Every commercial buildout has unique requirements based on the type of business, local code
                requirements, landlord specifications, and ADA standards. Restaurant buildouts require grease
                traps, commercial hood systems, and Health Department approvals. Medical offices need specialized
                HVAC, privacy-compliant layouts, and medical gas systems. Retail spaces focus on customer flow,
                lighting design, and storefront presentation. We've built them all, and we understand the
                specific permit, inspection, and compliance requirements for each type of commercial space in
                Orange, Seminole, Osceola, and Lake counties.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {[
                  'Space planning & layout design',
                  'Demising walls & partition framing',
                  'Electrical & data/network wiring',
                  'Plumbing & restroom construction',
                  'HVAC system installation & zoning',
                  'ADA-compliant restrooms & access',
                  'Flooring, ceiling & lighting',
                  'Permit management & CO acquisition',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commercial Buildout Process</h3>
              <div className="space-y-4 mb-10">
                {[
                  { step: '1', title: 'Site Walk & Pre-Construction Planning', desc: 'We walk the space with you, review the landlord work letter, assess existing conditions, and discuss your business requirements, timeline, and budget. We identify potential issues early.' },
                  { step: '2', title: 'Design Coordination & Estimating', desc: 'We collaborate with your architect and designer (or recommend one) to finalize construction drawings. You receive a detailed, line-item estimate covering every aspect of the buildout.' },
                  { step: '3', title: 'Permitting & Landlord Approvals', desc: 'We submit permit applications to the local building department and coordinate any required landlord or property management approvals. All permits are secured before construction begins.' },
                  { step: '4', title: 'Construction & Build-Out', desc: 'Our crews execute the buildout in a logical, efficient sequence — framing, rough-ins (MEP), insulation, drywall, finishes, and fixture installation. We provide regular progress updates and maintain a clean, safe worksite.' },
                  { step: '5', title: 'Inspections & Certificate of Occupancy', desc: 'We manage all required inspections — building, fire, health (if applicable), and accessibility — and secure your Certificate of Occupancy so you can open for business on schedule.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm sticky top-40">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why Choose J&N StructureWorks?</h3>
              <ul className="space-y-3 text-slate-600 text-sm mb-6">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> Florida Certified Building Contractor (CBC1269175)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> 100+ projects completed since 2020</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> Transparent pricing — no hidden fees</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> Licensed, bonded & insured</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> Full permitting & inspection management</li>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Out Your Commercial Space?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll walk your space, discuss your requirements, and provide a detailed buildout estimate.
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
