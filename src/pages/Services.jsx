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
        title="Our Services"
        path="/Services"
        description="Custom home building, whole-home renovations, kitchen & bath remodels, room additions, and commercial tenant buildouts in Central Florida. Licensed and insured."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <div className="pt-32">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
