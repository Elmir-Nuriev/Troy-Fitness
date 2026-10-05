"use client";

import React, { useState, useEffect } from "react";
import { Dumbbell, Phone, MessageCircle, Menu, X, Clock, MapPin, Globe } from "lucide-react";
import { Language, translations } from "./translations";

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.zones, href: "#zones" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.trainers, href: "#trainers" },
    { label: t.nav.calculator, href: "#calculator" },
    { label: t.nav.status, href: "#status" },
    { label: t.nav.contacts, href: "#contacts" },
  ];

  return (
    <>
      {/* Top Banner with Quick Info */}
      <div className="bg-zinc-950 border-b border-white/5 py-1.5 px-4 text-xs text-zinc-400 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium">{t.nav.openStatus}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>08:00 – 23:45</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Batumi, Agmashenebeli St. 2g</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/995514030709"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp: +995 514 03 07 09</span>
            </a>
            <div className="h-3 w-px bg-white/10" />
            {/* Language Switcher */}
            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-zinc-400 mr-1" />
              {(["ru", "en", "ka"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold uppercase transition-all ${
                    currentLang === lang
                      ? "bg-amber-500 text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
            : "bg-gradient-to-b from-zinc-950/90 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white flex items-center gap-1">
                TROY <span className="text-amber-400">FITNESS</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 font-semibold uppercase">
                BATUMI • ტროა
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+995514030709"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>514 03 07 09</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              {t.nav.bookBtn}
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1 sm:hidden">
              {(["ru", "en", "ka"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-semibold uppercase transition-all ${
                    currentLang === lang
                      ? "bg-amber-500 text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="tel:+995514030709"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+995 514 03 07 09</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-center"
              >
                {t.nav.bookBtn}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
