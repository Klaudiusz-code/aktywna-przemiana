import {
  IoTimeOutline,
  IoShieldCheckmarkOutline,
  IoPersonOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";

export default function Benefits() {
  const benefitsList = [
    {
      title: "Oszczędność Czasu",
      desc: "Efekty 2-godzinnego treningu w zaledwie 20 minut. EMS dla zapracowanych.",
      icon: <IoTimeOutline className="w-10 h-10" />,
    },
    {
      title: "Bezpieczeństwo",
      desc: "Trening pod okiem specjalisty. Zerowe ryzyko kontuzji, maksymalna efektywność.",
      icon: <IoShieldCheckmarkOutline className="w-10 h-10" />,
    },
    {
      title: "Indywidualność",
      desc: "Plan tworzony specjalnie dla Ciebie. Brak szablonów, tylko Twoje cele.",
      icon: <IoPersonOutline className="w-10 h-10" />,
    },
  ];

  return (
    <section
      id="o-nas"
      className="py-32 bg-[#050505] text-white relative overflow-hidden selection:bg-[#00ac49] selection:text-black"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
          alt="Studio Background"
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          <div className="md:col-span-2 lg:col-span-1 mb-12 lg:mb-0">
            <span className="text-[#00ac49] font-black tracking-[0.3em] uppercase text-xs mb-6 block">
              Nasze Atuty
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Dlaczego <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                My?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Nie trenujemy "na ilość". Skupiamy się na jakości Twojego ruchu i
              efektywności każdego powtórzenia.
            </p>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-[#00ac49] text-black font-black uppercase tracking-widest text-sm py-4 px-8 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Dołącz do nas <IoCheckmarkCircle className="text-lg" />
            </a>
          </div>

          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitsList.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-[#00ac49]/5 hover:border-[#00ac49]/20 transition-all duration-500 flex flex-col items-center text-center h-full"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-[#00ac49] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00ac49] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-auto pt-6 flex justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#00ac49] transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
