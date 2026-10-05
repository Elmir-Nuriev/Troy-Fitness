"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Send,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react";

export function ContactFooter() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [niche, setNiche] = useState("Прокат авто / Дилеры");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Здравствуйте, Эльмир! Меня зовут ${name || "Клиент"}. Мой контакт: ${
      contact || "WhatsApp"
    }. Моя ниша: ${niche}. Хочу бесплатный разбор проекта и стратегию лидогенерации в Батуми.`;

    const whatsappUrl = `https://wa.me/995514030709?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-[#07090E] border-t border-white/10 overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High-Impact Big CTA Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0E131F] via-[#10192A] to-[#07090E] border-2 border-emerald-500/40 p-8 sm:p-12 md:p-16 backdrop-blur-2xl shadow-2xl shadow-emerald-950/40 overflow-hidden mb-16">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Triggers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>СТАРТ РАБОТЫ БЕЗ РИСКА</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Готовы запустить поток клиентов{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  без технической головной боли?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
                Бесплатно разберу вашу нишу, покажу похожие примеры и предложу готовую стратегию
                окупаемости сайта еще до подписания договора.
              </p>

              {/* Direct Messenger Triggers */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20получить%20бесплатный%20разбор%20ниши%20и%20стратегию%20в%20Батуми."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 font-bold text-sm shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Написать в WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <a
                  href="https://t.me/elmir_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0E131F] hover:bg-[#151D2E] text-white font-semibold text-sm border border-white/10 hover:border-sky-500/40 shadow-lg transition-all"
                >
                  <Send className="w-5 h-5 text-sky-400" />
                  <span>Написать в Telegram</span>
                </a>
              </div>

              {/* Trust Badges List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Батуми, Грузия • Личные встречи</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Официальный договор и гарантия</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Фиксированная цена без доплат</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Запуск первых лидов за 5-7 дней</span>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Quick Consultation Form */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#07090E]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Экспресс-заявка на разбор
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Отвечу лично в течение 15 минут в WhatsApp или Telegram
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1.5">
                      Ваше имя:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Например, Георгий"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0E131F] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1.5">
                      Телефон или Ник в Telegram/WhatsApp:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+995 ... или @username"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0E131F] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1.5">
                      Сфера бизнеса:
                    </label>
                    <select
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0E131F] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50"
                    >
                      <option value="Прокат авто / Дилеры">Прокат авто / Автодилеры (Батуми)</option>
                      <option value="Недвижимость / Апартаменты">Недвижимость / Девелопмент (Гонио / Батуми)</option>
                      <option value="E-Commerce / Онлайн-магазин">E-Commerce / Каталог товаров</option>
                      <option value="Премиум услуги / Клиники">Премиум услуги / Медицинский туризм</option>
                      <option value="Другой бизнес">Другая ниша бизнеса</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Получить стратегию и разбор</span>
                  </button>

                  {submitted && (
                    <p className="text-center text-xs text-emerald-400 font-mono mt-2">
                      ✓ Открываем диалог в WhatsApp с вашими данными...
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#0E131F] border border-white/10 flex items-center justify-center text-white font-black text-xs">
              E
            </div>
            <div>
              <span className="text-white font-bold">ELMIR.DEV</span> • Digital & Web Architecture
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Батуми, Грузия
            </span>
            <a
              href="tel:+995514030709"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              +995 514 030 709
            </a>
            <a
              href="https://t.me/elmir_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              @elmir_dev
            </a>
          </div>

          <div className="text-center md:text-right">
            Батуми, Грузия • 2026 • Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}
