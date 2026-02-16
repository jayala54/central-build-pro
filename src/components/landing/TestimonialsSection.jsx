import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael & Sarah Thompson',
    location: 'Orlando, FL',
    text: 'We gave them our floor plan and a bunch of Pinterest ideas, and they actually made it happen. The tile work in our master bath is perfect, and the whole house feels solid. They kept us in the loop the whole time too.',
    rating: 5
  },
  {
    name: 'David Chen',
    location: 'Winter Park, FL',
    text: 'Our house was stuck in 1985 and they completely gutted it. New layout, new everything. The kitchen alone was worth it. They also caught some electrical stuff the old owners had rigged up, which saved us a headache down the road.',
    rating: 5
  },
  {
    name: 'Jennifer Rodriguez',
    location: 'Kissimmee, FL',
    text: 'We finally got the kitchen we always wanted. They helped us pick the countertops and cabinets, and it turned out even better than we pictured. They were done when they said they\'d be done, which honestly surprised us after dealing with other contractors before.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg">
            We let our work speak for itself. These are real reviews from real clients we've built for across Central Florida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-500/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}