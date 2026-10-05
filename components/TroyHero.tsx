"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Flame, MapPin, Clock, MessageCircle } from "lucide-react";
import { Language, translations } from "./translations";

interface HeroProps {
  currentLang: Language;
  onOpenBooking: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Hero Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="Troy Fitness Gym Batumi"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse-glow"
        />
        {/* Layered gradients for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
              <Flame className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-semibold text-amber-300">
                {t.hero.badge}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-zinc-300">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white">4.9</span>
              <span className="text-zinc-400">/ 5.0 Google & FB</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Батуми, Агмашенебели 2г</span>
            </div>
          </div>

          {/* Epic Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
            <span>{t.hero.titleStart} </span>
            <span className="text-gold-gradient drop-shadow-sm">{t.hero.titleMiddle} </span>
            <br className="hidden sm:block" />
            <span className="text-white">{t.hero.titleEnd}</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl font-normal">
            {t.hero.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#pricing"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-black font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => onOpenBooking(t.hero.ctaSecondary)}
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white font-bold text-base transition-all hover:scale-[1.02] cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>{t.hero.ctaSecondary}</span>
            </button>

            <a
              href="https://wa.me/995514030709?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20тренировках%20в%20Troy%20Fitness%20Batumi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold text-base transition-all"
              title="Написать в WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="sm:hidden lg:inline">WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white text-gold-gradient">
                {t.hero.stats.space}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                {t.hero.stats.spaceDesc}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white text-gold-gradient">
                {t.hero.stats.equipment}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                {t.hero.stats.equipmentDesc}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white text-gold-gradient">
                {t.hero.stats.rating}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                {t.hero.stats.ratingDesc}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white text-gold-gradient">
                {t.hero.stats.hours}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                {t.hero.stats.hoursDesc}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
