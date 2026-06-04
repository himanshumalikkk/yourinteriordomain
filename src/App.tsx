import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import VideoShowcase from './components/VideoShowcase';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import ConsultationCTA from './components/ConsultationCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ConsultationModal from './components/ConsultationModal';
import EstimateModal from './components/EstimateModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [selectedServiceForEstimate, setSelectedServiceForEstimate] = useState<string | null>(null);

  // Initial premium experiential loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenEstimatorWithService = (serviceTitle: string) => {
    setSelectedServiceForEstimate(serviceTitle);
    setIsEstimatorOpen(true);
  };

  const handleOpenEstimatorDirect = () => {
    setSelectedServiceForEstimate(null);
    setIsEstimatorOpen(true);
  };

  const handleScrollToTarget = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 90,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Custom Experiential Loading Screen */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#0e0e0e] flex flex-col justify-center items-center text-center px-6"
          >
            <div className="flex flex-col items-center">
              {/* Spinning clean golden ring loader */}
              <div className="w-14 h-14 rounded-full border border-white/[0.04] border-t-luxury-gold animate-spin mb-8" />
              
              {/* Monogram branding */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex flex-col tracking-[0.35em] text-center"
              >
                <span className="font-cinzel text-2xl md:text-3xl font-light text-luxury">
                  AURELIA
                </span>
                <span className="text-[9px] font-mono tracking-[0.5em] text-stone-grey mt-2">
                  STUDIO D'INTERIEUR
                </span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="font-mono text-[8px] tracking-widest text-stone-grey uppercase mt-12 block"
              >
                ESTABLISHED LONDON // MILAN // 2026
              </motion.span>
            </div>
          </motion.div>
        ) : (
          /* Core Content Website Stage */
          <motion.div
            key="web-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full relative"
          >
            {/* Header with quick triggers */}
            <Header 
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenEstimator={handleOpenEstimatorDirect}
            />

            {/* Main Components Stack */}
            <main className="w-full">
              
              {/* Section 1: Hero */}
              <Hero 
                onOpenConsultation={() => setIsConsultationOpen(true)}
                onExploreProjects={() => handleScrollToTarget('#portfolio')}
              />

              {/* Section 2: Animated Stats */}
              <Stats />

              {/* Section 3: Featured Projects Magazine Portfolio */}
              <Portfolio 
                onSelectProject={(id) => {
                  // Direct to contact form context, or open estimator with space defaults
                  setIsConsultationOpen(true);
                }}
              />

              {/* Section 4: Interactive comparison sliders */}
              <BeforeAfter />

              {/* Section 5: Editorial philosophy storyboard */}
              <Philosophy />

              {/* Section 6: Individual Services index */}
              <Services 
                onSelectServiceForEstimate={handleOpenEstimatorWithService}
              />

              {/* Section 7: Process timeline workflow */}
              <ProcessTimeline />

              {/* Section 8: Loop Design Video block */}
              <VideoShowcase />

              {/* Section 9: Testimonials reviews */}
              <Testimonials />

              {/* Section 10: Instagram-style masonry visual grid */}
              <Gallery />

              {/* Section 11: Accordian FAQs */}
              <FAQ />

              {/* Section 12: Premium bottom call-to-action */}
              <ConsultationCTA 
                onOpenConsultation={() => setIsConsultationOpen(true)}
                onOpenEstimator={handleOpenEstimatorDirect}
              />

              {/* Section 13: Contact cards, Google Map and Quick Inquiry Form */}
              <ContactSection />

            </main>

            {/* Master Footer with subscriptions and directories */}
            <Footer />

            {/* Non-intrusive floating WhatsApp support chat trigger */}
            <FloatingWhatsApp />

            {/* Sub-lead capture & scheduling modals */}
            <ConsultationModal 
              isOpen={isConsultationOpen}
              onClose={() => setIsConsultationOpen(false)}
            />

            <EstimateModal 
              isOpen={isEstimatorOpen}
              onClose={() => setIsEstimatorOpen(false)}
              initialService={selectedServiceForEstimate}
            />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
