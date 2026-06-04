import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Hammer, Shuffle, Compass, ShieldCheck } from 'lucide-react';

export default function Philosophy() {
  const [activePillar, setActivePillar] = useState('process');

  const pillars = [
    {
      id: 'process',
      title: 'Design Process',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
      tagline: 'CREATIVITY SUPPORTED BY MATH',
      text: 'A luxury interior begins not with decorative items, but with architectural lines. We sketch and visualize every space in 3D, creating scale drawings that calculate how energy, light, and people navigate through rooms.',
      bullets: ['Comprehensive spatial flow analysis', 'Material mood trays and lighting charts', 'Full 3D VR simulation before construction']
    },
    {
      id: 'planning',
      title: 'Space Planning',
      icon: Shuffle,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      tagline: 'THE GEOMETRICAL EQUILIBRIUM',
      text: 'True luxury is space itself. We optimize layout plans to respect natural light, sightlines, and absolute ergonomic fluid movement, ensuring that even grand high-ceiling spaces maintain a cozy human feel.',
      bullets: ['Solar-tracking room placement studies', 'Balanced visual proportion mapping', 'Optimal acoustic dampening planning']
    },
    {
      id: 'materials',
      title: 'Material Selection',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
      tagline: 'HONEST TEXTURES, EXQUISITE PAIRINGS',
      text: 'We never substitute premium materials. The touch of raw travertine, the active grain of walnut, and the cool touch of bookmarked stone marble tell an authentic luxury story that synthetic alternates cannot mimic.',
      bullets: ['Direct global quarrying agreements', 'Natural VOC-free timber finishes', 'Elite weave linens & velvet selections']
    },
    {
      id: 'detail',
      title: 'Attention To Detail',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1558882224-dda166733026?auto=format&fit=crop&w=1400&q=80',
      tagline: 'WHERE MILLIMETERS MATTER MOST',
      text: 'Our joint tolerances are measured in fractions of a millimeter. From hidden flush-door hinges to perfectly aligned marble veins and concealed acoustic drop-ceiling channels, we believe unseen details build quiet comfort.',
      bullets: ['Shadow-line ceiling flush details', 'Zero-tolerance joint miters', 'Completely integrated outlet placements']
    },
    {
      id: 'execution',
      title: 'End-to-End Execution',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
      tagline: 'FLAWLESS MANAGEMENT, ZERO STRESS',
      text: 'We manage everything—from quarry extraction and customs importing to coordinate MEP layouts and final physical styling. Our clients receive weekly photo logs while we direct elite local master artisans.',
      bullets: ['Daily site inspections and audit notes', 'Guaranteed milestone delivery schedules', 'Full catalog turnkey handover reveals']
    }
  ];

  const currentPillar = pillars.find(p => p.id === activePillar) || pillars[0];
  const PillarIcon = currentPillar.icon;

  return (
    <section id="philosophy" className="relative py-28 md:py-36 bg-matte-black border-b border-white/[0.04] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
            MAISON D’ART ETHOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight mb-6">
            The Philosophy of <span className="italics text-luxury">Quiet Luxury</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-grey font-light leading-relaxed tracking-wide">
            We don’t decorate rooms. We engineer three-dimensional atmospheric experiences. Our core methodology is defined by spatial elegance, authentic materials, and absolute timeline discipline.
          </p>
        </div>

        {/* Dynamic Column Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch min-h-[500px]">
          
          {/* Pillar Toggle Menu - left side (span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-2">
            {pillars.map((pillar) => {
              const isActive = activePillar === pillar.id;
              const IconComp = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`flex items-center gap-4 py-4 px-6 rounded-sm text-left transition-all duration-300 border-l-2 focus:outline-none cursor-pointer ${
                    isActive 
                      ? 'border-luxury-gold bg-charcoal/30 text-soft-beige shadow-lg' 
                      : 'border-transparent text-stone-grey hover:text-soft-beige hover:bg-neutral-900/40'
                  }`}
                >
                  <IconComp className={`w-4 h-4 transition-colors ${isActive ? 'text-luxury-gold' : 'text-stone-grey'}`} />
                  <span className="text-xs uppercase tracking-widest font-mono font-medium">
                    {pillar.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Storyboard Viewbox - right side (span 8) */}
          <div className="lg:col-span-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full"
              >
                {/* Descriptive Editorial Material */}
                <div className="flex flex-col justify-center">
                  <span className="font-mono text-[9px] tracking-[0.25em] text-luxury-gold font-bold uppercase mb-2">
                    {currentPillar.tagline}
                  </span>
                  
                  <h3 className="font-serif text-2xl md:text-3xl text-soft-beige font-normal mb-5">
                    {currentPillar.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-stone-grey font-light leading-relaxed mb-6">
                    {currentPillar.text}
                  </p>

                  <ul className="flex flex-col gap-3.5 border-t border-white/5 pt-6">
                    {currentPillar.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-soft-beige font-light tracking-wide">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highly Visual Aspect Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] border border-white/5 shadow-2xl">
                  <img
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle warm luxury vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
