"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Box, FileText, Rocket, ArrowRight, Shield, Zap, Search } from "lucide-react";

const bentoCards = [
  {
    title: "Product Understanding",
    text: "Automatically identify applicable FSSAI categories and specific Gazette rules for your unique SKU.",
    icon: <Search className="text-emerald-400" size={24} />,
    className: "md:col-span-2 lg:col-span-2",
    bg: "bg-emerald-500/5",
  },
  {
    title: "Compliance Check",
    text: "Ingredient-level validation against national mandates.",
    icon: <Shield className="text-blue-400" size={24} />,
    className: "md:col-span-1 lg:col-span-1",
    bg: "bg-blue-500/5",
  },
  {
    title: "Instant Labels",
    text: "Generate print-ready PDFs in seconds.",
    icon: <Zap className="text-amber-400" size={24} />,
    className: "md:col-span-1 lg:col-span-1",
    bg: "bg-amber-500/5",
  },
  {
    title: "Launch Readiness",
    text: "Our scoring system ensures you never send a non-compliant product to market. Get a detailed gap analysis for every SKU before you print.",
    icon: <Rocket className="text-purple-400" size={24} />,
    className: "md:col-span-2 lg:col-span-2",
    bg: "bg-purple-500/5",
  },
];

const steps = [
  {
    number: "01",
    title: "Map Your Product",
    text: "Input ingredients and nutritional data through our intuitive wizard designed for non-technical teams.",
    icon: <Box size={20} />,
  },
  {
    number: "02",
    title: "AI Compliance Core",
    text: "Our engine cross-references 1,200+ regulations to validate every claim and formatting requirement.",
    icon: <Shield size={20} />,
  },
  {
    number: "03",
    title: "Resolve Conflicts",
    text: "Receive clear, actionable feedback to fix errors—from font sizes to allergen highlights.",
    icon: <CheckCircle2 size={20} />,
  },
  {
    number: "04",
    title: "Deploy & Scale",
    text: "Download your certificate of compliance and high-res label files ready for manufacturing.",
    icon: <Rocket size={20} />,
  },
];

const ProductGuide = () => {
  return (
    <section className="bg-slate-950 text-white py-32 space-y-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* WHAT WE DO - BENTO GRID */}
        <div id="solutions" className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-sm font-headline">Intelligence</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline">What We Do</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bentoCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-[2rem] border border-white/5 overflow-hidden glass-card ${card.className}`}
              >
                <div className={`absolute inset-0 ${card.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-white/10">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 font-headline">{card.title}</h4>
                    <p className="text-slate-400 leading-relaxed font-body">
                      {card.text}
                    </p>
                  </div>
                </div>
                {/* Visual Flair */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS - VERTICAL FLOW */}
        <div id="how-it-works" className="pt-32 space-y-24">
           <div className="text-center space-y-4">
            <h2 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-sm font-headline">Process</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline">How It Works</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 relative">
            {/* Connecting Line */}
            <div className="absolute left-[39px] top-0 w-px h-full bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden md:block" />

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-12 group"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-3xl glass-card flex items-center justify-center text-emerald-400 font-extrabold text-2xl font-headline border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all z-10 relative">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2 md:pt-4 space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 md:hidden">
                        {step.icon}
                     </div>
                     <h4 className="text-2xl font-bold font-headline">{step.title}</h4>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed font-body max-w-2xl">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SOFT CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-32"
        >
           <div className="glass-card p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-all" />
              <div className="relative z-10 space-y-8">
                <h4 className="text-3xl md:text-5xl font-bold font-headline max-w-2xl mx-auto tracking-tight">
                   Ready to automate your <span className="text-emerald-400">compliance audit</span>?
                </h4>
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-3 bg-emerald-500 text-slate-950 px-12 py-5 rounded-full font-extrabold text-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-all font-headline"
                >
                  Join the Beta
                  <ArrowRight size={20} />
                </a>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGuide;
