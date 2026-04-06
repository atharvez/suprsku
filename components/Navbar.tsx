"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-zinc-950 ${isScrolled ? "shadow-lg shadow-black/40 py-3" : "py-5"
        }`}
    >
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none">
          <span className="text-2xl font-extrabold tracking-tighter font-headline">
            <span className="text-white">supr</span><span style={{ color: "#4ade80" }}>sku</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-headline text-sm font-medium tracking-tight">
          <Link href="#solutions" className="text-white/60 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="#how-it-works" className="text-white/60 hover:text-white transition-colors">
            How it Works
          </Link>
          <Link href="#faqs" className="text-white/60 hover:text-white transition-colors">
            FAQs
          </Link>
          <Link href="#contact" className="text-white/60 hover:text-white transition-colors">
            Support
          </Link>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#waitlist"
            className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg text-sm font-bold active:scale-95 duration-150 ease-in-out hover:brightness-105 transition-all font-headline"
          >
            Join Waitlist
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-white/10 p-6 space-y-4 absolute top-full left-0 w-full">
          <Link href="#solutions" className="block text-lg font-bold text-white font-headline" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
          <Link href="#how-it-works" className="block text-lg font-bold text-white font-headline" onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
          <Link href="#faqs" className="block text-lg font-bold text-white font-headline" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
          <Link href="#contact" className="block text-lg font-bold text-white font-headline" onClick={() => setMobileMenuOpen(false)}>Support</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
