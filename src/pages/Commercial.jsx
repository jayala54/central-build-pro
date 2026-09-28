import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ChevronRight, Phone } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';

const services = [
  ['Tenant buildouts', 'Interior construction for leased spaces, including partitions, building systems, accessibility work, finishes, inspections, and closeout.'],
  ['Retail and restaurant construction', 'Customer-facing spaces coordinated around approved plans, operational needs, specialized systems, and applicable agency reviews.'],
  ['Office and professional spaces', 'Workplaces planned around circulation, privacy, accessibility, data, lighting, plumbing, and mechanical requirements.'],
  ['Commercial renovations', 'Selective demolition, reconfiguration, repairs, system updates, accessibility improvements, and new finishes in existing properties.'],
  ['Commercial demolition', 'Selective removal and site preparation coordinated with the approved redevelopment or renovation scope.'],
  ['Permitting and inspections', 'Permit-document coordination, required inspections, correction items, and construction closeout for the contracted scope.'],
];

const faqs = [
  {
    q: 'What types of commercial construction does J&N StructureWorks perform?',
    a: 'Our commercial work includes tenant improvements, retail and restaurant buildouts, office and professional spaces, commercial renovations, selective demolition, and the permitting and inspection coordination associated with the contracted construction scope.',
  },
  {
    q: 'Do commercial projects require an architect or engineer?',
    a: 'Many commercial projects require signed and sealed plans from licensed design professionals. The requirements depend on the property, occupancy, jurisdiction, and scope. We review available documents and coordinate with the project team before construction begins.',
  },
  {
    q: 'Can you coordinate work in an occupied commercial property?',
    a: 'We can evaluate phasing, access, safety, dust control, and scheduling needs during preconstruction. Whether a business can remain open depends on the approved scope, inspections, utility interruptions, and site conditions.',
  },
  {
    q: 'Where do you provide commercial construction services?',
    a: 'J&N StructureWorks serves Orlando and surrounding Central Florida communities, including locations in Orange, Osceola, Seminole, and Lake counties. Project availability depends on scope and schedule.',
  },
];

export default function Commercial() {
  const goToContact = () => { window.location.href = '/Contact/'; };
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Commercial Construction' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Commercial General Contractor Orlando FL"
        path="/Commercial"
        geoPlace="Orlando"
        description="Commercial general contractor serving Orlando and Central Florida with tenant buildouts, renovations, retail, restaurant and office construction."
        breadcrumbs={breadcrumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Commercial General Contracting',
            provider: { '@id': 'https://j-nsw.com/#business' },
            areaServed: ['Orlando, FL', 'Saint Cloud, FL', 'Kissimmee, FL', 'Central Florida'],
            serviceType: ['Commercial general contracting', 'Tenant buildouts', 'Commercial renovations', 'Retail buildouts', 'Restaurant buildouts', 'Office buildouts', 'Commercial demolition'],
            url: 'https://j-nsw.com/Commercial/',
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
                <Building2 className="w-5 h-5" /> Commercial Construction
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial General Contractor in Orlando & Central Florida</h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                J&N StructureWorks coordinates commercial construction from preconstruction and permitting through field work, inspections, and closeout. Our work includes tenant buildouts, renovations, retail, restaurant, office, and professional spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="h-12 px-7 bg-orange-500 hover:bg-orange-600 text-white"><Link to="/Contact/">Request an Estimate <ChevronRight className="ml-2 w-4 h-4" /></Link></Button>
                <Button asChild variant="outline" className="h-12 px-7 border-white text-white bg-white/10 hover:bg-white/20"><a href="tel:+13212199007"><Phone className="mr-2 w-4 h-4" /> (321) 219-9007</a></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <h2 className="text-3xl font-bold text-slate-900">Commercial construction with one accountable contractor</h2>
              <p>Commercial work has more stakeholders than a typical residential project. Owners, tenants, landlords, property managers, design professionals, trade contractors, and reviewing agencies may all have requirements that affect the plans and construction sequence. We organize those requirements around the approved scope and keep communication connected to the work in the field.</p>
              <p>Before construction, we review the available drawings and existing conditions, define the contracted scope, identify permitting and long-lead considerations, and establish a practical sequence. During construction, we coordinate trades, inspections, access, safety, and documented changes. Closeout focuses on correction items, final inspections, and the records required for the completed scope.</p>
              <p>The exact process depends on the property and intended use. A retail refresh, office reconfiguration, restaurant buildout, and occupied renovation can involve very different design, utility, accessibility, fire, health, and occupancy requirements. Those project-specific requirements should be confirmed before pricing and scheduling are finalized.</p>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-7 self-start">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Commercial project coordination</h2>
              <ul className="space-y-4">
                {['Existing-condition and scope review', 'Design-team and trade coordination', 'Permitting and required inspections', 'Schedule and site-access planning', 'Construction and documented changes', 'Correction items and project closeout'].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Commercial construction services</h2>
            <p className="text-slate-600 max-w-3xl mb-9">The approved plans, existing conditions, jurisdiction, and intended occupancy determine the final scope for each property.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(([title, description]) => (
                <article key={title} className="border border-slate-200 bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-5">A completed commercial remodel in Kissimmee</h2>
            <p className="text-slate-600 max-w-3xl mb-6">Our Taco Bell project involved a commercial repipe and bathroom remodel, with coordination from demolition and plumbing access through reconstruction and finished restrooms.</p>
            <Link to="/commercial-remodel-kissimmee-taco-bell/" className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700">View the commercial remodel case study <ChevronRight className="w-4 h-4" /></Link>

            <RelatedServices services={[
              { label: 'Tenant Buildouts', href: '/CommercialBuildouts/', description: 'Interior construction for leased retail, restaurant, office, and professional spaces.' },
              { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Modernize or reconfigure an existing commercial property.' },
              { label: 'Kissimmee Project', href: '/commercial-remodel-kissimmee-taco-bell/', description: 'Commercial repipe and bathroom remodel case study.' },
            ]} />
            <ServiceAreaLinks />
            <FAQSection faqs={faqs} title="Commercial Construction FAQs" />
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Planning a commercial project?</h2>
            <p className="text-slate-300 mb-7">Tell us about the property, intended use, available plans, scope, and target schedule.</p>
            <Button asChild className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white"><Link to="/Contact/">Request a Commercial Estimate</Link></Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
