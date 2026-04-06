"use client";

import React from "react";
import { Sparkles, Mail, Globe, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Label Generator", href: "#solutions" },
    { label: "Compliance Audit", href: "#solutions" },
    { label: "Join the Waitlist", href: "#waitlist" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  Connect: [
    { label: "Contact Support", href: "#contact" },
    { label: "Email Us", href: "mailto:support@labelgenie.com" },
    { label: "Careers", href: "#" },
  ],
};

const socials = [
  { icon: <Mail size={18} />, href: "#" },
  { icon: <Globe size={18} />, href: "#" },
  { icon: <MessageSquare size={18} />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 font-body text-sm">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="text-xl font-bold text-on-surface flex items-center gap-2 font-headline">
            <Sparkles className="text-primary-container fill-primary-container" size={24} />
            SuprSKU
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Revolutionizing food tech compliance with the "Editorial Guardian" design system. FSSAI simplified.
          </p>
          <div className="flex gap-4">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ y: -3, color: "#006e2f" }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center editorial-shadow text-on-surface-variant"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([section, links], colIdx) => (
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (colIdx + 1) * 0.1 }}
          >
            <h4 className="font-bold text-on-surface mb-6 font-headline">{section}</h4>
            <ul className="space-y-4 text-on-surface-variant">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-outline-variant/10 text-center text-on-surface-variant/60 text-xs"
      >
        <p>© {new Date().getFullYear()} SuprSKU. All rights reserved. FSSAI Compliance Simplified.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
