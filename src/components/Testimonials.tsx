import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="relative py-28 md:py-36 bg-[#111111] border-b border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,178,111,0.01)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Head Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
            CLIENT PATRONAGE SPECTRUM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight mb-4">
            Voices of quiet <span className="italics text-luxury">luxury</span>
          </h2>
          <div className="h-[1.5px] w-12 bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Carousel Slide Wrapper */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-10">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Giant Stylized Quote Icon */}
              <Quote className="w-12 h-12 text-luxury-gold/10 mb-8" />

              {/* Verified Star Ratings */}
              <div className="flex items-center gap-1 mb-8 text-luxury-gold">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>

              {/* Editorial Quote block */}
              <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl text-soft-beige/95 leading-relaxed font-light tracking-wide max-w-3xl mb-10 italic">
                "{current.quote}"
              </blockquote>

              {/* Patron Bio Information */}
              <div>
                <cite className="not-italic font-sans text-xs tracking-[0.2em] text-soft-beige uppercase font-bold block mb-1">
                  {current.name}
                </cite>
                <span className="font-mono text-[9px] tracking-[0.1em] text-stone-grey uppercase">
                  {current.role} — {current.location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Symmetrical Left/Right Controls */}
          <div className="flex justify-center items-center gap-6 mt-16">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-white/5 bg-matte-black/40 hover:bg-neutral-900 font-normal hover:border-luxury-gold/30 text-stone-grey hover:text-luxury-gold flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Slider Indicator dots */}
            <div className="flex items-center gap-2.5">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    activeIndex === index ? 'bg-luxury-gold w-5' : 'bg-white/10 hover:bg-white/30'
                  }`}
                  aria-label={`Jump to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-white/5 bg-matte-black/40 hover:bg-neutral-900 font-normal hover:border-luxury-gold/30 text-stone-grey hover:text-luxury-gold flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
