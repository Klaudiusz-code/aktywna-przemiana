import {
  IoBarbell,
  IoFlash,
  IoLeaf,
  IoArrowForward,
  IoCheckmark,
  IoTime,
  IoStar,
} from "react-icons/io5";

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Trening Personalny",
      subtitle: "Kompleksowa opieka trenera.",
      desc: "Trening 1 na 1 z certyfikowanym specjalistą. Nie tylko liczymy powtórzenia, ale uczymy Cię prawidłowej techniki, która przyniesie trwałe rezultaty bez kontuzji.",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop",
      icon: <IoBarbell className="w-6 h-6" />,
      duration: "60 min",
      stats: [
        { label: "Poziom", value: "Każdy" },
        { label: "Intensywność", value: "Wysoka" },
      ],
      quote: "Najlepszy trener, z jakim miałam do czynienia.",
      reverse: false,
      highlight: false,
    },
    {
      id: 2,
      title: "Trening EMS",
      subtitle: "Rewolucja w treningu.",
      desc: "Elektrostymulacja mięśni aktywuje 90% Twoich włókien jednocześnie. Oznacza to, że 20-minutowa sesja daje efekty równoważne 2-godzinnemu treningowi na siłowni.",
      image: "ems.png",
      icon: <IoFlash className="w-6 h-6" />,
      duration: "20 min",
      stats: [
        { label: "Aktywacja Mięśni", value: "90%" },
        { label: "Oszczędność", value: "85%" },
      ],
      quote: "20 minut i czuję, jakbym ćwiczył przez godzinę.",
      reverse: true,
      highlight: true,
    },
    {
      id: 3,
      title: "Prowadzenie Żywieniowe",
      subtitle: "Dieta bez wyrzeczeń.",
      desc: "Oferujemy indywidualnie dopasowane plany żywieniowe, które wchodzą w Twój styl życia. Uczymy Cię, jak jeść zdrowo, smacznie i świadomie.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
      icon: <IoLeaf className="w-6 h-6" />,
      duration: "Online",
      stats: [
        { label: "Typ Diety", value: "Elastyczna" },
        { label: "Wsparcie", value: "24/7" },
      ],
      quote: "Wreszkie dieta, na którą nie muszę płakać.",
      reverse: false,
      highlight: false,
    },
  ];

  return (
    <section
      id="oferta"
      className="py-32 bg-[#050505] text-white relative overflow-hidden selection:bg-[#00ac49] selection:text-black"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#00ac49]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-[#00ac49]/30 bg-[#00ac49]/5 text-[#00ac49] font-black text-[10px] uppercase tracking-[0.3em]">
            Oferta Studia
          </span>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Wybierz intensywność i styl, który pasuje do Twojego życia.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-start mb-32 last:mb-0 group ${
                service.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/20 z-30 items-center justify-center transition-all duration-500 ${
                  service.highlight
                    ? "border-[#00ac49] animate-pulse"
                    : "group-hover:border-[#00ac49] group-hover:scale-125"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${service.highlight ? "bg-[#00ac49]" : "bg-white/50"}`}
                ></div>
              </div>

              <div
                className={`relative ${service.reverse ? "md:order-2" : "md:order-1"}`}
              >
                <div
                  className={`relative rounded-3xl overflow-hidden aspect-[4/3] transition-all duration-700 border border-white/5 ${
                    service.highlight
                      ? "shadow-[0_0_0_rgba(0,172,73,0)] group-hover:shadow-[0_25px_50px_-12px_rgba(0,172,73,0.25)]"
                      : "shadow-2xl group-hover:shadow-2xl"
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ac49]/10 via-transparent to-transparent z-10 pointer-events-none"></div>
                  )}

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-20"></div>

                  <div className="absolute bottom-6 right-6 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 transition-colors duration-300 group-hover:bg-[#00ac49] group-hover:text-black z-30">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div
                className={`relative z-10 flex flex-col ${service.reverse ? "md:order-1 md:text-right md:items-end" : "md:order-1 md:text-left md:items-start"}`}
              >
                <div
                  className={`flex items-center gap-2 mb-4 ${service.reverse ? "md:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`h-[1px] w-8 ${service.highlight ? "bg-[#00ac49]" : "bg-white/20"}`}
                  ></div>
                  <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest">
                    <IoTime /> {service.duration}
                  </div>
                </div>

                <h3
                  className={`text-3xl md:text-4xl font-black mb-4 leading-tight transition-colors duration-300 ${
                    service.highlight
                      ? "text-[#00ac49]"
                      : "text-white group-hover:text-white"
                  }`}
                >
                  {service.title}
                </h3>

                <p className="text-lg text-gray-400 font-medium mb-6">
                  {service.subtitle}
                </p>

                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg text-sm md:text-base">
                  {service.desc}
                </p>

                <div
                  className={`flex flex-wrap gap-4 mb-8 ${service.reverse ? "md:justify-end" : ""}`}
                >
                  {service.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10"
                    >
                      <span
                        className={`text-xs font-bold uppercase ${service.highlight ? "text-[#00ac49]" : "text-white"}`}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[10px] uppercase text-gray-500">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <ul
                  className={`space-y-3 mb-8 ${service.reverse ? "md:items-end" : ""}`}
                >
                  {["Skuteczność", "Bezpieczeństwo", "Elastyczność"].map(
                    (item, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-3 text-sm font-medium text-gray-400 ${service.reverse ? "flex-row-reverse" : ""}`}
                      >
                        <IoCheckmark
                          className={`text-base flex-shrink-0 transition-colors duration-300 ${service.highlight ? "text-[#00ac49]" : "text-white/30 group-hover:text-[#00ac49]"}`}
                        />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>

                <div
                  className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border-l-4 border-[#00ac49] mb-8 relative overflow-hidden group hover:bg-white/10 transition-colors duration-300 ${service.reverse ? "md:text-right" : ""}`}
                >
                  <span className="absolute top-2 left-2 text-8xl font-black text-white/5 leading-none">
                    "
                  </span>

                  <p className="text-xs italic text-gray-300 mb-3 relative z-10">
                    "{service.quote}"
                  </p>
                  <div
                    className={`flex items-center gap-2 relative z-10 ${service.reverse ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="flex text-[#00ac49] text-[10px]">
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-500">
                      Klient
                    </span>
                  </div>
                </div>

                <div
                  className={service.reverse ? "md:flex md:justify-end" : ""}
                >
                  <a
                    href="#kontakt"
                    className={`group/btn inline-flex items-center justify-between px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 relative overflow-hidden w-full md:w-auto min-w-[220px] shadow-lg ${
                      service.highlight
                        ? "bg-[#00ac49] text-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black hover:border-white"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Umów się{" "}
                      <IoArrowForward className="text-lg transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
