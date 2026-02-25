"use client";
import {
  IoCallOutline,
  IoMenu,
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
      setScrolled(window.scrollY > 40);
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
      <nav
        className={`
          sticky left-0 right-0 z-30 transition-all duration-300 ease-out border-b
          ${
            scrolled
              ? "top-0 bg-[#0a0a0a]/90 backdrop-blur-xl border-white/5 shadow-2xl"
              : "md:top-[40px] top-0 bg-black border-transparent"
          }
        `}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-[70px] relative">
          {/* 🔥 LOGO - większe niż navbar */}
          <a href="#" className="relative flex items-center">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Image
                src="/logos.svg"
                alt="Logo"
                width={220}
                height={140}
                priority
                className="w-[76px] md:w-[98px] h-auto drop-shadow-[0_0_20px_rgba(0,172,73,0.35)]"
              />
            </div>

            {/* spacer żeby menu się nie nachodziło */}
            <div className="w-[220px] md:w-[300px]" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group text-gray-300 font-medium text-sm uppercase tracking-wide transition-colors hover:text-white py-2"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#00ac49] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="tel:+48609788088"
              className="group relative flex items-center gap-2 bg-[#00ac49] text-black px-6 py-2.5 rounded-lg font-bold hover:bg-white transition-all duration-300 text-sm shadow-[0_0_15px_rgba(0,172,73,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              <IoCallOutline />
              <span>Zadzwoń</span>
            </a>
          </div>

          <button
            className="md:hidden text-white text-2xl z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <IoMenu />
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 z-[50] bg-[#050505] flex flex-col 
          transition-all duration-500 ease-in-out md:hidden
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 z-50 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
          aria-label="Zamknij menu"
        >
          <IoClose className="text-3xl" />
        </button>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#00ac49]/10 via-[#050505] to-black pointer-events-none"></div>

        <div className="relative z-10 flex flex-col justify-center h-full w-full px-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-lg font-bold text-gray-400 group-hover:text-[#00ac49] transition-colors duration-300">
                  {item.name}
                </span>

                <div className="transform transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                  <IoArrowForward className="text-[#00ac49] text-lg" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-10 px-6 pb-12">
          <a
            href="tel:+48609788088"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 w-full bg-[#00ac49] py-5 rounded-2xl font-bold text-xl hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,172,73,0.3)]"
          >
            <IoCallOutline className="text-md text-white" />
            Zadzwoń teraz
          </a>
        </div>
      </div>
    </>
  );
}
