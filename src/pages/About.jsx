import React from 'react';
import Navbar from '../components/landing/Navbar';
import AboutSection from '../components/landing/AboutSection';
import ServiceAreasSection from '../components/landing/ServiceAreasSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function About() {
  const scrollToContact = () => {
    window.location.href = '/Contact/';
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About J&N StructureWorks — Licensed Florida Contractor"
        path="/About"
        description="Meet J&N StructureWorks, a Florida Certified Building Contractor (CBC1269175) with 10+ years of construction experience serving Central Florida."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <header className="bg-slate-900 pt-24 lg:pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-orange-400 font-semibold mb-3">J&N StructureWorks, LLC</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Florida Certified Building Contractor Serving Central Florida</h1>
        </div>
      </header>
      <div>
        <AboutSection />
        <ServiceAreasSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
}
