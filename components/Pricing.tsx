"use client";

import React, { useState } from "react";
import { Check, Zap, Sparkles, CreditCard, Shield } from "lucide-react";
import { Language, translations } from "./translations";

interface PricingProps {
  currentLang: Language;
  onOpenBooking: (planName?: string) => void;
}

type Currency = "GEL" | "USD" | "EUR";

export const Pricing: React.FC<PricingProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const [currency, setCurrency] = useState<Currency>("GEL");

  // Exchange rates relative to GEL
  const rates: Record<Currency, { symbol: string; rate: number }> = {
    GEL: { symbol: "₾", rate: 1 },
    USD: { symbol: "$", rate: 1 / 2.7 },
    EUR: { symbol: "€", rate: 1 / 2.95 },
  };

  const formatPrice = (priceInGEL: number) => {
    const converted = Math.round(priceInGEL * rates[currency].rate);
    return `${converted} ${rates[currency].symbol}`;
  };

  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.pricing.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            {t.pricing.desc}
          </p>

          {/* Currency Switcher */}
          <div className="mt-8 inline-flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-xs text-zinc-400 font-semibold px-2">
              {t.pricing.currencyToggle}
            </span>
            {(["GEL", "USD", "EUR"] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === curr
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {curr === "GEL" ? "₾ GEL" : curr === "USD" ? "$ USD" : "€ EUR"}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.pricing.plans.map((plan, idx) => {
            const isHit = plan.popular;

            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                  isHit
                    ? "bg-gradient-to-b from-amber-950/40 via-zinc-900 to-zinc-950 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/20 lg:-translate-y-3"
                    : "bg-glass-card border border-white/10 hover:border-white/20 hover:-translate-y-1"
                }`}
              >
                {/* Hit Ribbon Badge */}
                {isHit && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-[11px] tracking-wider uppercase shadow-md shadow-amber-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge || t.pricing.defaultBadge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-zinc-400 min-h-[44px] leading-relaxed">{plan.desc}</p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-white">
                        {formatPrice(plan.priceGEL)}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">
                        / {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <div className={`mt-0.5 p-0.5 rounded-full ${isHit ? "bg-amber-500/20 text-amber-400" : "bg-white/10 text-white"}`}>
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenBooking(plan.name)}
                  className={`w-full py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isHit
                      ? "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/30 hover:scale-[1.02]"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-amber-400/40"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantees & Payment info strip */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-around gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-amber-400" />
            <span>{t.pricing.guarantee1}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>{t.pricing.guarantee2}</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.pricing.guarantee3}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
