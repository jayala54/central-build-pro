import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ChevronRight, Clock, MapPin, ShieldCheck, Wrench } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';

const SITE_URL = 'https://j-nsw.com';
const projectPath = '/commercial-remodel-kissimmee-taco-bell';
const canonicalProjectUrl = `${SITE_URL}${projectPath}/`;
const imageBase = '/images/projects/taco-bell-repipe';
const heroImage = `${imageBase}/finished-commercial-bathroom.webp`;

const gallery = [
  {
    src: `${imageBase}/finished-commercial-bathroom.webp`,
    alt: 'Finished commercial bathroom remodel for a Taco Bell in Kissimmee Florida',
    caption: 'Finished restroom with new tile, partitions, and fixtures',
  },
  {
    src: `${imageBase}/finished-restroom-stalls.webp`,
    alt: 'Completed restroom stalls after Taco Bell bathroom remodel in Kissimmee',
    caption: 'Completed restroom stalls and wall finishes',
  },
  {
    src: `${imageBase}/floor-patching-plumbing.webp`,
    alt: 'Floor patching and plumbing rough-in during commercial repipe',
    caption: 'Floor access and patching during repipe work',
  },
  {
    src: `${imageBase}/plumbing-rough-in.webp`,
    alt: 'Plumbing rough-in inside commercial restroom wall',
    caption: 'Plumbing rough-in before closing the walls',
  },
  {
    src: `${imageBase}/open-walls-plumbing-access.webp`,
    alt: 'Open walls exposing plumbing access for commercial bathroom repipe',
    caption: 'Wall access opened for plumbing replacement',
  },
  {
    src: `${imageBase}/bathroom-rebuild-progress.webp`,
    alt: 'Commercial bathroom rebuild progress after repipe work',
    caption: 'Restroom rebuild progress after rough-in',
  },
];

const scopeItems = [
  'Commercial bathroom demolition and preparation',
  'Wall and floor access for plumbing replacement',
  'Repipe coordination from rough-in through close-up',
  'Bathroom rebuild with tile, fixtures, and partitions',
  'Finish work, punch list, and project closeout',
  'Single point of contact from start to finish',
];

const faqs = [
  {
    q: 'Can J&N StructureWorks handle restaurant bathroom remodels in Kissimmee?',
    a: 'Yes. J&N StructureWorks handles commercial bathroom remodels, repipes, and renovation work for restaurants and business spaces across Kissimmee and Central Florida.',
  },
  {
    q: 'Do commercial bathroom repipes usually require permits?',
    a: 'Many commercial plumbing and restroom remodel projects require permits and inspections, especially when fixtures, walls, floors, or plumbing lines are being changed. We help coordinate the construction process from start to finish.',
  },
  {
    q: 'Can you manage the full project instead of only one trade?',
    a: 'Yes. For this Taco Bell project, J&N StructureWorks handled the work from beginning to end, including demolition, plumbing access, rebuild, finishes, and final punch-out.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: 'Taco Bell Commercial Remodel, Repipe, and Bathroom Remodel in Kissimmee, FL',
    description:
      'Commercial repipe and bathroom remodel for a Taco Bell restaurant in Kissimmee, Florida, completed by J&N StructureWorks from beginning to end.',
    url: canonicalProjectUrl,
    image: `${SITE_URL}${heroImage}`,
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kissimmee',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    provider: {
      '@type': 'GeneralContractor',
      name: 'J&N StructureWorks',
      telephone: '+1-321-219-9007',
      url: SITE_URL,
    },
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
];

