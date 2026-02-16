import React from 'react';
import Navbar from '../components/landing/Navbar';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Contact Us"
        path="/Contact"
        description="Get a free quote from J&N StructureWorks. Contact us for custom home building, renovations, and commercial buildouts in Central Florida. Call (321) 695-4964."
      />
      <Navbar onContactClick={() => {}} alwaysSolid={true} />
      <div className="pt-32">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
