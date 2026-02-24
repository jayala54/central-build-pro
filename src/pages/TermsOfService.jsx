import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function TermsOfService() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Terms of Service"
        path="/TermsOfService"
        description="Terms of Service for J&N StructureWorks, LLC website. Review the terms and conditions for using our website and services."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      <div className="bg-slate-900 pt-20 md:pt-40 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-slate-400 mt-3">Last updated: February 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using the website j-nsw.com ("Site"), operated by J&N StructureWorks, LLC ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site.
          </p>

          <h2>Use of Our Website</h2>
          <p>You agree to use our Site only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Violate any applicable law or regulation</li>
            <li>Infringe on the rights of others</li>
            <li>Interfere with the operation of our Site</li>
            <li>Attempt to gain unauthorized access to any part of our Site</li>
          </ul>

          <h2>Services Information</h2>
          <p>
            The information on our Site about our construction services, including descriptions, processes, and service areas, is provided for general informational purposes only. It does not constitute a contract, guarantee, or warranty of any kind.
          </p>
          <p>
            All construction projects are subject to a separate written contract between J&N StructureWorks, LLC and the client that outlines scope, pricing, timeline, and terms specific to that project.
          </p>

          <h2>Estimates and Pricing</h2>
          <p>
            Any pricing information, cost ranges, or estimates mentioned on our Site or blog are approximate and provided for informational purposes only. Actual project costs depend on site conditions, materials, design complexity, permits, and other factors. A formal written estimate will be provided after a consultation.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on our Site, including text, images, logos, and design, is the property of J&N StructureWorks, LLC and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
          </p>

          <h2>Blog Content</h2>
          <p>
            Our blog articles are intended for educational and informational purposes. While we strive for accuracy, the information should not be taken as professional advice for your specific project. Building codes, costs, and regulations change frequently. Always consult with a licensed contractor and your local building department for project-specific guidance.
          </p>

          <h2>Contact Form Submissions</h2>
          <p>
            When you submit information through our contact form, you consent to us contacting you by phone, email, or text message regarding your inquiry. Submitting a contact form does not create a contractual obligation on either party.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of those sites. Inclusion of a link does not imply endorsement.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            J&N StructureWorks, LLC makes no warranties regarding the accuracy or completeness of information on our Site. We are not liable for any damages arising from your use of the Site, including but not limited to direct, indirect, incidental, or consequential damages.
          </p>

          <h2>Licensing</h2>
          <p>
            J&N StructureWorks, LLC is a Florida Certified Building Contractor, license number CBC1269175, issued by the Florida Department of Business and Professional Regulation. Our work is performed in compliance with the Florida Building Code and all applicable local regulations.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Changes will be posted on this page. Continued use of the Site after changes are posted constitutes acceptance of the updated terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of the State of Florida. Any disputes arising from these terms shall be resolved in the courts of Orange County, Florida.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:jnstructureworks@gmail.com">jnstructureworks@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+13212199007">(321) 219-9007</a></li>
            <li><strong>Location:</strong> Orlando, FL</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
