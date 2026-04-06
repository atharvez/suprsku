"use client";

import React from "react";
import { Check, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4 font-headline">Transparent Pricing</h2>
          <p className="text-on-surface-variant font-body">Professional compliance, accessible for every startup.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-surface-container-lowest p-10 rounded-2xl editorial-shadow border border-surface-container space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-1 font-headline">Free Check</h3>
              <p className="text-on-surface-variant text-sm font-body">Test your current label</p>
            </div>
            <div className="text-4xl font-extrabold text-on-surface font-headline">
              ₹0 <span className="text-lg font-medium text-on-surface-variant/40">/ check</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-body">
                <Check className="text-on-surface-variant/40" size={18} /> 1 Label Audit
              </li>
              <li className="flex items-center gap-3 text-sm font-body">
                <Check className="text-on-surface-variant/40" size={18} /> Basic Compliance Check
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant/40 line-through font-body">
                <XCircle size={18} /> PDF Export
              </li>
            </ul>
            <button className="w-full py-4 border-2 border-outline-variant rounded-xl font-bold hover:bg-surface-container-low transition-all font-headline">
              Analyze Existing Label
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-surface-container-lowest p-10 rounded-2xl editorial-shadow border-2 border-primary-container relative space-y-6"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-bold font-headline">
              MOST POPULAR
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1 font-headline">Label Pro</h3>
              <p className="text-on-surface-variant text-sm font-body">Full generation & support</p>
            </div>
            <div className="text-4xl font-extrabold text-on-surface font-headline">
              ₹999 <span className="text-lg font-medium text-on-surface-variant/40">/ label</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-semibold font-body">
                <CheckCircle2 className="text-primary-container" size={18} /> Unlimited Edits
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold font-body">
                <CheckCircle2 className="text-primary-container" size={18} /> Full FSSAI Compliance
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold font-body">
                <CheckCircle2 className="text-primary-container" size={18} /> High-Res PDF & Vector
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold font-body">
                <CheckCircle2 className="text-primary-container" size={18} /> Allergen Intelligence
              </li>
            </ul>
            <button className="w-full py-4 bg-primary-container text-on-primary-container rounded-xl font-bold shadow-lg shadow-primary-container/20 hover:brightness-105 active:scale-95 transition-all font-headline">
              Generate My Label
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
