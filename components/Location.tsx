"use client";

import { useState } from "react";
import { IoLocationSharp, IoCheckmarkCircle, IoTime } from "react-icons/io5";

type CityKey = "tomaszow" | "hrubieszow";

export default function Location() {
  const [activeCity, setActiveCity] = useState<CityKey>("tomaszow");

  const locationsData = {
    tomaszow: {
      shortName: "Tomaszów",
      fullName: "Tomaszów Lubelski",
      address: "ul. Lwowska 15",
      hours: "Pon - Pt: 8:00 - 20:00",
      mapQuery: "Tomaszów Lubelski ul. Lwowska 15",
      color: "#00ac49",
    },
    hrubieszow: {
      shortName: "Hrubieszów",
      fullName: "Hrubieszów",
      address: "ul. 3 Maja 12",
      hours: "Pon - Pt: 8:00 - 20:00",
      mapQuery: "Hrubieszów ul. 3 Maja 12",
      color: "#3b82f6",
    },
  };

  const currentData = locationsData[activeCity];

  return (
    <section
      id="lokalizacja"
      className="relative w-full h-[600px] lg:h-[700px] bg-neutral-900 overflow-hidden"
    >
      <iframe
        key={activeCity}
        className="absolute inset-0 w-full h-full border-0 transition-opacity duration-500"
        style={{ filter: "grayscale(100%) invert(92%) contrast(85%)" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(
          currentData.mapQuery,
        )}&z=15&output=embed`}
      />

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          currentData.mapQuery,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all shadow-lg"
      >
        <IoLocationSharp />
        Nawiguj
      </a>

      <div className="absolute bottom-0 left-0 w-full z-30 flex justify-center pb-4 md:pb-10 px-4 pointer-events-none">
        <div className="md:hidden pointer-events-auto w-full max-w-[320px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl flex p-1.5">
          <button
            onClick={() => setActiveCity("tomaszow")}
            className={`
              flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
              ${activeCity === "tomaszow" ? "bg-[#00ac49] text-black shadow-md" : "text-gray-400 hover:text-white"}
            `}
          >
            Tomaszów
          </button>
          <button
            onClick={() => setActiveCity("hrubieszow")}
            className={`
              flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
              ${activeCity === "hrubieszow" ? "bg-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white"}
            `}
          >
            Hrubieszów
          </button>
        </div>

        <div className="hidden md:flex pointer-events-auto w-full max-w-4xl bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden flex-row">
          <button
            onClick={() => setActiveCity("tomaszow")}
            className={`
              relative group flex-1 p-6 md:p-8 flex flex-col items-start justify-between transition-all duration-500 overflow-hidden
              ${activeCity === "tomaszow" ? "bg-[#00ac49]/5" : "bg-transparent hover:bg-white/5"}
            `}
          >
            {activeCity === "tomaszow" && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00ac49] shadow-[0_0_15px_#00ac49]" />
            )}

            <div className="flex justify-between w-full items-start mb-4">
              <div className="text-left">
                <h3
                  className={`text-2xl md:text-3xl font-black uppercase tracking-tighter transition-colors ${activeCity === "tomaszow" ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                >
                  Tomaszów
                </h3>
                <p
                  className={`text-xs uppercase tracking-widest font-bold mt-1 ${activeCity === "tomaszow" ? "text-[#00ac49]" : "text-gray-600"}`}
                >
                  Lubelski
                </p>
              </div>
              {activeCity === "tomaszow" && (
                <div className="w-8 h-8 rounded-full bg-[#00ac49] flex items-center justify-center text-black shadow-[0_0_10px_#00ac49] animate-pulse">
                  <IoCheckmarkCircle className="text-xl" />
                </div>
              )}
            </div>

            <div
              className={`space-y-2 transition-all duration-300 ${activeCity === "tomaszow" ? "opacity-100 translate-y-0" : "opacity-40 -translate-y-2 group-hover:opacity-70 group-hover:translate-y-0"}`}
            >
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                <IoLocationSharp
                  className={
                    activeCity === "tomaszow"
                      ? "text-[#00ac49]"
                      : "text-gray-500"
                  }
                />
                <span>{locationsData.tomaszow.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                <IoTime
                  className={
                    activeCity === "tomaszow"
                      ? "text-[#00ac49]"
                      : "text-gray-500"
                  }
                />
                <span>{locationsData.tomaszow.hours}</span>
              </div>
            </div>

            {activeCity === "tomaszow" && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ac49]/10 to-transparent pointer-events-none" />
            )}
          </button>

          {/* Opcja 2: HRUBIESZÓW */}
          <button
            onClick={() => setActiveCity("hrubieszow")}
            className={`
              relative group flex-1 p-6 md:p-8 flex flex-col items-start justify-between transition-all duration-500 border-l border-white/5 overflow-hidden
              ${activeCity === "hrubieszow" ? "bg-blue-500/5" : "bg-transparent hover:bg-white/5"}
            `}
          >
            {activeCity === "hrubieszow" && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
            )}

            <div className="flex justify-between w-full items-start mb-4">
              <div className="text-left">
                <h3
                  className={`text-2xl md:text-3xl font-black uppercase tracking-tighter transition-colors ${activeCity === "hrubieszow" ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                >
                  Hrubieszów
                </h3>
                <p
                  className={`text-xs uppercase tracking-widest font-bold mt-1 ${activeCity === "hrubieszow" ? "text-blue-400" : "text-gray-600"}`}
                >
                  Lokalizacja
                </p>
              </div>
              {activeCity === "hrubieszow" && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-[0_0_10px_#3b82f6] animate-pulse">
                  <IoCheckmarkCircle className="text-xl" />
                </div>
              )}
            </div>

            <div
              className={`space-y-2 transition-all duration-300 ${activeCity === "hrubieszow" ? "opacity-100 translate-y-0" : "opacity-40 -translate-y-2 group-hover:opacity-70 group-hover:translate-y-0"}`}
            >
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                <IoLocationSharp
                  className={
                    activeCity === "hrubieszow"
                      ? "text-blue-400"
                      : "text-gray-500"
                  }
                />
                <span>{locationsData.hrubieszow.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                <IoTime
                  className={
                    activeCity === "hrubieszow"
                      ? "text-blue-400"
                      : "text-gray-500"
                  }
                />
                <span>{locationsData.hrubieszow.hours}</span>
              </div>
            </div>

            {activeCity === "hrubieszow" && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
