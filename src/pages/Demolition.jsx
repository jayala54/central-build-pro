import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Construction, Phone } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedServices from '@/components/RelatedServices';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';

const SITE_URL = 'https://j-nsw.com';

const demolitionServices = [
  ['Selective demolition', 'Targeted removal of walls, ceilings, finishes, fixtures, and building components while protecting work that will remain.'],
  ['Structural demolition', 'Removal of approved structural elements or complete structures according to the project documents and site conditions.'],
  ['Commercial interior demolition', 'Preparation of retail, restaurant, office, and other commercial interiors for renovation or tenant improvements.'],
  ['Debris removal', 'Collection and removal of demolition debris as part of the contracted scope, with a clean work area prepared for the next phase.'],
  ['Site preparation', 'Coordination of access, protection, removal limits, and turnover requirements before reconstruction or redevelopment begins.'],
  ['Permit and inspection coordination', 'Management of applicable demolition permits and required inspections for the contracted construction scope.'],
];

const processSteps = [
  ['Site review', 'We review the property, available plans, access, existing conditions, removal limits, and the work that must remain protected.'],
  ['Scope and planning', 'We define the demolition scope, sequencing, debris handling, utility coordination, and requirements for the next construction phase.'],
  ['Permitting and preparation', 'Required permits and notices are coordinated, utilities are addressed as applicable, and the work area is secured before removal begins.'],
  ['Controlled demolition', 'The approved scope is completed in planned stages with attention to site access, adjacent construction, and jobsite safety.'],
  ['Cleanup and turnover', 'Debris is removed and the work area is prepared for the renovation, buildout, reconstruction, or site work that follows.'],
];

const projectImages = [
  {
    src: '/images/projects/demolition/active-commercial-demolition.webp',
    alt: 'Equipment removing roof framing during a commercial demolition project',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/projects/demolition/structural-demolition-progress.webp',
    alt: 'Commercial structure during roof and framing demolition',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/projects/demolition/selective-demolition-progress.webp',
    alt: 'Commercial demolition area with exterior walls retained',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/projects/demolition/cleared-demolition-site.webp',
    alt: 'Cleared concrete site after demolition and debris removal',
    width: 1200,
    height: 1600,
  },
];

const faqs = [
  {
    q: 'Do I need a permit for demolition in Orlando or Central Florida?',
    a: 'Permit requirements depend on the jurisdiction, property, structure, and scope. Structural or complete-building demolition commonly requires a permit, while some limited interior removal may be reviewed as part of a renovation permit. We identify applicable requirements and coordinate permits for our contracted scope.',
  },
  {
    q: 'What is selective demolition?',
    a: 'Selective demolition removes only identified building components while preserving the portions that will remain. It is commonly used before commercial buildouts, renovations, additions, and repairs where walls, finishes, fixtures, or systems need to be removed without clearing the entire structure.',
  },
  {
    q: 'Can you handle demolition before a commercial renovation or buildout?',
    a: 'Yes. We can coordinate demolition as the first phase of a larger commercial renovation or tenant buildout, allowing removal limits, permitting, site protection, and turnover conditions to align with the construction work that follows.',
  },
  {
    q: 'Does demolition include debris removal and site cleanup?',
    a: 'Debris removal and cleanup can be included in the project scope. The estimate identifies what will be removed, how the work area will be left, and any site preparation required for the next phase.',
  },
];

