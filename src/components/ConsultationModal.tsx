import React, { useState } from 'react';
import { X, CalendarCheck, CheckCircle, ShieldCheck, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preference, setPreference] = useState('In-Person Mayfair Gallery');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        onClose();
      }, 5000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-matte-black/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Dialog Window */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 15 }}
            className="relative w-full max-w-lg bg-[#111111] border border-white/5 shadow-3xl rounded-sm z-10 overflow-hidden"
          >
            {/* Top Close bar */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-matte-black/60">
              <div className="flex items-center gap-2.5">
                <CalendarCheck className="w-5 h-5 text-luxury-gold" />
                <div>
                  <h3 className="font-serif text-base text-soft-beige">Request Private Session</h3>
                  <span className="font-mono text-[8px] tracking-[0.25em] text-stone-grey uppercase">INDIVIDUAL SESSION REVENUE</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-stone-grey hover:text-luxury-gold transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Segment */}
            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <p className="text-xs text-stone-grey font-light leading-relaxed">
                      Please designate your preferences. To maintain absolute confidentiality, sessions are scheduled on an individual block basis.
                    </p>

                    {/* Inputs */}
                    <div className="space-y-4">
                      
                      {/* Name */}
                      <div className="flex flex-col">
                        <label className="font-mono text-[8.5px] tracking-widest text-stone-grey uppercase mb-1.5">PATRON NAME</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Eleanor Sterling"
                          className="bg-matte-black border border-white/10 rounded-sm px-4 py-2.5 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="flex flex-col">
                          <label className="font-mono text-[8.5px] tracking-widest text-stone-grey uppercase mb-1.5">EMAIL</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="eleanor@sterling.com"
                            className="bg-matte-black border border-white/10 rounded-sm px-4 py-2.5 text-xs text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                          />
                        </div>

                        {/* Telephone contact */}
                        <div className="flex flex-col">
                          <label className="font-mono text-[8.5px] tracking-widest text-stone-grey uppercase mb-1.5">TELEPHONE</label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+44 77 1234 5678"
                            className="bg-matte-black border border-white/10 rounded-sm px-4 py-2.5 text-xs text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                          />
                        </div>
                      </div>

                      {/* Style Preference choice */}
                      <div className="flex flex-col">
                        <label className="font-mono text-[8.5px] tracking-widest text-stone-grey uppercase mb-1.5">SESSION FORMAT</label>
                        <select
                          value={preference}
                          onChange={(e) => setPreference(e.target.value)}
                          className="bg-matte-black border border-white/10 rounded-sm px-4 py-2.5 text-xs text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors cursor-pointer"
                        >
                          <option value="In-Person Mayfair Gallery">In-Person Mayfair Gallery</option>
                          <option value="In-Person Milan Studio">In-Person Milan Studio</option>
                          <option value="Digital Zoom / Secure HD Video">Digital Zoom / Secure HD Video</option>
                          <option value="Direct Telephone call">Direct Telephone call</option>
                        </select>
                      </div>

                      {/* Schedule Date */}
                      <div className="flex flex-col animate-pulse pt-1">
                        <label className="font-mono text-[8.5px] tracking-widest text-stone-grey uppercase mb-1.5">PREFERRED ESTIMATION DATE</label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-matte-black border border-white/10 rounded-sm px-4 py-2.5 text-xs text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors cursor-pointer"
                          />
                        </div>
                      </div>

                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full relative group overflow-hidden px-8 py-4 rounded-full bg-luxury-gold hover:bg-luxury-gold-light text-matte-black font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg mt-6"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? 'TRANSMITTING REQUEST...' : 'LOCK IN PRIVATE RESERVATION'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </button>

                    <div className="flex items-center gap-1.5 justify-center text-[9px] font-mono tracking-widest text-stone-grey/50 border-t border-white/[0.03] pt-5">
                      <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold/40" />
                      <span>SECURED PRIVACY DIRECT CHANNEL ENCRYPT ONCE</span>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6 animate-bounce">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl text-soft-beige font-normal mb-3">Reservation Pending</h3>
                    <p className="text-xs text-stone-grey font-light max-w-sm leading-relaxed mb-6">
                      Thank you, {name}. A confirmation email has been logged to {email}. An associate from our office will reach out to confirm your targeted date block.
                    </p>
                    <span className="font-mono text-[8px] tracking-[0.25em] text-luxury-gold/60 uppercase block">
                      SECURED CODES: // {Date.now().toString().slice(-6)}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
