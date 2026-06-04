import React from 'react';
import { Play, Sparkles } from 'lucide-react';

export default function VideoShowcase() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-matte-black">
      {/* Autoplay Muted Loop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-75 select-none pointer-events-none"
      >
        <source
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=231267cc4251ece6d73f1d3e8e19b67484606132&profile_id=165&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Contrast Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/50 to-matte-black/70" />
      <div className="absolute inset-0 bg-matte-black/20" />

      {/* Narrative Slogan Overlaid */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl flex flex-col items-center">
          {/* Subtle icon floating */}
          <div className="w-10 h-10 rounded-full border border-luxury-gold/30 bg-charcoal/40 backdrop-blur-md flex items-center justify-center text-luxury-gold mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
          </div>

          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-luxury-gold uppercase mb-4 block">
            CINEMATIC TOUR // BEHIND THE COMMISSION
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight tracking-wide max-w-3xl mb-8">
            "Space is the <span className="italics text-luxury">breath of art</span>."
          </h2>

          <div className="h-[1px] w-24 bg-white/20 mb-6" />

          <p className="text-stone-grey font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase">
            STUDIO AURELIA ARCHITECTS ON STAGE
          </p>
        </div>
      </div>

      {/* Live Badge Bottom Left */}
      <div className="absolute bottom-8 left-8 md:left-12 z-10 flex items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-stone-grey/70">
        <div className="w-2 h-2 rounded-full bg-luxury-gold animate-ping" />
        <span>VIRTUAL HD DIRECT BROADCAST</span>
      </div>
    </section>
  );
}
