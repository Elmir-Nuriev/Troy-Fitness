"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  MessageCircle,
  Code2,
  Share2,
  Zap,
  Clock,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  icon: React.ElementType;
  tag: string;
}

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FaqItem[] = [
    {
      question: "Нужно ли мне разбираться в коде или программировании?",
      answer:
        "Абсолютно нет! Вы получаете готовую систему «под ключ». Управление сайтом проще, чем отправить фотографию в Telegram: вы сможете менять цены на авто или виллы, обновлять фотографии и редактировать тексты за 30 секунд прямо со своего смартфона. Дополнительно я записываю для вас персональную 2-минутную видеоинструкцию с демонстрацией экрана.",
      icon: Code2,
      tag: "Простота",
    },
    {
      question: "Что именно входит в настройку соцсетей и рекламы?",
      answer:
        "Мы создаем полноценную синергию: упаковываем профиль Instagram (продающая шапка, фирменные хайлайтс, сетка постов), запускаем Telegram-канал для сбора теплой базы инвесторов и постоянных клиентов без потери алгоритмов, готовим сценарии для цепляющих роликов Reels/TikTok и настраиваем точечную рекламу в Google Ads и Яндекс под жителей и туристов Батуми, а также зарубежных покупателей из ЕС, СНГ и ОАЭ.",
      icon: Share2,
      tag: "Трафик",
    },
    {
      question: "Почему Next.js работает лучше обычных конструкторов Tilda/Wix?",
      answer:
        "Next.js — это мировой стандарт enterprise-разработки, на котором работают Netflix, Twitch и TikTok. В отличие от тяжелых конструкторов, раздутых тысячами лишних скриптов, Next.js загружается мгновенно (за 0.3–0.4 секунды даже на нестабильном 3G в Батуми), не зависает при наплыве сотен посетителей одновременно, получает максимальный балл 100/100 в Google PageSpeed и ранжируется в поисковых системах в 3-5 раз эффективнее.",
      icon: Zap,
      tag: "Технологии",
    },
    {
      question: "Как быстро сайт начнет приносить первые обращения?",
      answer:
        "Благодаря тому, что разработка структуры и Next.js платформы идет параллельно с подготовкой упаковки соцсетей и рекламных связок, первые целевые заявки вы начинаете получать уже в первые 48–72 часа после запуска рекламного трафика. Воронка сразу направляет клиентов в ваш WhatsApp с предзаполненным заказом.",
      icon: Clock,
      tag: "Сроки & Лиды",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Все детали сотрудничества,{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              простыми словами
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Ответы на ключевые вопросы владельцев бизнеса перед стартом разработки сайта и запуском воронки трафика.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0E131F] border-emerald-500/40 shadow-xl shadow-emerald-950/20"
                    : "bg-[#0E131F]/50 border-white/10 hover:border-white/20 hover:bg-[#0E131F]/80"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 mt-0.5 ${
                        isOpen
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                          : "bg-white/5 border-white/10 text-zinc-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1 block">
                        {item.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div className="shrink-0 p-1.5 rounded-lg bg-white/5 text-zinc-400 mt-1">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1">
                    <div className="pl-12 sm:pl-14 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 rounded-2xl bg-[#0E131F]/70 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Остались индивидуальные вопросы по вашему проекту?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Напишите мне напрямую — разберу специфику вашей ниши в Батуми и сориентирую по срокам.
            </p>
          </div>

          <a
            href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20У%20меня%20есть%20вопрос%20по%20разработке%20сайта."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Задать вопрос в WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
