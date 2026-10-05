"use client";

import React from "react";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from "lucide-react";
import { Language, translations } from "./translations";

interface ContactMapProps {
  currentLang: Language;
}

export const ContactMap: React.FC<ContactMapProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="contacts" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-glass-card rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    {t.contact.addressTitle}
                  </h4>
                  <p className="text-base sm:text-lg font-bold text-white">
                    {t.contact.addressValue}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {t.contact.addressNote}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    {t.contact.phoneTitle}
                  </h4>
                  <a
                    href="tel:+995514030709"
                    className="text-xl font-black text-white hover:text-amber-400 transition-colors"
                  >
                    +995 514 03 07 09
                  </a>
                  <p className="text-xs text-zinc-400 mt-1">
                    Звонки и сообщения в WhatsApp / Telegram
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    {t.contact.hoursTitle}
                  </h4>
                  <p className="text-base font-bold text-white">
                    {t.contact.hoursValue}
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">
                    Без перерывов и праздничных выходных
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  {t.contact.socialTitle}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://www.facebook.com/t.roa.pit.nesi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all hover:border-amber-400/40"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                  <a
                    href="https://www.instagram.com/troy_fitness_batumi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all hover:border-amber-400/40"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                  <a
                    href="https://wa.me/995514030709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-xs font-bold text-emerald-400 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=David+Agmashenebeli+St+2g+Batumi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.contact.routeBtn}</span>
              </a>
              <a
                href="https://wa.me/995514030709"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-emerald-500/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.contact.writeWa}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[420px] bg-zinc-900">
            <iframe
              title="Troy Fitness Batumi Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.844781442127!2d41.6111!3d41.6247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067861962e7a3ab%3A0x6b1a37c89f5bc3e1!2sDavid%20Agmashenebeli%20St%202g%2C%20Batumi!5e0!3m2!1sen!2sge!4v1700000000000!5m2!1sen!2sge"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.15)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            {/* Custom Location Overlay Card on Map */}
            <div className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <span className="text-xs font-black text-amber-400 tracking-wider uppercase block">
                TROY FITNESS
              </span>
              <p className="text-xs text-white font-medium mt-0.5">
                ул. Давида Агмашенебели 2г, Батуми
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Открыто до 23:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
