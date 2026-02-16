import React from 'react';
import Navbar from '../components/landing/Navbar';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Get a Free Quote — General Contractor Orlando FL"
        path="/Contact"
        description="Request a free estimate from J&N StructureWorks, Orlando's trusted general contractor. Custom homes, renovations, kitchen & bath remodels. Call (321) 695-4964 or fill out our form."
      />
      <Navbar onContactClick={() => {}} alwaysSolid={true} />
      <div className="pt-20 md:pt-32">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
