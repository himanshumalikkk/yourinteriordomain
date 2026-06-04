import React, { useState, useEffect } from 'react';
import { ArrowDown, CornerDownRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
}

export default function Hero({ onOpenConsultation, onExploreProjects }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-matte-black flex items-center justify-center">
      {/* Cinematic Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full scale-110 pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollY * 0.12}px, 0) scale(1.08)`,
          transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90"
          alt="Bespoke luxury interior landscape architecture"
          className="w-full h-full object-cover object-center opacity-45 brightness-[0.7] select-none"
          referrerPolicy="no-referrer"
        />
        {/* Elite Overlay Gradients for deep text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/50 to-matte-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-transparent to-matte-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10 pt-20 flex flex-col items-center text-center">
        {/* Curated Subtitle Accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-8 h-[1px] bg-luxury-gold/60" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-luxury-gold">
            REDEFINING HIGH-END RESIDENTIAL ARTISTRY
          </span>
          <span className="w-8 h-[1px] bg-luxury-gold/60" />
        </motion.div>

        {/* Elegant Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-soft-beige max-w-5xl mb-8 font-normal">
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Designing Spaces
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block italics font-light text-luxury"
          >
            That Tell Stories
          </motion.span>
        </h1>

        {/* Premium Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg text-stone-grey max-w-2xl font-light leading-relaxed mb-12 tracking-wide"
        >
          Luxury interior design crafted around lifestyle, comfort, and timeless aesthetics. We transform raw spatial dimensions into curated masterworks of quiet luxury.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5 justify-center w-full max-w-md"
        >
          {/* Main Action Call */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-full bg-luxury-gold hover:bg-luxury-gold-light text-matte-black font-medium text-xs tracking-[0.25em] uppercase transition-all duration-500 cursor-pointer shadow-lg hover:shadow-luxury-gold/10"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book Consultation
              <CornerDownRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Secondary Action Link */}
          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-soft-beige/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-soft-beige/30 text-soft-beige font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300"
          >
            Explore Projects
          </button>
        </motion.div>
      </div>

      {/* Floating Bottom Info details */}
      <div className="absolute bottom-10 left-0 w-full z-10 px-6 md:px-12 flex justify-between items-end text-[10px] font-mono tracking-[0.25em] uppercase text-stone-grey/70">
        <div className="hidden md:block text-left text-stone-grey/60">
          <div>SCALE & CONFIGURATION</div>
          <div className="text-luxury-gold mt-1">N°45 AMALFI REVISITED // ACTIVE</div>
        </div>

        {/* Scroll Hint */}
        <motion.button
          onClick={onExploreProjects}
          className="flex flex-col items-center gap-3 mx-auto md:mx-0 group cursor-pointer focus:outline-none"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <span className="text-[9px] group-hover:text-luxury-gold transition-colors">SCROLL DOWN</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1 group-hover:border-luxury-gold/50 transition-colors">
            <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full block" />
          </div>
        </motion.button>

        <div className="hidden md:block text-right text-stone-grey/60">
          <div>OFFICES & MONOLITHS</div>
          <div className="text-luxury-gold mt-1">LONDON // MILAN // NEW DELHI</div>
        </div>
      </div>
    </section>
  );
}
