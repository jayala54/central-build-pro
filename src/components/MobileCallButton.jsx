import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileCallButton() {
  return (
    <a
      href="tel:+13212199007"
      className="md:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg shadow-orange-500/40 transition-colors"
      aria-label="Call J&N StructureWorks"
    >
      <Phone className="w-5 h-5" />
      Call Now
    </a>
  );
}
