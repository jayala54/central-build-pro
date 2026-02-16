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
        title="Project Portfolio — Custom Homes & Renovations Orlando FL"
        path="/Projects"
        description="View completed custom homes, kitchen & bath remodels, renovations, and commercial buildouts by J&N StructureWorks across Orlando & Central Florida. See our craftsmanship."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <div className="pt-20 md:pt-32">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}
