import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  key?: any;
}

function Counter({ value, suffix, label, sublabel }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1800; // ms
    const increment = Math.ceil(end / (duration / 16)); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start text-center md:text-left px-4 group">
      <div className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tighter text-soft-beige font-normal mb-3 transition-colors duration-500 group-hover:text-luxury-gold flex items-baseline">
        <span>{count}</span>
        <span className="text-luxury-gold font-light ml-0.5">{suffix}</span>
      </div>
      <div className="font-sans text-xs tracking-[0.25em] text-soft-beige uppercase font-medium mb-1">
        {label}
      </div>
      <div className="font-mono text-[9px] tracking-[0.1em] text-stone-grey uppercase">
        {sublabel}
      </div>
    </div>
  );
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, { once: true });

  const statsData = [
    { value: 500, suffix: '+', label: 'Spaces Designed', sublabel: 'High-end completions' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'Elite referral rate' },
    { value: 10, suffix: '+', label: 'Years Experience', sublabel: 'Award-winning lineage' },
    { value: 100, suffix: '%', label: 'Custom Solutions', sublabel: 'Zero modular presets' },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative py-20 md:py-28 bg-[#111111] border-y border-white/[0.04]"
    >
      {/* Background Subtle Geometries */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,178,111,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:divide-x md:divide-white/[0.04]">
        {statsData.map((stat, idx) => (
          <Counter
            key={idx}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            sublabel={stat.sublabel}
          />
        ))}
      </div>
    </section>
  );
}
