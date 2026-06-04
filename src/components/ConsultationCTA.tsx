import React from 'react';
import { Sparkles, CalendarCheck, HelpCircle } from 'lucide-react';

interface ConsultationCTAProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export default function ConsultationCTA({ onOpenConsultation, onOpenEstimator }: ConsultationCTAProps) {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden bg-[#0a0a0a]">
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury Architecture background visual"
          className="w-full h-full object-cover opacity-15 brightness-[0.4] select-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/90 to-matte-black" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 z-10 text-center flex flex-col items-center">
        {/* Floating Accent */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-5 h-[1.5px] bg-luxury-gold/50" />
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-luxury-gold">
            COMMISSION INTIATIVE
          </span>
          <span className="w-5 h-[1.5px] bg-luxury-gold/50" />
        </div>

        {/* Editorial Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-soft-beige font-normal max-w-4xl mb-8">
          Let’s Create Something <span className="italics text-luxury font-light">Exceptional</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-stone-grey font-light max-w-2xl leading-relaxed tracking-wider mb-12">
          Whether you are launching a full-scale villa renovation, looking to detail a chef-grade modern modular kitchen, or seeking turn-key interior blueprints for a newly acquired penthouse, our studio is prepared to execute your goals.
        </p>

        {/* Dual Luxury Action blocks */}
        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center w-full max-w-xl">
          {/* Main Booking action */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4.5 rounded-full bg-luxury-gold hover:bg-luxury-gold-light text-matte-black font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl cursor-pointer hover:shadow-luxury-gold/15"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Private Consultation
          </button>

          {/* Budget Estimator action */}
          <button
            onClick={onOpenEstimator}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4.5 rounded-full border border-soft-beige/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-soft-beige/30 text-soft-beige font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            Calculate Est. Cost
          </button>
        </div>

        {/* SSL indicator or help detail */}
        <div className="flex items-center justify-center gap-2 mt-10 text-[9px] font-mono tracking-widest text-stone-grey/50 uppercase">
          <HelpCircle className="w-3 h-3 text-luxury-gold/40" />
          <span>ESTIMATE INQUIRIES ROUTED TO HEAD ACCOUNT DIRECTOR // ENCRYPTED CONNECTION</span>
        </div>

      </div>
    </section>
  );
}
