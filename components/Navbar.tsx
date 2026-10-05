"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Экосистема", href: "#ecosystem" },
    { name: "Надежность", href: "#reliability" },
    { name: "Кейсы", href: "#cases" },
    { name: "Калькулятор", href: "#calculator" },
    { name: "Сравнение", href: "#comparison" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07090E]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="ELMIR.DEV Главная"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0E131F] border border-white/15 group-hover:border-emerald-500/50 transition-all duration-300 shadow-lg shadow-emerald-500/5">
              <span className="text-white font-black text-lg tracking-wider">E</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                ELMIR<span className="text-emerald-400 font-black">.DEV</span>
              </span>
              <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-mono">
                Digital & Web Lead Gen
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0E131F]/70 border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Status & CTA Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Батуми • 1 место в этом месяце</span>
            </div>

            <a
              href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20разработку%20сайта%20и%20воронки%20лидов%20в%20Батуми."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current text-zinc-950" />
              <span>Написать в WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-950" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20проект%20в%20Батуми."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current text-zinc-950" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0E131F] border border-white/10 text-zinc-200 hover:text-white focus:outline-none"
              aria-label="Переключить меню"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07090E]/98 border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-2xl">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Батуми • Свободен для нового проекта</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20проект%20в%20Батуми."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/30"
          >
            <MessageCircle className="w-4 h-4 fill-current text-zinc-950" />
            <span>Написать в WhatsApp (+995)</span>
          </a>
        </div>
      )}
    </header>
  );
}
