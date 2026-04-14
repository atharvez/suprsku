"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 w-full z-50 px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`max-w-4xl mx-auto pointer-events-auto transition-all duration-500 rounded-full border border-white/10 ${
          isScrolled 
            ? "bg-slate-950/80 backdrop-blur-xl py-3 px-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent py-5 px-6"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center select-none group">
            <span className="text-xl font-extrabold tracking-tighter font-headline text-white">
              supr<span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">sku</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10 font-headline text-[13px] font-semibold tracking-wide uppercase">
            {[
              { label: "Solutions", href: "#solutions" },
              { label: "Process", href: "#how-it-works" },
              { label: "FAQs", href: "#faqs" },
            ].map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#waitlist"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-full text-[13px] font-bold transition-all active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-headline whitespace-nowrap"
            >
              Get Access
            </Link>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-4">
                {[
                  { label: "Solutions", href: "#solutions" },
                  { label: "Process", href: "#how-it-works" },
                  { label: "FAQs", href: "#faqs" },
                  { label: "Support", href: "#contact" },
                ].map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href} 
                    className="block text-lg font-bold text-white/70 hover:text-white font-headline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
