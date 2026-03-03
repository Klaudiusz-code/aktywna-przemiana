"use client";
import {
  FaUserCheck,
  FaClipboardList,
  FaDumbbell,
  FaTrophy,
} from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      icon: FaUserCheck,
      title: "1. Konsultacja",
      desc: "Poznajemy się, ustalamy cel i analizujemy Twoje możliwości.",
    },
    {
      icon: FaClipboardList,
      title: "2. Plan Działania",
      desc: "Dostosowujemy trening i żywienie do Twojego stylu życia.",
    },
    {
      icon: FaDumbbell,
      title: "3. Realizacja",
      desc: "Trenujesz pod okiem eksperta z pełnym wsparciem technicznym.",
    },
    {
      icon: FaTrophy,
      title: "4. Efekty",
      desc: "Monitorujemy postępy i celebrujemy Twoją nową formę.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ac49]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#00ac49] text-xs font-bold uppercase tracking-[0.3em] mb-3 block">
            Proces Przemiany
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            JAK TO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ac49] to-emerald-400">
              DZIAŁA?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-white/5 border-t border-dashed border-white/20 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group z-10">
              <div className="relative bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-[#00ac49]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,172,73,0.15)]">
                <span className="absolute top-4 right-4 text-6xl font-black text-white/5 select-none">
                  0{index + 1}
                </span>

                <div className="w-16 h-16 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00ac49] group-hover:shadow-[0_0_20px_rgba(0,172,73,0.3)] transition-all duration-300">
                  <step.icon className="text-2xl text-white group-hover:text-[#00ac49] transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-white/40 mb-6 text-sm">
            Gotowy na zmianę? Zaczynamy od kroku pierwszego.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#00ac49] text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,172,73,0.4)]"
          >
            UMÓW KONSULTACJĘ
          </a>
        </div>
      </div>
    </section>
  );
}
