import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Luxury Interior Design',
    message: '',
    timeframe: 'immediately'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate safe API submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      // Auto reset success screen after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: 'Luxury Interior Design',
          message: '',
          timeframe: 'immediately'
        });
      }, 5000);
    }, 1500);
  };

  const handleWhatsAppTrigger = () => {
    const text = encodeURIComponent("Hello Aurelia Studio. I am interested in inquiring about your custom interior design services.");
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-matte-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column - Form Submission (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-luxury-gold uppercase block mb-4">
                TRANSMISSION GATEWAY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-soft-beige font-normal leading-tight mb-6">
                Initiate Your <span className="italics text-luxury font-light">Commission</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-grey font-light leading-relaxed mb-12 max-w-xl">
                Please complete the registry specification below. An associate from our private client coordination group will connect with you within 24 working hours.
              </p>

              <div className="bg-[#111111] p-8 rounded-sm border border-white/5 shadow-2xl relative">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="flex flex-col">
                          <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">FULL NAME</label>
                          <input 
                            type="text" 
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="Eleanor Sterling"
                            className="bg-matte-black border border-white/10 rounded-sm px-4 py-3 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                          />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col">
                          <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">EMAIL ADDRESS</label>
                          <input 
                            type="email" 
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="eleanor@sterlingholding.co"
                            className="bg-matte-black border border-white/10 rounded-sm px-4 py-3 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Telephone Contact */}
                        <div className="flex flex-col">
                          <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">PHONE NUMBER</label>
                          <input 
                            type="tel" 
                            required
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            placeholder="+44 7700 900077"
                            className="bg-matte-black border border-white/10 rounded-sm px-4 py-3 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                          />
                        </div>

                        {/* Dropdown service choice */}
                        <div className="flex flex-col">
                          <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">SCOPE OF REQUEST</label>
                          <select 
                            value={formState.service}
                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                            className="bg-matte-black border border-white/10 rounded-sm px-4 py-3 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors cursor-pointer"
                          >
                            <option value="Luxury Interior Design">Luxury Interior Design</option>
                            <option value="Modular Kitchen Design">Modular Kitchen Design</option>
                            <option value="Bedroom Design">Bedroom Design</option>
                            <option value="Living Room Design">Living Room Design</option>
                            <option value="Complete Remodel">Complete Turnkey Remodel</option>
                          </select>
                        </div>
                      </div>

                      {/* Timeline selection */}
                      <div className="flex flex-col">
                        <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">ENGAGEMENT SCHEDULE</label>
                        <div className="grid grid-cols-3 gap-3">
                          {['immediately', '1-3 months', 'planning stage'].map((time) => {
                            const isSel = formState.timeframe === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setFormState({ ...formState, timeframe: time })}
                                className={`py-2 px-3 rounded-sm border text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                                  isSel 
                                    ? 'bg-luxury-gold border-luxury-gold text-matte-black font-semibold' 
                                    : 'border-white/10 hover:border-white/20 text-stone-grey hover:text-soft-beige bg-transparent'
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Brief text comments */}
                      <div className="flex flex-col">
                        <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">PROJECT BRIEF & DETAILS</label>
                        <textarea 
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Please sharing any context, architectural dimensions, site coordinates, or conceptual notes..."
                          className="bg-matte-black border border-white/10 rounded-sm px-4 py-3 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30 resize-none"
                        />
                      </div>

                      {/* Buttons Submit */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full sm:w-auto relative group overflow-hidden px-10 py-4 rounded-full bg-luxury-gold hover:bg-luxury-gold-light text-matte-black font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {loading ? 'Transmitting...' : 'Send Commission inquiry'}
                            <Send className="w-3.5 h-3.5" />
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={handleWhatsAppTrigger}
                          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-green-500/20 bg-green-500/[0.03] hover:bg-green-500/[0.08] text-green-400 font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 fill-none" />
                          Chat via WhatsApp
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-stone-grey/50 border-t border-white/[0.03] pt-5">
                        <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold/40" />
                        <span>DATA DISCRETION: SECURED IN CONFORMITY WITH GDPR POLICIES.</span>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-luxury-gold/15 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6 animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-serif text-2xl text-soft-beige font-normal mb-3">Commission Registered</h3>
                      <p className="text-xs text-stone-grey font-light max-w-sm leading-relaxed mb-6">
                        Thank you, {formState.name || 'valued patron'}. Your inquiry parameters have been secure-logged and routed directly to our private account coordinator.
                      </p>
                      <span className="font-mono text-[9px] tracking-widest text-luxury-gold/60 uppercase">
                        TRANS REG: // {Math.floor(Math.random() * 900000 + 100000)} SECURE-OK
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column - Map View & Address Details (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-12">
              {/* Detailed Contact Numbers */}
              <div>
                <span className="font-mono text-[9px] tracking-[0.25em] text-luxury-gold uppercase block mb-4">DIRECT COORDINATES</span>
                <div className="space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-sm bg-charcoal border border-white/5 text-luxury-gold mt-1">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest font-mono text-stone-grey uppercase block mb-1">Maison d’Art Headquarter</span>
                      <p className="text-sm text-soft-beige font-light leading-relaxed">
                        Mayfair House, 14 Savile Row<br />
                        London, W1S 3JN, United Kingdom
                      </p>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-sm bg-charcoal border border-white/5 text-luxury-gold mt-1">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest font-mono text-stone-grey uppercase block mb-1">Electronic Inquiries</span>
                      <a href="mailto:inquire@aurelia.studio" className="text-sm text-luxury-gold-light hover:text-luxury-gold transition-colors block font-light">
                        inquire@aurelia.studio
                      </a>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-sm bg-charcoal border border-white/5 text-luxury-gold mt-1">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest font-mono text-stone-grey uppercase block mb-1">Secured Hotline</span>
                      <a href="tel:+442079460077" className="text-sm text-soft-beige hover:text-luxury-gold transition-colors block font-light">
                        +44 (0) 20 7946 0077
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Spectacular Custom Google Map Box Frame */}
              <div>
                <span className="font-mono text-[9px] tracking-[0.25em] text-stone-grey uppercase block mb-4">SATELLITE POSITION RANGE</span>
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2px] overflow-hidden border border-white/5 bg-[#111111] bg-[radial-gradient(#1e1d1c_1px,transparent_1px)] [background-size:16px_16px] flex flex-col justify-between p-6">
                  {/* Glowing core location pinpoint map accent */}
                  <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-luxury-gold/10 border border-luxury-gold/40 flex items-center justify-center animate-pulse">
                      <div className="w-3 w-3 rounded-full bg-luxury-gold" />
                    </div>
                    <span className="font-mono text-[9px] text-luxury-gold font-bold tracking-widest mt-2 uppercase bg-matte-black/90 border border-white/10 px-2 py-0.5 rounded-sm shadow-xl">
                      MAYFAIR HW
                    </span>
                  </div>

                  {/* Stylized geometric background drawings to look ultra high-end */}
                  <svg className="absolute inset-0 w-full h-full text-white/[0.02]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    <line x1="0" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    <line x1="30%" y1="0" x2="30%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    <line x1="70%" y1="0" x2="70%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                  </svg>

                  {/* Top bar of map viewport */}
                  <div className="relative z-10 flex items-center justify-between font-mono text-[8px] tracking-[0.2em] text-stone-grey/80">
                    <span>LAT: 51.5111° N // LONG: 0.1419° W</span>
                    <span className="text-luxury-gold">MAP OK // G-MAPPED</span>
                  </div>

                  {/* Bottom bar explaining action */}
                  <div className="relative z-10 bg-matte-black/90 p-3 rounded-sm border border-white/5 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-serif text-xs text-soft-beige">Aurelia Mayfair Gallery</span>
                      <span className="font-mono text-[8px] tracking-widest text-stone-grey uppercase">Savile Row, London</span>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Savile+Row,+London"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[8px] tracking-widest font-mono text-luxury-gold font-bold uppercase border border-luxury-gold/20 px-3 py-1.5 rounded-sm hover:bg-luxury-gold hover:text-matte-black transition-all"
                    >
                      NAVIGATE
                      <ArrowRight className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
