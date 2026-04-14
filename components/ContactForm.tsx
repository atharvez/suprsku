"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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

  const inputClass =
    "w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all font-body text-white outline-none placeholder:text-slate-600";

  return (
    <section id="contact" className="py-32 bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageSquare size={32} />
             </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-headline">
               Talk to our <span className="text-emerald-400">experts</span>
             </h2>
             <p className="text-slate-400 text-lg font-body leading-relaxed max-w-sm">
               Have a question about FSSAI regulations or SKU integration? Get a detailed response from our compliance team within 24 hours.
             </p>
             <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4 text-slate-300 font-body">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                   Rapid SKU Auditing
                </div>
                <div className="flex items-center gap-4 text-slate-300 font-body">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                   Direct Legal Support
                </div>
                <div className="flex items-center gap-4 text-slate-300 font-body">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                   Enterprise Onboarding
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 rounded-[2.5rem] border border-white/5 relative"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                  >
                    <CheckCircle2 className="text-slate-950" size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-headline">Message Transmitted</h3>
                  <p className="text-slate-400 font-body mb-8">Our team is reviewing your inquiry.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-emerald-400 font-bold hover:underline font-headline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest font-headline ml-1">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest font-headline ml-1">Email</label>
                       <input
                         type="email"
                         required
                         value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                         className={inputClass}
                         placeholder="john@example.com"
                       />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest font-headline ml-1">Inquiry</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="How can our compliance engine help you?"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-rose-500 text-sm font-semibold">Transmission failed. Retry.</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-white text-slate-950 py-5 rounded-2xl font-extrabold text-lg transition-all flex items-center justify-center gap-3 group disabled:opacity-50 font-headline shadow-xl hover:bg-slate-100"
                  >
                    {status === "loading" ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>
                        Request Expert Callback
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
