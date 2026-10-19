"use client";

import React, { useState } from "react";
import { X, CheckCircle, MessageCircle, Send, Dumbbell, Sparkles } from "lucide-react";
import { Language, translations } from "./translations";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  currentLang: Language;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = "",
  currentLang,
}) => {
  const t = translations[currentLang];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService || t.modal.serviceTrial);
  const [preferredTime, setPreferredTime] = useState<string>(t.modal.defaultTime);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sync default service when opened with new service
  React.useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

    const getWhatsAppUrl = () => {
    const template = (t.modal as any).waTemplate || "Hello! My name is {name}. Service: {service}. Phone: {phone}. Time: {time}.";
    const msg = template
      .replace("{name}", name || t.modal.guest)
      .replace("{service}", service)
      .replace("{phone}", phone || t.modal.notSpecified)
      .replace("{time}", preferredTime);
    return `https://wa.me/995514030709?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-zinc-950 border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {t.modal.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              {t.modal.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  {t.modal.name} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  {t.modal.phone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+995 ___ __ __ __"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  {t.modal.service}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value={t.modal.serviceTrial}>{t.modal.serviceTrial}</option>
                  {t.modal.planOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                  <option value={t.modal.serviceCoach}>{t.modal.serviceCoach}</option>
                  {defaultService && <option value={defaultService}>{defaultService}</option>}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  {t.modal.time}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {t.modal.times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setPreferredTime(time)}
                      className={`py-2 px-1 rounded-lg border font-semibold text-center transition-all cursor-pointer ${
                        preferredTime === time
                          ? "bg-amber-500 text-black border-amber-400 font-bold"
                          : "bg-white/5 text-zinc-400 border-white/10 hover:text-white"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-all cursor-pointer mt-4"
              >
                {isLoading ? (
                  <span>{t.modal.submitting}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.modal.submit}</span>
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <span className="text-xs text-zinc-400">{t.modal.orDirectWa}</span>
                <a
                  href={`https://wa.me/995514030709?text=${encodeURIComponent(t.hero.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.modal.openWa}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-300">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              {t.modal.successTitle}
            </h3>
            <p className="text-sm text-zinc-300 mb-6 max-w-sm mx-auto">
              {t.modal.successDesc}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-400">{t.modal.summaryName}</span>
                <span className="text-white font-semibold">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">{t.modal.summaryPhone}</span>
                <span className="text-white font-semibold">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">{t.modal.summaryService}</span>
                <span className="text-amber-400 font-semibold">{service}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.modal.confirmWa}</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 text-zinc-400 hover:text-white text-xs font-semibold cursor-pointer"
              >
                {t.modal.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
