"use client";

import React, { useState } from "react";
import { Send, Loader2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Waitlist = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "waitlist" }),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-32 bg-slate-950 px-6 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto glass-card rounded-[3.5rem] p-12 md:p-24 border border-white/5 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 text-center lg:text-left">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-widest font-headline">
               <Sparkles size={14} className="animate-spin-slow" /> Beta Program
             </div>
             
             <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] font-headline tracking-tight">
               Be the first to fuel the <span className="text-emerald-400">next Gen</span> of compliance.
             </h2>
             
             <p className="text-lg text-slate-400 font-body leading-relaxed max-w-lg mx-auto lg:mx-0">
               We’re selectively onboarding high-growth D2C brands to our private beta. Join the list to secure your priority access to the SuprSKU engine.
             </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 p-12 rounded-3xl text-center backdrop-blur-xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                  >
                    <CheckCircle2 className="text-slate-950" size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-3 font-headline">Registration Confirmed</h3>
                  <p className="text-slate-400 font-body">Verification email is on its way. Check your inbox.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-400 uppercase tracking-widest font-headline ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all font-body text-white outline-none placeholder:text-slate-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-400 uppercase tracking-widest font-headline ml-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all font-body text-white outline-none placeholder:text-slate-600"
                      placeholder="name@company.com"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-rose-500 text-sm font-semibold ml-1">There was an issue. Please try again.</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-5 rounded-2xl font-extrabold text-lg transition-all flex items-center justify-center gap-3 group disabled:opacity-50 font-headline mt-10 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    {status === "loading" ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>
                        Secure Priority Access
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
