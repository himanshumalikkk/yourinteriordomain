import React, { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#111111] border-b border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
            INQUIRY CLARIFICATION DIRECTORY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-soft-beige font-normal leading-tight">
            Frequently Held <span className="italics text-luxury">Conversations</span>
          </h2>
          <div className="h-[1.5px] w-12 bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Accordion Core list */}
        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border border-white/5 bg-matte-black/40 rounded-sm overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-luxury-gold/20 shadow-2xl bg-matte-black/85' : 'hover:border-white/10'
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left py-6 px-6 sm:px-8 flex items-center justify-between gap-6 cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[9px] text-stone-grey/50 group-hover:text-luxury-gold transition-colors block">
                      [0{index + 1}]
                    </span>
                    <h3 className="font-serif text-sm sm:text-lg text-soft-beige group-hover:text-luxury-gold-light transition-colors font-normal">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-full border transition-all duration-300 ${
                    isOpen ? 'border-luxury-gold/30 text-luxury-gold' : 'border-white/10 text-stone-grey'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Sliding Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-7 pt-1 border-t border-white/[0.02]">
                        <p className="text-xs sm:text-sm text-stone-grey leading-relaxed font-light">
                          {item.answer}
                        </p>
                        
                        <div className="flex items-center gap-2 mt-5 text-[9px] font-mono tracking-widest text-luxury-gold/50">
                          <HelpCircle className="w-3 h-3" />
                          <span>TAGS // CATEGORY: {item.category.toUpperCase()}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
