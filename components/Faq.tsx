"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Czy muszę mieć doświadczenie?",
      answer:
        "Nie. Zaczynamy od podstaw. Trener dba o Twoje bezpieczeństwo, ucząc poprawnej techniki przed zwiększeniem obciążenia.",
    },
    {
      id: 2,
      question: "Jak wygląda pierwsza wizyta?",
      answer:
        "To konsultacja. Wykonujemy pomiar ciała, omawiamy cele i przeprowadzamy próbny trening dostosowany do Twoich możliwości.",
    },
    {
      id: 3,
      question: "Ile to kosztuje?",
      answer:
        "Cena zależy od pakietu. Oferujemy elastyczne opcje, dopasowane do Twojego budżetu i celów treningowych.",
    },
    {
      id: 4,
      question: "Przygotowanie mundurowe?",
      answer:
        "Tak. Specjalizujemy się w przygotowaniach do służb, ukierunkowanych na realne testy sprawnościowe.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#0a0a0a] py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <img
          src="/logos.svg"
          alt="Logo"
          className="w-[80vw] max-w-[900px] h-auto object-contain brightness-0 invert"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* --- NAGŁÓWEK --- */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-[#00ac49] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-4 md:mb-6 block">
            Najczęściej zadawane pytania
          </span>
          <h2 className="text-4xl md:text-7xl font-light text-white tracking-tight leading-none">
            FAQ
          </h2>
        </div>

        <div className="space-y-2 md:space-y-3">
          {faqs.map((item, index) => (
            <div
              key={item.id}
              className={`
                relative rounded-2xl border transition-all duration-500 ease-out
                ${
                  openIndex === index
                    ? "bg-[#00ac49]/5 border-[#00ac49]/20 shadow-[0_0_30px_rgba(0,172,73,0.08)]"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                }
              `}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-4 md:py-8 px-5 md:px-10 flex items-center justify-between text-left focus:outline-none"
              >
                <h3
                  className={`
                  text-lg md:text-2xl font-light uppercase tracking-wide transition-colors duration-300
                  ${openIndex === index ? "text-white font-medium" : "text-gray-400 hover:text-gray-200"}
                `}
                >
                  {item.question}
                </h3>

                <div
                  className={`
                  w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0
                  ${
                    openIndex === index
                      ? "bg-[#00ac49] text-black rotate-90"
                      : "bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white"
                  }
                `}
                >
                  {openIndex === index ? (
                    <IoRemove className="text-lg md:text-xl" />
                  ) : (
                    <IoAdd className="text-lg md:text-xl" />
                  )}
                </div>
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="px-5 md:px-10 pb-4 md:pb-8 pt-2">
                  <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center border-t border-white/5 pt-8 md:pt-10">
          <p className="text-gray-600 text-xs md:text-sm font-light tracking-wide mb-4 md:mb-6">
            Potrzebujesz więcej informacji?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white text-black text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#00ac49] transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,172,73,0.4)]"
          >
            Porozmawiaj z trenerem
          </a>
        </div>
      </div>
    </section>
  );
}
