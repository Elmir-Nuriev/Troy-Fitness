"use client";

import React, { useState, useEffect } from "react";
import { Activity, Users, Clock, CheckCircle2, TrendingUp } from "lucide-react";
import { Language, translations } from "./translations";

interface GymStatusProps {
  currentLang: Language;
}

export const GymStatus: React.FC<GymStatusProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [currentHour, setCurrentHour] = useState(18); // default evening
  const [selectedHour, setSelectedHour] = useState<number | null>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    setCurrentHour(hour);
  }, []);

  // Hourly occupancy profile from 08:00 to 24:00
  const scheduleData = [
    { hour: 8, load: 20, label: "08:00" },
    { hour: 9, load: 30, label: "09:00" },
    { hour: 10, load: 40, label: "10:00" },
    { hour: 11, load: 45, label: "11:00" },
    { hour: 12, load: 50, label: "12:00" },
    { hour: 13, load: 45, label: "13:00" },
    { hour: 14, load: 40, label: "14:00" },
    { hour: 15, load: 45, label: "15:00" },
    { hour: 16, load: 55, label: "16:00" },
    { hour: 17, load: 75, label: "17:00" },
    { hour: 18, load: 88, label: "18:00" },
    { hour: 19, load: 92, label: "19:00" },
    { hour: 20, load: 85, label: "20:00" },
    { hour: 21, load: 60, label: "21:00" },
    { hour: 22, load: 40, label: "22:00" },
    { hour: 23, load: 25, label: "23:00" },
  ];

  const activeHour = selectedHour !== null ? selectedHour : currentHour;
  const currentSlot = scheduleData.find((s) => s.hour === activeHour) || {
    hour: currentHour,
    load: 35,
    label: `${currentHour}:00`,
  };

  const getLoadStatus = (load: number) => {
    if (load < 40)
      return {
        text: t.status.comfort,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10 border-emerald-500/20",
        barColor: "from-emerald-500 to-teal-400",
      };
    if (load < 75)
      return {
        text: t.status.moderate,
        color: "text-amber-400",
        bg: "bg-amber-500/10 border-amber-500/20",
        barColor: "from-amber-500 to-yellow-400",
      };
    return {
      text: t.status.busy,
      color: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20",
      barColor: "from-rose-500 to-amber-500",
    };
  };

  const status = getLoadStatus(currentSlot.load);

  return (
    <section id="status" className="py-16 bg-zinc-950 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <Activity className="w-3.5 h-3.5" />
                <span>Live Tracker</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t.status.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-1">
                {t.status.subtitle}
              </p>
            </div>

            {/* Current Real-time Badge */}
            <div className="flex items-center gap-4 bg-zinc-900/80 border border-white/10 p-4 rounded-xl">
              <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 font-medium block">
                  {selectedHour !== null ? `${t.status.forecastFor} ${currentSlot.label}` : t.status.now}:
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-white">
                    {currentSlot.load}%
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${status.bg} ${status.color}`}>
                    {status.text}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Bar Chart */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {t.status.hoursLegend}
              </span>
              <span className="text-zinc-500 text-[11px]">
                {t.status.clickBarHint}
              </span>
            </div>

            <div className="grid grid-cols-16 gap-1 sm:gap-2 items-end h-36 pt-6 pb-2 border-b border-white/5">
              {scheduleData.map((slot) => {
                const isCurrent = slot.hour === currentHour;
                const isSelected = slot.hour === selectedHour;
                const slotStatus = getLoadStatus(slot.load);

                return (
                  <button
                    key={slot.hour}
                    onClick={() => setSelectedHour(slot.hour === selectedHour ? null : slot.hour)}
                    className="flex flex-col items-center h-full justify-end group focus:outline-none cursor-pointer"
                    title={`${slot.label} - ${slot.load}%`}
                  >
                    <div className="w-full flex justify-center">
                      <div
                        style={{ height: `${slot.load}%` }}
                        className={`w-full max-w-[20px] rounded-t-md transition-all duration-300 bg-gradient-to-t ${
                          slotStatus.barColor
                        } ${
                          isSelected
                            ? "ring-2 ring-white scale-110 shadow-lg"
                            : isCurrent
                            ? "ring-2 ring-amber-400 shadow-md shadow-amber-500/30"
                            : "opacity-60 group-hover:opacity-100 group-hover:scale-105"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-[9px] sm:text-[11px] mt-2 font-mono ${
                        isCurrent
                          ? "text-amber-400 font-bold"
                          : isSelected
                          ? "text-white font-bold"
                          : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      {slot.hour}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Tips */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>
                  <strong>{t.status.idealTimeTitle}</strong> {t.status.idealTimeDesc}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  {t.status.legendComfort}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  {t.status.legendOptimal}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  {t.status.legendPeak}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
