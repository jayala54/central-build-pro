import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';

export default function PrivacyPolicy() {
  const scrollToContact = () => { window.location.href = '/Contact'; };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Privacy Policy"
        path="/PrivacyPolicy"
        description="Privacy Policy for J&N StructureWorks, LLC. Learn how we collect, use, and protect your personal information."
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      <div className="bg-slate-900 pt-20 md:pt-40 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-slate-400 mt-3">Last updated: February 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none">
          <h2>Introduction</h2>
          <p>
            J&N StructureWorks, LLC ("we," "us," or "our") operates the website j-nsw.com. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Contact form submissions:</strong> Name, email address, phone number, project type, county, and project details you submit through our contact form.</li>
            <li><strong>Phone calls and emails:</strong> Information you share when contacting us directly.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Analytics data:</strong> We use Google Analytics to collect anonymous usage data including pages visited, time on site, device type, and general location. This data is not personally identifiable.</li>
            <li><strong>Cookies:</strong> Google Analytics uses cookies to distinguish unique users and sessions. You can opt out through your browser settings.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide project estimates</li>
            <li>Communicate with you about your construction project</li>
            <li>Improve our website and services</li>
            <li>Understand how visitors use our website</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul>
            <li><strong>Service providers:</strong> We use EmailJS to process contact form submissions. Your form data is transmitted through their service to deliver it to our email.</li>
            <li><strong>Analytics:</strong> Google Analytics processes anonymous usage data on our behalf.</li>
            <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights.</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information. Our website is served over HTTPS, and we limit access to personal data to authorized personnel only. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You may:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Opt out of Google Analytics tracking by using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
          </ul>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not directed at children under 13 and we do not knowingly collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at:
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
