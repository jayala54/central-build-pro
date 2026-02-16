import React from 'react';
import Navbar from '../components/landing/Navbar';
import AboutSection from '../components/landing/AboutSection';
import ServiceAreasSection from '../components/landing/ServiceAreasSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function About() {
  const scrollToContact = () => {
    window.location.href = '/Contact';
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Us"
        path="/About"
        description="Learn about J&N StructureWorks — a Florida Certified Building Contractor serving Central Florida since 2020 with 100+ completed projects across Orange, Seminole, Osceola, and Lake counties."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <div className="pt-32">
        <AboutSection />
        <ServiceAreasSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
}
