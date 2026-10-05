"use client";

import React, { useState } from "react";
import {
  Send,
  Video,
  Search,
  Globe,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Users,
  MessageCircle,
  TrendingUp,
  Layers,
  Radio,
} from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface TrafficSource {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
  accentBg: string;
  borderColor: string;
  badge: string;
  description: string;
  keyPoints: string[];
  metrics: string;
  conversionRole: string;
}

export function EcosystemInfographic() {
  const [activeSourceId, setActiveSourceId] = useState<string>("instagram");
  const [simulationActive, setSimulationActive] = useState<boolean>(true);

  const trafficSources: TrafficSource[] = [
    {
      id: "instagram",
      name: 'Instagram "Под ключ"',
      category: "Social Conversion",
      icon: InstagramIcon,
      color: "text-pink-400",
      accentBg: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      badge: "Визуал & Прогрев",
      description:
        "Продающая упаковка шапки, хайлайтс, сетка постов и конверсия подписчиков в заявки.",
      keyPoints: [
        "Аудит и упаковка шапки под целевую аудиторию (туристы / инвесторы)",
        "Структурированные закрепленные Stories (прайс, отзывы, локация)",
        "Бесшовная ссылка в шапке на сверхбыстрый Next.js сайт",
        "Интеграция с Direct и WhatsApp кнопками быстрых ответов",
      ],
      metrics: "+310% конверсия из перехода в диалог",
      conversionRole: "Быстрое доверие и первое эстетическое впечатление",
    },
    {
      id: "telegram",
      name: "Запуск Telegram & FB каналов",
      category: "Investor & Buyer Community",
      icon: Send,
      color: "text-sky-400",
      accentBg: "bg-sky-500/10",
      borderColor: "border-sky-500/30",
      badge: "База без отписок",
      description:
        "Сбор базы инвесторов и горячих покупателей без алгоритмических потерь.",
      keyPoints: [
        "Создание закрытого или открытого канала с аналитикой рынка Батуми",
        "Чат-боты предквалификации (бюджет, даты, пожелания клиента)",
        "Публикация эксклюзивных лотов и спецпредложений в 1 клик",
        "100% охват аудитории без урезания ленты соцсетями",
      ],
      metrics: "78% средняя читаемость постов",
      conversionRole: "Пожизненный бесплатный контакт с покупателями",
    },
    {
      id: "viral",
      name: "Вирусный трафик Reels / Shorts / TikTok / VK",
      category: "Viral Reach Engine",
      icon: Video,
      color: "text-purple-400",
      accentBg: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      badge: "Органический охват",
      description:
        "Привлечение сотен тысяч просмотров через короткие цепляющие видео.",
      keyPoints: [
        "Сценарии динамичных роликов с хуками первых 2 секунд",
        "Трендовая динамичная цветокоррекция и субтитры",
        "Призыв перейти на сайт в описание и комментарии",
        "Органический трафик без платы за клик платформе",
      ],
      metrics: "От 50,000 до 500,000+ целевых просмотров в месяц",
      conversionRole: "Массовая узнаваемость бренда и приток холодного трафика",
    },
    {
      id: "ads",
      name: "Контекст Google Ads & Яндекс.Директ",
      category: "High-Intent Search Ads",
      icon: Search,
      color: "text-amber-400",
      accentBg: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      badge: "Горячий спрос",
      description:
        "Точная настройка поисковой рекламы под зарубежных и локальных покупателей.",
      keyPoints: [
        "Реклама по горячим коммерческим запросам (аренда авто Батуми, купить виллу)",
        "Сегментация по странам (Грузия, Израиль, ЕС, СНГ, ОАЭ)",
        "Минусовка нецелевых запросов для 100% экономии бюджета",
        "A/B сплит-тесты посадочных экранов для максимальной конверсии",
      ],
      metrics: "ROI до 450% на рекламный бюджет",
      conversionRole: "Клиенты, готовые платить прямо сейчас в этот день",
    },
  ];

  const currentSource =
    trafficSources.find((s) => s.id === activeSourceId) || trafficSources[0];

  return (
    <section id="ecosystem" className="relative py-24 md:py-32 bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>МУЛЬТИКАНАЛЬНАЯ АРХИТЕКТУРА</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Мультиканальная{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              экосистема лидов
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Сайт без трафика — это витрина в пустыне. Я создаю единый механизм, где 4 источника
            внимания непрерывно направляют клиентов в технологичный центр с мгновенной закрываемостью.
          </p>
        </div>

        {/* Central Core & Satellite Grid Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Traffic Sources Interactive Selector (Left / Top on Mobile) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2 px-1 flex items-center justify-between">
              <span>Источники притока клиентов:</span>
              <span className="text-emerald-400">Кликните для деталей</span>
            </div>

            {trafficSources.map((source) => {
              const Icon = source.icon;
              const isSelected = activeSourceId === source.id;
              return (
                <button
                  key={source.id}
                  onClick={() => setActiveSourceId(source.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isSelected
                      ? `bg-[#0E131F] ${source.borderColor} shadow-xl shadow-black/80 ring-1 ring-emerald-500/30 scale-[1.02]`
                      : "bg-[#0E131F]/40 border-white/5 hover:border-white/15 hover:bg-[#0E131F]/70"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl border shrink-0 ${source.accentBg} ${source.borderColor} ${source.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-white truncate">
                        {source.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 shrink-0">
                        {source.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {source.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? "text-emerald-400 translate-x-1"
                        : "text-zinc-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Central Hub Display (Center / Main) */}
          <div className="lg:col-span-8">
            <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0E131F] to-[#07090E] border border-emerald-500/30 backdrop-blur-2xl shadow-2xl shadow-emerald-950/40 overflow-hidden">
              {/* Animated Core Glow Background */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

              {/* Central Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative p-3 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-zinc-950 shadow-lg shadow-emerald-500/30">
                    <Globe className="w-7 h-7" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                      Центральный хаб конверсии
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Высококонверсионный Next.js Сайт
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>0.4 сек загрузка</span>
                </div>
              </div>

              {/* Core Features Spec */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                Мгновенная загрузка за 0.4 сек, интерактивные каталоги, фильтры и прямая запись в WhatsApp.
                Сайт адаптирован для туристов, инвесторов и локальных жителей, не теряя ни одного клика.
              </p>

              {/* Selected Source Deep-Dive Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#07090E]/80 border border-white/10 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 font-medium">
                    Связка: {currentSource.name} ➔ Next.js Сайт
                  </span>
                  <span className="text-xs font-mono text-emerald-400 ml-auto font-bold">
                    {currentSource.metrics}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {currentSource.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-mono">
                    Роль в воронке:{" "}
                    <span className="text-zinc-200 font-medium">
                      {currentSource.conversionRole}
                    </span>
                  </span>
                </div>
              </div>

              {/* Metrics Live Ticker Bar */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-lg sm:text-xl font-black text-emerald-400 font-mono">
                    100%
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Mobile First UX
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-lg sm:text-xl font-black text-cyan-400 font-mono">
                    0.4s
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Speed Index
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-lg sm:text-xl font-black text-amber-400 font-mono">
                    WhatsApp
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Прямая сделка
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Flow Explanation Banner */}
        <div className="p-6 rounded-2xl bg-[#0E131F]/50 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-300">
              <strong className="text-white">Результат синергии:</strong> Вам не нужно
              нанимать 4 разных агентства. Вы получаете одного ответственного эксперта, который строит и сайт, и трафик.
            </p>
          </div>

          <a
            href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Интересует%20комплексная%20экосистема%20лидов%20в%20Батуми."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/10 hover:border-emerald-500/30 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Узнать связку для моей ниши</span>
          </a>
        </div>
      </div>
    </section>
  );
}
