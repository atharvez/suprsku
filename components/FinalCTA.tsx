"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-on-surface rounded-[2rem] overflow-hidden relative shadow-2xl"
      >
        {/* Animated background blobs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        />

        <div className="relative z-10 py-20 px-8 text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-8 leading-tight font-headline"
          >
            Stop worrying about compliance.{" "}
            <span className="text-primary-container">Start selling today.</span>
          </motion.h2>

          <motion.a
            href="#waitlist"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-10 py-5 rounded-2xl text-xl font-extrabold shadow-2xl font-headline group"
          >
            Get Your FSSAI Label Now
            <ArrowUpRight
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-on-surface-variant font-medium mt-6 text-sm font-body"
          >
            Join 500+ brands launching faster with SuprSKU.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
