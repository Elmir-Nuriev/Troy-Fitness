"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/VortexNavbar";
import { Hero } from "@/components/VortexHero";
import { GymStatus } from "@/components/GymStatus";
import { AboutFeatures } from "@/components/AboutFeatures";
import { ZonesGallery } from "@/components/ZonesGallery";
import { Pricing } from "@/components/Pricing";
import { BmiCalculator } from "@/components/BmiCalculator";
import { Trainers } from "@/components/Trainers";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { ContactMap } from "@/components/ContactMap";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { Language } from "@/components/translations";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>("ru");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState("");

  const handleOpenBooking = (service?: string) => {
    setBookingService(service || "");
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Sticky Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Hero Section */}
      <Hero
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Real-time Gym Occupancy Tracker */}
      <GymStatus currentLang={currentLang} />

      {/* Why Vortex Fitness / Club Features */}
      <AboutFeatures currentLang={currentLang} />

      {/* Interactive Gym Zones Showcase */}
      <ZonesGallery
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Memberships & Pricing with Multi-Currency Switch */}
      <Pricing
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive BMI & Nutrition Calculator */}
      <BmiCalculator
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Trainers Team */}
      <Trainers
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Customer Reviews & Social Proof */}
      <Reviews currentLang={currentLang} />

      {/* FAQ Accordion */}
      <Faq currentLang={currentLang} />

      {/* Contacts & Interactive Map */}
      <ContactMap currentLang={currentLang} />

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultService={bookingService}
        currentLang={currentLang}
      />

      {/* Floating Quick WhatsApp Button */}
      <aside aria-label="Быстрый чат в WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/995514030709?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20тренировках%20в%20Vortex%20Fitness%20Batumi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all group"
          title="Написать в WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 text-black" />
          <span className="hidden sm:inline text-xs tracking-wide">
            WhatsApp
          </span>
        </a>
      </aside>
    </main>
  );
}
