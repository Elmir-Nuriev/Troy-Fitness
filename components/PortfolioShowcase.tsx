"use client";

import React, { useState } from "react";
import {
  Car,
  Building2,
  ShoppingBag,
  ExternalLink,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  SlidersHorizontal,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Calculator,
  Zap,
} from "lucide-react";

export function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Interactive state for Case 1 (Royal Motors)
  const [selectedCarType, setSelectedCarType] = useState<string>("cabrio");
  const [rentalDays, setRentalDays] = useState<number>(3);

  // Interactive state for Case 2 (Batumi Real Estate)
  const [selectedVilla, setSelectedVilla] = useState<string>("V-102");
  const [selectedLang, setSelectedLang] = useState<string>("RU");

  // Interactive state for Case 3 (E-Commerce)
  const [selectedVariant, setSelectedVariant] = useState<string>("Emerald");
  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  const cars = {
    cabrio: {
      name: "Ford Mustang GT Cabriolet",
      pricePerDay: 95,
      year: "2023",
      tag: "Топ для побережья Батуми",
      engine: "5.0L V8 • 460 HP",
    },
    suv: {
      name: "Porsche Cayenne GTS",
      pricePerDay: 180,
      year: "2024",
      tag: "Для поездок в горы и Казбеги",
      engine: "4.0L Twin-Turbo V8",
    },
    sport: {
      name: "BMW M4 Competition",
      pricePerDay: 220,
      year: "2024",
      tag: "Максимальная динамика",
      engine: "3.0L M TwinPower Turbo",
    },
  };

  const currentCar = cars[selectedCarType as keyof typeof cars];
  const totalCarPrice = currentCar.pricePerDay * rentalDays;

  const villas = [
    { id: "V-101", floor: "1 Линия", area: "245 м²", status: "Продано", price: "$320,000", roi: "14.2%" },
    { id: "V-102", floor: "Панорама на море", area: "310 м²", status: "Свободно", price: "$410,000", roi: "15.8%" },
    { id: "V-201", floor: "Пентхаус Гонио", area: "380 м²", status: "Бронь", price: "$520,000", roi: "16.4%" },
    { id: "V-202", floor: "Вилла с бассейном", area: "290 м²", status: "Свободно", price: "$390,000", roi: "15.1%" },
  ];

  const currentVillaData = villas.find((v) => v.id === selectedVilla) || villas[1];

  return (
    <section id="cases" className="relative py-24 md:py-32 bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>РЕАЛЬНЫЕ ПРИМЕРЫ И РЕЗУЛЬТАТЫ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Флагманские решения, которые{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              генерируют прибыль
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Полноценные интерактивные прототипы и реализованные кейсы для ключевых ниш Батуми:
            прокат премиальных авто, инвестиционная недвижимость и брендовый e-commerce.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {[
              { id: "all", label: "Все направления" },
              { id: "auto", label: "Автопрокат / Дилеры" },
              { id: "realty", label: "Недвижимость / Девелопмент" },
              { id: "ecom", label: "E-Commerce / Бренды" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveCategory(f.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === f.id
                    ? "bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20"
                    : "bg-[#0E131F] text-zinc-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* CASE 1: Royal Motors Showcase */}
        {(activeCategory === "all" || activeCategory === "auto") && (
          <div className="mb-16 sm:mb-20 rounded-3xl bg-gradient-to-br from-[#0E131F]/90 via-[#0B0F19] to-[#07090E] border border-white/10 hover:border-emerald-500/40 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Case Briefing */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                    Автосалон / Прокат авто
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-mono">
                    Next.js 16 + WhatsApp Direct
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Royal Motors Showcase (Батуми)
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Фильтры автопарка, карточки машин в 4K, быстрый расчет стоимости аренды
                  с учетом залога и мгновенное бронирование в WhatsApp без комиссий посредников.
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-emerald-400 font-mono">+240%</div>
                    <div className="text-[11px] text-zinc-400">Прямых броней</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-cyan-400 font-mono">0%</div>
                    <div className="text-[11px] text-zinc-400">Комиссий агрегаторам</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-amber-400 font-mono">0.38с</div>
                    <div className="text-[11px] text-zinc-400">Загрузка карточки</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Фильтры по классам (Кабриолеты, SUV, Спорткары)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Моментальная генерация предзаполненного сообщения в WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Мультиязычность для гостей Батуми (RU, EN, AR, GE)</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={`https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20проект%20подобный%20Royal%20Motors%20для%20моего%20автобизнеса.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Заказать разработку для автобизнеса</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Live Mockup Widget */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#07090E] border border-emerald-500/30 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-emerald-400" />
                      <span className="text-xs font-mono font-bold text-zinc-200">
                        ROYAL FLEET PREVIEW
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Интерактивный виджет
                    </span>
                  </div>

                  {/* Car Type Selector */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { id: "cabrio", label: "Кабриолет" },
                      { id: "suv", label: "Премиум SUV" },
                      { id: "sport", label: "Спорткар" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedCarType(tab.id)}
                        className={`py-2 px-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                          selectedCarType === tab.id
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : "bg-white/5 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Selected Car Mock Card */}
                  <div className="p-4 rounded-xl bg-[#0E131F] border border-white/10 mb-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="text-xs font-mono text-emerald-400 font-semibold">
                          {currentCar.tag}
                        </div>
                        <h4 className="text-base font-bold text-white">
                          {currentCar.name}
                        </h4>
                        <p className="text-xs text-zinc-400">{currentCar.engine}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xl font-black text-white font-mono">
                          ${currentCar.pricePerDay}
                        </div>
                        <div className="text-[10px] text-zinc-400 font-mono">в сутки</div>
                      </div>
                    </div>

                    {/* Interactive Days Slider */}
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                        <span>Срок аренды:</span>
                        <span className="text-white font-bold">{rentalDays} дн.</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="14"
                        value={rentalDays}
                        onChange={(e) => setRentalDays(Number(e.target.value))}
                        className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Total & Quick Book Action */}
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">
                        Итоговая сумма брони:
                      </div>
                      <div className="text-2xl font-black text-emerald-400 font-mono">
                        ${totalCarPrice}{" "}
                        <span className="text-xs font-normal text-zinc-400">
                          (без скрытых доплат)
                        </span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/995514030709?text=Здравствуйте!%20Хочу%20забронировать%20${encodeURIComponent(
                        currentCar.name
                      )}%20на%20${rentalDays}%20дней.%20Сумма:%20$${totalCarPrice}.%20Батуми.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Забронировать в WA</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CASE 2: Batumi Real Estate & Villas */}
        {(activeCategory === "all" || activeCategory === "realty") && (
          <div className="mb-16 sm:mb-20 rounded-3xl bg-gradient-to-br from-[#0E131F]/90 via-[#0B0F19] to-[#07090E] border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Live Chess-Grid Mockup */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="p-6 rounded-2xl bg-[#07090E] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-xs font-mono font-bold text-zinc-200">
                        GONIO LUXURY VILLAS • ШАХМАТКА
                      </span>
                    </div>

                    {/* Language Switcher Simulation */}
                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
                      {["GE", "EN", "RU"].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setSelectedLang(lang)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                            selectedLang === lang
                              ? "bg-cyan-500 text-zinc-950"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Units Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {villas.map((v) => {
                      const isSelected = selectedVilla === v.id;
                      const isSold = v.status === "Продано";
                      const isReserved = v.status === "Бронь";

                      return (
                        <button
                          key={v.id}
                          disabled={isSold}
                          onClick={() => setSelectedVilla(v.id)}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "bg-cyan-500/15 border-cyan-500/60 ring-1 ring-cyan-500/30"
                              : isSold
                              ? "bg-black/40 border-white/5 opacity-50 cursor-not-allowed"
                              : "bg-[#0E131F] border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-mono font-bold text-white">
                              {v.id}
                            </span>
                            <span
                              className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                                isSold
                                  ? "bg-red-500/20 text-red-400"
                                  : isReserved
                                  ? "bg-amber-500/20 text-amber-400"
                                  : "bg-emerald-500/20 text-emerald-400"
                              }`}
                            >
                              {v.status}
                            </span>
                          </div>
                          <div className="text-xs text-zinc-400">{v.floor}</div>
                          <div className="text-xs font-mono font-bold text-cyan-400 mt-1">
                            {v.price} • {v.area}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Unit Details & Installment Calculator */}
                  <div className="p-4 rounded-xl bg-[#0E131F] border border-white/10 mb-4">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-400">Выбран лот:</span>
                      <span className="text-white font-bold">
                        {currentVillaData.id} ({currentVillaData.area})
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-400">Прогнозируемый ROI аренды:</span>
                      <span className="text-emerald-400 font-bold">
                        {currentVillaData.roi} годовых
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/5">
                      <span className="text-zinc-400">Первый взнос (30%):</span>
                      <span className="text-cyan-400 font-bold">
                        ${Math.round(parseInt(currentVillaData.price.replace(/\D/g, "")) * 0.3).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Интересует%20презентация%20лота%20${currentVillaData.id}%20в%20Гонио.%20Цена:%20${currentVillaData.price}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Получить PDF презентацию и планировки в WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Case Details */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/20">
                    Премиум Девелопмент Гонио
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-mono">
                    Next.js + Интерактивная шахматка
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Batumi Real Estate & Villas
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Интерактивная шахматка свободных вилл и апартаментов с видами на море и горы,
                  калькулятор рассрочки (0% на 24 месяца) и мультиязычность (GE / EN / RU) для иностранных инвесторов.
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-cyan-400 font-mono">$1.4M+</div>
                    <div className="text-[11px] text-zinc-400">Сделок онлайн</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-emerald-400 font-mono">45%</div>
                    <div className="text-[11px] text-zinc-400">Инвесторов из ЕС / Залива</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-amber-400 font-mono">3 языка</div>
                    <div className="text-[11px] text-zinc-400">GE / EN / RU</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Интерактивный статус лотов в реальном времени (Свободно / Бронь / Продано)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Автоматический расчет доходности (ROI) и сроков окупаемости</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Мгновенный экспорт бронировки менеджеру в мессенджер</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20разработку%20сайта-каталога%20недвижимости%20в%20Батуми."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Заказать платформу для недвижимости</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CASE 3: E-Commerce & High-Converting Brands */}
        {(activeCategory === "all" || activeCategory === "ecom") && (
          <div className="rounded-3xl bg-gradient-to-br from-[#0E131F]/90 via-[#0B0F19] to-[#07090E] border border-white/10 hover:border-amber-500/40 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Case Briefing */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold border border-amber-500/20">
                    E-Commerce & High-Converting Brands
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-mono">
                    Instant 1-Click Checkout
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  E-Commerce & Премиум Бренды
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Быстрая карточка товаров без зависаний, адаптивные каталоги аксессуаров,
                  высокая конверсия мобильного трафика и оформление заказа без мучительной регистрации.
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-amber-400 font-mono">14%</div>
                    <div className="text-[11px] text-zinc-400">Отказов (было 58%)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-emerald-400 font-mono">+35%</div>
                    <div className="text-[11px] text-zinc-400">Средний чек (Upsell)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xl font-black text-cyan-400 font-mono">1 Клик</div>
                    <div className="text-[11px] text-zinc-400">Быстрый заказ</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Мобильная оптимизация с мгновенным откликом кнопок</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Быстрый выбор цветов, размеров и комплектаций</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Прямая отправка готовой корзины клиентом в мессенджер</span>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href="https://wa.me/995514030709?text=Здравствуйте,%20Эльмир!%20Хочу%20обсудить%20разработку%20быстрого%20интернет-магазина/каталога."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Заказать интернет-магазин / каталог</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive E-Com Checkout Widget */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#07090E] border border-amber-500/30 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-amber-400" />
                      <span className="text-xs font-mono font-bold text-zinc-200">
                        INSTANT CHECKOUT MOCKUP
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Конверсия 9.4%
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0E131F] border border-white/10 mb-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">
                          Лимитированная серия
                        </span>
                        <h4 className="text-base font-bold text-white">
                          Cyber Stealth Chronograph
                        </h4>
                        <p className="text-xs text-zinc-400">Сапфировое стекло • Титановый корпус</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-white font-mono">$490</div>
                        <div className="text-[10px] text-emerald-400 font-mono">В наличии в Батуми</div>
                      </div>
                    </div>

                    {/* Color Variation Buttons */}
                    <div className="pt-2 border-t border-white/5">
                      <div className="text-xs font-mono text-zinc-400 mb-2">
                        Выберите стиль отделки:
                      </div>
                      <div className="flex items-center gap-2">
                        {["Emerald", "Cyber Cyan", "Midnight Gold"].map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedVariant(color)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                              selectedVariant === color
                                ? "bg-amber-500/20 text-amber-400 border border-amber-500/50 font-bold"
                                : "bg-white/5 text-zinc-400 hover:text-white"
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 1-Click Fast Order Simulated Result */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-4">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                      <span>Доставка по Батуми:</span>
                      <span className="text-emerald-400 font-bold">Сегодня за 40 минут</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>Оплата при получении:</span>
                      <span className="text-white">Наличные / Банковская карта / USDT</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsOrdered(true);
                      setTimeout(() => setIsOrdered(false), 3000);
                    }}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      isOrdered
                        ? "bg-emerald-500 text-zinc-950 scale-[0.99]"
                        : "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-zinc-950 hover:scale-[1.01] shadow-lg shadow-amber-500/20"
                    }`}
                  >
                    {isOrdered ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Заказ успешно смоделирован (без перезагрузки страницы)!</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 fill-current" />
                        <span>Купить в 1 клик (Тест скорости оформления)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
