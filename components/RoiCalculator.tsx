"use client";

import React, { useState } from "react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  ArrowRight,
  MessageCircle,
  Sparkles,
  PieChart,
  CheckCircle2,
} from "lucide-react";

interface NichePreset {
  id: string;
  name: string;
  defaultCheck: number;
  defaultLeads: number;
  multiplier: number;
  unit: string;
}

export function RoiCalculator() {
  const niches: NichePreset[] = [
    {
      id: "car",
      name: "Прокат авто (Батуми)",
      defaultCheck: 280,
      defaultLeads: 25,
      multiplier: 2.4,
      unit: "$",
    },
    {
      id: "realty",
      name: "Недвижимость / Агентства",
      defaultCheck: 4500,
      defaultLeads: 3,
      multiplier: 2.1,
      unit: "$",
    },
    {
      id: "services",
      name: "Премиум услуги / Клиники",
      defaultCheck: 180,
      defaultLeads: 40,
      multiplier: 2.6,
      unit: "$",
    },
    {
      id: "ecom",
      name: "E-Commerce / Бренды",
      defaultCheck: 75,
      defaultLeads: 120,
      multiplier: 2.8,
      unit: "$",
    },
  ];

  const [selectedNiche, setSelectedNiche] = useState<NichePreset>(niches[0]);
  const [avgCheck, setAvgCheck] = useState<number>(niches[0].defaultCheck);
  const [monthlyLeads, setMonthlyLeads] = useState<number>(niches[0].defaultLeads);

  const handleNicheChange = (niche: NichePreset) => {
    setSelectedNiche(niche);
    setAvgCheck(niche.defaultCheck);
    setMonthlyLeads(niche.defaultLeads);
  };

  const currentRevenue = avgCheck * monthlyLeads;
  const projectedLeads = Math.round(monthlyLeads * selectedNiche.multiplier);
  const projectedRevenue = Math.round(currentRevenue * selectedNiche.multiplier);
  const netGain = projectedRevenue - currentRevenue;

  return (
    <section id="calculator" className="relative py-24 md:py-32 bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>ПРОЗРАЧНАЯ ОКУПАЕМОСТЬ В ЦИФРАХ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Калькулятор потенциала{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              вашей прибыли
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Посмотрите, как внедрение сверхбыстрого сайта на Next.js в связке с целевым трафиком
            увеличивает поток закрытых клиентов и окупает разработку уже в первый месяц.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0E131F]/80 border border-white/10 backdrop-blur-2xl shadow-2xl">
          {/* Niche Selector Tabs */}
          <div className="mb-8">
            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Выберите сферу вашего бизнеса:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {niches.map((niche) => (
                <button
                  key={niche.id}
                  onClick={() => handleNicheChange(niche)}
                  className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-center ${
                    selectedNiche.id === niche.id
                      ? "bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/25"
                      : "bg-[#07090E] text-zinc-400 hover:text-white border border-white/5 hover:border-white/15"
                  }`}
                >
                  {niche.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-white/10">
            {/* Slider 1: Average Check */}
            <div className="p-5 rounded-2xl bg-[#07090E]/60 border border-white/5">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <span>Средний чек со сделки / клиента:</span>
                <span className="text-emerald-400 font-bold text-base font-mono">
                  ${avgCheck.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={selectedNiche.id === "realty" ? 500 : 20}
                max={selectedNiche.id === "realty" ? 15000 : 1500}
                step={selectedNiche.id === "realty" ? 250 : 10}
                value={avgCheck}
                onChange={(e) => setAvgCheck(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-2">
                <span>Мин: ${selectedNiche.id === "realty" ? "500" : "20"}</span>
                <span>Макс: ${selectedNiche.id === "realty" ? "15,000" : "1,500"}</span>
              </div>
            </div>

            {/* Slider 2: Current Monthly Clients */}
            <div className="p-5 rounded-2xl bg-[#07090E]/60 border border-white/5">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <span>Текущих клиентов в месяц:</span>
                <span className="text-cyan-400 font-bold text-base font-mono">
                  {monthlyLeads} чел.
                </span>
              </div>
              <input
                type="range"
                min="1"
                max={selectedNiche.id === "ecom" ? 400 : 80}
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-2">
                <span>1 клиент</span>
                <span>{selectedNiche.id === "ecom" ? "400 клиентов" : "80 клиентов"}</span>
              </div>
            </div>
          </div>

          {/* Results Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 text-center">
              <span className="text-xs font-mono text-zinc-400 uppercase">
                Текущая выручка
              </span>
              <div className="text-2xl font-black text-zinc-300 font-mono mt-1">
                ${currentRevenue.toLocaleString()}
              </div>
              <span className="text-[11px] text-zinc-500">
                при {monthlyLeads} сделках
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl pointer-events-none" />
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                Прогноз с Next.js + Трафиком
              </span>
              <div className="text-3xl font-black text-emerald-400 font-mono mt-1">
                ${projectedRevenue.toLocaleString()}
              </div>
              <span className="text-[11px] text-emerald-400/80 font-mono">
                ~{projectedLeads} клиентов (+{Math.round((selectedNiche.multiplier - 1) * 100)}%)
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                Дополнительная прибыль
              </span>
              <div className="text-3xl font-black text-white font-mono mt-1">
                +${netGain.toLocaleString()}
              </div>
              <span className="text-[11px] text-zinc-400">
                в месяц чистыми
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-xs sm:text-sm text-zinc-300 text-center sm:text-left">
              <span className="text-white font-semibold">Индивидуальный расчет:</span>{" "}
              Сайт окупается в среднем со 2–4 закрытых сделок в вашей нише.
            </div>

            <a
              href={`https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Я%20рассчитал%20в%20калькуляторе%20нишу%20${encodeURIComponent(
                selectedNiche.name
              )}:%20средний%20чек%20$${avgCheck},%20хочу%20получать%20${projectedLeads}%20клиентов%20в%20месяц.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Рассчитать медиаплан в WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
