import React from 'react';
import Navbar from '../components/landing/Navbar';
import ServicesSection from '../components/landing/ServicesSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Services() {
  const scrollToContact = () => {
    window.location.href = '/Contact/';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Construction & Property Rehabilitation Orlando FL"
        path="/Services"
        description="Construction services in Central Florida, including custom homes, remodeling, steel brackets, custom gates and post-flood reconstruction."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
      <header className="bg-slate-900 pt-24 lg:pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-orange-400 font-semibold mb-3">Construction Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Construction & Property Rehabilitation in Central Florida</h1>
        </div>
      </header>
      <div>
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
