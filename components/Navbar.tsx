"use client";
import { IoCallOutline, IoArrowForward, IoClose } from "react-icons/io5";
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
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* PREMIUM HAMBURGER */
          .hamburger span {
            display: block;
            height: 2px;
            width: 22px;
            border-radius: 999px;
            background: white;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hamburger.active span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }
          .hamburger.active span:nth-child(2) {
            opacity: 0;
            transform: scaleX(0);
          }
          .hamburger.active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }
        `}
      </style>

      <nav
        className={`
          fixed left-0 right-0 z-50 transition-all duration-500 border-b
          ${
            scrolled
              ? "top-0 h-[64px] sm:h-[70px] lg:h-[80px] bg-[#050505]/90 backdrop-blur-xl border-white/5 shadow-xl"
              : "top-0 lg:top-6 h-[64px] sm:h-[75px] lg:h-[100px] bg-transparent border-transparent"
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-between">
          <a href="#" className="relative z-50 group flex items-center">
            <div className="absolute -inset-3 bg-[#00ac49]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <Image
              src="/logonav.svg"
              alt="Logo"
              width={180}
              height={120}
              priority
              className="relative w-[58px] sm:w-[65px] lg:w-[80px] h-auto object-contain drop-shadow-[0_6px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group px-5 xl:px-6 py-2 text-sm font-bold text-gray-400 uppercase tracking-wider transition-colors duration-300 hover:text-white"
              >
                {item.name}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-[#00ac49] transition-all duration-300 group-hover:w-8 shadow-[0_0_10px_#00ac49]"></span>
              </a>
            ))}

            <a
              href="tel:+48609788088"
              className="ml-6 flex items-center gap-2 bg-[#00ac49] text-black px-6 py-2.5 rounded-full font-bold text-sm 
              transition-all duration-300 ease-out
              hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]
              active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
              <IoCallOutline className="text-lg relative z-10" />
              <span className="relative z-10">Zadzwoń</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="lg:hidden relative z-50"
          >
            <div className="relative w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:border-[#00ac49]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,172,73,0.3)]">
              <div
                className={`hamburger ${
                  isOpen ? "active" : ""
                } flex flex-col gap-1.5`}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 z-[60] bg-[#050505] flex flex-col
          transition-all duration-500 ease-in-out lg:hidden overflow-hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-[#00ac49]/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-60px] left-[-60px] w-[180px] h-[180px] bg-[#00ac49]/5 blur-[80px] rounded-full"></div>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00ac49] hover:text-[#00ac49] transition-all duration-300"
        >
          <IoClose className="text-xl" />
        </button>

        <div className="relative z-10 flex flex-col h-full pt-24 pb-8 px-6">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/logonav.svg"
              alt="Logo"
              width={120}
              height={60}
              className="w-[60px] h-auto opacity-90"
            />
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between py-4 px-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black text-[#00ac49]/30 group-hover:text-[#00ac49] transition-colors font-mono">
                    0{index + 1}
                  </span>

                  <span className="text-lg font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {item.name}
                  </span>
                </div>

                <IoArrowForward className="text-[#00ac49] text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href="tel:+48609788088"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#00ac49] py-4 rounded-2xl font-bold text-base uppercase tracking-wider text-white shadow-[0_0_30px_rgba(0,172,73,0.25)] active:scale-[0.98] transition-all duration-200"
            >
              <IoCallOutline className="text-lg" />
              Zadzwoń teraz
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
