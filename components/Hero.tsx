"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaDumbbell,
  FaFire,
  FaHeartbeat,
  FaUsers,
  FaMapMarkerAlt,
  FaMedal,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    {
      icon: FaDumbbell,
      title: "Trening Personalny",
      desc: "Indywidualny plan",
      id: 1,
    },
    { icon: FaFire, title: "Trening EMS", desc: "Maksymalna moc", id: 2 },
    {
      icon: FaHeartbeat,
      title: "Redukcja wagi",
      desc: "Skutecznie i zdrowo",
      id: 3,
    },
    { icon: FaUsers, title: "Treningi Mundurowe", desc: "Dla służb", id: 4 },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.02);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        /* Siatka techniczna */
        .bg-grid {
          background-size: 60px 60px;
          background-image:
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.02) 1px,
              transparent 1px
            );
        }
      `}</style>

      <section className="relative w-full min-h-screen flex items-center justify-center font-sans selection:bg-[#00ac49] selection:text-white bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 grayscale"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-grid" />
        </div>

        <div className="hidden md:flex absolute inset-0 z-10 items-center justify-center pointer-events-none overflow-hidden">
          <img
            src="/logos.svg"
            alt="Background Logo"
            className="relative w-[70vw] max-w-[900px] h-auto object-contain brightness-0 invert opacity-20 animate-float select-none"
            draggable={false}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,#000000_75%)]" />

        <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-[55%] text-center lg:text-left space-y-6 md:space-y-8">
              <div
                className={`transition-all duration-1000 ease-out transform ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
                  <div className="h-[1px] w-8 md:w-10 bg-[#00ac49] shadow-[0_0_10px_#00ac49]" />
                  <span className="text-[#00ac49] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                    Studio Treningowe
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tighter text-white mb-6 md:mb-8">
                  ZBUDUJ <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-sm">
                    FORMĘ
                  </span>{" "}
                  <br />
                  <span className="relative inline-block text-white">
                    MARZEŃ
                    <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 bg-[#00ac49]/30 -skew-x-12 -z-10 hidden sm:block" />
                  </span>
                </h1>

                <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-10 border-l-2 border-white/10 pl-4 md:pl-6 text-left">
                  Profesjonalne podejście, topowy sprzęt i treningi dopasowane
                  do Twoich celów. Zacznij zmieniać swoje życie już dziś.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
                  <Link href="#kontakt" className="group w-full sm:w-auto relative px-6 md:px-8 py-3 md:py-4 bg-[#00ac49] text-black font-bold text-xs md:text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,172,73,0.5)]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Rozpocznij teraz{" "}
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>

                  <button className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-white/20 text-white font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm flex items-center justify-center gap-3">
                    <FaPlay className="text-[10px] md:text-xs text-[#00ac49] group-hover:text-white transition-colors" />
                    Zobacz studio
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[45%]">
              <div className="flex flex-col gap-3 md:gap-4">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
               
                    className={`group relative p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-white/20 bg-black/80 backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden hover:border-[#00ac49]/60 hover:shadow-[0_0_30px_rgba(0,172,73,0.15)] ${
                      hoveredIndex === index ? "transform translate-x-2" : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      transitionDelay: `${loaded ? index * 100 + 200 : 0}ms`,
                      opacity: loaded ? 1 : 0,
                      transform: loaded ? "translateX(0)" : "translateX(30px)",
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-[#00ac49]/10 to-transparent opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : ""}`}
                    />

                    <div
                      className={`absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[#00ac49] transition-all duration-300 ${hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                    >
                      <FaArrowRight />
                    </div>

                    <div className="relative flex items-center gap-4 md:gap-6">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border border-white/10 ${
                          hoveredIndex === index
                            ? "bg-[#00ac49] border-[#00ac49] text-black shadow-[0_0_20px_rgba(0,172,73,0.6)] scale-110"
                            : "bg-[#00ac49]/10 text-white shadow-lg"
                        }`}
                      >
                        <item.icon className="text-xl md:text-2xl" />
                      </div>

                      <div className="flex flex-col text-left">
                        <h3
                          className={`font-bold text-sm md:text-base lg:text-lg uppercase tracking-wider transition-colors ${
                            hoveredIndex === index
                              ? "text-white"
                              : "text-gray-100"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] mt-1 font-medium transition-all duration-300 ${
                            hoveredIndex === index
                              ? "text-[#00ac49] opacity-100"
                              : "text-gray-400 opacity-90"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 text-white/40 transition-all duration-1000 delay-500 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-6 md:gap-10 text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-1.5 md:gap-2 group cursor-pointer hover:text-[#00ac49] transition-colors">
                <FaMapMarkerAlt className="text-base md:text-lg" />
                <span>2 Lokalizacje</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 group cursor-pointer hover:text-[#00ac49] transition-colors">
                <FaUsers className="text-base md:text-lg" />
                <span>500+ Metamorfoz</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/5">
              <FaMedal className="text-[#00ac49]" />
              <span>Certyfikowani Trenerzy</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
