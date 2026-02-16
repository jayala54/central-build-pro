import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const sampleProjects = [
  {
    title: 'Single Family Home',
    category: 'Custom Home',
    location: 'Orange County',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80'
  },
  {
    title: 'Kitchen Renovation',
    category: 'Renovation',
    location: 'Seminole County',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'
  },
  {
    title: 'Home Remodel',
    category: 'Renovation',
    location: 'Osceola County',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
  },
  {
    title: 'New Construction',
    category: 'Custom Home',
    location: 'Lake County',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80'
  },
  {
    title: 'Office Buildout',
    category: 'Tenant Buildout',
    location: 'Volusia County',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    title: 'Bathroom Remodel',
    category: 'Renovation',
    location: 'Brevard County',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80'
  }
];

export default function ProjectsSection({ projects = sampleProjects }) {
  const displayProjects = projects.length > 0 ? projects : sampleProjects;

  return (
    <section className="py-24 bg-slate-50" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-lg">
            Explore our completed work across Central Florida. Each project reflects our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img 
                src={project.image || project.image_url} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center text-slate-300 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}