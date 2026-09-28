import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { Building2, CheckCircle, ChevronRight, Home, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'Does construction in Saint Cloud require permits?',
    a: 'Most structural, electrical, plumbing, mechanical, addition, conversion, and commercial improvement work requires permits. The reviewing authority depends on whether the property is inside the City of St. Cloud or in unincorporated Osceola County. J&N StructureWorks confirms the jurisdiction and coordinates the permits and required inspections for the contracted scope.',
  },
  {
    q: 'Do you build custom homes in Saint Cloud?',
    a: 'Yes. J&N StructureWorks provides custom home and new construction services in Saint Cloud and surrounding Osceola County, including preconstruction coordination, permitting, construction management, inspections, and closeout.',
  },
  {
    q: 'Can you handle a commercial tenant buildout in Saint Cloud?',
    a: 'Yes. We provide commercial general contracting, tenant improvements, retail and restaurant buildouts, office buildouts, commercial renovations, selective demolition, and permit and inspection coordination for qualifying projects.',
  },
  {
    q: 'What should I prepare before requesting an estimate?',
    a: 'Share the property address, intended use, approximate scope, target schedule, available plans or photos, and any landlord or association requirements. For commercial projects, the lease work letter and existing plan set are also helpful.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Service Areas', href: '/ServiceAreaKissimmee/' },
  { label: 'Saint Cloud' },
];

export default function ServiceAreaSaintCloud() {
  const goToContact = () => { window.location.href = '/Contact/'; };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="General Contractor Saint Cloud FL"
        path="/ServiceAreaSaintCloud"
        description="Florida Certified Building Contractor serving Saint Cloud, FL. Custom homes, renovations, additions, commercial construction and tenant buildouts."
        breadcrumbs={breadcrumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'General Contractor Services in Saint Cloud, Florida',
            provider: { '@id': 'https://j-nsw.com/#business' },
            areaServed: { '@type': 'City', name: 'Saint Cloud', containedInPlace: { '@type': 'State', name: 'Florida' } },
            serviceType: ['Residential construction', 'Custom homes', 'Home renovations', 'Home additions', 'Commercial construction', 'Tenant buildouts'],
            url: 'https://j-nsw.com/ServiceAreaSaintCloud/',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          },
        ]}
      />
      <Navbar onContactClick={goToContact} alwaysSolid />

      <main>
        <section className="bg-slate-900 pt-24 lg:pt-40 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} className="mb-8 [&_*]:text-slate-300" />
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-orange-400 font-medium mb-5">
                <Building2 className="w-5 h-5" /> Osceola County Construction
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">General Contractor in Saint Cloud, Florida</h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                J&N StructureWorks provides residential and commercial construction in Saint Cloud and surrounding Osceola County. We coordinate the work from planning and permits through construction, inspections, and closeout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/Contact/"><Button className="h-12 px-7 bg-orange-500 hover:bg-orange-600 text-white">Request an Estimate <ChevronRight className="ml-2 w-4 h-4" /></Button></Link>
                <a href="tel:+13212199007"><Button variant="outline" className="h-12 px-7 border-white text-white bg-white/10 hover:bg-white/20"><Phone className="mr-2 w-4 h-4" /> (321) 219-9007</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-orange-600 text-sm font-semibold uppercase mb-3">Residential Construction</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Homes, renovations, and additions in Saint Cloud</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Residential projects in a fast-growing area need careful preconstruction planning. Lot conditions, utilities, drainage, setbacks, association requirements, and the applicable permitting jurisdiction can all shape the scope before construction begins.</p>
                <p>Our residential work includes custom homes and new construction, whole-home renovations, kitchen and bathroom remodeling, home additions, garage conversions, and outdoor additions such as porches and lanais when they fit the property and approved plans.</p>
                <p>For additions and conversions, we coordinate the connection between new and existing construction, including structural work and the electrical, plumbing, mechanical, insulation, and finish scopes required by the design.</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-7">
              <Home className="w-8 h-8 text-orange-600 mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Residential services</h3>
              <ul className="space-y-3">
                {['Custom homes and new construction', 'Whole-home renovations', 'Home and room additions', 'Kitchen and bathroom remodeling', 'Garage conversions', 'Porches, lanais, and outdoor additions'].map((item) => <li key={item} className="flex gap-3 text-slate-600"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-slate-200 rounded-lg p-7 lg:order-1 order-2">
              <Building2 className="w-8 h-8 text-orange-600 mb-5" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Commercial services</h3>
              <ul className="space-y-3">
                {['Commercial general contracting', 'Tenant buildouts and improvements', 'Retail and restaurant buildouts', 'Office and professional spaces', 'Commercial renovations', 'Selective demolition and redevelopment'].map((item) => <li key={item} className="flex gap-3 text-slate-600"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />{item}</li>)}
              </ul>
            </div>
            <div className="lg:order-2 order-1">
              <p className="text-orange-600 text-sm font-semibold uppercase mb-3">Commercial Construction</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Commercial buildouts and renovations</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Commercial construction has to satisfy the plans, landlord requirements, accessibility standards, building systems, and the inspections tied to the intended occupancy. We coordinate those moving parts with owners, tenants, design professionals, property managers, and trade partners.</p>
                <p>J&N StructureWorks handles tenant improvements, retail and restaurant buildouts, office and professional spaces, commercial renovations, and selective demolition. Scope may include partitions, ceilings, finishes, restrooms, plumbing, electrical, HVAC coordination, accessibility work, and inspection closeout.</p>
                <p>Our completed commercial repipe and bathroom remodel in nearby Kissimmee shows how we manage demolition, plumbing access, rough-in, reconstruction, finishes, and the return of an operating commercial space.</p>
                <Link to="/commercial-remodel-kissimmee-taco-bell/" className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700">View the Kissimmee commercial remodel case study <ChevronRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-5">Saint Cloud and Osceola County permitting</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>The property address determines the permitting authority. Work inside the City of St. Cloud may be reviewed by the city, while property outside city limits may fall under Osceola County. The project type determines which building, electrical, plumbing, mechanical, fire, health, zoning, or right-of-way reviews apply.</p>
              <p>Before construction, we confirm the jurisdiction and contracted scope, coordinate with the project design team when plans are required, submit permit documentation, schedule required inspections, and address closeout items. Commercial occupancy or use changes can require additional review beyond an interior finish update.</p>
            </div>

            <RelatedServices services={[
              { label: 'Custom Homes', href: '/CustomHomes/', description: 'Ground-up residential construction across Central Florida.' },
              { label: 'Home Additions', href: '/RoomAdditions/', description: 'Add living space or convert an existing garage.' },
              { label: 'Commercial Construction', href: '/CommercialBuildouts/', description: 'Tenant improvements, retail, restaurant, and office buildouts.' },
            ]} />

            <FAQSection faqs={faqs} title="Saint Cloud Construction FAQs" />
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Planning a project in Saint Cloud?</h2>
            <p className="text-slate-300 mb-7">Tell us about the property, scope, and target schedule. We’ll help you define the next practical step.</p>
            <Link to="/Contact/"><Button className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white">Request an Estimate</Button></Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
