"use client";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaDumbbell,
  FaFire,
  FaHeartbeat,
  FaUsers,
  FaMapMarkerAlt,
  FaMedal,
} from "react-icons/fa";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setLoaded(true);

    const handleMouseMove = (e: any) => {
      const x = (window.innerWidth - e.pageX) / 30;
      const y = (window.innerHeight - e.pageY) / 30;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const menuItems = [
    {
      icon: FaDumbbell,
      title: "Trening Personalny",
      desc: "Plan dopasowany do Ciebie",
    },
    {
      icon: FaFire,
      title: "EMS",
      desc: "Szybka Stymulacja Mięśni",
    },
    {
      icon: FaHeartbeat,
      title: "Redukcja Tłuszczu",
      desc: "Efektywnie i bezpiecznie",
    },
    {
      icon: FaUsers,
      title: "Służby Mundurowe",
      desc: "Policja, Straż, Wojsko",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        @keyframes breathe {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.02);
          }
        }
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
      `}</style>

      <section className="relative w-full h-screen overflow-hidden font-sans selection:bg-[#00ac49] selection:text-white flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 w-full h-full transition-transform duration-[20s] ease-linear ${
              loaded ? "scale-110" : "scale-100"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
              alt="Gym Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] z-10 pointer-events-none"></div>
          <div
            className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="absolute inset-0 z-10 flex items-start justify-center pointer-events-none">
          <div className="relative mt-[-2vh] md:mt-[-17vh] w-[50vw] md:w-[75vw] max-w-[1200px] h-full flex items-start">
            
            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[#00ac49]/10 blur-[80px] animate-breathe pointer-events-none"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-2xl scale-110 mix-blend-screen pointer-events-none">
                <img
                    src="/logos.svg"
                    alt="Logo Glow"
                    className="w-full h-auto object-contain"
                    draggable={false}
                />
            </div>

            <div className="relative w-full animate-float mt-0 md:mt-[5vh]">
              <img
                src="/logos.svg"
                alt="Logo Background"
                className="w-full h-auto object-contain opacity-[0.25] mix-blend-overlay filter brightness-125 contrast-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] select-none"
                draggable={false}
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-12 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 text-center md:text-left z-20">
              <div
                className={`transition-all duration-1000 delay-100 ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <div className="w-8 md:w-12 h-[1px] bg-[#00ac49] shadow-[0_0_10px_#00ac49]"></div>

                  <span className="text-[#00ac49] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                    Aktywna Przemiana
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter text-white mb-6">
                  ZBUDUJ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-gray-500">
                    FORMĘ
                  </span>{" "}
                  <br />
                  MARZEŃ
                </h1>

                <p className="text-white/60 text-sm md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                  Profesjonalne podejście i sprzęt.
                  <span className="block text-white mt-2 font-bold text-xs md:text-base">
                    Profesjonalne studio treningu personalnego
                  </span>
                </p>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 flex flex-col justify-center pointer-events-none"
              style={{
                transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
              }}
            >
              <div className="flex flex-col gap-3 pointer-events-auto">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    className={`
                      group relative flex items-center justify-between px-5 py-4 md:px-6 md:py-5 rounded-xl border border-white/5
                      backdrop-blur-xl transition-all duration-300 ease-out overflow-hidden bg-black/30
                      hover:bg-black/60
                      ${hoveredIndex === index ? "border-[#00ac49] shadow-[0_0_20px_rgba(0,172,73,0.1)] scale-[1.02]" : ""}
                    `}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      transform: `translate(${mousePos.x * (0.1 + index * 0.02)}px, ${mousePos.y * (0.1 + index * 0.02)}px)`,
                    }}
                  >
                    <div
                      className={`absolute right-[-10px] top-0 bottom-0 w-24 md:w-32 flex items-center justify-center transition-all duration-500 ${
                        hoveredIndex === index
                          ? "opacity-20 scale-110 rotate-12 text-[#00ac49]"
                          : "opacity-5 scale-100 rotate-0 text-white"
                      }`}
                    >
                      <item.icon className="text-5xl md:text-8xl" />
                    </div>

                    <div className="relative z-10 flex items-center gap-4 md:gap-6 w-full">
                      <div
                        className={`p-2.5 md:p-4 rounded-lg transition-all duration-300 shrink-0
                        ${
                          hoveredIndex === index
                            ? "bg-[#00ac49] text-black shadow-[0_0_15px_#00ac49]"
                            : "bg-white/5 text-white"
                        }
                      `}
                      >
                        <item.icon className="text-lg md:text-2xl" />
                      </div>

                      <div className="flex flex-col text-left">
                        <h3
                          className={`font-bold text-sm md:text-xl lg:text-2xl leading-tight transition-colors duration-300 ${
                            hoveredIndex === index
                              ? "text-white"
                              : "text-white/90"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-[10px] md:text-xs uppercase tracking-wider mt-1 transition-colors duration-300 ${
                            hoveredIndex === index
                              ? "text-[#00ac49]"
                              : "text-white/40"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`relative z-10 w-6 h-6 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0
                      ${
                        hoveredIndex === index
                          ? "bg-[#00ac49] border-[#00ac49] text-black translate-x-0"
                          : "bg-transparent border-white/10 text-white translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                      }
                    `}
                    >
                      <FaArrowRight className="text-[10px] md:text-xs" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`w-full border-t border-white/10 pt-4 mt-12 flex flex-col md:flex-row justify-center md:justify-between items-center text-white/50 transition-all duration-1000 delay-300 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-6 md:gap-10 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#00ac49]" />
                <span>2 Lokalizacje</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-[#00ac49]" />
                <span>500+ Metamorfoz</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <FaMedal className="text-[#00ac49]" />
              <span className="text-[10px] uppercase tracking-widest">
                TOP Jakość
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}