"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-6xl md:text-9xl font-extrabold mb-6 text-[#00ac49]">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Strona nie została znaleziona
      </h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Wygląda na to, że adres URL jest nieprawidłowy lub strona została usunięta.
      </p>
      <Link
        href="/"
        className="bg-[#00ac49] text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
      >
        Wróć do strony głównej
      </Link>
    </div>
  );
}