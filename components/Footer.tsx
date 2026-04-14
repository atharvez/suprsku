"use client";

import React from "react";
import { Sparkles, Mail, Globe, MessageSquare, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "AI Engine", href: "#solutions" },
    { label: "Compliance Audit", href: "#solutions" },
    { label: "Beta Access", href: "#waitlist" },
  ],
  Resources: [
    { label: "FSSAI Guidelines", href: "#" },
    { label: "Label Templates", href: "#" },
  ],
  Connect: [
    { label: "Expert Support", href: "#contact" },
    { label: "Direct Email", href: "mailto:support@suprsku.com" },
  ],
};

const socials = [
  { icon: <Mail size={18} />, href: "#", name: "Email" },
  { icon: <Globe size={18} />, href: "#", name: "Web" },
  { icon: <MessageSquare size={18} />, href: "#", name: "Chat" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-16 border-t border-white/5 noise-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 font-body">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-8"
        >
          <div className="text-2xl font-extrabold text-white tracking-tighter flex items-center gap-2 font-headline">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
               <Sparkles className="text-emerald-400" size={24} />
            </div>
            SuprSKU
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
            Enabling food brands to scale without compliance friction. Integrated intelligence for FSSAI labeling and regulatory audits.
          </p>
          <div className="flex gap-4">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ y: -4, color: "#10b981" }}
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 transition-all shadow-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Link Columns */}
        <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
            {Object.entries(footerLinks).map(([section, links], colIdx) => (
            <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIdx * 0.1 }}
                className="space-y-8"
            >
                <h4 className="font-bold text-white uppercase tracking-widest text-xs font-headline">{section}</h4>
                <ul className="space-y-5 text-slate-400">
                {links.map((link) => (
                    <li key={link.label}>
                    <Link
                        href={link.href}
                        className="hover:text-emerald-400 transition-colors flex items-center gap-1 group whitespace-nowrap"
                    >
                        {link.label}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </Link>
                    </li>
                ))}
                </ul>
            </motion.div>
            ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-medium"
      >
        <p>© {new Date().getFullYear()} SuprSKU Intelligence. All rights reserved.</p>
        <div className="flex gap-10">
           <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
           <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
