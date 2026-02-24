"use client";
import { useState } from "react";
import Image from "next/image";
import {
  IoSend,
  IoLocationSharp,
  IoCall,
  IoTime,
} from "react-icons/io5";

type CityKey = "tomaszow" | "hrubieszow";

export default function Location() {
  const [activeCity, setActiveCity] = useState<CityKey>("tomaszow");
  const [isAnimating, setIsAnimating] = useState(false);

  const locationsData = {
    tomaszow: {
      name: "Tomaszów Lubelski",
      address: "ul. Lwowska 15, 22-400",
      phone: "+48 609 788 088",
      email: "tomaszow@aktywnaprzemiana.pl",
      hours: "Pon - Pt: 8:00 - 20:00",
      mapQuery: "Tomaszów Lubelski ul. Lwowska 15",
      accent: "#00ac49",
      accentGlow: "rgba(0, 172, 73, 0.4)",
    },
    hrubieszow: {
      name: "Hrubieszów",
      address: "ul. 3 Maja 12, 22-500",
      phone: "+48 609 788 088",
      email: "hrubieszow@aktywnaprzemiana.pl",
      hours: "Pon - Pt: 8:00 - 20:00",
      mapQuery: "Hrubieszów ul. 3 Maja 12",
      accent: "#3b82f6",
      accentGlow: "rgba(59, 130, 246, 0.4)",
    },
  };

  const currentData = locationsData[activeCity];

  const handleCityChange = (city: CityKey) => {
    if (activeCity === city || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCity(city);
      setIsAnimating(false);
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Dziękujemy za zgłoszenie w: ${currentData.name}! Do zobaczenia na treningu.`,
    );
  };

  return (
    <section
      id="kontakt"
      className="
        relative w-full min-h-screen bg-black text-white overflow-hidden
        flex flex-col justify-end md:justify-center
        pb-20 sm:pb-24 md:pb-0
      "
    >
      {/* MAPA */}
      <div className="absolute inset-0 z-0">
        <iframe
          key={activeCity}
          className="w-full h-full"
          style={{
            border: 0,
            filter: "grayscale(100%) brightness(0.4) contrast(1.2)",
          }}
          loading="lazy"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            currentData.mapQuery,
          )}&z=15&output=embed`}
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      {/* KONTENER */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-end md:items-center justify-center">
        {/* KARTA */}
        <div
          className={`
            w-full 
            max-w-[640px] xl:max-w-[700px]
            mb-8 sm:mb-10 md:mb-0
            bg-black/95 backdrop-blur-2xl
            border border-white/10
            rounded-t-[2rem] md:rounded-3xl
            shadow-[0_0_50px_rgba(0,0,0,0.6)]
            transition-all duration-300 ease-out
            ${
              isAnimating
                ? "opacity-0 translate-y-6 scale-[0.97]"
                : "opacity-100 translate-y-0 scale-100"
            }

            /* KLUCZ POD 14" LAPTOP */
            max-h-[85vh] 
            md:max-h-[90vh]
            overflow-y-auto
          `}
        >
          {/* Uchwyt mobile */}
          <div className="w-full flex justify-center pt-3 pb-1 md:hidden">
            <div className="w-12 h-1 bg-neutral-600 rounded-full" />
          </div>

          {/* CONTENT */}
          <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-10">
            {/* HEADER */}
            <div className="mb-5 md:mb-7 border-b border-white/10 pb-4 md:pb-6">
              <div className="flex items-center gap-3 mb-4">
                {/* LOGO – bez border, idealne pod czarne PNG */}
                <div className="flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-aktywna.png"
                    alt="Aktywna Przemiana logo"
                    width={56}
                    height={56}
                    priority
                    className="object-contain w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>

                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500">
                    Aktywna Przemiana
                  </p>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black leading-tight">
                    {currentData.name}
                  </h2>
                </div>
              </div>

              {/* SWITCHER */}
              <div className="flex bg-neutral-900/60 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => handleCityChange("tomaszow")}
                  className={`flex-1 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-lg transition ${
                    activeCity === "tomaszow"
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                  }`}
                  style={{
                    background:
                      activeCity === "tomaszow"
                        ? locationsData.tomaszow.accent
                        : "transparent",
                  }}
                >
                  Tomaszów
                </button>
                <button
                  onClick={() => handleCityChange("hrubieszow")}
                  className={`flex-1 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-lg transition ${
                    activeCity === "hrubieszow"
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                  }`}
                  style={{
                    background:
                      activeCity === "hrubieszow"
                        ? locationsData.hrubieszow.accent
                        : "transparent",
                  }}
                >
                  Hrubieszów
                </button>
              </div>
            </div>

            {/* INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 md:mb-6">
              <a
                href={`tel:${currentData.phone}`}
                className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded-xl border border-white/5"
              >
                <IoCall className="text-lg text-neutral-400" />
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-bold">
                    Telefon
                  </p>
                  <p className="text-sm font-medium">{currentData.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded-xl border border-white/5">
                <IoTime className="text-lg text-neutral-400" />
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase font-bold">
                    Otwarte
                  </p>
                  <p className="text-sm font-medium">
                    {currentData.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Imię"
                  required
                  className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl py-3 px-3.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-[#00ac49]"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  required
                  className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl py-3 px-3.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-[#00ac49]"
                />
              </div>

              <textarea
                rows={3}
                placeholder="Twój cel treningowy..."
                required
                className="w-full bg-neutral-900/80 border border-neutral-700 rounded-xl py-3 px-3.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-[#00ac49] resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-black uppercase tracking-widest text-white active:scale-95 transition"
                style={{
                  backgroundColor: currentData.accent,
                  boxShadow: `0 10px 25px -5px ${currentData.accentGlow}`,
                }}
              >
                Wyślij Zgłoszenie <IoSend className="text-lg" />
              </button>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  currentData.mapQuery,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-white/20 rounded-xl py-3 text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-white hover:bg-white/5 transition"
              >
                <IoLocationSharp className="text-base" />
                Nawiguj do nas
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}