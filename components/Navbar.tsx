"use client";
import {
  IoCallOutline,
  IoArrowForward,
  IoClose,
} from "react-icons/io5";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Start", href: "#" },
    { name: "Oferta", href: "#oferta" },
    { name: "Zespół", href: "#zespol" },
    { name: "Galeria", href: "#galeria" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      <style>
        {`
          /* Ukrycie paska przewijania */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Animacja Hamburgera */
          .hamburger-line {
            transition: all 0.3s ease-in-out;
            transform-origin: center;
          }
          .hamburger-active .line-1 {
            transform: rotate(45deg) translate(5px, 6px);
          }
          .hamburger-active .line-2 {
            opacity: 0;
            transform: translateX(-10px);
          }
          .hamburger-active .line-3 {
            transform: rotate(-45deg) translate(5px, -6px);
          }

          /* Animacja wejścia linków */
          @keyframes slide-in-blur {
            from { opacity: 0; transform: translateY(20px) blur(5px); }
            to { opacity: 1; transform: translateY(0) blur(0); }
          }
          .mobile-link-anim {
            animation: slide-in-blur 0.4s ease-out forwards;
            opacity: 0;
          }
        `}
      </style>

      <nav
        className={`
          fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border-b
          ${
            scrolled
              ? "top-0 h-[80px] bg-[#050505]/90 backdrop-blur-xl border-white/5 shadow-xl"
              : "top-10 md:top-10 h-[100px] bg-transparent border-transparent"
          }
        `}
      >
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          <div className="relative z-50">
            <a href="#" className="block group relative">
              <div className="absolute -inset-4 bg-[#00ac49]/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image
                src="/logonav.svg"
                alt="Logo"
                width={180}
                height={150}
                priority
                className="relative w-[65px] md:w-[75px] h-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group px-5 py-2 text-sm font-bold text-gray-400 uppercase tracking-wider transition-colors hover:text-white"
              >
                {item.name}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-[#00ac49] transition-all duration-300 group-hover:w-8 shadow-[0_0_10px_#00ac49]"></span>
              </a>
            ))}

            <a
              href="tel:+48609788088"
              className="ml-6 flex items-center gap-2.5 bg-[#00ac49] text-black px-7 py-2.5 rounded-full font-bold text-sm 
                         transition-all duration-300 ease-out
                         hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
                         active:scale-95
                         relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
              <IoCallOutline className="text-lg relative z-10" />
              <span className="relative z-10">Zadzwoń</span>
            </a>
          </div>

          <button
            className={`md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-full transition-colors hover:bg-white/5 ${isOpen ? 'hamburger-active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className="hamburger-line line-1 block w-6 h-[2px] bg-white rounded-full"></span>
            <span className="hamburger-line line-2 block w-6 h-[2px] bg-white rounded-full w-4"></span>
            <span className="hamburger-line line-3 block w-6 h-[2px] bg-white rounded-full"></span>
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 z-[60] bg-[#050505] flex flex-col
          transition-all duration-500 ease-in-out md:hidden overflow-hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00ac49]/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00ac49]/5 blur-[80px] rounded-full"></div>
        </div>

        <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00ac49] hover:text-[#00ac49] transition-all duration-300"
        >
            <IoClose className="text-2xl" />
        </button>

        <div className="relative z-10 flex flex-col h-full pt-28 px-6 no-scrollbar">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="mobile-link-anim group flex items-center justify-between py-6 border-b border-white/5 hover:bg-white/5 rounded-xl px-4 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-5">
                    <span className="text-xl font-black text-[#00ac49]/20 group-hover:text-[#00ac49] transition-colors font-mono">
                        0{index + 1}
                    </span>
                    <span className="text-xl font-bold text-white group-hover:translate-x-3 transition-transform duration-300 tracking-tight">
                        {item.name}
                    </span>
                </div>
                <IoArrowForward className="text-[#00ac49] text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="mt-auto mb-10 px-2">
             <a
              href="tel:+48609788088"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 w-full bg-[#00ac49] py-6 rounded-2xl font-black text-2xl uppercase tracking-wider text-black transition-colors duration-300 shadow-[0_0_50px_rgba(0,172,73,0.3)] relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-white/30 skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               <span className="relative z-10 flex items-center gap-3 text-lg text-white">
                    <IoCallOutline />
                    Zadzwoń teraz
               </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}