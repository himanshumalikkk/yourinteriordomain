import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioProps {
  onSelectProject: (projectId: string) => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Luxury Apartments',
    'Villas',
    'Builder Floors',
    'Modular Kitchens',
    'Renovations',
    'Commercial Spaces'
  ];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 md:py-36 bg-matte-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
              CHRONOLOGY OF CREATIVE COMMISSIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight">
              Featured Projects Where <br />
              <span className="italics text-luxury">Light Intersects Material</span>
            </h2>
          </div>
          <p className="text-sm text-stone-grey max-w-sm font-light leading-relaxed tracking-wide">
            Each residential and commercial space features material-focused execution engineered to elevate human connection and emotional tranquility.
          </p>
        </div>

        {/* Category Filters - Sleek Luxury Track */}
        <div className="w-full mb-16 overflow-x-auto no-scrollbar border-b border-white/[0.04] pb-4">
          <div className="flex gap-8 md:gap-12 min-w-max">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative pb-4 focus:outline-none cursor-pointer group"
                >
                  <span className={`text-[10px] tracking-[0.2em] uppercase font-mono transition-colors duration-300 ${
                    isActive ? 'text-luxury-gold font-medium' : 'text-stone-grey group-hover:text-soft-beige'
                  }`}>
                    {category}
                  </span>
                  
                  {/* Sliding underscore block */}
                  {isActive && (
                    <motion.div
                      layoutId="categoryLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Magazine-Style Layout (An Asymmetrical Bento Grid) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Create asymmetrical sizing for magazine editorial feel
              // Project 1 (index 0) and Project 6 take 7/12 cols, others take 5/12 or 6/12
              const colSpan = index === 0 || index === 5
                ? 'md:col-span-7' 
                : index === 1 || index === 4
                  ? 'md:col-span-5' 
                  : 'md:col-span-6';

              const aspectClass = index === 0 || index === 5
                ? 'aspect-[16/10]'
                : index === 3
                  ? 'aspect-[4/5]' // Tall mastery layout
                  : 'aspect-[4/3]'; // Balanced look

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`${colSpan} flex flex-col group cursor-pointer`}
                  onClick={() => onSelectProject(project.id)}
                >
                  {/* Photo Container */}
                  <div className="relative w-full overflow-hidden rounded-[2px] bg-charcoal/30 mb-5">
                    {/* Parallax Hover Image */}
                    <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Luxury Dark Backdrop tint */}
                      <div className="absolute inset-0 bg-matte-black/10 group-hover:bg-matte-black/50 transition-colors duration-500" />

                      {/* Glass Hover Accents */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-charcoal/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-luxury-gold shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Location Chip */}
                      <div className="absolute top-5 left-5 font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 bg-matte-black/75 backdrop-blur-md rounded-sm border border-white/5 text-soft-beige">
                        {project.location}
                      </div>

                      {/* Category Chip */}
                      <div className="absolute bottom-5 right-5 font-sans text-[8px] tracking-[0.15em] uppercase px-3 py-1 bg-luxury-gold text-matte-black font-semibold rounded-sm">
                        {project.categoryLabel}
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Details */}
                  <div className="flex justify-between items-start pt-1 px-1">
                    <div>
                      <h3 className="font-serif text-lg md:text-2xl text-soft-beige group-hover:text-luxury-gold transition-colors duration-300 font-normal">
                        {project.title}
                      </h3>
                      <p className="text-xs text-stone-grey font-light tracking-wide mt-1.5 max-w-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Stylized Action Anchor */}
                    <div className="p-2 border border-white/5 rounded-full bg-white/[0.01] group-hover:bg-luxury-gold group-hover:border-luxury-gold text-stone-grey group-hover:text-matte-black transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State when no project fits criteria */}
        {filteredProjects.length === 0 && (
          <div className="py-24 border border-dashed border-white/10 rounded text-center flex flex-col items-center">
            <span className="font-serif text-lg text-stone-grey mb-2">Architectural Renderings Pending Release</span>
            <span className="font-mono text-[10px] tracking-widest text-stone-grey/50 uppercase">MORE PORTFOLIOS COMING SOON</span>
          </div>
        )}
      </div>
    </section>
  );
}
