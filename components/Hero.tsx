"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden noise-bg">
      {/* Background Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[13px] font-bold uppercase tracking-[0.2em] font-headline"
          >
            <Sparkles size={14} className="animate-pulse" />
            Empowering Food Brands
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] font-headline"
          >
            Compliance <br />
            <span className="text-shimmer">Solved Forever.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-body"
          >
            Launch with absolute confidence. Our intelligent engine handles FSSAI regulations, labeling math, and legal requirements while you scale your brand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6 pt-6"
          >
            <a
              href="#waitlist"
              className="bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-all active:scale-95 font-headline"
            >
              Get Early Access
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all font-headline">
              View Sample Label
            </button>
          </motion.div>
        </div>

        {/* Hero Visual - High Fidelity Compliance Audit Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 max-w-5xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/10 to-emerald-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative glass-card rounded-3xl overflow-hidden border border-white/10 aspect-[16/9] flex flex-col md:flex-row">
            {/* Sidebar Mockup */}
            <div className="w-full md:w-64 bg-slate-900/60 p-8 border-r border-white/5 space-y-8 hidden md:block">
               <div className="h-2 w-24 bg-white/10 rounded-full mb-12" />
               <div className="space-y-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-2 rounded-full ${i === 1 ? 'bg-emerald-400/40 w-full' : 'bg-white/5 w-3/4'}`} />
                  ))}
               </div>
            </div>

            {/* Main Content Mockup */}
            <div className="flex-1 bg-slate-900/40 p-8 md:p-12">
               <div className="flex justify-between items-start mb-12">
                  <div className="space-y-3">
                    <h4 className="text-white font-bold text-xl font-headline">FSSAI Audit Report</h4>
                    <p className="text-slate-500 text-sm font-body">SKU: SPR-2024-ORGANIC-01</p>
                  </div>
                  <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold font-headline uppercase tracking-widest">
                    Compliant
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Score Dial Mockup */}
                  <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center space-y-4 border border-white/5">
                     <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                           <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                           <motion.circle 
                              cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" 
                              strokeDasharray="364.4" 
                              initial={{ strokeDashoffset: 364.4 }}
                              animate={{ strokeDashoffset: 36.4 }}
                              transition={{ duration: 1.5, delay: 0.8 }}
                              className="text-emerald-400" 
                           />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                           <span className="text-3xl font-black text-white font-headline">96%</span>
                           <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Score</span>
                        </div>
                     </div>
                  </div>

                  {/* Checklist Mockup */}
                  <div className="space-y-4">
                     {[
                       { label: "RDA Table formatting", status: "pass" },
                       { label: "Allergen highlighting", status: "pass" },
                       { label: "Net weight placement", status: "pass" },
                       { label: "Health claims validation", status: "warning" },
                     ].map((item, idx) => (
                       <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + (idx * 0.1) }}
                        key={idx} className="flex items-center justify-between p-4 glass-card rounded-xl border border-white/5"
                       >
                          <span className="text-xs text-slate-300 font-medium font-body">{item.label}</span>
                          <div className={`w-2 h-2 rounded-full ${item.status === 'pass' ? 'bg-emerald-400' : 'bg-amber-400'} shadow-[0_0_8px_currentColor]`} />
                       </motion.div>
                     ))}
                  </div>
               </div>
            </div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
