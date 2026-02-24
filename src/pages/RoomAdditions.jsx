import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PlusSquare, CheckCircle, ChevronRight, Phone } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

const faqs = [
  {
    q: 'How much does a room addition cost in Orlando, FL?',
    a: 'Room additions in Orlando typically cost between $150 and $350+ per square foot depending on the type of addition, foundation requirements, and finish level. A standard 400 sq ft bedroom addition may cost $60,000 to $140,000, while a more complex two-story addition or one requiring significant foundation work can exceed $200,000. Garage conversions are generally more affordable at $50 to $150 per square foot since the structure already exists. J&N StructureWorks provides detailed estimates during our free consultation.',
  },
  {
    q: 'Do I need a permit for a room addition in Florida?',
    a: 'Yes, room additions in Florida always require building permits. You will typically need permits for the structural work, electrical, plumbing (if applicable), and mechanical (HVAC) systems. If your property is in an HOA community, you will also need architectural review board approval before construction begins. Additionally, additions must comply with local setback requirements, lot coverage limits, and Florida Building Code. As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks handles all permit applications and inspections on your behalf.',
  },
  {
    q: 'How long does it take to build a room addition?',
    a: 'A typical room addition in Central Florida takes 2 to 5 months from permit approval to completion. A simple single-room addition (bedroom, office, or family room) may be completed in 8 to 12 weeks, while more complex additions involving a second story, new bathroom, or kitchen expansion can take 4 to 6 months. The permitting process itself typically adds 2 to 6 weeks before construction begins. We provide a detailed timeline during the planning phase.',
  },
  {
    q: 'Can you match the addition to my existing home\'s style?',
    a: 'Absolutely. Matching the addition to your existing home is one of our top priorities. We carefully match rooflines, exterior finishes (stucco, siding, brick), window styles, trim details, and interior elements so the addition looks like it was always part of the original home. We source materials that match or complement your existing finishes and work with you on design details to ensure a seamless transition between old and new construction.',
  },
  {
    q: 'What types of room additions can you build?',
    a: 'We build all types of residential additions including extra bedrooms, master suite additions, family room expansions, home office additions, sunrooms, in-law suites, garage conversions, second-story additions, and Accessory Dwelling Units (ADUs). We also handle kitchen expansions, bathroom additions, and bump-outs that add square footage to existing rooms. Each project is custom-designed to integrate with your existing home and meet your specific needs.',
  },
];

export default function RoomAdditions() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Room Additions Contractor Orlando FL"
        path="/RoomAdditions"
        description="Professional room additions in Orlando & Central Florida by J&N StructureWorks. Licensed CBC1269175. Bedrooms, family rooms, garage conversions, ADUs & more. Free estimate: (321) 219-9007."
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Room Additions',
            provider: { '@type': 'GeneralContractor', name: 'J&N StructureWorks', url: 'https://j-nsw.com' },
            areaServed: ['Orlando, FL', 'Winter Park, FL', 'Lake Mary, FL', 'Kissimmee, FL', 'Central Florida'],
            description: 'Room addition and home expansion services in Central Florida. Extra bedrooms, family rooms, garage conversions, ADUs, and more.',
            url: 'https://j-nsw.com/RoomAdditions',
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
              <PlusSquare className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Room Additions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Room Additions Contractor in Orlando FL
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Expand your living space with a Florida Certified Building Contractor.
              From extra bedrooms and family rooms to garage conversions and ADUs, J&N StructureWorks builds additions that blend seamlessly with your existing home.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">More Space Without Moving</h2>
              <p className="text-slate-600 mb-4">
                When your family outgrows your home, you don't have to uproot your life and move. A professionally
                built room addition gives you the extra space you need — whether that's an additional bedroom for
                a growing family, a spacious home office for remote work, a dedicated family room, or an in-law
                suite for aging parents. At J&N StructureWorks, we specialize in designing and building room
                additions that integrate seamlessly with your existing home's architecture, roofline, and finishes.
                As a Florida Certified Building Contractor (CBC1269175), we handle the structural engineering,
                permitting, and construction that room additions require.
              </p>
              <p className="text-slate-600 mb-4">
                Central Florida homeowners face unique considerations when adding onto their homes. Sandy soil
                conditions require proper foundation engineering. Florida's hurricane-rated building codes demand
                specific structural connections, wind-resistant roofing, and impact-rated windows in certain zones.
                Local zoning regulations dictate setback requirements and maximum lot coverage percentages that
                affect how large your addition can be. Our team understands these Central Florida-specific
                requirements and designs every addition to meet or exceed all applicable codes and regulations.
              </p>
              <p className="text-slate-600 mb-8">
                We serve homeowners throughout Orange, Seminole, Osceola, and Lake counties — including Orlando,
                Winter Park, Lake Mary, Kissimmee, Sanford, Oviedo, Clermont, Winter Garden, and Windermere.
                Whether you need a simple single-room addition, a second-story expansion, a garage conversion, or
                an Accessory Dwelling Unit (ADU), we bring the same attention to detail and transparent communication
                to every project. Our process starts with a free on-site consultation where we evaluate your property,
                discuss your needs and budget, and outline the steps to make your addition a reality.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {[
                  'On-site property & zoning evaluation',
                  'Architectural design & engineering',
                  'Foundation & structural framing',
                  'Roofline integration & matching',
                  'Electrical, plumbing & HVAC tie-ins',
                  'Exterior finish matching (stucco, siding)',
                  'Interior finishes & trim work',
                  'Permit management & inspections',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Room Addition Process</h3>
              <div className="space-y-4 mb-10">
                {[
                  { step: '1', title: 'On-Site Consultation & Feasibility', desc: 'We visit your property to evaluate the lot, review setback requirements, assess your existing structure, and discuss your goals. We determine what\'s feasible within your zoning and budget constraints.' },
                  { step: '2', title: 'Design & Engineering', desc: 'We coordinate architectural plans and structural engineering to ensure the addition integrates properly with your existing home. Plans are designed to match your home\'s style and meet Florida Building Code.' },
                  { step: '3', title: 'Permitting & HOA Approval', desc: 'We submit permit applications to your local building department and, if applicable, your HOA\'s architectural review board. We manage all revisions and approvals before construction begins.' },
                  { step: '4', title: 'Foundation & Construction', desc: 'Starting with foundation work, our crews build the addition from the ground up — framing, roofing, exterior finishes, rough-ins (electrical, plumbing, HVAC), insulation, drywall, and interior finishes.' },
                  { step: '5', title: 'Final Inspections & Completion', desc: 'After passing all required building inspections, we conduct a detailed walkthrough to ensure the addition meets your expectations. The finished space blends seamlessly with your existing home.' },
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
        <FAQSection faqs={faqs} />

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Expand Your Home?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free on-site consultation with J&N StructureWorks. We'll evaluate your property, discuss your needs, and outline a plan for your addition.
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
