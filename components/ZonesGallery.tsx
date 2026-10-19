"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { Language, translations } from "./translations";

interface ZonesGalleryProps {
  currentLang: Language;
  onOpenBooking: (service?: string) => void;
}

export const ZonesGallery: React.FC<ZonesGalleryProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const [activeZoneId, setActiveZoneId] = useState("power");

  const activeZone = t.zones.items.find((z) => z.id === activeZoneId) || t.zones.items[0];

  return (
    <section id="zones" className="py-24 bg-zinc-950/80 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.zones.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t.zones.title}
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-xl">
              {t.zones.desc}
            </p>
          </div>

          {/* Interactive Zone Switcher Pills */}
          <div className="flex flex-wrap gap-2">
            {t.zones.items.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeZoneId === zone.id
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {zone.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Zone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden mb-12">
          {/* Main Visual */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden group">
            <Image
              src={activeZone.image}
              alt={activeZone.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-amber-400 font-bold text-xs">
                {activeZone.tag}
              </span>
            </div>
          </div>

          {/* Description & Action */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {activeZone.title}
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              {activeZone.desc}
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.zones.feature1}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.zones.feature2}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking(activeZone.title)}
              className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>{t.zones.tryZone}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.zones.items.map((zone) => {
            const isCurrent = zone.id === activeZoneId;
            return (
              <div
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                  isCurrent
                    ? "border-amber-400 ring-2 ring-amber-500/40 scale-[1.02]"
                    : "border-white/10 hover:border-white/20 bg-zinc-900/60"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={zone.image}
                    alt={zone.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-xs font-bold text-amber-400">
                    {zone.tag}
                  </span>
                </div>
                <div className="p-4 bg-zinc-900/90">
                  <h4 className="font-bold text-sm text-white line-clamp-1">
                    {zone.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {zone.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
