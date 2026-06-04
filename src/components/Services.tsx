import React from 'react';
import { SERVICES } from '../data';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForEstimate }: ServicesProps) {
  
  // Icon helper function to fetch dynamically from string
  const renderIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-luxury-gold" />;
    }
    return <Icons.Sparkles className="w-5 h-5 text-luxury-gold" />;
  };

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#111111] border-b border-white/[0.04] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
              BLUEPRINT SPECIFICATION INDEX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight">
              Bespoke Architectural <br />
              <span className="italics text-luxury">Service Spheres</span>
            </h2>
          </div>
          <p className="text-sm text-stone-grey max-w-sm font-light leading-relaxed tracking-wide">
            Our luxury studio balances aesthetic ambition with technical engineering to oversee commissions from quarry cuts to final key handovers.
          </p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative bg-[#0e0e0e] border border-white/[0.03] p-8 rounded-[2px] transition-all duration-500 hover:border-luxury-gold/20 hover:-translate-y-1 flex flex-col justify-between min-h-[350px] shadow-2xl"
              >
                {/* Visual Glass highlights */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(212,178,111,0.03)_0%,transparent_70%)] pointer-events-none group-hover:bg-[radial-gradient(ellipse_at_top_right,rgba(212,178,111,0.07)_0%,transparent_70%)] transition-all duration-500" />
                
                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-sm bg-charcoal/40 border border-white/5 flex items-center justify-center transition-colors group-hover:border-luxury-gold/30">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-[9px] text-stone-grey/50 group-hover:text-luxury-gold/50 transition-colors">
                      N°//0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-soft-beige group-hover:text-luxury-gold transition-colors duration-300 font-normal mb-4">
                    {service.title}
                  </h3>

                  <p className="text-xs text-stone-grey leading-relaxed font-light mb-6 transition-colors group-hover:text-stone-grey/90">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom / Details & CTA */}
                <div>
                  <ul className="flex flex-col gap-2.5 mb-8 border-t border-white/[0.03] pt-5 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icons.Check className="w-3 h-3 text-luxury-gold flex-shrink-0" />
                        <span className="text-[10px] text-stone-grey font-light tracking-wide">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onSelectServiceForEstimate(service.title)}
                    className="flex items-center gap-1.5 text-[9px] tracking-[0.2em] font-mono text-stone-grey group-hover:text-luxury-gold transition-colors font-medium border-b border-transparent group-hover:border-luxury-gold/30 pb-0.5"
                  >
                    CALCULATE COST
                    <Icons.ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
