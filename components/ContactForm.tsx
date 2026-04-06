"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface-container-highest border-0 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/30 transition-all font-body text-on-surface outline-none";

  return (
    <section id="contact" className="py-24 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4 font-headline">
            Contact Support
          </h2>
          <p className="text-on-surface-variant font-body">
            Have questions about compliance? Our experts are here to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white p-8 md:p-12 rounded-2xl editorial-shadow border border-surface-container"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, ease: "backOut" }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
                  className="inline-block mb-6"
                >
                  <CheckCircle2 className="text-primary-container mx-auto" size={64} />
                </motion.div>
                <h3 className="text-2xl font-bold text-on-surface mb-2 font-headline">Message Sent!</h3>
                <p className="text-on-surface-variant font-body mb-8">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary font-bold hover:underline font-headline"
                >
                  Send another message
                </button>
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
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "John Doe", field: "name" as const },
                  { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", field: "email" as const },
                ].map((inp, idx) => (
                  <motion.div
                    key={inp.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <label htmlFor={inp.id} className="block text-sm font-bold text-on-surface mb-2 font-headline">
                      {inp.label}
                    </label>
                    <input
                      type={inp.type}
                      id={inp.id}
                      required
                      value={formData[inp.field]}
                      onChange={(e) => setFormData({ ...formData, [inp.field]: e.target.value })}
                      className={inputClass}
                      placeholder={inp.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                >
                  <label htmlFor="message" className="block text-sm font-bold text-on-surface mb-2 font-headline">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="How can we help you?"
                  />
                </motion.div>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-error text-sm font-medium"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-bold editorial-shadow hover:brightness-105 transition-all text-lg flex items-center justify-center gap-2 group disabled:opacity-70 font-headline"
                >
                  {status === "loading" ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
