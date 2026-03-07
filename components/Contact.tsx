"use client";

import { useState } from "react";
import {
  IoSend,
  IoMail,
  IoCall,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="kontakt"
      // Mobile: py-12 (mniej), Desktop: py-32 (dużo, jak chciałeś)
      className="relative w-full bg-[#050505] py-12 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Dekoracyjne tło */}
      <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-[#00ac49]/5 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Mobile: gap-6 (ciasniej), Desktop: gap-16 (dużo przestrzeni) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* --- LEWA KOLUMNA: INFO --- */}
          <div className="space-y-6 sm:space-y-10 order-2 lg:order-1">
            <div>
              <span className="text-[#00ac49] text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-3 block">
                Masz pytania?
              </span>
              {/* Mobile: text-2xl (mniej), Desktop: text-5xl (dużo) */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 sm:mb-6">
                Rozpocznij swoją <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ac49] to-white">
                  przemianę już dziś
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-md">
                Nie czekaj na "poniedziałek". Wyślij nam wiadomość, a trener
                skontaktuje się z Tobą i ustali darmową konsultację.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-5">
              <a
                href="tel:+48609788088"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00ac49] group-hover:bg-[#00ac49]/10 transition-all shrink-0">
                  <IoCall className="text-lg sm:text-xl text-white group-hover:text-[#00ac49]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider">
                    Zadzwoń do nas
                  </p>
                  <p className="text-base sm:text-xl font-bold text-white group-hover:text-[#00ac49] transition-colors">
                    +48 609 788 088
                  </p>
                </div>
              </a>

              <a
                href="mailto:biuro@aktywnaprzemiana.pl"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00ac49] group-hover:bg-[#00ac49]/10 transition-all shrink-0">
                  <IoMail className="text-lg sm:text-xl text-white group-hover:text-[#00ac49]" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider">
                    Napisz e-mail
                  </p>
                  <p className="text-base sm:text-xl font-bold text-white group-hover:text-[#00ac49] transition-colors">
                    biuro@aktywnaprzemiana.pl
                  </p>
                </div>
              </a>
            </div>

            <div className="pt-2 sm:pt-4">
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 uppercase tracking-widest font-bold">
                Śledź nas
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#00ac49] hover:text-black hover:border-[#00ac49] transition-all text-white"
                >
                  <IoLogoFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#00ac49] hover:text-black hover:border-[#00ac49] transition-all text-white"
                >
                  <IoLogoInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* --- PRAWA KOLUMNA: FORMULARZ --- */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ac49] to-blue-600 rounded-2xl opacity-20 blur-lg transition duration-1000" />

            {/* Mobile: p-4 (ciaśniej), Desktop: p-8 (dużo miejsca) */}
            <div className="relative bg-[#111] border border-white/10 rounded-2xl p-4 sm:p-8 shadow-2xl">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] text-center space-y-4 px-4">
                  <div className="w-16 h-16 bg-[#00ac49]/20 rounded-full flex items-center justify-center text-[#00ac49] animate-bounce">
                    <IoSend className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Wysłano!</h3>
                  <p className="text-gray-400">
                    Dziękujemy za wiadomość. Odezwiemy się wkrótce.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Imię
                      </label>
                      <input
                        type="text"
                        required
                        // Mobile: py-3, Desktop: py-3.5
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white focus:outline-none focus:border-[#00ac49] focus:ring-1 focus:ring-[#00ac49] transition-all placeholder-gray-600 text-base"
                        placeholder="Jan"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white focus:outline-none focus:border-[#00ac49] focus:ring-1 focus:ring-[#00ac49] transition-all placeholder-gray-600 text-base"
                        placeholder="600 000 000"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Twój cel
                    </label>
                    <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white focus:outline-none focus:border-[#00ac49] focus:ring-1 focus:ring-[#00ac49] transition-all appearance-none cursor-pointer text-base">
                      <option>Chcę schudnąć</option>
                      <option>Chcę zbudować masę</option>
                      <option>Poprawa kondycji</option>
                      <option>Przygotowanie mundurowe</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Wiadomość
                    </label>
                    <textarea
                      rows={3} // Mobile: 3 linie (mniej), Desktop: 4
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white focus:outline-none focus:border-[#00ac49] focus:ring-1 focus:ring-[#00ac49] transition-all placeholder-gray-600 resize-none text-base"
                      placeholder="Opisz krótko swoje oczekiwania..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full bg-[#00ac49] text-white text-black font-black uppercase tracking-widest py-3.5 sm:py-4 rounded-xl hover:bg-[#00d45a] transition-all transform active:scale-[0.98] hover:scale-[1.02] shadow-[0_0_20px_rgba(0,172,73,0.3)] hover:shadow-[0_0_30px_rgba(0,172,73,0.6)] flex items-center justify-center gap-3 text-sm sm:text-base mt-2"
                  >
                    {formStatus === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Wysyłanie...
                      </span>
                    ) : (
                      <>
                        Wyślij zgłoszenie{" "}
                        <IoSend className="text-lg sm:text-xl" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
