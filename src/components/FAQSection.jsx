import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-white rounded-xl border border-slate-100 px-6 overflow-hidden"
          >
            <AccordionTrigger className="text-base font-semibold text-slate-900 hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
