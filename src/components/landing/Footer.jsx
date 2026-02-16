import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-8 md:pt-0 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 mb-12">
          <div className="mt-2 md:-mt-8">
            <div className="mb-2 md:mb-0 md:-ml-6">
              <img src="/logo.png" alt="J&N StructureWorks, LLC." className="h-14 md:h-[14.5rem] w-auto brightness-0 invert" />
            </div>
            <p className="text-slate-400 mb-0 md:-mt-14">
              Florida Certified Building Contractor serving Central Florida with excellence since 2020.
            </p>
            <p className="text-amber-500 font-medium text-sm mt-1">License #CBC1269175</p>
          </div>

          <div className="mt-0 md:mt-6">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/CustomHomes" className="hover:text-amber-400 transition-colors">Custom Homes</Link></li>
              <li><Link to="/WholeHomeRenovations" className="hover:text-amber-400 transition-colors">Home Renovations</Link></li>
              <li><Link to="/KitchenBathRemodeling" className="hover:text-amber-400 transition-colors">Kitchen & Bath</Link></li>
              <li><Link to="/RoomAdditions" className="hover:text-amber-400 transition-colors">Room Additions</Link></li>
              <li><Link to="/CommercialBuildouts" className="hover:text-amber-400 transition-colors">Commercial Buildouts</Link></li>
            </ul>
          </div>

          <div className="mt-0 md:mt-6">
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/ServiceAreaOrlando" className="hover:text-amber-400 transition-colors">Orlando</Link></li>
              <li><Link to="/ServiceAreaWinterPark" className="hover:text-amber-400 transition-colors">Winter Park</Link></li>
              <li><Link to="/ServiceAreaLakeMary" className="hover:text-amber-400 transition-colors">Lake Mary</Link></li>
              <li><Link to="/ServiceAreaKissimmee" className="hover:text-amber-400 transition-colors">Kissimmee</Link></li>
              <li><Link to="/ServiceAreaWindermere" className="hover:text-amber-400 transition-colors">Windermere</Link></li>
              <li><Link to="/ServiceAreaLakeNona" className="hover:text-amber-400 transition-colors">Lake Nona</Link></li>
            </ul>
          </div>


          <div className="mt-0 md:mt-6">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+13216954964" className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors">
                  <Phone className="w-4 h-4 text-amber-500" />
                  (321) 695-4964
                </a>
              </li>
              <li>
                <a href="mailto:jnstructureworks@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors">
                  <Mail className="w-4 h-4 text-amber-500" />
                  jnstructureworks@gmail.com
                </a>
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
              © {new Date().getFullYear()} J&N StructureWorks, LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <Link to="/Blog" className="hover:text-amber-400 transition-colors">Blog</Link>
              <Link to="/PrivacyPolicy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <Link to="/TermsOfService" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}