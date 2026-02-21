import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SEOHead from '@/components/SEOHead';
import emailjs from '@emailjs/browser';
import {
  Phone, Mail, Shield, Award, Clock, Star,
  CheckCircle, Loader2, Send, Home, Hammer,
  Wrench, SquarePlus, Building2, HardHat, ArrowRight
} from 'lucide-react';

const projectTypes = [
  { value: 'custom_home', label: 'Custom Home Build' },
  { value: 'whole_home_renovation', label: 'Whole-Home Renovation' },
  { value: 'kitchen_bath', label: 'Kitchen & Bath Remodel' },
  { value: 'addition', label: 'Room Addition' },
  { value: 'tenant_buildout', label: 'Commercial Buildout' },
  { value: 'commercial_renovation', label: 'Commercial Renovation' },
  { value: 'other', label: 'Other' },
];

const services = [
  { icon: Home, title: 'Custom Homes', desc: 'Ground-up new construction tailored to your vision' },
  { icon: Hammer, title: 'Whole-Home Renovations', desc: 'Complete home transformations inside and out' },
  { icon: Wrench, title: 'Kitchen & Bath Remodeling', desc: 'Modern upgrades that increase your home value' },
  { icon: SquarePlus, title: 'Room Additions', desc: 'Expand your living space seamlessly' },
  { icon: Building2, title: 'Commercial Buildouts', desc: 'Tenant improvements and new commercial spaces' },
  { icon: HardHat, title: 'Commercial Renovations', desc: 'Upgrade your business space with expert builds' },
];

const testimonials = [
  {
    text: 'J&N StructureWorks transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible.',
    name: 'Sarah M.',
    location: 'Winter Park',
  },
  {
    text: 'Professional from start to finish. They completed our home renovation on time and within budget.',
    name: 'Michael R.',
    location: 'Orlando',
  },
  {
    text: "Best contractor experience we've ever had. They treated our home like it was their own.",
    name: 'David & Lisa K.',
    location: 'Lake Mary',
  },
];

function QuoteForm({ id, utmParams }) {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', project_type: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_xmtwtve',
        'template_b9mf40y',
        { ...formData, ...utmParams, source: 'landing_page' },
        '5ihhxCIFZvr_J5Fbi'
      );
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', project_type: '' });
    } catch {
      alert('Something went wrong. Please call us at (321) 695-4964 or try again.');
    }
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600 mb-6">We'll get back to you within 24 hours.</p>
        <p className="text-slate-500 text-sm">Or call now for an immediate response:</p>
        <a href="tel:+13216954964" className="text-orange-600 font-bold text-lg mt-1 hover:text-orange-700">(321) 695-4964</a>
        <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id={id} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor={`${id}-name`}>Full Name *</Label>
        <Input
          id={`${id}-name`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Smith"
          required
          className="h-12 bg-white border-slate-200 focus:border-orange-500 focus:ring-orange-500"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`${id}-phone`}>Phone Number *</Label>
        <Input
          id={`${id}-phone`}
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="(321) 555-0123"
          required
          className="h-12 bg-white border-slate-200 focus:border-orange-500 focus:ring-orange-500"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`${id}-email`}>Email Address *</Label>
        <Input
          id={`${id}-email`}
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="john@example.com"
          required
          className="h-12 bg-white border-slate-200 focus:border-orange-500 focus:ring-orange-500"
        />
      </div>
      <div className="space-y-1.5">
        <Label>Project Type</Label>
        <Select
          value={formData.project_type}
          onValueChange={(value) => setFormData({ ...formData, project_type: value })}
        >
          <SelectTrigger className="h-12 bg-white border-slate-200">
            <SelectValue placeholder="What do you need?" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((t) => (
              <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/40 transition-all hover:shadow-orange-500/60 hover:scale-[1.01]"
      >
        {isSubmitting ? (
          <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="mr-2 w-5 h-5" /> Get My Free Quote</>
        )}
      </Button>
      <p className="text-xs text-slate-400 text-center pt-1">No obligation. We respond within 24 hours.</p>
    </form>
  );
}

