/*"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = ["NUTRIFLOW", "GREENBITES", "SNACKSMART", "PUREGRAIN"];

const TrustBar = () => {
  return (
    <section className="bg-slate-950 py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] mb-3 font-headline">
            Operational Excellence
          </p>
          <h3 className="text-2xl font-extrabold text-white font-headline tracking-tight">
            The Standard for <span className="text-emerald-400">500+</span> Food Tech Brands.
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-20 font-headline font-black text-white text-xl md:text-2xl">
          {brands.map((brand, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, color: "#10b981" }}
              className="opacity-20 hover:opacity-100 transition-all cursor-default tracking-tighter"
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
*/