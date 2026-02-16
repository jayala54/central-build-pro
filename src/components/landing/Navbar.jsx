import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const navLinks = [
  { label: 'Home', href: '/Home' },
  { label: 'Services', href: '/Services' },
  { label: 'Projects', href: '/Projects' },
  { label: 'About', href: '/About' },
  { label: 'Blog', href: '/Blog' },
  { label: 'Contact', href: '/Contact' }
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

  const handleNavClick = (href) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <img src="/logo.png" alt="J&N StructureWorks, LLC." className="h-24 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={createPageUrl(link.href.slice(1))}
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
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="tel:+13216954964" 
                className={`flex items-center gap-2 font-medium transition-colors ${
                  showSolidBg ? 'text-slate-600' : 'text-white/80'
                }`}
              >
                <Phone className="w-4 h-4" />
                (321) 695-4964
              </a>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30"
                onClick={onContactClick}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="fixed inset-0 z-40 bg-slate-900 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={createPageUrl(link.href.slice(1))}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-white text-left"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-14 text-lg mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContactClick();
                }}
              >
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}