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
        title="About J&N StructureWorks — Licensed General Contractor Orlando FL"
        path="/About"
        description="Meet J&N StructureWorks — Florida Certified Building Contractor (CBC1269175) with 100+ completed projects across Orlando, Winter Park, Lake Mary, Kissimmee & Central Florida since 2020."
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
