"use client";

import { useEffect, useState } from "react";
import {
  FaDumbbell,
  FaFire,
  FaHeartbeat,
  FaUsers,
  FaMapMarkerAlt,
  FaMedal,
} from "react-icons/fa";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const menuItems = [
    { icon: FaDumbbell, title: "Trening Personalny", desc: "Plan dla Ciebie" },
    { icon: FaFire, title: "EMS", desc: "Maksymalna moc" },
    { icon: FaHeartbeat, title: "Redukcja", desc: "Efektywnie" },
    { icon: FaUsers, title: "Służby", desc: "Mundurówki" },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0% {
            transform: scale(1);
            opacity: 0.3;
            filter: blur(40px);
          }
          50% {
            transform: scale(1.08);
            opacity: 0.5;
            filter: blur(50px);
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
            filter: blur(40px);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      <section className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden font-sans selection:bg-[#00ac49] selection:text-white bg-black">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 grayscale contrast-125 brightness-75"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,172,73,0.15)_0%,rgba(0,0,0,0.95)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
        </div>

        <div className="hidden md:flex absolute inset-0 z-10 items-center justify-center pointer-events-none">
          <div className="relative w-[85vw] max-w-[1400px]">
            <div className="absolute inset-0 flex items-center justify-center mix-blend-screen pointer-events-none animate-pulse-glow">
              <img
                src="/logos.svg"
                alt="Logo Glow"
                className="w-full h-auto object-contain brightness-200 select-none"
                draggable={false}
              />
            </div>
            <div className="relative w-full h-auto animate-float">
              <img
                src="/logos.svg"
                alt="Logo Background"
                className="w-full h-auto object-contain opacity-[0.18] select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16 lg:gap-24 pt-24 md:pt-8 md:min-h-screen">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div
                className={`transition-all duration-1000 ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-8 md:w-10 h-[1px] bg-[#00ac49] shadow-[0_0_10px_#00ac49]" />
                  <span className="text-[#00ac49] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em]">
                    Aktywna Przemiana
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1] tracking-tight text-white mb-4">
                  ZBUDUJ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-gray-500">
                    FORMĘ
                  </span>{" "}
                  <br />
                  MARZEŃ
                </h1>

                <p className="text-white/60 text-xs md:text-sm max-w-md mx-auto md:mx-0 leading-relaxed">
                  Profesjonalne podejście i sprzęt.
                  <span className="block text-white mt-1 md:mt-2 font-bold text-[10px] md:text-sm">
                    Profesjonalne studio treningu personalnego
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full md:w-[40%] flex flex-col justify-center mt-4 md:mt-0">
              <div className="flex flex-col gap-5 md:gap-7">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative flex items-center gap-4 md:gap-5">
                      <div
                        className={`w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${
                          hoveredIndex === index
                            ? "bg-[#00ac49] text-black shadow-[0_0_15px_#00ac49]"
                            : "bg-white/5 text-white border border-white/10"
                        }`}
                      >
                        <item.icon className="text-lg md:text-xl" />
                      </div>

                      <div className="flex flex-col text-left">
                        <h3
                          className={`font-bold text-xs md:text-sm uppercase tracking-wide leading-none transition-colors ${
                            hoveredIndex === index
                              ? "text-white"
                              : "text-gray-300"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-[9px] md:text-[10px] font-mono uppercase tracking-widest mt-1 transition-all duration-300 ${
                            hoveredIndex === index
                              ? "opacity-100 text-[#00ac49]"
                              : "opacity-60 text-gray-500"
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
            className={`w-full border-t border-white/10 pt-4 mt-8 md:mt-12 flex flex-col md:flex-row justify-center md:justify-between items-center text-white/50 transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-5 md:gap-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-1.5 md:gap-2">
                <FaMapMarkerAlt className="text-[#00ac49]" />
                <span>2 Lokalizacje</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <FaUsers className="text-[#00ac49]" />
                <span>500+ Metamorfoz</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <FaMedal className="text-[#00ac49]" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest">
                TOP Jakość
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
