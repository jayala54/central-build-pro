import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ChevronRight, Phone, Ruler, SwatchBook, Warehouse } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';

const heroImage = '/images/services/metal-building-contractor-central-florida.webp';

const faqs = [
  {
    q: 'Do you provide turnkey metal building construction in Central Florida?',
    a: 'Yes. J&N StructureWorks can coordinate the contracted project from site and scope review through design-professional coordination, permitting, foundation work, building installation, required inspections, and closeout. The exact turnkey scope is documented in the proposal and depends on the property, intended use, utilities, and approved plans.',
  },
  {
    q: 'Can you include the concrete slab and foundation?',
    a: 'Yes. We can include the engineered concrete foundation and slab in the project scope. Slab thickness, footings, reinforcement, vapor barrier, equipment loads, and other details are established by the approved design for the building and site conditions.',
  },
  {
    q: 'What sizes and configurations are available?',
    a: 'Metal buildings can be planned in a broad range of footprints, heights, roof profiles, bay layouts, colors, doors, windows, and interior configurations. Final options depend on the intended use, manufacturer and engineering requirements, zoning, setbacks, access, and the permitting jurisdiction.',
  },
  {
    q: 'What types of metal buildings do you build?',
    a: 'Potential uses include commercial shops, warehouses, equipment storage, garages, workshops, agricultural buildings, and other approved residential or commercial accessory structures. We confirm that the proposed use is permitted before the project scope is finalized.',
  },
  {
    q: 'What information is helpful for a metal building estimate?',
    a: 'Share the property address or parcel ID, ownership or lease status, intended use, approximate width, length and eave height, preferred doors and windows, slab needs, utilities, plans or engineering already available, budget range, and target schedule.',
  },
];

const buildingUses = [
  ['Commercial shops', 'Flexible work and service buildings planned around vehicle access, equipment, storage, office, and utility needs.'],
  ['Warehouses and storage', 'Clear-span or multi-bay layouts configured for inventory, equipment, materials, and operational circulation.'],
  ['Garages and workshops', 'Detached garages, hobby shops, maintenance buildings, and workspaces with project-specific openings and interior needs.'],
  ['Agricultural buildings', 'Equipment, feed, and general-purpose agricultural structures where the proposed use is allowed by the property and jurisdiction.'],
  ['Accessory buildings', 'Residential or commercial accessory structures designed around setbacks, allowable use, height, and lot coverage requirements.'],
  ['Shell or finished interiors', 'Building-shell construction or a broader finish scope that may include partitions, insulation, electrical, plumbing, HVAC, and restrooms.'],
];

