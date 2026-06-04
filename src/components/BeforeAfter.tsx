import React, { useState, useRef, useEffect } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data';
import { MoveLeft, MoveRight, Layers3 } from 'lucide-react';
import { motion } from 'motion/react';

export default function BeforeAfter() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const currentItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });
    observer.observe(containerRef.current);

    window.addEventListener('resize', updateWidth);
    const timer = setTimeout(updateWidth, 150);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, [activeItemIndex]);

  // Handle calculation logic during dragging
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    // Safety boundaries
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="transformations" className="relative py-28 md:py-36 bg-[#111111] border-b border-white/[0.04] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading Block */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
              TRANSFIGURATION SPECTRA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight">
              Anatomy of a <span className="italics text-luxury">Transformation</span>
            </h2>
          </div>

          {/* Toggle Controls to switch screens */}
          <div className="flex items-center gap-4 bg-matte-black p-1.5 rounded-full border border-white/5 shadow-inner">
            {BEFORE_AFTER_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(index);
                  setSliderPosition(50); // Reset position
                }}
                className={`px-5 py-2.5 rounded-full text-[10px] tracking-widest uppercase font-mono transition-all duration-300 cursor-pointer ${
                  activeItemIndex === index 
                    ? 'bg-luxury-gold text-matte-black font-semibold' 
                    : 'text-stone-grey hover:text-soft-beige bg-transparent'
                }`}
              >
                {index === 0 ? 'Living Evolution' : 'Culinary Heart'}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm md:text-base text-stone-grey font-light leading-relaxed">
            {currentItem.description}
          </p>
        </div>

        {/* Interactive Comparison Slider Stage */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/9] max-h-[620px] select-none overflow-hidden rounded-[2px] border border-white/5 shadow-2xl cursor-ew-resize"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={() => {
            setIsDragging(true);
          }}
        >
          {/* Before Image (Background Layer) */}
          <img 
            src={currentItem.beforeImage} 
            alt="Original Space Shell before luxury architecture" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-75 grayscale-[30%]"
            draggable="false"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6 z-10 bg-matte-black/70 backdrop-blur-md border border-white/10 px-4 py-2 font-mono text-[9px] tracking-widest text-[#d87c7c] uppercase rounded-sm">
            {currentItem.beforeLabel}
          </div>

          {/* After Image (Top Sliding Layer) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={currentItem.afterImage} 
              alt="Transfigured Space styled elegantly with Calacatta and Travertine" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
              style={{ width: containerWidth || '100%' }}
              draggable="false"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-6 right-6 z-10 bg-matte-black/70 backdrop-blur-md border border-white/10 px-4 py-2 font-mono text-[9px] tracking-widest text-luxury-gold uppercase rounded-sm">
            {currentItem.afterLabel}
          </div>

          {/* The Slider Drag Split Bar & Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-[1px] bg-luxury-gold pointer-events-none shadow"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Round Drag Handle Button Bubble */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-charcoal/90 backdrop-blur-md border border-luxury-gold text-luxury-gold flex items-center justify-center shadow-3xl pointer-events-none">
              <div className="flex items-center gap-1">
                <MoveLeft className="w-3 h-3 text-luxury-gold-light" />
                <Layers3 className="w-2.5 h-2.5 text-stone-grey" />
                <MoveRight className="w-3 h-3 text-luxury-gold-light" />
              </div>
            </div>
            
            {/* Floating Handle Label instructions */}
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[0.25em] text-matte-black bg-luxury-gold px-2.5 py-1 rounded-sm shadow-xl font-bold uppercase whitespace-nowrap">
              DRAG TO VISUALIZE
            </span>
          </div>
        </div>

        {/* Floating Controls hint bottom */}
        <div className="w-full flex justify-center items-center gap-3 mt-6 text-[10px] font-mono tracking-widest text-stone-grey/60 uppercase">
          <MoveLeft className="w-3.5 h-3.5 animate-pulse" />
          <span>Slide or touch drag to inspect structural alterations</span>
          <MoveRight className="w-3.5 h-3.5 animate-pulse" />
        </div>

      </div>
    </section>
  );
}
