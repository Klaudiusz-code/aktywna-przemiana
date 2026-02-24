import {
  FaLocationDot,
  FaClock,
  FaPhone,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

export default function Topbar() {
  return (
    <div className="h-10 bg-[#050505] border-b border-white/5 text-neutral-400 text-xs hidden md:flex relative z-20 select-none">
      <div className="container mx-auto px-6 h-full flex justify-between items-center w-full">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 group cursor-pointer">
            <FaLocationDot className="text-[#00ac49] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
              Tomaszów / Hrubieszów
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaClock className="text-[#00ac49]" />
            <span className="tracking-wide font-light">
              Pon - Pt: 8:00 - 20:00
            </span>
          </div>

          <div className="h-4 w-px bg-white/10"></div>

          <a
            href="tel:+48609788088"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <FaPhone className="text-[#00ac49] group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-neutral-200 group-hover:text-[#00ac49] transition-colors">
              +48 609 788 088
            </span>
          </a>

          <div className="flex items-center gap-4 ml-2">
            <a
              href="#"
              className="hover:text-[#00ac49] hover:scale-110 transition-all duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-[#00ac49] hover:scale-110 transition-all duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
