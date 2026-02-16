import React from 'react';
import Navbar from '../components/landing/Navbar';
import ServicesSection from '../components/landing/ServicesSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Services() {
  const scrollToContact = () => {
    window.location.href = '/Contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Custom Home Building & Renovation Services Orlando FL"
        path="/Services"
        description="Full-service general contractor in Orlando FL — custom home building, kitchen & bath remodeling, whole-home renovations, room additions, and commercial tenant buildouts. Licensed CBC1269175. Free estimates."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <div className="pt-32">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
