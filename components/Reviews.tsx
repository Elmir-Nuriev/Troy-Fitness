"use client";

import React from "react";
import { Star, MessageSquare, ExternalLink, ThumbsUp } from "lucide-react";
import { Language, translations } from "./translations";

interface ReviewsProps {
  currentLang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-24 bg-zinc-950/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.reviews.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t.reviews.title}
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-xl">
              {t.reviews.desc}
            </p>
          </div>

          {/* Social Proof Metric Badge */}
          <div className="flex items-center gap-4 bg-glass-card px-5 py-3.5 rounded-2xl border border-white/10">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 bg-amber-500 flex items-center justify-center font-bold text-black text-xs">
                4.9
              </div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 bg-zinc-800 flex items-center justify-center text-amber-400 text-xs">
                ★
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-zinc-400 font-medium">
                Более 240 подтвержденных отзывов
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.reviews.list.map((rev, idx) => (
            <div
              key={idx}
              className="bg-glass-card rounded-2xl p-7 border border-white/10 hover:border-amber-500/20 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 font-medium">
                    Проверенный отзыв
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">{rev.name}</h4>
                  <span className="text-xs text-zinc-400">{rev.city}</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 text-amber-400">
                  <ThumbsUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links to social accounts */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
          <span>Смотрите больше реальных видео и отзывов:</span>
          <a
            href="https://www.facebook.com/t.roa.pit.nesi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
          >
            <span>Facebook (ტროა ფიტნესი)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-zinc-600">•</span>
          <a
            href="https://www.instagram.com/troy_fitness_batumi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
          >
            <span>Instagram (@troy_fitness_batumi)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
