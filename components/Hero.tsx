"use client";

import React from "react";
import {
  MessageCircle,
  ArrowRight,
  Zap,
  Gauge,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#07090E]">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Cyber Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0E131F]/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-xl shadow-lg shadow-emerald-500/10 mb-8 animate-pulse-border">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200">
              ⚡ Премиальная разработка и лидогенерация под ключ в Батуми
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Премиальные сайты и воронки трафика, которые{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent underline decoration-emerald-500/30 decoration-wavy">
              окупаются
            </span>{" "}
            с первых прямых клиентов
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Никаких сложных терминов и кода. Создаю сверхбыстрые платформы на Next.js,
            упаковываю соцсети, запускаю рекламу и сопровождаю ваш бизнес 24/7.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
            <a
              href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20проект%20сайта%20и%20воронки%20лидов%20в%20Батуми."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-zinc-950 font-bold text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <MessageCircle className="w-5 h-5 fill-current text-zinc-950 relative z-10" />
              <span className="relative z-10">Обсудить проект в WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-zinc-950 group-hover:translate-x-1 transition-transform relative z-10" />
            </a>

            <a
              href="#cases"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0E131F]/80 hover:bg-[#141B2D] text-zinc-200 hover:text-white border border-white/10 hover:border-emerald-500/40 font-semibold text-base backdrop-blur-xl transition-all duration-200 shadow-lg"
            >
              <span>Смотреть реальные кейсы</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 pb-12 border-t border-white/5">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Батуми & Грузия локально</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Next.js 16 + React 19</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>0% комиссий агрегаторов</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Фиксированная цена</span>
            </div>
          </div>
        </div>

        {/* 3D Floating Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card A: PageSpeed */}
          <div className="relative group p-6 sm:p-7 rounded-3xl bg-[#0E131F]/70 border border-white/10 hover:border-emerald-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-2xl shadow-black/60 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
            
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Gauge className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono font-semibold border border-emerald-400/20">
                Google Audit
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                100
              </span>
              <span className="text-2xl font-bold text-emerald-400 font-mono">/100</span>
            </div>

            <h3 className="text-lg font-bold text-zinc-100 mb-1">
              Mobile Google PageSpeed
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Мгновенный отклик за 0.4 сек. Клиенты не уходят к конкурентам из-за долгой загрузки сайта.
            </p>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400/80 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Core Web Vitals Passed</span>
            </div>
          </div>

          {/* Card B: 99.9% Uptime */}
          <div className="relative group p-6 sm:p-7 rounded-3xl bg-[#0E131F]/70 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-2xl shadow-black/60 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
            
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-mono font-semibold border border-cyan-400/20">
                Edge Global CDN
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                99.9%
              </span>
              <span className="text-xl font-bold text-cyan-400 font-mono">Uptime</span>
            </div>

            <h3 className="text-lg font-bold text-zinc-100 mb-1">
              Безотказная работа без сбоев
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Бессерверная архитектура Vercel / Cloudflare. Защита от DDoS и бесплатный автообновляемый SSL.
            </p>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-cyan-400/80 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>Zero-Downtime Deployment</span>
            </div>
          </div>

          {/* Card C: 24/7 Support */}
          <div className="relative group p-6 sm:p-7 rounded-3xl bg-[#0E131F]/70 border border-white/10 hover:border-amber-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-2xl shadow-black/60 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />
            
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Headphones className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-mono font-semibold border border-amber-400/20">
                Direct Contact
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                24/7
              </span>
              <span className="text-xl font-bold text-amber-400 font-mono">Лично</span>
            </div>

            <h3 className="text-lg font-bold text-zinc-100 mb-1">
              Поддержка и обучение команды
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Прямой контакт в WhatsApp / Telegram. 2-минутные видеоинструкции: как менять цены и фото без программиста.
            </p>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-amber-400/80 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Ответ за 15 минут</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
