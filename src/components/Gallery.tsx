import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Camera, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [lightboxImageId, setLightboxImageId] = useState<string | null>(null);

  const selectedImage = GALLERY_ITEMS.find((item) => item.id === lightboxImageId);

  return (
    <section className="relative py-28 md:py-36 bg-matte-black border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Intro Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
              EDITORIAL EXPOSURES // DIGITAL ARCHIVITY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight">
              Aesthetic <span className="italics text-luxury">Curation</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-stone-grey max-w-xs font-light leading-relaxed tracking-wide">
            A look behind the scenes at active construction sites, custom fabrications, and physical styling shoots. Derived from our studio portfolio highlights.
          </p>
        </div>

        {/* Real CSS Masonry Layout via grid columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_ITEMS.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
                className="break-inside-avoid relative overflow-hidden rounded-[2px] group border border-white/5 cursor-zoom-in"
                onClick={() => setLightboxImageId(item.id)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Veil Hover */}
                <div className="absolute inset-0 bg-matte-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 z-10" />

                <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none flex items-end justify-between">
                  <div className="max-w-[80%]">
                    <p className="font-serif text-sm text-soft-beige mb-1">{item.caption}</p>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-luxury-gold uppercase">
                      #AURELIA_STUDIO
                    </span>
                  </div>
                  
                  <div className="p-2 bg-charcoal/60 rounded-full border border-white/10 text-luxury-gold">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Subtle Camera layout decoration top-right */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white/30">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Full Screen Cinematic Lightbox */}
      <AnimatePresence>
        {lightboxImageId && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#070707]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxImageId(null)}
          >
            {/* Top Close Button bar */}
            <div className="absolute top-6 right-6 flex items-center gap-6 z-50">
              <span className="font-mono text-[9px] tracking-widest text-stone-grey uppercase hidden md:inline">
                AURELIA DIGITAL REGISTRY EXHIBIT
              </span>
              <button
                onClick={() => setLightboxImageId(null)}
                className="p-3 bg-charcoal/70 rounded-full border border-white/10 text-soft-beige hover:text-luxury-gold hover:border-luxury-gold/50 transition-all cursor-pointer"
                aria-label="Close image views"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Lightbox Frame */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-5xl max-h-[80vh] relative border border-white/5 bg-matte-black rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                className="w-full max-h-[85vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute bottom-0 inset-x-0 bg-matte-black/80 backdrop-blur-md px-6 py-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="font-serif text-sm text-soft-beige">{selectedImage.caption}</span>
                <span className="font-mono text-[8px] tracking-[0.2em] text-luxury-gold uppercase block sm:inline">
                  ARCHIVAL ID: // {selectedImage.id.toUpperCase()} — ORIGIN HIGH RES RENDER
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
