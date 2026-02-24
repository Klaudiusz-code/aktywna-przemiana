"use client";
import { useState } from "react";
import { IoLogoInstagram, IoTrophy } from "react-icons/io5";

type City = "tomaszow" | "hrubieszow";

type TeamMember = {
  name: string;
  role: string;
  stats: string;
  image: string;
  instagram: string;
};

type TeamData = {
  tomaszow: TeamMember[];
  hrubieszow: TeamMember[];
};

const Trainers = () => {
  const [activeCity, setActiveCity] = useState<City>("tomaszow");
  const [isAnimating, setIsAnimating] = useState(false);

  const teamData: TeamData = {
    tomaszow: [
      {
        name: "Adam Nowak",
        role: "Główny Trener",
        stats: "8 Lat Doświadczenia",
        image:
          "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        instagram: "#",
      },
      {
        name: "Karolina Kowalska",
        role: "Specjalistka EMS",
        stats: "500+ Zadowolonych",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        instagram: "#",
      },
      {
        name: "Piotr Zieliński",
        role: "Trener Personalny",
        stats: "Mistrz Polski",
        image:
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        instagram: "#",
      },
      {
        name: "Marek Wiśniewski",
        role: "Fizjoterapeuta",
        stats: "Rehabilitacja",
        image:
          "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        instagram: "#",
      },
      {
        name: "Kasia Adamczyk",
        role: "Dietetyk Sportowy",
        stats: "Plany Żywieniowe",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        instagram: "#",
      },
    ],
    hrubieszow: [
      {
        name: "Anna Nowicka",
        role: "Menadżerka Studio",
        stats: "Punkt Kontaktowy",
        image:
          "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        instagram: "#",
      },
      {
        name: "Robert Lewandowski",
        role: "Trener EMS",
        stats: "Szybkie Efekty",
        image:
          "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        instagram: "#",
      },
    ],
  };

  const currentTeam = teamData[activeCity];

  const handleCityChange = (city: City) => {
    if (activeCity === city || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCity(city);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section
      id="zespol"
      className="relative py-20 md:py-32 bg-[#020202] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-white/5 pb-6 md:pb-8 mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-[#00ac49] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 opacity-80">
              Nasz Zespół
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
              Ekspert{" "}
              <span className="font-medium text-neutral-500">
                w Twoim mieście
              </span>
            </h2>
          </div>

          <div className="mt-2 md:mt-0 flex w-full md:w-auto bg-white/5 p-1 rounded-full backdrop-blur-sm border border-white/5">
            <button
              onClick={() => handleCityChange("tomaszow")}
              className={`flex-1 md:flex-none px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-medium tracking-widest uppercase transition-all duration-500 flex items-center justify-center gap-2 ${
                activeCity === "tomaszow"
                  ? "bg-[#00ac49] text-white shadow-lg shadow-[#00ac49]/20"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Tomaszów
              <span
                className={`text-[9px] px-1.5 rounded-md ${
                  activeCity === "tomaszow"
                    ? "bg-black/20"
                    : "bg-white/10 text-neutral-500"
                }`}
              >
                {teamData.tomaszow.length}
              </span>
            </button>
            <button
              onClick={() => handleCityChange("hrubieszow")}
              className={`flex-1 md:flex-none px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-medium tracking-widest uppercase transition-all duration-500 flex items-center justify-center gap-2 ${
                activeCity === "hrubieszow"
                  ? "bg-[#00ac49] text-white shadow-lg shadow-[#00ac49]/20"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Hrubieszów
              <span
                className={`text-[9px] px-1.5 rounded-md ${
                  activeCity === "hrubieszow"
                    ? "bg-black/20"
                    : "bg-white/10 text-neutral-500"
                }`}
              >
                {teamData.hrubieszow.length}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12 transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentTeam.map((member, index) => (
            <div
              key={index}
              className="group relative h-[420px] sm:h-[480px] md:h-[600px] w-full rounded-[1.5rem] md:rounded-[2rem] bg-neutral-900 overflow-hidden cursor-pointer shadow-[0_15px_35px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-700"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:brightness-105 group-hover:contrast-110"
                style={{
                  backgroundImage: `url(${member.image})`,
                  filter: "grayscale(100%) brightness(0.5) contrast(110%)",
                  willChange: "transform, filter",
                }}
              >
                <div className="absolute inset-0 bg-[#00ac49] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/10 rotate-12 transform skew-x-12 opacity-0 group-hover:animate-shine"></span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <div className="relative z-10 mb-3 md:mb-4 transition-all duration-500 group-hover:-translate-y-2 md:group-hover:-translate-y-3">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-1 tracking-tight group-hover:text-[#00ac49] transition-colors duration-500">
                    {member.name}
                  </h3>
                  <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 group-hover:text-[#00ac49] transition-colors duration-500">
                    {member.role}
                  </span>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 transition-all duration-500 group-hover:scale-105">
                  <div className="flex items-center gap-2 mb-3 text-[11px] md:text-xs text-neutral-300 font-medium border-b border-white/5 pb-3">
                    <IoTrophy className="text-[#00ac49]" />
                    <span>{member.stats}</span>
                  </div>

                  <a
                    href={member.instagram}
                    className="flex items-center justify-between w-full py-2.5 md:py-3 px-3 md:px-4 rounded-lg md:rounded-xl border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  >
                    <span>Zobacz Profil</span>
                    <IoLogoInstagram className="text-sm md:text-base transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </div>
              </div>

              <style jsx>{`
                @keyframes shine {
                  0% {
                    left: -75%;
                    opacity: 0;
                  }
                  50% {
                    left: 100%;
                    opacity: 0.2;
                  }
                  100% {
                    left: 100%;
                    opacity: 0;
                  }
                }
                .group-hover\\:animate-shine {
                  animation: shine 1s ease-in-out forwards;
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
