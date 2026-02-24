"use client";
import { useState } from "react";
import { IoClose, IoEye, IoCamera } from "react-icons/io5";

type GalleryImage = {
  url: string;
  alt: string;
  span: string;
};

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      alt: "Sprzęt siłowni",
      span: "col-span-1 row-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
      alt: "Trening hantle",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
      alt: "Studio treningowe",
      span: "col-span-1 row-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
      alt: "Zdrowe jedzenie",
      span: "col-span-1 row-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop",
      alt: "Trener i klient",
      span: "col-span-1 row-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      alt: "Motywacja",
      span: "col-span-1 row-span-1",
    },
  ];

  const openModal = (img: GalleryImage) => {
    setSelectedImage(img);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="galeria"
      className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden selection:bg-[#00ac49] selection:text-black"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[700px] md:h-[1000px] bg-[#00ac49]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6">
          <div className="text-left">
            <span className="text-[#00ac49] font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 block">
              Galeria
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-2 leading-none tracking-tight">
              Nasze{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                Studio
              </span>
            </h2>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              Zobacz klimat, w którym trenujemy. Nowoczesne wyposażenie i
              profesjonalne podejście.
            </p>
          </div>
          <a
            href="#kontakt"
            className="text-[#00ac49] font-bold hover:text-white text-base md:text-lg transition-colors flex items-center gap-2"
          >
            Umów wizytę <IoCamera />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[300px]">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 hover:border-[#00ac49]/50 transition-all duration-300 ${img.span}`}
              onClick={() => openModal(img)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale opacity-70 md:opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2 text-center p-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00ac49] text-black flex items-center justify-center transform scale-75 md:scale-50 group-hover:scale-100 transition-transform duration-300">
                    <IoEye className="text-lg md:text-xl" />
                  </div>
                  <span className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    Zobacz
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[95vw] max-h-[90vh] w-full flex items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300"
            >
              <IoClose className="text-xl md:text-2xl" />
            </button>

            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
