import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4500);
  };

  const handleQuickScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 90,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-matte-black border-t border-white/[0.04] pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,178,111,0.015)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Deck: Brand Signpost & Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.04] items-start">
          
          {/* Logo Brand signature (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex flex-col tracking-[0.25em] text-left mb-6">
              <span className="font-cinzel text-xl md:text-2xl font-light text-luxury">
                AURELIA
              </span>
              <span className="text-[8px] font-mono tracking-[0.45em] text-stone-grey mt-1">
                STUDIO D'INTERIEUR
              </span>
            </div>
            <p className="text-xs text-stone-grey/80 leading-relaxed max-w-sm font-light tracking-wide mb-8">
              Bespoke, award-winning luxury residential architectures. From sourcing rare marbles in Verona quarries to final on-site physical styling. London // Milan // New Delhi.
            </p>
          </div>

          {/* Quick links List (Span 4) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <span className="font-mono text-[9px] tracking-[0.2em] text-luxury-gold uppercase block mb-6 font-bold">DIRECTORY</span>
              <ul className="space-y-4">
                {[
                  { label: 'Exhibits', href: '#portfolio' },
                  { label: 'Our Philosophy', href: '#philosophy' },
                  { label: 'Blueprints', href: '#services' },
                  { label: 'Commission Process', href: '#methodology' },
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleQuickScroll(link.href)}
                      className="text-xs text-stone-grey hover:text-luxury-gold transition-colors font-light text-left cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-[9px] tracking-[0.2em] text-luxury-gold uppercase block mb-6 font-bold">SOCIELLE OFFICE</span>
              <ul className="space-y-4">
                {[
                  { label: 'Instagram', href: 'https://instagram.com' },
                  { label: 'Pinterest', href: 'https://pinterest.com' },
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'Vimeo Portfolio', href: 'https://vimeo.com' },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-stone-grey hover:text-luxury-gold transition-colors font-light flex items-center gap-1.5"
                    >
                      {social.label}
                      <ArrowUpRight className="w-3 h-3 text-stone-grey/40 group-hover:text-luxury-gold" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter (Span 4) */}
          <div className="lg:col-span-4">
            <span className="font-mono text-[9px] tracking-[0.2em] text-luxury-gold uppercase block mb-6 font-bold">THE JOURNAL SUBSCRIPTION</span>
            <p className="text-xs text-stone-grey/80 leading-relaxed font-light mb-6">
              Subscribe to recieve rare travertine project briefs, raw materials discovery logs, and private exhibition invitations. Unsubscribed anytime.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubscribe}
                  className="flex bg-charcoal border border-white/5 rounded-full p-1.5 focus-within:border-luxury-gold/30 transition-colors"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patron@estate-holding.com"
                    className="flex-1 bg-transparent border-none text-xs text-soft-beige px-4 focus:outline-none placeholder:text-stone-grey/20"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-luxury-gold hover:bg-luxury-gold-light text-matte-black text-[10px] tracking-widest uppercase font-semibold cursor-pointer transition-colors"
                  >
                    JOIN
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-luxury-gold text-xs font-mono font-medium py-3 border border-dashed border-luxury-gold/20 px-4 rounded-sm bg-luxury-gold/5"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>PREMIUM JOURNAL ENTRY CONFIRMED</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Deck: Location Coordinates & Legal copyright */}
        <div className="pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[10px] font-mono tracking-widest text-stone-grey/50 uppercase border-t border-white/[0.01]">
          <span>© {new Date().getFullYear()} AURELIA ARCHITECTURE & DESIGN STUDIO. ALL RIGHTS RESERVED.</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span>REG ID: #45-Savile-Row</span>
            <span>PRIVACY STATEMENTS</span>
            <span>TERMS OF ENGAGEMENT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
