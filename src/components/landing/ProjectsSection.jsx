import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const sampleProjects = [
  {
    title: 'Custom Home Build',
    category: 'Custom Home',
    location: 'Summerfield, FL',
    image: '/images/projects/completed-home.jpg'
  },
  {
    title: 'Investor Turnkey Build',
    category: 'Custom Home',
    location: 'Ocala, FL',
    image: '/images/projects/investor-turnkey-cover.jpg',
    hoverImage: '/images/projects/kitchen-interior.jpg'
  },
  {
    title: 'Bathroom Addition',
    category: 'Addition',
    location: 'Saint Cloud, FL',
    image: '/images/projects/bathroom-remodel.jpg'
  },
  {
    title: 'New Construction',
    category: 'Custom Home',
    location: 'Ocala, FL',
    image: '/images/projects/new-construction.jpg'
  },
  {
    title: 'Custom Home Build',
    category: 'Custom Home',
    location: 'Summerfield, FL',
    image: '/images/projects/home-render.jpg'
  },
  {
    title: 'Commercial Remodel',
    category: 'Commercial',
    location: 'Kissimmee, FL',
    image: '/images/projects/commercial-repipe-cover.jpg',
    hoverImage: '/images/projects/commercial-repipe-hover.jpg'
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
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${project.hoverImage ? 'group-hover:opacity-0' : ''}`}
              />
              {project.hoverImage && (
                <img
                  src={project.hoverImage}
                  alt={`${project.title} — detail`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                />
              )}
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