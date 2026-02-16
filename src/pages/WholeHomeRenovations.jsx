import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Hammer, CheckCircle, ChevronRight, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'How much does a whole-home renovation cost in Orlando?',
    a: 'Whole-home renovations in Orlando typically range from $100 to $250+ per square foot depending on the scope of work, structural changes, and finish selections. For a 2,000 sq ft home, expect a total investment between $200,000 and $500,000+. Cosmetic-focused renovations (new flooring, paint, fixtures) fall on the lower end, while gut renovations involving structural work, new plumbing, and electrical rewiring fall on the higher end. J&N StructureWorks provides a detailed, line-item estimate during our free consultation.',
  },
  {
    q: 'How long does a whole-home renovation take?',
    a: 'A comprehensive whole-home renovation in Central Florida typically takes 3 to 8 months depending on the size of the home and the scope of work. Cosmetic renovations may be completed in 6 to 10 weeks, while full gut renovations that involve structural modifications, roof work, and complete system replacements can take 6 to 12 months. We build a detailed project schedule before construction begins and provide regular progress updates.',
  },
  {
    q: 'Can I live in my home during a whole-home renovation?',
    a: 'It depends on the scope of work. For phased renovations where we work on one area at a time, you may be able to stay in the home. For full gut renovations that involve removing walls, replacing plumbing and electrical systems, or significant structural changes, we strongly recommend making temporary living arrangements. We can phase your project to minimize displacement when possible and will advise you on the best approach during the planning stage.',
  },
  {
    q: 'What permits are needed for a whole-home renovation in Florida?',
    a: 'Whole-home renovations in Florida typically require building permits for structural work, electrical permits for wiring changes, plumbing permits for pipe modifications, and mechanical permits for HVAC work. If you live in an HOA community, architectural approval may also be required. As a Florida Certified Building Contractor (CBC1269175), J&N StructureWorks handles all permit applications, inspections, and regulatory approvals on your behalf.',
  },
  {
    q: 'Is it cheaper to renovate or build new in Central Florida?',
    a: 'In most cases, renovating is more cost-effective than building new — especially when the existing structure, foundation, and lot are in good condition. A whole-home renovation typically costs 30–50% less than new construction of comparable size and quality. However, if the existing home has major structural issues, foundation problems, or outdated systems throughout, new construction may be the better long-term investment. We can evaluate your specific situation during a free consultation and help you determine the best path forward.',
  },
];

export default function WholeHomeRenovations() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Whole-Home Renovations Orlando & Central Florida"
        path="/WholeHomeRenovations"
        description="Complete whole-home renovations in Orlando & Central Florida by J&N StructureWorks. Licensed CBC1269175. Gut renovations, modernization, structural changes & more. Free consultation: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Whole-Home Renovations',
          provider: { '@type': 'GeneralContractor', name: 'J&N StructureWorks', url: 'https://j-nsw.com' },
          areaServed: ['Orlando, FL', 'Winter Park, FL', 'Lake Mary, FL', 'Kissimmee, FL', 'Central Florida'],
          description: 'Whole-home renovation services in Central Florida. Complete home transformations including structural changes, modernization, and gut renovations.',
          url: 'https://j-nsw.com/WholeHomeRenovations',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Hammer className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Whole-Home Renovations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Whole-Home Renovations in Orlando & Central Florida
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Completely transform your home with a Florida Certified Building Contractor.
              From gut renovations and structural changes to full modernizations, J&N StructureWorks handles every aspect of your whole-home renovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/Contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-12">
                  Get a Free Consultation <ChevronRight className="w-4 h-4 ml-2" />
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Transform Every Room in Your Home</h2>
              <p className="text-slate-600 mb-4">
                A whole-home renovation is the most powerful way to modernize an older property, reimagine your
                living spaces, and add significant value to your home — without the cost and complexity of new
                construction. At J&N StructureWorks, we specialize in complete home transformations that address
                everything from outdated floor plans and aging mechanical systems to cosmetic finishes and energy
                efficiency. As a Florida Certified Building Contractor (CBC1269175), we have the expertise and
                licensing to handle structural modifications, load-bearing wall removals, roof work, and full
                system replacements that many remodeling companies cannot.
              </p>
              <p className="text-slate-600 mb-4">
                Central Florida is home to tens of thousands of properties built during the 1960s through 1990s
                construction booms. Many of these homes feature closed-off floor plans, outdated electrical panels,
                original polybutylene plumbing, and finishes that no longer meet modern standards. A whole-home
                renovation allows you to open up living areas, upgrade critical systems, install energy-efficient
                windows and insulation, and create a home that functions the way modern families actually live.
                Whether you recently purchased a fixer-upper, inherited a family property, or simply want to
                modernize the home you've lived in for years, we have the experience to guide you through every decision.
              </p>
              <p className="text-slate-600 mb-8">
                We serve homeowners across Orange, Seminole, Osceola, and Lake counties — including Orlando,
                Winter Park, Lake Mary, Kissimmee, Sanford, Oviedo, Clermont, Winter Garden, and Windermere.
                Every project starts with a thorough assessment of your home's current condition, a discussion of
                your goals and budget, and a detailed scope of work that leaves nothing to chance. Our project
                managers coordinate every trade — demolition, structural, electrical, plumbing, HVAC, drywall,
                flooring, painting, and finish carpentry — so you have a single point of accountability from
                start to finish.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {[
                  'Complete home assessment & planning',
                  'Structural modifications & wall removals',
                  'Electrical panel & wiring upgrades',
                  'Plumbing system replacement',
                  'HVAC system upgrades',
                  'Kitchen & bathroom remodeling',
                  'Flooring, painting & finish work',
                  'Permit management & inspections',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Whole-Home Renovation Process</h3>
              <div className="space-y-4 mb-10">
                {[
                  { step: '1', title: 'Home Assessment & Consultation', desc: 'We conduct a thorough assessment of your home\'s current condition — structure, electrical, plumbing, HVAC, roof — and discuss your goals, priorities, and budget.' },
                  { step: '2', title: 'Design, Planning & Estimating', desc: 'We develop a detailed renovation plan including architectural drawings (if needed), material selections, and a comprehensive line-item estimate. No surprises — every cost is documented upfront.' },
                  { step: '3', title: 'Permitting & Pre-Construction', desc: 'We pull all required building permits, schedule inspections, and coordinate any HOA approvals. Your project manager finalizes the construction schedule and prepares the site.' },
                  { step: '4', title: 'Demolition & Construction', desc: 'Our crews execute the renovation in a logical sequence — demolition, structural work, rough-ins (electrical, plumbing, HVAC), insulation, drywall, and finish work. Regular progress updates keep you informed.' },
                  { step: '5', title: 'Final Inspections & Walkthrough', desc: 'After passing all required inspections, we conduct a detailed walkthrough with you to review every room and ensure every detail meets your expectations before project closeout.' },
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Entire Home?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll assess your home, discuss your vision, and provide a detailed renovation plan.
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
