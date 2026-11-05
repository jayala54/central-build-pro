import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Phone } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import RelatedServices from '@/components/RelatedServices';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import { Button } from '@/components/ui/button';

const SITE_URL = 'https://j-nsw.com';

export default function ServiceLandingPage({ service }) {
  const Icon = service.icon;
  const contactUrl = `/Contact/?service=${service.formService}`;
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: service.parentLabel, href: service.parentHref },
    { label: service.breadcrumb },
  ];
  const goToContact = () => { window.location.href = contactUrl; };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={service.title}
        path={service.path}
        geoPlace="Orlando"
        description={service.description}
        image={`${SITE_URL}${service.image}`}
        imageAlt={service.imageAlt}
        preloadImage
        breadcrumbs={breadcrumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.schemaName,
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: ['Orlando, FL', 'Kissimmee, FL', 'Saint Cloud, FL', 'Winter Park, FL', 'Lake Mary, FL', 'Central Florida'],
            serviceType: service.serviceTypes,
            description: service.description,
            image: `${SITE_URL}${service.image}`,
            url: `${SITE_URL}${service.path}/`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          },
        ]}
      />
      <Navbar onContactClick={goToContact} alwaysSolid />

      <main>
        <section className="relative min-h-[590px] flex items-end overflow-hidden pt-24 lg:pt-32">
          <img
            src={service.image}
            alt={service.imageAlt}
            width={service.imageWidth || 1752}
            height={service.imageHeight || 897}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14 lg:pb-20">
            <Breadcrumbs items={breadcrumbs} className="mb-8 [&_*]:text-white" />
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-orange-300 font-semibold mb-5">
                <Icon className="w-5 h-5" /> {service.eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.heading}</h1>
              <p className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-2xl">{service.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="h-12 px-7 bg-orange-500 hover:bg-orange-600 text-white">
                  <Link to={contactUrl}>{service.ctaLabel} <ChevronRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="h-12 px-7 border-white text-white bg-slate-950/40 hover:bg-slate-950/60">
                  <a href="tel:+13216954964"><Phone className="mr-2 w-4 h-4" /> (321) 695-4964</a>
                </Button>
              </div>
              {service.representativeImage && (
                <p className="text-xs text-white/75 mt-5">Representative image shown. Final design and selections are project-specific.</p>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <h2 className="text-3xl font-bold text-slate-900">{service.scopeHeading}</h2>
              {service.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <aside className="border border-slate-200 bg-slate-50 rounded-lg p-7">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">{service.includesHeading || 'Scope options'}</h2>
              <ul className="space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.applicationsHeading}</h2>
            <p className="text-slate-600 max-w-3xl mb-9">{service.applicationsIntro}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.applications.map(([title, description]) => (
                <article key={title} className="border border-slate-200 bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{service.processHeading || 'Our process'}</h2>
            <ol className="grid md:grid-cols-2 gap-5">
              {service.process.map(([title, description], index) => (
                <li key={title} className="flex gap-4 border border-slate-200 bg-slate-50 rounded-lg p-5">
                  <span className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center shrink-0">{index + 1}</span>
                  <div><h3 className="font-bold text-slate-900 mb-1">{title}</h3><p className="text-slate-600 text-sm leading-relaxed">{description}</p></div>
                </li>
              ))}
            </ol>

            <FAQSection faqs={service.faqs} title={service.faqTitle} />
            <RelatedServices services={service.related} />
            <ServiceAreaLinks />
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-4">{service.finalHeading}</h2>
            <p className="text-slate-300 mb-7">{service.finalText}</p>
            <Button asChild className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white"><Link to={contactUrl}>{service.ctaLabel}</Link></Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
