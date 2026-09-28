import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import ProjectsSection from '@/components/landing/ProjectsSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTABanner from '@/components/landing/CTABanner';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const scrollToContact = () => {
    window.location.href = '/Contact/';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="General Contractor Orlando FL"
        path="/"
        description="J&N StructureWorks is a Florida Certified Building Contractor serving Orlando and Central Florida. Custom homes, renovations, additions and commercial construction."
        geoPlace="Orlando"
        preloadImage
      />
      <Navbar onContactClick={scrollToContact} />
      <HeroSection onContactClick={scrollToContact} />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
