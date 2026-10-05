"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, Send } from "lucide-react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Быстрая связь"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#0E131F]/90 hover:bg-[#151D2E] text-zinc-300 hover:text-white border border-white/10 backdrop-blur-xl shadow-xl transition-all hover:scale-105"
          title="Наверх"
          aria-label="Прокрутить наверх"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Quick WhatsApp Button */}
      <a
        href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20проект%20сайта%20в%20Батуми."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 font-bold shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 active:scale-95 transition-all duration-300"
        title="Написать в WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current text-zinc-950" />
        <span className="hidden sm:inline text-xs font-mono font-bold tracking-wide">
          WhatsApp (+995)
        </span>
      </a>
    </aside>
  );
}
