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
        description="J&N StructureWorks is a Florida Certified Building Contractor with 15+ years of experience. Custom homes, renovations, and commercial buildouts in Orange, Seminole, Osceola, and Lake counties."
      />
      <Navbar onContactClick={scrollToContact} />
      <HeroSection onContactClick={scrollToContact} />
      <Footer />
    </div>
  );
}
