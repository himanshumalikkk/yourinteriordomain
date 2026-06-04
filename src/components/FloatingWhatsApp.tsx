import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const text = encodeURIComponent("Hello Aurelia Studio d'Interieur. I would like to schedule an interior design estimation consultation.");
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-30 group">
      {/* Floating tooltip */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#111111] border border-white/5 py-1.5 px-3.5 rounded-sm shadow-2xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        <span className="font-mono text-[8px] tracking-[0.2em] text-luxury-gold uppercase block">
          CHAT WITH DESIGN DIRECTOR
        </span>
      </div>

      <button
        onClick={handleClick}
        className="w-12 h-12 rounded-full bg-matte-black border border-white/10 text-soft-beige hover:text-green-400 hover:border-green-400/40 flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer hover:scale-105 relative"
        aria-label="Direct WhatsApp link"
      >
        <span className="absolute inset-0 w-full h-full rounded-full border border-green-400/20 animate-ping group-hover:animate-none opacity-40 pointer-events-none" />
        <MessageSquare className="w-5 h-5 fill-none" />
        <ArrowUpRight className="w-2.5 h-2.5 absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
}
