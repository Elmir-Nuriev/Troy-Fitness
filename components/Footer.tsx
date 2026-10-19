"use client";

import React from "react";
import { Dumbbell, Phone, MapPin, Clock, MessageCircle, ArrowUp } from "lucide-react";
import { Language, translations } from "./translations";

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-wider text-white">
                VORTEX <span className="text-amber-400">FITNESS</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/vortex.fitness.batumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 border border-white/10 flex items-center justify-center transition-all text-xs font-bold"
                title="Facebook"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/vortex_fitness_batumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 border border-white/10 flex items-center justify-center transition-all text-xs font-bold"
                title="Instagram"
              >
                IG
              </a>
              <a
                href="https://wa.me/995514030709"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#zones" className="hover:text-amber-400 transition-colors">
                  {t.nav.zones}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-amber-400 transition-colors">
                  {t.nav.trainers}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
            </ul>
          </div>

          {/* Gym Details */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              {t.footer.hoursTitle}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.footer.hoursSchedule}</span>
              </div>
              <p className="text-xs text-zinc-400">
                {t.footer.hoursSubnote}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.footer.openToday}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.footer.addressText}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+995514030709" className="hover:text-amber-400">
                  +995 514 03 07 09
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/995514030709" className="hover:text-emerald-400">
                  {t.footer.waChat}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} VORTEX FITNESS Batumi. {t.footer.allRightsReserved}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
