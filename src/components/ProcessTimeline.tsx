import React, { useState } from 'react';
import { CLIENT_TIMELINE } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarRange, ArrowRight, Sparkles, Footprints } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = CLIENT_TIMELINE[activeStepIndex];

  // Map step index to custom architectural icons
  const getPhaseIcon = (index: number) => {
    switch (index) {
      case 0: return '✧';
      case 1: return '✎';
      case 2: return '▱';
      case 3: return '⚒';
      case 4: return '☷';
      case 5: return '✦';
      default: return '✦';
    }
  };

  return (
    <section id="methodology" className="relative py-28 md:py-36 bg-matte-black border-b border-white/[0.04] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
            CHRONOGRAPH OF WORKFLOW
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight mb-6">
            The Commission <span className="italics text-luxury">Journey</span>
          </h2>
          <p className="text-sm text-stone-grey font-light leading-relaxed tracking-wide">
            How we translate your requirements into precise custom reality. Six structured phases designed with absolute transparency, regular updates, and strict timeline controls.
          </p>
        </div>

        {/* Step-by-Step Luxury Ribbon Slider */}
        <div className="relative mb-20 overflow-x-auto no-scrollbar pb-6 border-b border-white/[0.04]">
          <div className="flex justify-between items-center gap-4 min-w-[800px]">
            {CLIENT_TIMELINE.map((step, index) => {
              const isActive = activeStepIndex === index;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(index)}
                  className="flex-1 flex flex-col items-center text-center cursor-pointer relative group focus:outline-none"
                >
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-serif text-sm transition-all duration-500 mb-4 ${
                    isActive 
                      ? 'bg-luxury-gold border-luxury-gold text-matte-black font-semibold' 
                      : 'border-white/10 bg-transparent text-stone-grey hover:border-luxury-gold/50 group-hover:text-soft-beige'
                  }`}>
                    {getPhaseIcon(index)}
                  </div>

                  <span className={`text-[8px] tracking-[0.25em] font-mono uppercase mb-1 transition-colors ${
                    isActive ? 'text-luxury-gold' : 'text-stone-grey'
                  }`}>
                    {step.step}
                  </span>

                  <span className={`text-[11px] tracking-wide font-sans max-w-[120px] line-clamp-1 transition-colors ${
                    isActive ? 'text-soft-beige font-medium' : 'text-stone-grey/70 group-hover:text-stone-grey'
                  }`}>
                    {step.title}
                  </span>

                  {/* Connect Line */}
                  {index < CLIENT_TIMELINE.length - 1 && (
                    <div className="absolute right-[-45%] top-6 w-1/2 h-[1px] bg-white/[0.05] pointer-events-none hidden md:block" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Descriptive Panel */}
        <div className="bg-[#111111] border border-white/[0.03] rounded-[2px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle logo bg accent */}
          <div className="absolute bottom-[-10%] right-[-5%] text-[10vw] font-cinzel font-light text-white/[0.01] pointer-events-none select-none select-none">
            {currentStep.step}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              
              {/* Left Column (Main specifications) */}
              <div className="lg:col-span-7">
                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-matte-black border border-white/5 font-mono text-[9px] tracking-widest text-luxury-gold uppercase mb-6">
                  <CalendarRange className="w-3 h-3" />
                  <span>Duration // {currentStep.duration}</span>
                </div>

                <div className="font-mono text-[9px] tracking-[0.3em] text-stone-grey uppercase mb-2">
                  {currentStep.step} — {currentStep.subtitle}
                </div>

                <h3 className="font-serif text-3xl md:text-4xl text-soft-beige font-normal leading-tight mb-6">
                  {currentStep.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-grey font-light leading-relaxed mb-8 max-w-xl">
                  {currentStep.description}
                </p>

                {/* Subtasks depending on indices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-8">
                  <div>
                    <span className="text-[10px] tracking-widest font-mono text-soft-beige uppercase block mb-3">KEY MILESTONES</span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-stone-grey font-light">
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span>Direct Designer Oversight</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-grey font-light">
                        <Sparkles className="w-3 h-3 text-luxury-gold" />
                        <span>Curated Material Swatch Kit</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-widest font-mono text-soft-beige uppercase block mb-3">DELIVERABLE</span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-stone-grey font-light">
                        <ArrowRight className="w-3 h-3 text-luxury-gold" />
                        <span>Signed Blueprint & Budget Contract</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-grey font-light">
                        <ArrowRight className="w-3 h-3 text-luxury-gold" />
                        <span>Secure Photo-Log Access Credentials</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column (Visual atmospheric detail) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="aspect-[4/3] rounded-[2px] bg-charcoal/40 border border-white/5 flex flex-col justify-center items-center text-center p-8 relative">
                  <div className="absolute top-4 left-4 font-mono text-[8px] text-stone-grey/50">STAGE COORDINATES</div>
                  
                  <div className="w-12 h-12 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold mb-4 text-xl">
                    {getPhaseIcon(activeStepIndex)}
                  </div>
                  
                  <h4 className="font-cinzel text-xs tracking-[0.25em] text-luxury-gold uppercase mb-2">AURELIA STANDARD</h4>
                  <p className="text-[10px] text-stone-grey max-w-[240px] font-mono uppercase leading-relaxed">
                    THIS WORKFLOW ADHERES STRUCTURALLY TO RIBA STAGE 1-7 LUXURY GUIDELINES.
                  </p>
                </div>

                <div className="flex justify-between items-center bg-matte-black/40 border border-white/5 py-4 px-6 rounded-sm">
                  <div className="flex items-center gap-3">
                    <Footprints className="w-4 h-4 text-stone-grey" />
                    <span className="text-[10px] text-stone-grey font-mono uppercase">NEXT PROGRESSION</span>
                  </div>
                  <button 
                    onClick={() => setActiveStepIndex((activeStepIndex + 1) % CLIENT_TIMELINE.length)}
                    className="flex items-center gap-1.5 text-[9px] tracking-widest font-mono text-luxury-gold"
                  >
                    ADVANCE PHASE
                    <ArrowRight className="w-3-h-3" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
