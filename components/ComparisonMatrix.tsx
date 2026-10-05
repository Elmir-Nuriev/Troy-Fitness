"use client";

import React from "react";
import {
  XCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export function ComparisonMatrix() {
  const comparisonItems = [
    {
      criterion: "Подход к проекту",
      bad: "Сдали сырой код и пропали. Никаких инструкций, воронки или маркетинговой логики.",
      good: "Полная система под ключ: проектирование структуры, продающий копирайтинг, интеграция CRM и сквозная аналитика.",
    },
    {
      criterion: "Трафик и соцсети",
      bad: "«Мы только программисты, соцсети ищите сами». Сайт есть, но посетителей на нем ноль.",
      good: "Комплексная упаковка Instagram, запуск каналов Telegram/FB и настройка вирусных Reels/Ads под рынок Батуми.",
    },
    {
      criterion: "Технологический стек",
      bad: "Медленный шаблонный WordPress или тяжелые конструкторы (Tilda/Wix). Скорость падает, сайт тормозит на мобильных.",
      good: "Сверхбыстрый авторский Next.js 16 + React 19. Загрузка за 0.4 сек, высший балл 100/100 в Google PageSpeed.",
    },
    {
      criterion: "Поддержка при сбоях",
      bad: "При поломках или белом экране никто не отвечает сутками. Бизнес теряет клиентов в разгар сезона.",
      good: "24/7 персональная поддержка в WhatsApp. Прямой личный контакт, реакция за считанные минуты без тикетов.",
    },
    {
      criterion: "Управление контентом",
      bad: "Сложная запутанная админка. Чтобы поменять цену или фото, нужно платить программисту за каждый чих.",
      good: "Обучение за 2 минуты: меняйте цены, фото авто или апартаментов за 30 секунд прямо со своего смартфона.",
    },
    {
      criterion: "Главный результат",
      bad: "Сайт пылится в сети, нет обращений, бюджет слит.",
      good: "Постоянный поток реальных обращений в WhatsApp, окупаемость уже с первых прямых клиентов.",
    },
  ];

  return (
    <section id="comparison" className="relative py-24 md:py-32 bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>ЧЕСТНОЕ СРАВНЕНИЕ НА РЫНКЕ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Обычные исполнители{" "}
            <span className="text-zinc-500 font-normal">VS</span>{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Мой подход
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Почему 90% созданных сайтов в Батуми не приносят владельцам денег, и как комплексный
            подход гарантирует окупаемость ваших инвестиций.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Left Column: Bad / Competitors */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#0B0E17]/80 border border-red-500/20 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-red-400/80 uppercase font-semibold">
                    Устаревший формат
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-200">
                    Обычные фрилансеры и веб-студии
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400/80 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono uppercase text-zinc-400 mb-0.5">
                        {item.criterion}
                      </h4>
                      <p className="text-sm text-zinc-300/80 leading-relaxed">
                        {item.bad}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs font-mono text-zinc-400">
              ❌ Итог: слитый бюджет, пустой сайт и потерянное время
            </div>
          </div>

          {/* Right Column: ELMIR.DEV High-End Approach */}
          <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0E131F] via-[#101827] to-[#07090E] border-2 border-emerald-500/50 backdrop-blur-2xl shadow-2xl shadow-emerald-950/50 flex flex-col justify-between">
            {/* Top Recommended Pill */}
            <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 text-xs font-black font-mono uppercase tracking-wider shadow-lg shadow-emerald-500/30">
              ⚡ Комплексная система
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shadow-lg shadow-emerald-500/20">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                    Премиальный стандарт Батуми
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Мой комплексный подход (ELMIR.DEV)
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-0.5">
                        {item.criterion}
                      </h4>
                      <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                        {item.good}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-4">
                ✅ Итог: стабильный поток платежеспособных клиентов и окупаемость вложений
              </div>

              <a
                href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20проект%20по%20вашему%20комплексному%20подходу."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 font-bold text-sm shadow-xl shadow-emerald-500/30 hover:scale-[1.01] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Запустить проект по премиальному стандарту</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
