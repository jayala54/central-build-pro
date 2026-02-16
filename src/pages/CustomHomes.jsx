import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Home, CheckCircle, ChevronRight, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'How much does it cost to build a custom home in Central Florida?',
    a: 'Custom home construction in Central Florida typically ranges from $200 to $400+ per square foot depending on finishes, lot conditions, and design complexity. A 2,500 sq ft home may cost between $500,000 and $1,000,000+. We provide detailed estimates during our free consultation.',
  },
  {
    q: 'How long does it take to build a custom home in Orlando?',
    a: 'Most custom homes take 8 to 14 months from permit approval to final inspection. Factors like design complexity, weather, and material availability can affect the timeline. We keep you updated at every stage.',
  },
  {
    q: 'Do I need to own a lot before contacting you?',
    a: 'No. We offer pre-construction services including lot evaluation, feasibility analysis, and construction due diligence to help you find the right property before you buy.',
  },
  {
    q: 'Are you a licensed contractor in Florida?',
    a: 'Yes. J&N StructureWorks holds a Florida Certified Building Contractor license (CBC1269175) issued by the Florida Department of Business and Professional Regulation.',
  },
  {
    q: 'What areas do you build custom homes in?',
    a: 'We build custom homes throughout Central Florida including Orlando, Winter Park, Lake Mary, Kissimmee, Sanford, Oviedo, Clermont, Winter Garden, Windermere, and surrounding areas in Orange, Seminole, Osceola, and Lake counties.',
  },
];

export default function CustomHomes() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Custom Home Builder Orlando & Central Florida"
        path="/CustomHomes"
        description="Build your dream custom home in Orlando & Central Florida with J&N StructureWorks. Licensed CBC1269175. New home construction in Orange, Seminole, Osceola & Lake counties. Free consultation: (321) 695-4964."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Custom Home Building',
          provider: { '@type': 'GeneralContractor', name: 'J&N StructureWorks', url: 'https://j-nsw.com' },
          areaServed: ['Orlando, FL', 'Winter Park, FL', 'Lake Mary, FL', 'Kissimmee, FL', 'Central Florida'],
          description: 'Custom home construction services in Central Florida. From design to move-in, we handle every aspect of building your new home.',
          url: 'https://j-nsw.com/CustomHomes',
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero */}
      <div className="bg-slate-900 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Home className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Custom Home Building</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Custom Home Builder in Orlando & Central Florida
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mb-8">
              Build your dream home from the ground up with a Florida Certified Building Contractor.
              From lot evaluation to final walkthrough, J&N StructureWorks handles every detail of your new home construction.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Vision, Built to Last</h2>
              <p className="text-slate-600 mb-4">
                Building a custom home is one of the biggest investments you'll ever make. At J&N StructureWorks,
                we guide you through every step — from selecting the right lot and navigating permits to choosing
                finishes and passing final inspection. As a Florida Certified Building Contractor (CBC1269175),
                we ensure your home meets all Florida Building Code requirements while reflecting your unique style.
              </p>
              <p className="text-slate-600 mb-8">
                We serve homeowners, investors, and land buyers across Orange, Seminole, Osceola, and Lake counties.
                Whether you're building your forever home in Winter Park or an investment property in Kissimmee,
                we deliver code-compliant construction, realistic budgets, and clear communication from start to finish.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {[
                  'Pre-construction lot evaluation',
                  'Custom architectural design coordination',
                  'Permitting & inspections',
                  'Foundation & structural framing',
                  'Electrical, plumbing & HVAC',
                  'Interior & exterior finishes',
                  'Landscaping coordination',
                  'Final walkthrough & warranty',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Custom Home Building Process</h3>
              <div className="space-y-4 mb-10">
                {[
                  { step: '1', title: 'Consultation & Lot Evaluation', desc: 'We meet to discuss your vision, budget, and timeline. If you have a lot, we evaluate it for buildability. If not, we help you find the right one.' },
                  { step: '2', title: 'Design & Pre-Construction', desc: 'We coordinate with architects and engineers to create plans that match your lifestyle and meet Florida Building Code requirements.' },
                  { step: '3', title: 'Permitting & Approvals', desc: 'We handle all permit applications, HOA submittals, and regulatory approvals so you don\'t have to.' },
                  { step: '4', title: 'Construction', desc: 'From foundation to roof, we manage every trade and material delivery. You receive regular progress updates and site access.' },
                  { step: '5', title: 'Final Inspection & Move-In', desc: 'After passing all inspections, we do a detailed walkthrough with you and hand over the keys to your new home.' },
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
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Your Dream Home?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule a free consultation with J&N StructureWorks. We'll discuss your vision, budget, and timeline.
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
