import React from 'react';
import Navbar from '../components/landing/Navbar';
import ProjectsSection from '../components/landing/ProjectsSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Projects() {
  const scrollToContact = () => {
    window.location.href = '/Contact';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Our Projects"
        path="/Projects"
        description="Browse our portfolio of custom homes, renovations, and commercial buildouts across Central Florida. See the quality craftsmanship of J&N StructureWorks."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <div className="pt-32">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}
