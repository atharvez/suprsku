"use client";

import React, { useState } from "react";
import { Send, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
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
    <section id="waitlist" className="py-24 bg-surface px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto bg-primary-container rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
      >
        {/* Animated floating sparkle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-0 right-0 p-8 text-on-primary-container/10"
        >
          <Sparkles size={140} />
        </motion.div>

        {/* Ambient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles size={14} /> Early Access
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-on-primary-container leading-tight font-headline"
            >
              Join the future of food compliance.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-on-primary-container/80 font-body leading-relaxed"
            >
              We're currently in private beta, helping select brands launch their labels faultlessly. Join the waitlist to be first in line for our public launch.
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, ease: "backOut" }}
                className="bg-white p-8 rounded-2xl shadow-xl text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="text-primary" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-on-surface mb-2 font-headline">You're on the list!</h3>
                <p className="text-on-surface-variant font-body mb-6">We'll reach out as soon as a spot opens up.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary font-bold hover:underline font-headline"
                >
                  Join with another email
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
              >
                <div>
                  <label htmlFor="w-name" className="block text-sm font-bold text-on-surface mb-2 font-headline">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="w-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-container-high border-0 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/30 transition-all font-body text-on-surface outline-none"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="w-email" className="block text-sm font-bold text-on-surface mb-2 font-headline">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="w-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-container-high border-0 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/30 transition-all font-body text-on-surface outline-none"
                    placeholder="jane@brand.com"
                  />
                </div>

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error text-sm font-medium"
                  >
                    Please try again later.
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-on-surface text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all text-lg flex items-center justify-center gap-2 group disabled:opacity-70 font-headline"
                >
                  {status === "loading" ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>
                      Join Waitlist
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </motion.button>
                <p className="text-[10px] text-center text-on-surface-variant font-body">
                  By joining, you agree to our terms and privacy policy.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