export default function TacoBellRepipeKissimmee() {
  const scrollToContact = () => {
    window.location.href = '/Contact';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Commercial Remodel Kissimmee FL | Taco Bell Repipe & Bathroom Remodel"
        path={projectPath}
        description="Commercial remodel in Kissimmee, FL for a Taco Bell restaurant, including repipe work, bathroom remodeling, finishes, and full project coordination by J&N StructureWorks."
        image={`${SITE_URL}${heroImage}`}
        imageAlt="Finished Taco Bell commercial bathroom remodel in Kissimmee Florida"
        jsonLd={jsonLd}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      <main>
        <section className="relative pt-24 md:pt-36 pb-16 overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Finished Taco Bell commercial bathroom remodel in Kissimmee Florida"
              className="w-full h-full object-cover opacity-45"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/45" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-400/20 mb-6">
                <Building2 className="w-4 h-4 text-orange-300" />
                <span className="text-orange-200 text-sm font-medium">Commercial Project Case Study</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Taco Bell Commercial Remodel, Repipe & Bathroom Remodel in Kissimmee, FL
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                J&N StructureWorks handled this commercial remodel, repipe, and restroom remodel from beginning
                to end, coordinating the plumbing access, rebuild, finishes, and final punch-out for
                a Taco Bell restaurant in Kissimmee.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/Contact">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 px-6">
                    Request a Similar Quote
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/CommercialRenovations">
                  <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 h-12 px-6">
                    Commercial Renovations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: 'Location', value: 'Kissimmee, FL' },
              { icon: Wrench, label: 'Project Type', value: 'Commercial Repipe' },
              { icon: Building2, label: 'Space', value: 'Restaurant Restroom' },
              { icon: ShieldCheck, label: 'License', value: 'CBC1269175' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="font-semibold text-slate-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_0.85fr] gap-12 items-start">
            <div>
              <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">The Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                A Full-Service Commercial Remodel With Repipe and Bathroom Renovation Work
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  This Kissimmee Taco Bell commercial remodel required more than a surface-level restroom update.
                  The walls and floors had to be opened so the plumbing could be accessed, replaced,
                  and prepared for the bathroom rebuild.
                </p>
                <p>
                  J&N StructureWorks managed the project from the early demolition and repipe access
                  through the rebuild, finish installation, and final punch list. The goal was to
                  restore a clean, durable, commercial restroom that could stand up to daily restaurant
                  use while keeping the work coordinated under one contractor.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {scopeItems.map((item) => (
                  <div key={item} className="flex gap-3 bg-white border border-slate-100 rounded-lg p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-slate-900 text-white rounded-xl p-8 shadow-xl">
              <Clock className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Why This Project Matters</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Restaurant remodels need tight coordination. Plumbing, walls, floors, fixtures,
                partitions, and final finishes all affect whether the space can return to service
                cleanly and safely.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This case study shows the kind of behind-the-wall commercial work that customers do
                not always see, but every business owner depends on.
              </p>
            </aside>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">Project Photos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
                From Open Walls to Finished Restroom
              </h2>
              <p className="text-slate-600">
                The gallery shows the project moving from plumbing access and rough-in work to the
                finished commercial restroom.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                >
                  <div className="overflow-hidden rounded-xl bg-slate-200 aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-sm text-slate-500 mt-3">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">Local Commercial Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              Commercial Remodeling, Repipe, and Bathroom Renovation in Kissimmee
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                J&N StructureWorks provides commercial remodeling, commercial renovations, tenant improvements,
                restaurant remodels, bathroom remodels, and repipe coordination across Kissimmee, Orlando, and
                Central Florida.
              </p>
              <p>
                For business owners, the right contractor needs to coordinate the full construction
                process, not just one piece of the job. Our team helps move projects from planning
                and demolition through rough-in, finishes, and closeout.
              </p>
            </div>

            <FAQSection faqs={faqs} title="Commercial Repipe & Bathroom Remodel FAQs" />
          </div>
        </section>

        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Planning a Commercial Bathroom Remodel or Repipe?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Call J&N StructureWorks at (321) 219-9007 or request a quote for your commercial
              renovation project in Kissimmee or Central Florida.
            </p>
            <Link to="/Contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 px-8">
                Get a Free Quote
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
