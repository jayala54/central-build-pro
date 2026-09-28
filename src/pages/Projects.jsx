import React from 'react';
import Navbar from '../components/landing/Navbar';
import ProjectsSection from '../components/landing/ProjectsSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Projects() {
  const scrollToContact = () => {
    window.location.href = '/Contact/';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Project Portfolio — Custom Homes & Renovations Orlando FL"
        path="/Projects"
        description="View completed custom homes, kitchen & bath remodels, renovations, and commercial buildouts by J&N StructureWorks across Orlando & Central Florida. See our craftsmanship."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <header className="bg-slate-900 pt-24 lg:pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-orange-400 font-semibold mb-3">Project Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Residential and Commercial Construction Projects</h1>
        </div>
      </header>
      <div>
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}
