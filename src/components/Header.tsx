import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export default function Header({ onOpenConsultation, onOpenEstimator }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Exhibition', href: '#portfolio' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'The Methodology', href: '#methodology' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Inquiries', href: '#contact' },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-charcoal/80 backdrop-blur-md border-b border-white/5 shadow-2xl'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col tracking-[0.25em] text-left group"
          >
            <span className="font-cinzel text-lg md:text-xl font-medium text-luxury transition-all duration-300">
              AURELIA
            </span>
            <span className="text-[7.5px] font-mono tracking-[0.45em] text-stone-grey group-hover:text-luxury-gold transition-colors duration-300">
              STUDIO D'INTERIEUR
            </span>
          </a>

          {/* Navigation Links for desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.href);
                }}
                className="text-xs tracking-[0.2em] uppercase text-soft-beige hover:text-luxury-gold transition-colors duration-300 font-sans font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={onOpenEstimator}
              className="text-[10px] tracking-[0.2em] font-mono uppercase px-5 py-2.5 rounded-full border border-soft-beige/10 bg-transparent hover:bg-soft-beige/5 text-soft-beige transition-all duration-300"
            >
              Estimate Project
            </button>
            <button
              onClick={onOpenConsultation}
              className="group flex items-center gap-2 text-[10px] tracking-[0.2em] font-medium uppercase px-6 py-2.5 rounded-full bg-luxury-gold hover:bg-luxury-gold-light text-matte-black transition-all duration-300 cursor-pointer"
            >
              Book Consultation
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="text-[9px] tracking-[0.15em] font-medium uppercase px-4 py-2 rounded-full bg-luxury-gold text-matte-black"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-soft-beige hover:text-luxury-gold transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-matte-black pt-28 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-6 pl-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(item.href);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-lg tracking-[0.25em] font-serif capitalize text-soft-beige hover:text-luxury-gold transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-12 px-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full text-center text-xs tracking-[0.2em] font-mono uppercase py-4 rounded-full border border-soft-beige/10 bg-transparent text-soft-beige"
              >
                Cost Calculator
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center text-xs tracking-[0.2em] font-medium uppercase py-4 rounded-full bg-luxury-gold text-matte-black"
              >
                Book Consultation
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-grey font-mono mt-4">
                <Lock className="w-3 h-3 text-luxury-gold" />
                <span>SSL SECURE CONNECTION REVISION</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
