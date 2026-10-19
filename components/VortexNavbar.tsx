"use client";

import React, { useState, useEffect } from "react";
import { Dumbbell, Phone, Menu, X, Globe, MapPin, Clock, MessageCircle } from "lucide-react";
import { Language, translations } from "./translations";

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
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

  const languages: { code: Language; label: string; short: string; flag: string; title: string }[] = [
    { code: "ru", label: "Русский", short: "RU", flag: "🇷🇺", title: "Русский" },
    { code: "en", label: "English", short: "EN", flag: "🇬🇧", title: "English" },
    { code: "ka", label: "ქართული", short: "KA", flag: "🇬🇪", title: "ქართული" },
    { code: "tr", label: "Türkçe", short: "TR", flag: "🇹🇷", title: "Türkçe" },
  ];

  // 6 core links for perfect spacing without crowding
  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.zones, href: "#zones" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.trainers, href: "#trainers" },
    { label: t.nav.status, href: "#status" },
    { label: t.nav.contacts, href: "#contacts" },
  ];

  return (
    <>
      {/* Top Banner with Quick Info */}
      <div className="bg-zinc-950 border-b border-white/5 py-2 px-4 sm:px-6 lg:px-8 text-xs text-zinc-400 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Status, Hours, Address */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold tracking-wide">{t.nav.openStatus}</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-mono">08:00 – 23:45</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.nav.topAddress}</span>
            </span>
          </div>

          {/* Right: WhatsApp + Language Switcher */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/995514030709"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-400 text-[11px] font-semibold transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: <strong className="font-mono text-white">+995 514 03 07 09</strong></span>
            </a>

            <div className="h-3.5 w-px bg-white/10" />

            {/* Language Switcher Tabs with Flags */}
            <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-full border border-white/10">
              <Globe className="w-3.5 h-3.5 text-zinc-400 ml-1.5 mr-0.5" />
              {languages.map(({ code, short, flag, title }) => (
                <button
                  key={code}
                  onClick={() => onLanguageChange(code)}
                  title={title}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase transition-all flex items-center gap-1 cursor-pointer ${
                    currentLang === code
                      ? "bg-amber-500 text-black shadow-md scale-105"
                      : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="text-[12px]">{flag}</span>
                  <span>{short}</span>
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
            ? "bg-zinc-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
            : "bg-gradient-to-b from-zinc-950/95 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white flex items-center gap-1 leading-tight">
                VORTEX <span className="text-amber-400">FITNESS</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 font-semibold uppercase leading-tight">
                {t.nav.logoSubtitle || "BATUMI • PREMIUM CLUB"}
              </span>
            </div>
          </a>

          {/* Desktop Nav - 6 clean links with spacious gaps */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-amber-400 transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions - Luxury Phone Pill & Booking CTA */}
          <div className="hidden sm:flex items-center gap-4 xl:gap-5 shrink-0">
            <a
              href="tel:+995514030709"
              className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-amber-500/30 hover:border-amber-400/80 shadow-md shadow-black/40 hover:shadow-amber-500/10 transition-all cursor-pointer"
              title="+995 514 03 07 09"
            >
              <div className="w-7 h-7 rounded-full bg-amber-500/20 group-hover:bg-amber-500 flex items-center justify-center text-amber-400 group-hover:text-black transition-all shrink-0">
                <Phone className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400/90 group-hover:text-amber-300 transition-colors leading-none">
                  {t.nav.callUs || "Позвонить"}
                </span>
                <span className="font-mono text-xs font-bold tracking-wider text-zinc-100 group-hover:text-white transition-colors leading-tight mt-0.5">
                  +995 514 03 07 09
                </span>
              </div>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              {t.nav.bookBtn}
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 sm:hidden">
              {languages.map(({ code, short, flag, title }) => (
                <button
                  key={code}
                  onClick={() => onLanguageChange(code)}
                  title={title}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase transition-all flex items-center gap-0.5 cursor-pointer ${
                    currentLang === code
                      ? "bg-amber-500 text-black shadow-sm"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span className="text-[11px]">{flag}</span>
                  <span>{short}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
            {/* Mobile language selector full row */}
            <div className="grid grid-cols-4 gap-2 pb-3 border-b border-white/10">
              {languages.map(({ code, short, flag, title }) => (
                <button
                  key={code}
                  onClick={() => onLanguageChange(code)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                    currentLang === code
                      ? "bg-amber-500 text-black shadow-md"
                      : "bg-white/5 text-zinc-300 border border-white/10"
                  }`}
                >
                  <span className="text-base">{flag}</span>
                  <span>{short}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-zinc-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="tel:+995514030709"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-zinc-900 border border-amber-500/30 text-white font-bold text-sm shadow-md"
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono tracking-wider">+995 514 03 07 09</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider text-center shadow-lg shadow-amber-500/25 cursor-pointer"
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
