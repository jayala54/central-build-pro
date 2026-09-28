import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { trackContactClick, trackEvent } from '@/utils/analytics';

const navLinks = [
  { label: 'Residential', href: '/Services/' },
  { label: 'Commercial', href: '/Commercial/' },
  { label: 'Projects', href: '/Projects/' },
  { label: 'Service Areas', href: '/ServiceAreaOrlando/' },
  { label: 'Blog', href: '/Blog/' },
  { label: 'About', href: '/About/' },
];

export default function Navbar({ onContactClick, alwaysSolid = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidBg = alwaysSolid || isScrolled;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-32">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <img src="/logo.webp" alt="J&N StructureWorks, LLC." className="h-12 lg:h-24 w-auto" width="400" height="196" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-medium transition-colors ${
                    showSolidBg 
                      ? 'text-slate-600 hover:text-orange-600' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="tel:+13212199007" 
                onClick={() => trackContactClick('phone', 'desktop_navigation')}
                className={`flex items-center gap-2 font-medium transition-colors ${
                  showSolidBg ? 'text-slate-600' : 'text-white/80'
                }`}
              >
                <Phone className="w-4 h-4" />
                (321) 219-9007
              </a>
              <Button 
                id="nav-request-estimate"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30"
                onClick={() => {
                  trackEvent('request_estimate_click', { link_location: 'desktop_navigation' });
                  onContactClick();
                }}
              >
                Request Estimate
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <X className={showSolidBg ? 'text-slate-900' : 'text-white'} />
              ) : (
                <Menu className={showSolidBg ? 'text-slate-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-slate-900 pt-20 px-6 pb-8 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-white text-left"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+13212199007"
                onClick={() => trackContactClick('phone', 'mobile_navigation')}
                className="flex items-center justify-center gap-2 h-14 text-lg font-semibold text-white border border-white/20 rounded-md mt-4"
              >
                <Phone className="w-5 h-5" />
                (321) 219-9007
              </a>
              <Button
                id="mobile-nav-request-estimate"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-14 text-lg"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  trackEvent('request_estimate_click', { link_location: 'mobile_navigation' });
                  onContactClick();
                }}
              >
                Request an Estimate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
