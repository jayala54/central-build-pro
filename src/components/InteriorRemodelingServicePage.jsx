import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Phone } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import RelatedServices from '@/components/RelatedServices';
import { Button } from '@/components/ui/button';

export default function InteriorRemodelingServicePage({ service }) {
  const goToContact = () => { window.location.href = '/Contact/'; };
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Residential Services', href: '/Services/' },
    { label: service.breadcrumb },
  ];

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.schemaName,
    serviceType: service.schemaName,
    url: `https://j-nsw.com${service.path}/`,
    areaServed: [
      { '@type': 'City', name: 'Orlando' },
      { '@type': 'AdministrativeArea', name: 'Central Florida' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={service.title}
        path={service.path}
        description={service.description}
        image={`https://j-nsw.com${service.image}`}
        imageAlt={service.imageAlt}
        breadcrumbs={breadcrumbs}
        jsonLd={serviceJsonLd}
        geoPlace="Orlando"
      />
      <Navbar onContactClick={goToContact} alwaysSolid />

      <header className="relative pt-20 lg:pt-32 min-h-[560px] flex items-end overflow-hidden bg-slate-900">
        <img
          src={service.image}
          alt={service.imageAlt}
          width="1200"
          height="900"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14 lg:pb-20">
          <Breadcrumbs items={breadcrumbs} className="mb-7 [&_*]:text-slate-200" />
          <p className="text-orange-400 font-semibold mb-3">Residential Remodeling</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl">{service.heading}</h1>
          <p className="text-lg text-slate-200 mt-5 max-w-3xl leading-relaxed">{service.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button asChild className="h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6">
              <Link to="/Contact/">Request an Estimate <ChevronRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" className="h-12 border-white text-white bg-white/10 hover:bg-white/20 px-6">
              <a href="tel:+13216954964"><Phone className="w-4 h-4 mr-2" /> (321) 695-4964</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-orange-600">Scope & Coordination</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-5">{service.scopeHeading}</h2>
              {service.body.map((paragraph) => (
                <p key={paragraph} className="text-slate-600 leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
            <div className="border-l-4 border-orange-500 bg-slate-50 p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Services may include</h2>
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase text-orange-600">Project Process</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-9">From site review to final walkthrough</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {service.process.map((step, index) => (
                <div key={step.title} className="border-t-2 border-slate-300 pt-5">
                  <span className="text-orange-600 font-bold">0{index + 1}</span>
                  <h3 className="font-bold text-slate-900 mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <FAQSection faqs={service.faqs} title={service.faqTitle} />
            <RelatedServices services={service.related} />
          </div>
        </section>

        <section className="bg-slate-900 py-14">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">Discuss your {service.ctaLabel} project</h2>
            <p className="text-slate-300 mt-3 mb-7">Share the property, plans or photos, intended scope, selections, budget range, and target schedule.</p>
            <Button asChild className="h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7">
              <Link to="/Contact/">Start Your Project <ChevronRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
