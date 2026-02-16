import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const scrollToContact = () => {
    window.location.href = '/Contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        path="/"
        description="J&N StructureWorks — Orlando's trusted custom home builder & general contractor. New home construction, renovations, kitchen & bath remodels in Orange, Seminole, Osceola & Lake counties. Call (321) 695-4964 for a free quote."
      />
      <Navbar onContactClick={scrollToContact} />
      <HeroSection onContactClick={scrollToContact} />
      <Footer />
    </div>
  );
}
