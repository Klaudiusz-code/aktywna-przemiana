import { BsArrowRight } from "react-icons/bs";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";

const Socials = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-3 md:mb-4">
            Dołącz do nas{" "}
            <span className="font-medium text-[#00ac49]">w sieci</span>
          </h2>
          <p className="text-neutral-500 text-sm">
            Wybierz platformę i zobacz, co dzieje się w studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="group relative h-32 md:h-40 rounded-2xl md:rounded-3xl bg-neutral-900 border border-white/5 hover:border-[#E1306C] transition-all duration-300 overflow-hidden flex items-center justify-between px-5 md:px-8"
          >
            <div className="absolute inset-0 bg-[#E1306C] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>

            <div className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 text-white/5 group-hover:text-white/10 transition-colors duration-300">
              <IoLogoInstagram className="text-[6rem] md:text-[10rem]" />
            </div>

            <div className="relative z-10 flex items-center gap-4 md:gap-6">
              <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 group-hover:bg-white text-[#E1306C] group-hover:text-black transition-colors duration-300">
                <IoLogoInstagram className="text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-black transition-colors duration-300">
                  Instagram
                </h3>
                <p className="text-xs md:text-sm text-neutral-500 group-hover:text-black/60 transition-colors duration-300">
                  @aktywnaprzemiana
                </p>
              </div>
            </div>

            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-black group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
              <BsArrowRight />
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="group relative h-32 md:h-40 rounded-2xl md:rounded-3xl bg-neutral-900 border border-white/5 hover:border-[#1877F2] transition-all duration-300 overflow-hidden flex items-center justify-between px-5 md:px-8"
          >
            <div className="absolute inset-0 bg-[#1877F2] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>

            <div className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 text-white/5 group-hover:text-white/10 transition-colors duration-300">
              <IoLogoFacebook className="text-[6rem] md:text-[10rem]" />
            </div>

            <div className="relative z-10 flex items-center gap-4 md:gap-6">
              <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 group-hover:bg-white text-[#1877F2] group-hover:text-black transition-colors duration-300">
                <IoLogoFacebook className="text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-black transition-colors duration-300">
                  Facebook
                </h3>
                <p className="text-xs md:text-sm text-neutral-500 group-hover:text-black/60 transition-colors duration-300">
                  Aktywna Przemiana
                </p>
              </div>
            </div>

            <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-black group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
              <BsArrowRight />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
