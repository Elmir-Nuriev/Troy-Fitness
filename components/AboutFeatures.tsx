"use client";

import React from "react";
import { Dumbbell, Wind, HeartPulse, Coffee, Lock, Award, Check } from "lucide-react";
import { Language, translations } from "./translations";

interface AboutFeaturesProps {
  currentLang: Language;
}

export const AboutFeatures: React.FC<AboutFeaturesProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const icons = [
    <Dumbbell key="1" className="w-6 h-6 text-amber-400" />,
    <Wind key="2" className="w-6 h-6 text-amber-400" />,
    <HeartPulse key="3" className="w-6 h-6 text-amber-400" />,
    <Coffee key="4" className="w-6 h-6 text-amber-400" />,
    <Lock key="5" className="w-6 h-6 text-amber-400" />,
    <Award key="6" className="w-6 h-6 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            {t.about.desc}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-glass-card rounded-2xl p-7 border border-white/10 hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/15 via-zinc-900 to-amber-500/10 border border-amber-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500 rounded-xl text-black">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Первое посещение без стресса и очередей
              </h4>
              <p className="text-sm text-zinc-400">
                Дежурный тренер бесплатно познакомит вас с залом и техникой безопасности
              </p>
            </div>
          </div>

          <a
            href="#pricing"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all shadow-lg shadow-amber-500/20"
          >
            Узнать стоимость абонементов
          </a>
        </div>
      </div>
    </section>
  );
};