export default function Demolition() {
  const goToContact = () => { window.location.href = '/Contact/'; };
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Commercial Construction', href: '/Commercial/' },
    { label: 'Demolition' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Demolition Contractor Orlando FL"
        path="/Demolition"
        geoPlace="Orlando"
        description="Demolition contractor serving Orlando and Central Florida. Selective, structural and commercial demolition with permits, debris removal and site preparation."
        image={`${SITE_URL}${projectImages[0].src}`}
        imageAlt={projectImages[0].alt}
        breadcrumbs={breadcrumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Demolition Services',
            serviceType: ['Selective demolition', 'Structural demolition', 'Commercial interior demolition', 'Debris removal', 'Site preparation'],
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: ['Orlando, FL', 'Kissimmee, FL', 'Saint Cloud, FL', 'Winter Park, FL', 'Central Florida'],
            description: 'Selective, structural, and commercial demolition services coordinated with permitting, debris removal, and site preparation.',
            image: projectImages.map((item) => `${SITE_URL}${item.src}`),
            url: `${SITE_URL}/Demolition/`,
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
        <section className="bg-slate-900 pt-24 md:pt-40 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} dark />
            <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 items-center mt-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                  <Construction className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 text-sm font-medium">Demolition Services</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Demolition Contractor in Orlando & Central Florida</h1>
                <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
                  Selective, structural, and commercial demolition coordinated from site review and permitting through debris removal and preparation for the next phase.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                    <Link to="/Contact/">Request a Demolition Estimate <ChevronRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-8 border-white text-white bg-white/10 hover:bg-white/20">
                    <a href="tel:+13216954964"><Phone className="w-4 h-4 mr-2" /> (321) 695-4964</a>
                  </Button>
                </div>
              </div>
              <img
                src={projectImages[0].src}
                alt={projectImages[0].alt}
                width={projectImages[0].width}
                height={projectImages[0].height}
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.3fr_0.7fr] gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Planned demolition for the work that comes next</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Demolition is more than tearing materials out. A successful project starts with clear removal limits, protected areas, coordinated utilities, site access, debris handling, and a turnover condition that supports the planned renovation or redevelopment.
              </p>
              <p className="text-slate-600 leading-relaxed">
                J&N StructureWorks provides demolition as a standalone contracted service or as the opening phase of a commercial renovation, tenant improvement, or reconstruction project. We review the available project information and existing conditions before defining the scope, schedule, and permit requirements.
              </p>
            </div>
            <aside className="bg-slate-50 border border-slate-200 rounded-lg p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Project coordination</h2>
              <ul className="space-y-3 text-slate-600">
                {['Florida Certified Building Contractor CBC1269175', 'Defined demolition scope and removal limits', 'Permit and inspection coordination', 'Debris removal and site cleanup', 'Preparation for renovation or redevelopment'].map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Demolition services</h2>
            <p className="text-slate-600 max-w-3xl mb-9">The final scope depends on the property, approved plans, jurisdiction, existing conditions, and intended use after demolition.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demolitionServices.map(([title, description]) => (
                <article key={title} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Demolition project photos</h2>
              <p className="text-slate-600">Active removal, controlled structural demolition, cleanup, and the cleared site ready for its next phase.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {projectImages.map((image, index) => (
                <figure key={image.src} className="overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our demolition process</h2>
            <ol className="space-y-4">
              {processSteps.map(([title, description], index) => (
                <li key={title} className="flex gap-4 bg-white border border-slate-200 rounded-lg p-5">
                  <span className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center shrink-0">{index + 1}</span>
                  <div><h3 className="font-bold text-slate-900 mb-1">{title}</h3><p className="text-slate-600">{description}</p></div>
                </li>
              ))}
            </ol>

            <FAQSection faqs={faqs} title="Demolition FAQs" />
            <RelatedServices services={[
              { label: 'Commercial Construction', href: '/Commercial/', description: 'Commercial project coordination from planning through closeout.' },
              { label: 'Commercial Renovations', href: '/CommercialRenovations/', description: 'Reconfigure and update an existing commercial property.' },
              { label: 'Tenant Buildouts', href: '/CommercialBuildouts/', description: 'Interior construction for retail, restaurant, office, and professional spaces.' },
            ]} />
            <ServiceAreaLinks />
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">Planning a demolition project?</h2>
            <p className="text-slate-300 mb-7">Tell us about the property, the materials or structure to be removed, available plans, and what will follow the demolition.</p>
            <Button asChild className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white"><Link to="/Contact/">Request a Demolition Estimate</Link></Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