export default function MetalBuildings() {
  const goToContact = () => { window.location.href = '/Contact/?service=metal-building'; };
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Commercial Construction', href: '/Commercial/' },
    { label: 'Metal Buildings' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Metal Building Contractor Orlando FL"
        path="/MetalBuildings"
        geoPlace="Orlando"
        description="Turnkey metal building contractor serving Orlando and Central Florida. Custom configurations, permitting, installation and concrete slab construction."
        image={`https://j-nsw.com${heroImage}`}
        imageAlt="Representative metal building with roll-up door and concrete slab"
        preloadImage
        breadcrumbs={breadcrumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Turnkey Metal Building Construction',
            provider: { '@id': 'https://j-nsw.com/#business' },
            areaServed: ['Orlando, FL', 'Saint Cloud, FL', 'Kissimmee, FL', 'Central Florida'],
            serviceType: ['Metal building construction', 'Steel building installation', 'Concrete slabs and foundations', 'Metal garages', 'Metal workshops', 'Commercial metal buildings'],
            description: 'Turnkey metal building construction in Central Florida, including project coordination, permitting, concrete foundation and slab work, building installation, inspections, and closeout for the contracted scope.',
            url: 'https://j-nsw.com/MetalBuildings/',
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
        <section className="relative min-h-[620px] flex items-end overflow-hidden pt-24 lg:pt-32">
          <img
            src={heroImage}
            alt="Representative gray metal building with roll-up door on a concrete slab"
            width="1920"
            height="800"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14 lg:pb-20">
            <Breadcrumbs items={breadcrumbs} className="mb-8 [&_*]:text-white" />
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-orange-300 font-semibold mb-5">
                <Warehouse className="w-5 h-5" /> Permitted, Installed, and Project Managed
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Metal Building Contractor in Orlando & Central Florida</h1>
              <p className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-2xl">
                Turnkey metal building construction with customizable sizes, colors, roof styles, openings, and layouts, plus engineered concrete foundation and slab options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="h-12 px-7 bg-orange-500 hover:bg-orange-600 text-white">
                  <Link to="/Contact/?service=metal-building">Request a Metal Building Estimate <ChevronRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="h-12 px-7 border-white text-white bg-slate-950/40 hover:bg-slate-950/60">
                  <a href="tel:+13216954964"><Phone className="mr-2 w-4 h-4" /> (321) 695-4964</a>
                </Button>
              </div>
              <p className="text-xs text-white/75 mt-5">Representative image shown. Final design and selections are project-specific.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <h2 className="text-3xl font-bold text-slate-900">A complete path from property review to finished building</h2>
              <p>J&N StructureWorks provides metal building construction for property owners and businesses across Central Florida. We can coordinate the building package, design professionals, permitting, site preparation, engineered foundation and concrete slab, building installation, required inspections, and closeout included in the contracted scope.</p>
              <p>Metal construction offers substantial flexibility, but the right building starts with the property and intended use. Zoning, setbacks, lot coverage, access, drainage, utilities, wind design, fire and accessibility requirements, and soil or foundation conditions can all affect feasibility and price. We review these factors before finalizing the scope so the proposed building is connected to an approvable plan.</p>
              <p>Buildings can be configured in a broad range of dimensions, panel and trim colors, roof profiles, eave heights, framed openings, roll-up or sectional doors, personnel doors, windows, insulation packages, and interior layouts. Available selections are confirmed against the engineered building system and local requirements.</p>
            </div>
            <aside className="border border-slate-200 bg-slate-50 rounded-lg p-7">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Turnkey scope options</h2>
              <ul className="space-y-4">
                {[
                  'Property, zoning, and scope review',
                  'Design and engineering coordination',
                  'Permit and inspection coordination',
                  'Site preparation and layout',
                  'Engineered foundation and concrete slab',
                  'Metal building delivery and installation',
                  'Doors, windows, insulation, and accessories',
                  'Interior buildout and utility coordination',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Metal buildings configured around your use</h2>
            <p className="text-slate-600 max-w-3xl mb-9">The approved use, engineered design, site conditions, and jurisdiction determine the final building and construction scope.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildingUses.map(([title, description]) => (
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
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <Ruler className="w-8 h-8 text-orange-600 mb-4" />
                <h2 className="text-xl font-bold text-slate-900 mb-2">Size and layout</h2>
                <p className="text-slate-600">Footprint, eave height, bay spacing, clearances, framed openings, circulation, and future use are considered together.</p>
              </div>
              <div>
                <SwatchBook className="w-8 h-8 text-orange-600 mb-4" />
                <h2 className="text-xl font-bold text-slate-900 mb-2">Colors and finishes</h2>
                <p className="text-slate-600">Coordinate available wall, roof, and trim colors with doors, windows, insulation, liner panels, and interior finish needs.</p>
              </div>
              <div>
                <Building2 className="w-8 h-8 text-orange-600 mb-4" />
                <h2 className="text-xl font-bold text-slate-900 mb-2">Slab and site work</h2>
                <p className="text-slate-600">Plan the engineered foundation, slab, access, grading, drainage, utility penetrations, and equipment loads as one coordinated scope.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-7">Our metal building process</h2>
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ['1', 'Feasibility and scope', 'Review the property, parcel, proposed use, approximate dimensions, configuration, utilities, budget, and schedule.'],
                ['2', 'Design and pricing', 'Coordinate the building system and required design professionals, then define an estimate around the planned scope.'],
                ['3', 'Permitting and preparation', 'Submit the applicable permit documents and coordinate approved site, foundation, and slab preparation.'],
                ['4', 'Installation and closeout', 'Install the building and contracted improvements, coordinate required inspections, and complete project closeout.'],
              ].map(([step, title, description]) => (
                <li key={step} className="border-t-4 border-orange-500 bg-slate-50 p-6">
                  <span className="text-sm font-bold text-orange-600">STEP {step}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                </li>
              ))}
            </ol>

            <ServiceAreaLinks />
            <FAQSection faqs={faqs} title="Metal Building FAQs" />
            <RelatedServices services={[
              { label: 'Commercial General Contracting', href: '/Commercial/', description: 'Commercial project coordination from preconstruction through closeout.' },
              { label: 'Commercial Buildouts', href: '/CommercialBuildouts/', description: 'Interior construction for commercial and professional spaces.' },
              { label: 'Concrete and Site Scope', href: '/Contact/?service=metal-building', description: 'Discuss a metal building project that includes its engineered foundation and slab.' },
            ]} />
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Planning a metal building in Central Florida?</h2>
            <p className="text-slate-300 mb-7">Tell us the property or parcel ID, intended use, approximate dimensions, slab needs, preferred configuration, plans, budget, and target schedule.</p>
            <Button asChild className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white"><Link to="/Contact/?service=metal-building">Request a Metal Building Estimate</Link></Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
