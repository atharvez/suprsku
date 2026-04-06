"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = ["NUTRIFLOW", "GREENBITES", "SNACKSMART", "PUREGRAIN"];

const TrustBar = () => {
  return (
    <section className="bg-surface py-12 border-y border-surface-container overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <p className="text-on-surface-variant font-bold uppercase tracking-widest text-xs mb-2 font-headline">
            The Industry Standard
          </p>
          <h3 className="text-2xl font-extrabold text-on-surface font-headline">
            Trusted by <span className="text-primary italic">500+</span> D2C food brands.
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-headline font-black text-on-surface text-xl">
          {brands.map((brand, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, color: "#006e2f" }}
              className="opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-default"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
