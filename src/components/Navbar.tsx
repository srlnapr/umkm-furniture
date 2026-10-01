"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 py-3 shadow-[0_4px_20px_rgba(21,13,10,0.04)]"
            : "bg-surface/60 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Identity - Clean & Artisanal */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group"
            onClick={() => setActiveSection("#home")}
          >
            <div className="w-9 h-9 rounded-full bg-primary-container text-[#e5d5cb] flex items-center justify-center font-serif text-lg font-semibold tracking-wider shadow-sm transition-transform duration-300 group-hover:scale-105">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-primary transition-colors group-hover:text-secondary">
                Kala & Kayu
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-outline font-medium -mt-0.5">
                Mebel & Kerajinan Kayu
              </span>
            </div>
          </Link>

          {/* Clean Central Nav Links: Home | About | Products | Gallery | Contact */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-surface-container-low/70 px-3 py-1.5 rounded-full border border-outline-variant/30 backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-surface rounded-full shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA: WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/6281129408820?text=Halo%20Kala%20%26%20Kayu%2C%20saya%20ingin%20konsultasi%20furniture."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-container hover:bg-secondary text-on-primary text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full shadow-sm transition-colors duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#ffdbcb]" />
              <span>WhatsApp</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-label="Menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className="py-2.5 text-base font-serif text-primary hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-3">
                <a
                  href="https://wa.me/6281129408820?text=Halo%20Kala%20%26%20Kayu%2C%20saya%20ingin%20konsultasi%20furniture."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-primary-container hover:bg-secondary text-on-primary py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#ffdbcb]" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
