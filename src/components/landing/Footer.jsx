import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="J&N StructureWorks, LLC." className="h-28 w-auto brightness-0 invert" />
            </div>
            <p className="text-slate-400 mb-4">
              Florida Certified Building Contractor serving Central Florida with excellence since 2020.
            </p>
            <p className="text-amber-500 font-medium text-sm">License #CBC1269175</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Custom Homes</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Home Renovations</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Kitchen & Bath</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Tenant Buildouts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Orange County</li>
              <li>Seminole County</li>
              <li>Osceola County</li>
              <li>Lake County</li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-amber-500" />
                (321) 695-4964
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-amber-500" />
                jnstructureworks@gmail.com
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500" />
                Orlando, FL
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <Link to="/Blog" className="hover:text-amber-400 transition-colors">Blog</Link>
              <span className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-amber-400 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}