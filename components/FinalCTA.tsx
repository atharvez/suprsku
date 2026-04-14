"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="px-6 pb-32 bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto glass-card rounded-[4rem] overflow-hidden relative border border-white/5"
      >
        {/* Animated Background Highlights */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/5 pointer-events-none" />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"
        />

        <div className="relative z-10 py-24 px-8 text-center max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 border border-white/10 text-emerald-400 font-bold text-xs uppercase tracking-[0.3em] font-headline"
          >
             <Sparkles size={14} /> Ready to scale
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.95] font-headline">
            Start building <br />
            <span className="text-shimmer">product excellence.</span>
          </h2>

          <p className="text-xl text-slate-400 font-body leading-relaxed max-w-2xl mx-auto">
            Join the waitlist today and automate your FSSAI compliance workflow. Focus on your growth, and let our engine handle the technicalities.
          </p>

          <div className="pt-8">
            <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-emerald-500 text-slate-950 px-12 py-6 rounded-full text-xl font-extrabold shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition-all font-headline group"
            >
                Get Started Now
                <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={24}
                />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
