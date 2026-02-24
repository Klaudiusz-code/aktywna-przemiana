"use client";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { name: "Strona Główna", href: "#hero" },
    { name: "O Mnie", href: "#o-mnie" },
    { name: "Metamorfozy", href: "#metamorfozy" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const infoLinks = [
    { name: "Polityka Prywatności", href: "#" },
    { name: "Regulamin", href: "#" },
  ];

  return (
    <footer className="w-full bg-black border-t border-white/10 text-white pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* LOGO + Opis + Social */}
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full flex justify-center md:justify-start">
              <img
                src="/logo-aktywna.png"
                alt="Aktywna Przemiana Logo"
                className="h-32 w-auto object-contain max-w-[300px]"
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Profesjonalne studio treningu personalnego z wykorzystaniem
              technologii EMS. Tomaszów Lubelski i Hrubieszów.
            </p>

            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-gray-400 hover:text-[#00ac49] hover:border-[#00ac49] hover:bg-[#00ac49]/5 transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-gray-400 hover:text-[#00ac49] hover:border-[#00ac49] hover:bg-[#00ac49]/5 transition-all duration-300"
              >
                <FaFacebookF className="text-lg" />
              </a>
            </div>
          </div>

          {/* MENU */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-2">
              Menu
            </h3>
            <ul className="space-y-4 w-full">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00ac49] transition-colors duration-300 group flex items-center justify-center md:justify-start gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#00ac49] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INFORMACJE + Kontakt */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-2">
              Informacje
            </h3>

            <ul className="space-y-4 mb-8 w-full">
              {infoLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00ac49] transition-colors duration-300 group flex items-center justify-center md:justify-start gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#00ac49] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5 w-full">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                Zadzwoń do nas
              </p>
              <a
                href="tel:+48609788088"
                className="text-xl md:text-2xl font-bold text-white hover:text-[#00ac49] transition-colors tracking-tight"
              >
                +48 609 788 088
              </a>
            </div>
          </div>
        </div>

        {/* STOPKA DOLNA */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs text-gray-600 font-medium tracking-wider uppercase">
            &copy; {currentYear} Aktywna Przemiana. Wszelkie prawa zastrzeżone.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-600 justify-center md:justify-start">
            <span>Realizacja:</span>
            <a
              href="https://klaudiuszdev.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ac49] hover:underline underline-offset-4 transition-all font-bold"
            >
              klaudiuszdev.pl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
