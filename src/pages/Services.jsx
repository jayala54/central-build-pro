import React from 'react';
import Navbar from '../components/landing/Navbar';
import ServicesSection from '../components/landing/ServicesSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Services() {
  const scrollToContact = () => {
    window.location.href = '/Contact/';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Residential Construction Services Orlando FL"
        path="/Services"
        description="Full-service general contractor in Orlando FL — custom home building, kitchen & bath remodeling, whole-home renovations, room additions, and commercial tenant buildouts. Licensed CBC1269175. Free estimates."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <header className="bg-slate-900 pt-24 lg:pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-orange-400 font-semibold mb-3">Residential Construction</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Residential Construction Services in Orlando & Central Florida</h1>
        </div>
      </header>
      <div>
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
