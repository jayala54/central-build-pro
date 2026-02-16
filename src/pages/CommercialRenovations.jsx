import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HardHat, CheckCircle, ChevronRight, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'How much does a commercial renovation cost in Orlando?',
    a: 'Commercial renovation costs in Orlando typically range from $40 to $175+ per square foot depending on the type of space, scope of work, and finish level. A basic office refresh (new paint, flooring, and fixtures) may cost $40 to $60 per square foot, while a full restaurant remodel or medical office renovation can exceed $150 per square foot. Structural modifications, ADA upgrades, and code compliance work add to the cost. J&N StructureWorks provides detailed, line-item estimates based on your specific project requirements.',
  },
  {
    q: 'How do you minimize disruption to my business during renovation?',
    a: 'We understand that every day of disruption costs your business money. Our approach includes phased construction schedules that allow portions of your space to remain operational, after-hours and weekend work when needed, dust and noise containment barriers, and clear communication about what to expect each week. For restaurants and retail spaces, we can often schedule the most disruptive work during your slowest periods. We create a detailed phasing plan during pre-construction so you know exactly how the renovation will impact your operations.',
  },
  {
    q: 'What permits are needed for a commercial renovation in Florida?',
    a: 'Commercial renovations in Florida typically require building permits for any structural modifications, electrical permits for wiring changes, plumbing permits for fixture or pipe changes, and mechanical permits for HVAC modifications. If you are changing the use of the space (e.g., converting retail to restaurant), additional zoning approvals and a change-of-use permit may be required. Fire alarm and fire suppression permits are also common. As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks handles all permit applications and inspections throughout your project.',
  },
  {
    q: 'Can you bring my older commercial building up to current code?',
    a: 'Yes. Many older commercial buildings in Central Florida were built under previous versions of the Florida Building Code and may not meet current standards for fire safety, accessibility, electrical capacity, or structural performance. We specialize in code compliance upgrades that bring existing buildings up to current standards, including ADA accessibility improvements, fire alarm and sprinkler system upgrades, electrical panel replacements, and structural reinforcement. We work with local building officials to determine which code requirements apply to your specific renovation scope.',
  },
  {
    q: 'How long does a commercial renovation take?',
    a: 'Commercial renovation timelines vary significantly based on the scope of work. A cosmetic refresh of a 3,000 sq ft office may take 3 to 5 weeks, while a full restaurant remodel or major structural renovation of 5,000+ sq ft can take 8 to 16 weeks. The permitting process typically adds 2 to 6 weeks before construction begins. We develop a detailed project schedule during pre-construction that accounts for permitting, material lead times, and any phasing required to minimize business disruption.',
  },
];

export default function CommercialRenovations() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Commercial Renovations Orlando & Central Florida"
        path="/CommercialRenovations"
        description="Professional commercial renovations in Orlando & Central Florida by J&N StructureWorks. Licensed CBC1269175. Office, retail, restaurant remodels, ADA upgrades & code compliance. Free estimate: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Commercial Renovations',
          provider: { '@type': 'GeneralContractor', name: 'J&N StructureWorks', url: 'https://j-nsw.com' },
          areaServed: ['Orlando, FL', 'Winter Park, FL', 'Lake Mary, FL', 'Kissimmee, FL', 'Central Florida'],
          description: 'Commercial renovation services in Central Florida. Office renovations, storefront updates, restaurant remodels, ADA upgrades, and code compliance.',
          url: 'https://j-nsw.com/CommercialRenovations',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-20 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <HardHat className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Commercial Renovations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Commercial Renovations in Orlando & Central Florida
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Upgrade your commercial space with a Florida Certified Building Contractor.
              From office renovations and storefront updates to restaurant remodels and ADA compliance, J&N StructureWorks minimizes disruption and maximizes results.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Revitalize Your Business Space</h2>
              <p className="text-slate-600 mb-4">
                Your commercial space is more than just a building — it's the environment where your employees
                work, your customers visit, and your brand comes to life. Whether your office feels outdated,
                your storefront needs a modern refresh, your restaurant requires a remodel to stay competitive,
                or your building needs ADA upgrades and code compliance work, J&N StructureWorks delivers
                commercial renovations that transform your space while respecting your business operations.
                As a Florida Certified Building Contractor (CBC1269175), we bring the licensing, experience,
                and project management discipline that commercial renovations demand.
              </p>
              <p className="text-slate-600 mb-4">
                Central Florida's commercial landscape is constantly evolving. Businesses throughout Orlando,
                Winter Park, Maitland, Lake Mary, Kissimmee, and surrounding areas are investing in their
                physical spaces to attract talent, improve customer experiences, and comply with updated
                building codes and ADA standards. Older commercial buildings — particularly those built in
                the 1980s and 1990s during Central Florida's commercial construction boom — often need
                significant updates to meet current energy codes, fire safety standards, and accessibility
                requirements. Our team understands these requirements and works with local building officials
                to ensure your renovation is fully compliant.
              </p>
              <p className="text-slate-600 mb-8">
                What sets J&N StructureWorks apart is our ability to execute commercial renovations with
                minimal disruption to your ongoing business operations. We understand that closing your doors
                for weeks or months is not an option for most businesses. Our phased construction approach,
                after-hours work capability, and meticulous dust and noise containment practices allow us
                to renovate your space while you continue to serve your customers. From initial consultation
                through Certificate of Occupancy, we provide transparent communication, detailed scheduling,
                and a single point of accountability for every aspect of your renovation project.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {[
                  'Space assessment & renovation planning',
                  'Structural modifications & reinforcement',
                  'Electrical & data infrastructure upgrades',
                  'Plumbing & restroom renovations',
                  'HVAC system upgrades & replacement',
                  'ADA compliance & accessibility upgrades',
                  'Storefront & facade improvements',
                  'Permit management & code compliance',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commercial Renovation Process</h3>
              <div className="space-y-4 mb-10">
                {[
                  { step: '1', title: 'Site Assessment & Consultation', desc: 'We evaluate your existing space, identify structural and code compliance issues, discuss your business goals and operational constraints, and determine the optimal renovation scope and phasing plan.' },
                  { step: '2', title: 'Design, Estimating & Scheduling', desc: 'We work with your architect/designer (or recommend one) to finalize renovation plans. You receive a detailed, line-item estimate and a construction schedule that accounts for business disruption minimization.' },
                  { step: '3', title: 'Permitting & Pre-Construction', desc: 'We pull all required permits, coordinate landlord and property management approvals, and prepare the site. Dust barriers, temporary walls, and noise mitigation measures are installed before work begins.' },
                  { step: '4', title: 'Phased Construction', desc: 'Our crews execute the renovation in planned phases to keep your business operational. Demolition, structural work, rough-ins, and finish work are sequenced to minimize disruption. You receive regular progress updates.' },
                  { step: '5', title: 'Inspections & Project Closeout', desc: 'We manage all required inspections — building, fire, health, accessibility — and secure updated certificates of occupancy. A final walkthrough ensures every detail meets your expectations before we close out the project.' },
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
            <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm sticky top-24 md:top-40">
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Renovate Your Commercial Space?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll assess your space, discuss your goals, and provide a detailed renovation plan that minimizes business disruption.
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
