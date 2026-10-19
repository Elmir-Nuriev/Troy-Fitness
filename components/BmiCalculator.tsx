"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Flame, Target, Sparkles } from "lucide-react";
import { Language, translations } from "./translations";

interface BmiCalculatorProps {
  currentLang: Language;
  onOpenBooking: (service?: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<number>(28);
  const [height, setHeight] = useState<number>(178);
  const [weight, setWeight] = useState<number>(76);
  const [goal, setGoal] = useState<"lose" | "maintain" | "muscle">("muscle");

  // Calculations
  const heightM = height / 100;
  const bmi = weight > 0 && heightM > 0 ? +(weight / (heightM * heightM)).toFixed(1) : 0;

  // Mifflin-St Jeor Formula
  const bmr =
    gender === "male"
      ? Math.round(10 * weight + 6.25 * height - 5 * age + 5)
      : Math.round(10 * weight + 6.25 * height - 5 * age - 161);

  // Moderate training multiplier (1.45)
  const tdee = Math.round(bmr * 1.45);

  const targetCalories =
    goal === "lose" ? tdee - 450 : goal === "muscle" ? tdee + 350 : tdee;

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: t.calculator.underweight, color: "text-blue-400", bg: "bg-blue-500/20" };
    if (val < 25) return { label: t.calculator.normalWeight, color: "text-emerald-400", bg: "bg-emerald-500/20" };
    if (val < 30) return { label: t.calculator.overweight, color: "text-amber-400", bg: "bg-amber-500/20" };
    return { label: t.calculator.obesity, color: "text-rose-400", bg: "bg-rose-500/20" };
  };

  const bmiCat = getBmiCategory(bmi);

  return (
    <section id="calculator" className="py-24 bg-zinc-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calculator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            {t.calculator.desc}
          </p>
        </div>

        <div className="bg-glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Controls Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Gender Toggle */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                {t.calculator.gender}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`py-3 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                    gender === "male"
                      ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20"
                      : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {t.calculator.male}
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`py-3 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                    gender === "female"
                      ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20"
                      : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {t.calculator.female}
                </button>
              </div>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Age */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-zinc-400 font-semibold">{t.calculator.age}</span>
                  <span className="text-base font-bold text-white">{age}</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(+e.target.value)}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Height */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-zinc-400 font-semibold">{t.calculator.height}</span>
                  <span className="text-base font-bold text-white">{height}</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="215"
                  value={height}
                  onChange={(e) => setHeight(+e.target.value)}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Weight */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-zinc-400 font-semibold">{t.calculator.weight}</span>
                  <span className="text-base font-bold text-white">{weight}</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(+e.target.value)}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Goal Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                {t.calculator.goal}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "lose", text: t.calculator.goalLose },
                  { id: "maintain", text: t.calculator.goalMaintain },
                  { id: "muscle", text: t.calculator.goalMuscle },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id as any)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                      goal === g.id
                        ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20"
                        : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {g.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 rounded-2xl border border-amber-500/20 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-4">
                <Sparkles className="w-4 h-4" />
                {t.calculator.resultTitle}
              </span>

              {/* BMI Output */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 mb-3">
                <span className="text-xs text-zinc-400 font-medium">{t.calculator.bmiLabel}</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-white">{bmi}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-md font-bold ${bmiCat.bg} ${bmiCat.color}`}>
                    {bmiCat.label}
                  </span>
                </div>
              </div>

              {/* BMR Output */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 mb-3">
                <span className="text-xs text-zinc-400 font-medium">{t.calculator.bmrLabel}</span>
                <span className="text-lg font-bold text-white">{bmr} {t.calculator.kcal}</span>
              </div>

              {/* Target Calories */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-500/5 border border-amber-500/30 mb-4">
                <span className="text-xs text-amber-300 font-bold block mb-1 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  {t.calculator.recommendedCalories}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">{targetCalories}</span>
                  <span className="text-xs text-zinc-400">{t.calculator.kcalPerDay}</span>
                </div>
              </div>

              {/* Goal recommendation */}
              <div className="text-xs text-zinc-400 leading-relaxed mb-6">
                {goal === "lose" && (
                  <p>
                    {t.calculator.recLose}
                  </p>
                )}
                {goal === "muscle" && (
                  <p>
                    {t.calculator.recMuscle}
                  </p>
                )}
                {goal === "maintain" && (
                  <p>
                    {t.calculator.recMaintain}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={() => onOpenBooking(`${t.calculator.bookingServicePrefix} (${goal}, BMI ${bmi})`)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
            >
              <span>{t.calculator.claimBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
