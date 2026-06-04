import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Ruler, Calculator, Sparkles, Check, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string | null;
}

export default function EstimateModal({ isOpen, onClose, initialService }: EstimateModalProps) {
  const [step, setStep] = useState(1);
  const [spaceType, setSpaceType] = useState<string>(initialService || 'Villas');
  const [area, setArea] = useState<number>(3500); // Standard starting square footage
  const [materialTier, setMaterialTier] = useState<string>('platinum'); // classic, royal, platinum
  
  // Lead info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Estimator math constraints
  const BASE_RATES: { [key: string]: number } = {
    'Villas': 1800,           // rate per sq ft in Indian rupee equivalent of top luxury ($22)
    'Luxury Apartments': 1400,
    'Builder Floors': 1200,
    'Modular Kitchens': 2200,  // high raw material cost
    'Renovations': 900,
    'Commercial Spaces': 1100
  };

  const TIER_MULTIPLIERS: { [key: string]: number } = {
    'classic': 1.0,   // Standard quiet luxury
    'royal': 1.35,    // Premium Calacatta / solid oak
    'platinum': 1.75  // Rare quarry travertines / hand carved Italian imports / fully custom monoliths
  };

  const calculateEstimate = () => {
    const rate = BASE_RATES[spaceType] || 1500;
    const multiplier = TIER_MULTIPLIERS[materialTier] || 1.0;
    
    // Core costs
    const rawMaterialCost = Math.round(area * rate * multiplier);
    const designRetainerFee = Math.round(rawMaterialCost * 0.12); // 12% architectural spec fee
    const executionLabourFee = Math.round(rawMaterialCost * 0.28); // 28% construction/masonry fee
    const projectManagementFee = Math.round(rawMaterialCost * 0.08); // 8% daily audit supervision fee
    const totalEstimate = rawMaterialCost + designRetainerFee + executionLabourFee + projectManagementFee;
    
    return {
      rawMaterialCost,
      designRetainerFee,
      executionLabourFee,
      projectManagementFee,
      totalEstimate
    };
  };

  const estimate = calculateEstimate();

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate safe secure ledger write
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
        setName('');
        setEmail('');
        setPhone('');
        onClose();
      }, 5000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Blur Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-matte-black/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Core Window stage */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative w-full max-w-4xl bg-[#111111] border border-white/5 shadow-2xl rounded-sm z-10 overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Top header bar */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-matte-black/60 relative z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-charcoal border border-white/5 flex items-center justify-center text-luxury-gold">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-soft-beige">Aurelia Budget Speculator</h3>
                  <span className="font-mono text-[8px] tracking-[0.25em] text-stone-grey uppercase">TURNKEY COST CALIBRATION v4.1</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-stone-grey hover:text-luxury-gold transition-colors focus:outline-none cursor-pointer"
                aria-label="Close estimator views"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Stage columns inside */}
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
              
              {/* Left Column Settings block (Span 7) */}
              <div className="lg:col-span-7 p-6 sm:p-8 border-r border-white/5">
                
                {/* Step numbering tracking */}
                <div className="flex items-center gap-4 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono leading-none ${
                        step === s 
                          ? 'bg-luxury-gold text-matte-black font-semibold' 
                          : step > s 
                            ? 'bg-luxury-gold/20 text-luxury-gold' 
                            : 'bg-white/[0.02] text-stone-grey border border-white/5'
                      }`}>
                        {step > s ? <Check className="w-3 h-3" /> : s}
                      </span>
                      <span className={`text-[9px] tracking-widest font-mono uppercase hidden sm:inline ${
                        step === s ? 'text-soft-beige font-semibold' : 'text-stone-grey'
                      }`}>
                        {s === 1 ? 'Spatial configuration' : s === 2 ? 'Materials & Range' : 'Register report'}
                      </span>
                      {s < 3 && <span className="text-stone-grey/20 hidden sm:inline">/</span>}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <h4 className="font-serif text-lg text-soft-beige font-normal mb-1">Floor Selection & Typology</h4>
                      <p className="text-xs text-stone-grey font-light mb-6">Select the spatial category matching your target real estate location blueprint.</p>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {Object.keys(BASE_RATES).map((type) => {
                          const isSel = spaceType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setSpaceType(type)}
                              className={`p-4 rounded-sm border text-left transition-all duration-300 cursor-pointer ${
                                isSel 
                                  ? 'bg-charcoal/30 border-luxury-gold text-luxury-gold shadow-lg' 
                                  : 'border-white/5 hover:border-white/10 text-stone-grey hover:text-soft-beige bg-[#0e0e0e]'
                              }`}
                            >
                              <span className="text-[10px] tracking-widest uppercase font-mono font-medium block mb-1">
                                {type}
                              </span>
                              <span className="text-[9px] text-stone-grey block tracking-wide font-light">
                                Base Rate: // ₹{BASE_RATES[type]}/sqft
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Dimensions slider */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-xs font-mono tracking-wider">
                          <span className="text-stone-grey uppercase">TARGET FLOOR SIZE (SQ. FT.)</span>
                          <span className="text-luxury-gold font-bold">{area.toLocaleString()} SQFT</span>
                        </div>
                        
                        <div className="flex items-center gap-4 bg-matte-black border border-white/5 p-4 rounded-sm">
                          <Ruler className="w-4 h-4 text-stone-grey" />
                          <input
                            type="range"
                            min="500"
                            max="12000"
                            step="250"
                            value={area}
                            onChange={(e) => setArea(parseInt(e.target.value))}
                            className="flex-1 accent-luxury-gold cursor-pointer"
                          />
                        </div>
                        <div className="flex justify-between text-[9px] font-mono text-stone-grey/30 uppercase">
                          <span>500 sq ft</span>
                          <span>6,250 sq ft</span>
                          <span>12,000 sq ft</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <h4 className="font-serif text-lg text-soft-beige font-normal mb-1">Bespoke Material Tier</h4>
                      <p className="text-xs text-stone-grey font-light mb-6">Select the premium range alignment for limestone, veneering, and hardware.</p>

                      <div className="space-y-4 mb-8">
                        {[
                          {
                            id: 'classic',
                            title: 'Classic Luxe (Standard)',
                            mult: '1.0x',
                            desc: 'Premium Italian marbles, brushed wood veneers, high-end commercial laminates, Hettich cabinet runners, beautiful glare-free architectural spots.',
                          },
                          {
                            id: 'royal',
                            title: 'Royal Heritage Selection',
                            mult: '1.35x',
                            desc: 'Bookmatched Calacatta Gold stones, solid custom European oak panels, Rimadesio flush pivot entries, Dornbracht brass taps, integrated circadian lighting.',
                          },
                          {
                            id: 'platinum',
                            title: 'Monolithic Travertine Platinum',
                            mult: '1.75x',
                            desc: 'Rare hand-selected split-face Tivoli Travertine, custom-milled monolithic raw basalt sinks, hand-woven luxury silk linens, full state Lutron smart-house automation.',
                          }
                        ].map((tier) => {
                          const isSel = materialTier === tier.id;
                          return (
                            <button
                              key={tier.id}
                              type="button"
                              onClick={() => setMaterialTier(tier.id)}
                              className={`w-full p-5 rounded-sm border text-left transition-all duration-300 cursor-pointer flex justify-between items-start gap-4 ${
                                isSel 
                                  ? 'bg-charcoal/30 border-luxury-gold text-luxury-gold shadow-lg' 
                                  : 'border-white/5 hover:border-white/10 text-stone-grey hover:text-soft-beige bg-[#0e0e0e]'
                              }`}
                            >
                              <div>
                                <span className="text-xs tracking-widest uppercase font-mono font-bold block mb-1">
                                  {tier.title}
                                </span>
                                <span className="text-[10px] text-stone-grey block leading-relaxed font-light">
                                  {tier.desc}
                                </span>
                              </div>
                              <span className="font-mono text-[9px] bg-white/5 px-2 py-0.5 rounded-sm border border-white/5 text-soft-beige uppercase">
                                {tier.mult}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      {!submitted ? (
                        <form onSubmit={handleLeadSubmit} className="space-y-6">
                          <div className="border bg-zinc-900/[0.3] border-white/5 p-4 rounded-sm flex items-start gap-3">
                            <ShieldAlert className="w-4.5 h-4.5 text-luxury-gold flex-shrink-0 mt-0.5" />
                            <p className="text-[10px] text-stone-grey font-mono uppercase leading-relaxed">
                              DISCREET SPECIFICATION: TO PERSIST AND LOCK IN THESE DIRECT CALCULATIONS, SECURE THE REPORTS PARAMETERS VIA SECURE-EMAIL RECORD.
                            </p>
                          </div>

                          <h4 className="font-serif text-lg text-soft-beige font-normal mb-1">Secure Estimations Report</h4>
                          <p className="text-xs text-stone-grey font-light mb-6">Enter details below to download the itemized blueprint and schedule coordination call.</p>

                          {/* Inputs */}
                          <div className="space-y-4">
                            <div className="flex flex-col">
                              <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">FULL NAME</label>
                              <input 
                                type="text"
                                required 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Eleanor Sterling"
                                className="bg-matte-black border border-white/10 rounded-sm px-4 py-3 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                              />
                            </div>

                            <div className="flex flex-col">
                              <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">EMAIL ADDRESS</label>
                              <input 
                                type="email"
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="eleanor@sterlingholding.co"
                                className="bg-matte-black border border-white/10 rounded-sm px-4 py-3 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                              />
                            </div>

                            <div className="flex flex-col">
                              <label className="font-mono text-[9px] tracking-widest text-stone-grey uppercase mb-2">TELEPHONE PHONE NUMBER</label>
                              <input 
                                type="tel"
                                required 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+44 7700 900077"
                                className="bg-matte-black border border-white/10 rounded-sm px-4 py-3 text-sm text-soft-beige focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-stone-grey/30"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full relative group overflow-hidden px-8 py-4.5 rounded-full bg-luxury-gold hover:bg-luxury-gold-light text-matte-black font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg mt-6"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              {loading ? 'LOCKING IN DATA...' : 'REGISTER & COMPLETE WORKFLOW'}
                              <CheckCircle2 className="w-4 h-4" />
                            </span>
                          </button>
                        </form>
                      ) : (
                        <div className="text-center py-12 flex flex-col items-center">
                          <div className="w-14 h-14 rounded-full bg-luxury-gold/15 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6 animate-bounce">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <h4 className="font-serif text-2xl text-soft-beige font-normal mb-3">Estimations Report Issued</h4>
                          <p className="text-xs text-stone-grey font-light max-w-sm leading-relaxed mb-6">
                            Thank you, {name}. A private blueprint copy of these specifications has been secure-logged and sent to you at {email}.
                          </p>
                          <span className="font-mono text-[8px] tracking-[0.25em] text-luxury-gold/70 uppercase block">
                            SSL REGISTER OK — REFEREE COORDINATOR ACTIVE
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Symmetrical Left / Right triggers bottom */}
                {!submitted && (
                  <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/5">
                    <button
                      onClick={handlePrevStep}
                      disabled={step === 1}
                      className="flex items-center gap-2 text-[10px] tracking-widest font-mono text-stone-grey hover:text-soft-beige transition-colors disabled:opacity-20 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      PREVIOUS
                    </button>

                    {step < 3 && (
                      <button
                        onClick={handleNextStep}
                        className="flex items-center gap-2 text-[10px] tracking-widest font-mono text-luxury-gold hover:text-luxury-gold-light transition-colors cursor-pointer"
                      >
                        NEXT STAGE
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

              </div>

              {/* Right Column Specifications Display (Span 5) */}
              <div className="lg:col-span-5 bg-matte-black/40 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-stone-grey uppercase block mb-4">SPECIFIED BREAKDOWNS</span>
                  
                  <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex justify-between items-baseline py-2 border-b border-white/[0.03]">
                      <span className="text-[10px] text-stone-grey tracking-wide font-light">Typology Base</span>
                      <span className="font-mono text-[11px] text-soft-beige uppercase">{spaceType}</span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex justify-between items-baseline py-2 border-b border-white/[0.03]">
                      <span className="text-[10px] text-stone-grey tracking-wide font-light">Specified size</span>
                      <span className="font-mono text-[11px] text-soft-beige">{area.toLocaleString()} SQFT</span>
                    </div>

                    {/* Item 3 */}
                    <div className="flex justify-between items-baseline py-2 border-b border-white/[0.03]">
                      <span className="text-[10px] text-stone-grey tracking-wide font-light">Material Grade</span>
                      <span className="font-mono text-[11px] text-luxury-gold uppercase">{materialTier}</span>
                    </div>

                    {/* Detailed Math Lines */}
                    <div className="space-y-2 pt-6">
                      <div className="flex justify-between text-[11px] text-stone-grey/70">
                        <span>Architectural Design spec (12%)</span>
                        <span className="font-mono">₹{estimate.designRetainerFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-stone-grey/70">
                        <span>Materials Sourcing & Quaries</span>
                        <span className="font-mono">₹{estimate.rawMaterialCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-stone-grey/70">
                        <span>Turnkey Execution/Labour (28%)</span>
                        <span className="font-mono">₹{estimate.executionLabourFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-stone-grey/70">
                        <span>Project Management Audit (8%)</span>
                        <span className="font-mono">₹{estimate.projectManagementFee.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final calculated total sum */}
                <div className="mt-12 bg-charcoal/40 p-5 rounded-sm border border-white/5">
                  <span className="font-mono text-[9px] tracking-widest text-[#B59356] block mb-2 font-bold uppercase">ESTIMATED INVESTMENT</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-3xl text-gold font-normal">₹{estimate.totalEstimate.toLocaleString()}</span>
                    <span className="font-mono text-[8.5px] text-stone-grey uppercase">TURNKEY OVERALL</span>
                  </div>
                  <span className="font-mono text-[7px] text-stone-grey/50 block mt-2.5 uppercase tracking-wide">
                    THIS CALCULATION SERVES AS A HIGH-ACCURACY ESTIMATE BASED ON 2026 BENCHMARKS.
                  </span>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
