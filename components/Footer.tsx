"use client";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { name: "Start", href: "#hero" },
    { name: "Oferta", href: "#o-mnie" },
    { name: "Zespół", href: "#metamorfozy" },
    { name: "Galeria", href: "#oferta" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const infoLinks = [
    { name: "Polityka Prywatności", href: "#" },
    { name: "Regulamin", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#050505] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ac49] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/logos.svg"
                alt="Aktywna Przemiana Logo"
                className="h-24 w-auto object-contain mb-6 drop-shadow-lg"
              />
              <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
                Zmień swoje życie dzięki profesjonalnemu treningowi personalnemu
                z technologią EMS. Dołącz do nas w Tomaszowie Lubelskim i
                Hrubieszowie.
              </p>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-[#00ac49] hover:border-[#00ac49] hover:shadow-[0_0_15px_rgba(0,172,73,0.5)] transition-all duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-[#00ac49] hover:border-[#00ac49] hover:shadow-[0_0_15px_rgba(0,172,73,0.5)] transition-all duration-300"
              >
                <FaFacebookF className="text-base" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#00ac49]"></span>
              Szybkie Linki
            </h3>
            <ul className="space-y-4 w-full max-w-xs">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300 group flex items-center justify-center lg:justify-start"
                  >
                    <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#00ac49] transition-all duration-300">
                      &rsaquo;
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#00ac49]"></span>
              Kontakt
            </h3>

            <div className="space-y-6 w-full">
              <div className="group">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Zadzwoń teraz
                </p>
                <a
                  href="tel:+48609788088"
                  className="text-xl font-bold text-white group-hover:text-[#00ac49] transition-colors flex items-center gap-3"
                >
                  <span className="text-[#00ac49]">
                    <FaPhoneAlt className="text-sm animate-pulse" />
                  </span>
                  +48 609 788 088
                </a>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                  Lokalizacja
                </p>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="mt-1 text-[#00ac49]" />
                  <span>
                    Tomaszów Lubelski
                    <br />
                    Hrubieszów
                  </span>
                </div>
              </div>

              <div className="pt-2 flex gap-4 justify-center lg:justify-start text-xs">
                {infoLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-600 hover:text-[#00ac49] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600 font-medium tracking-wide text-center md:text-left">
            &copy; {currentYear} Aktywna Przemiana. All rights reserved.
          </p>

          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ac49] to-emerald-600 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative flex items-center gap-3 bg-[#0a0a0a] px-5 py-2 rounded-full border border-white/10 shadow-2xl">
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider hidden sm:block">
                Realizacja
              </span>
              <Link
                href="https://klaudiuszdev.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group-hover:gap-3 transition-all duration-300"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="https://klaudiuszdev.pl/hello.svg"
                    alt="KlaudiuszDev- Klaudiusz Adamaszek "
                    fill
                    className="object-contain filter brightness-0 invert-[38%] sepia-[78%] saturate-[1613%] hue-rotate-[101deg] brightness-[90%] contrast-[100%] transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
                <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                  klaudiuszdev.pl
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
