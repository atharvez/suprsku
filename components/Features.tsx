"use client";

import React from "react";
import { BrainCircuit, Ban, TimerOff, AlertTriangle, CheckCircle, Smartphone } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const problems = [
  {
    icon: <BrainCircuit className="text-error" size={32} />,
    title: "Confusing Rules",
    description: "Deciphering technical Gazette notifications is a full-time job. One mistake leads to rejection.",
  },
  {
    icon: <Ban className="text-error" size={32} />,
    title: "Hidden Costs",
    description: "Consultants charge ₹5,000+ for a single label design. It adds up fast for a growing SKU list.",
  },
  {
    icon: <TimerOff className="text-error" size={32} />,
    title: "Slow Processes",
    description: "Waiting weeks for legal feedback kills your launch momentum. Your product sits in the warehouse.",
  },
  {
    icon: <AlertTriangle className="text-error" size={32} />,
    title: "Heavy Fines",
    description: "Non-compliant labels lead to product recalls and heavy penalties from FSSAI inspectors.",
  },
];

const solutions = [
  {
    title: "Auto-Calculation",
    description: "Just enter your ingredients; we handle the RDA and per-serve math.",
  },
  {
    title: "Format Perfection",
    description: "Font sizes, logo placement, and allergen warnings automatically formatted.",
  },
  {
    title: "Legal Watchdog",
    description: 'Instant warnings if your claims (like "Organic" or "Natural") violate FSSAI guidelines.',
  },
];

const steps = [
  {
    step: "1. Enter product details",
    desc: "Tell us your ingredients, net weight, and shelf life. No technical jargon needed.",
    icon: <Smartphone className="text-primary" size={32} />,
  },
  {
    step: "2. System checks compliance",
    desc: "Our engine cross-references 1,200+ FSSAI mandates against your data in real-time.",
    icon: <CheckCircle className="text-primary-container" size={32} />,
  },
  {
    step: "3. Download ready label",
    desc: "Get a high-resolution PDF or AI file ready for your packaging designer or printer.",
    icon: <Smartphone className="text-primary" size={32} />,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i ?? 0) * 0.1, ease: "easeOut" },
  }),
};

const Features = () => {
  return (
    <div id="solutions">
      {/* Problem Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">
              Compliance shouldn't be this hard.
            </h2>
            <p className="text-on-surface-variant font-body">
              The road to FSSAI compliance is riddled with confusing jargon and hidden fees. We removed the roadblocks so you can focus on your product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((prob, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-surface-container-lowest p-8 rounded-xl space-y-4 editorial-shadow border-b-4 border-error/20 cursor-default"
              >
                {prob.icon}
                <h3 className="font-bold text-lg font-headline">{prob.title}</h3>
                <p className="text-sm text-on-surface-variant font-body">{prob.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-surface-container-lowest py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-video bg-surface-container-highest rounded-2xl overflow-hidden editorial-shadow border border-surface-container relative">
              <div className="absolute inset-0 bg-white p-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                    <CheckCircle className="text-primary" />
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-surface-container-high rounded mb-2" />
                    <div className="h-3 w-48 bg-surface-container rounded" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="h-8 bg-surface-container-low rounded-lg w-full flex items-center px-4"
                    >
                      <div className="h-2 w-full bg-surface-container-high rounded" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface leading-tight font-headline">
              FSSAI compliance simplified in one place.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed font-body">
              SuprSKU is your AI-powered compliance partner. We've baked the entire FSSAI (Labelling and Display) Regulations into a smart wizard that guides you through every requirement.
            </p>
            <ul className="space-y-4">
              {solutions.map((sol, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-primary-container mt-1 shrink-0" size={20} />
                  <p className="font-body">
                    <span className="font-bold text-on-surface">{sol.title}:</span>{" "}
                    {sol.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface font-headline">
              How It Works
            </h2>
            <p className="text-on-surface-variant font-body mt-4">
              Your compliant label is just three steps away.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="text-center space-y-6"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                  className="w-20 h-20 bg-surface-container-lowest rounded-full mx-auto flex items-center justify-center shadow-lg border border-surface-container"
                >
                  {step.icon}
                </motion.div>
                <h3 className="font-bold text-xl font-headline">{step.step}</h3>
                <p className="text-on-surface-variant text-sm font-body">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
