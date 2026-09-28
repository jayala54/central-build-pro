import React from 'react';
import Navbar from '../components/landing/Navbar';
import ContactSection from '../components/landing/ContactSection';
import ServiceAreaMap from '../components/landing/ServiceAreaMap';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Request a Construction Estimate Orlando FL"
        path="/Contact"
        description="Request a free estimate from J&N StructureWorks, Orlando's trusted general contractor. Custom homes, renovations, kitchen & bath remodels. Call (321) 219-9007 or fill out our form."
      />
      <Navbar onContactClick={() => {}} alwaysSolid={true} />
      <header className="bg-slate-900 pt-24 lg:pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-orange-400 font-semibold mb-3">Start a Conversation</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Request a Construction Estimate</h1>
        </div>
      </header>
      <div>
        <ContactSection />
      </div>
      <ServiceAreaMap />
      <Footer />
    </div>
  );
}
