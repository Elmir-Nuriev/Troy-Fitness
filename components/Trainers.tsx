"use client";

import React from "react";
import Image from "next/image";
import { Award, UserCheck, Calendar } from "lucide-react";
import { Language, translations } from "./translations";

interface TrainersProps {
  currentLang: Language;
  onOpenBooking: (trainerName?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <section id="trainers" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{t.trainers.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.trainers.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            {t.trainers.desc}
          </p>
        </div>

        {/* Coaches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.trainers.list.map((coach, idx) => (
            <div
              key={idx}
              className="bg-glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-300 group shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] sm:aspect-[4/4.5] overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-md">
                    {coach.exp}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-2">
                    {coach.name}
                  </h3>
                  <p className="text-amber-400 text-xs font-bold mt-0.5">
                    {coach.role}
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {coach.desc}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span>{t.trainers.customPlan}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(`${t.trainers.bookingPrefix}: ${coach.name}`)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-500/20 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.trainers.bookTrainer}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