export default function FreeQuote() {
  const [utmParams, setUtmParams] = useState({});
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Free Quote | J&N StructureWorks — Orlando Home Builder"
        path="/FreeQuote"
        description="Get a free quote from J&N StructureWorks, Orlando's trusted building contractor. Custom homes, renovations, and commercial buildouts. Call (321) 695-4964."
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── STICKY HEADER ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img src="/logo.webp" alt="J&N StructureWorks" width="400" height="196" className="h-10 w-auto" />
            <div className="flex items-center gap-3">
              <a href="tel:+13216954964" className="hidden sm:flex items-center gap-2 text-slate-700 font-semibold hover:text-orange-600 transition-colors">
                <Phone className="w-4 h-4 text-orange-500" />
                (321) 695-4964
              </a>
              <a href="tel:+13216954964">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-md shadow-orange-500/30">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO + FORM ── */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/projects/completed-home.webp"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — Copy */}
            <motion.div {...fadeUp} className="pt-2 lg:pt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 mb-6">
                <Shield className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">Licensed & Insured — CBC1269175</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
                Orlando's Trusted<br />Home Builder —
                <span className="text-orange-400 block mt-1">Get Your Free Quote</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Custom homes, renovations, and commercial buildouts across Central Florida. Tell us about your project — we'll give you an honest estimate with no pressure.
              </p>

              {/* Mobile phone CTA */}
              <a href="tel:+13216954964" className="lg:hidden inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-6 py-4 mb-6 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call us directly</p>
                  <p className="text-white font-bold text-xl">(321) 695-4964</p>
                </div>
              </a>

              {/* Desktop trust badges */}
              <div className="hidden lg:flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Free Estimates</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 24hr Response</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> No Obligation</div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
                <div className="absolute -top-3 left-6 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  FREE ESTIMATE
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1 mt-2">Request Your Quote</h2>
                <p className="text-slate-500 text-sm mb-5">Takes less than 60 seconds</p>
                <QuoteForm id="hero-form" utmParams={utmParams} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-slate-900 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { icon: Shield, label: 'State Certified', value: 'License CBC1269175' },
              { icon: Clock, label: 'Experience', value: '5+ Years' },
              { icon: Award, label: 'Projects Completed', value: '100+' },
              { icon: Star, label: 'Customer Rating', value: '5-Star Rated' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{item.value}</p>
                  <p className="text-slate-400 text-xs">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Full-Service Building Contractor</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group border border-slate-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  <svc.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">What Our Clients Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start<br /><span className="text-orange-400">Your Project?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Get a free, no-obligation quote from a licensed Florida contractor. We'll walk through your project and give you an honest price.
              </p>
              <a href="tel:+13216954964" className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-6 py-5 hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Prefer to talk? Call us now</p>
                  <p className="text-white font-bold text-2xl">(321) 695-4964</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Get Your Free Quote</h3>
                <p className="text-slate-500 text-sm mb-5">No obligation. We respond within 24 hours.</p>
                <QuoteForm id="bottom-form" utmParams={utmParams} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-slate-500">&copy; {new Date().getFullYear()} J&N StructureWorks, LLC. All rights reserved.</p>
            <div className="flex items-center gap-4 text-slate-400">
              <span>License #CBC1269175</span>
              <span className="text-slate-700">|</span>
              <a href="tel:+13216954964" className="hover:text-orange-400 transition-colors">(321) 695-4964</a>
              <span className="text-slate-700">|</span>
              <a href="mailto:jnstructureworks@gmail.com" className="hover:text-orange-400 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CALL BUTTON ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-3">
        <a href="tel:+13216954964" className="flex items-center justify-center gap-2 w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/40 transition-colors">
          <Phone className="w-5 h-5" />
          Call (321) 695-4964 — Free Quote
        </a>
      </div>
    </div>
  );
}
