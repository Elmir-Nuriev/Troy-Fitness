"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Smartphone,
  MessageSquare,
  Lock,
  CloudLightning,
  Video,
  Clock,
  CheckCircle,
  Activity,
  Server,
  Terminal,
  Zap,
} from "lucide-react";

export function ReliabilityGrid() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const cards = [
    {
      icon: CloudLightning,
      accent: "emerald",
      badge: "Безотказность",
      title: "Никаких белых экранов и сбоев",
      subtitle: "Бессерверный хостинг, защита от атак, сертификаты SSL",
      description:
        "Забудьте об упавших серверах, вирусах и 'белых экранах смерти'. Архитектура Next.js распределена по мировым серверам Vercel и Cloudflare: сайт работает молниеносно 24 часа в сутки 365 дней в году.",
      highlights: [
        "Бессерверный глобальный Edge CDN",
        "Автоматическая защита от DDoS-атак уровня L7",
        "Бесплатные обновляемые SSL-сертификаты шифрования",
        "Автоматические ежедневные бэкапы базы и кода",
      ],
      mockMetric: "99.99% Uptime",
      tag: "Zero Downtime",
    },
    {
      icon: Smartphone,
      accent: "cyan",
      badge: "Простота",
      title: "Обучение за 2 минуты",
      subtitle: "Персональные короткие видеоинструкции со смартфона",
      description:
        "Никакой сложной админки на 50 вкладок. Я записываю для вас персональное видео на 2 минуты, показывая, как менять цены на авто/номера/товары и загружать новые фотографии прямо с телефона за 30 секунд.",
      highlights: [
        "Управление со смартфона за пару тапов",
        "Короткие понятные видео без заумных терминов",
        "Безопасная смена цен, фото и контактных данных",
        "Защита от случайного удаления ключевых элементов",
      ],
      mockMetric: "2 мин на обучение",
      tag: "No Code Skills Needed",
    },
    {
      icon: MessageSquare,
      accent: "amber",
      badge: "Личный контакт",
      title: "24/7 Поддержка без ожидания",
      subtitle: "Быстрая связь в мессенджере без тикетов и очередей",
      description:
        "Если нужно срочно поменять акцию, добавить новый автомобиль в автопарк или проконсультироваться по рекламе — вы пишете напрямую мне в WhatsApp или Telegram. Ответ в течение нескольких минут.",
      highlights: [
        "Прямой личный контакт без менеджеров-посредников",
        "Мелкие правки и обновления включены в сопровождение",
        "Оперативное внедрение горячих сезонных спецпредложений",
        "Регулярные рекомендации по повышению конверсии",
      ],
      mockMetric: "< 15 мин реакция",
      tag: "VIP Hotline",
    },
  ];

  return (
    <section id="reliability" className="relative py-24 md:py-32 bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>НАДЕЖНОСТЬ БЕЗ ГОЛОВНОЙ БОЛИ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Сайт, который работает на вас,{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              а не отнимает ваше время
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Вам не нужно учить программирование или бояться, что сайт сломается в разгар сезона в Батуми.
            Все технические риски и рутина закрыты на 100%.
          </p>
        </div>

        {/* 3 Main Glassmorphic Reliability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isEmerald = card.accent === "emerald";
            const isCyan = card.accent === "cyan";

            return (
              <div
                key={idx}
                className="relative group p-7 sm:p-8 rounded-3xl bg-[#0E131F]/70 border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-2xl shadow-black/70 flex flex-col justify-between"
              >
                {/* Top Corner Accent Glow */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity ${
                    isEmerald
                      ? "bg-emerald-500"
                      : isCyan
                      ? "bg-cyan-500"
                      : "bg-amber-500"
                  }`}
                />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3.5 rounded-2xl border ${
                        isEmerald
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : isCyan
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                          : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
                        isEmerald
                          ? "bg-emerald-400/10 border-emerald-400/20 text-emerald-400"
                          : isCyan
                          ? "bg-cyan-400/10 border-cyan-400/20 text-cyan-400"
                          : "bg-amber-400/10 border-amber-400/20 text-amber-400"
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-400 mb-4 font-medium">
                    {card.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {card.highlights.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                      >
                        <CheckCircle
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isEmerald
                              ? "text-emerald-400"
                              : isCyan
                              ? "text-cyan-400"
                              : "text-amber-400"
                          }`}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    {card.tag}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/5 ${
                      isEmerald
                        ? "text-emerald-400"
                        : isCyan
                        ? "text-cyan-400"
                        : "text-amber-400"
                    }`}
                  >
                    {card.mockMetric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Network Health Status Monitor Mock */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0E131F]/90 border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h4 className="text-sm font-bold text-white font-mono">
                  LIVE SYSTEM STATUS • ALL CLOUD NODES OPERATIONAL
                </h4>
                <p className="text-xs text-zinc-400">
                  Батуми, Тбилиси, Франкфурт, Стамбул (минимальный пинг для туристов и инвесторов)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span>Пинг: <strong className="text-emerald-400">12 ms</strong></span>
              <span>DDoS защита: <strong className="text-cyan-400">Активна</strong></span>
              <span>SSL: <strong className="text-emerald-400">TLS 1.3 Valid</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <div className="text-zinc-400 text-[10px]">Cloud Infrastructure</div>
              <div className="text-zinc-200 font-semibold mt-0.5">Vercel Enterprise Edge</div>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <div className="text-zinc-400 text-[10px]">Framework Stack</div>
              <div className="text-zinc-200 font-semibold mt-0.5">Next.js 16 (App Router)</div>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <div className="text-zinc-400 text-[10px]">Content Delivery</div>
              <div className="text-zinc-200 font-semibold mt-0.5">Cloudflare 300+ PoPs</div>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <div className="text-zinc-400 text-[10px]">Instant Hotline</div>
              <div className="text-emerald-400 font-semibold mt-0.5">Direct WhatsApp / TG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
