import Topbar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Trainers from "@/components/Trainers";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
  title: "Aktywna Przemiana | Trening Personalny i EMS",
  description:
    "Studio treningu personalnego w Tomaszowie Lubelskim i Hrubieszowie.",
};

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00ac49] selection:text-white">
      <Topbar />
      <Navbar />
      <Hero />
      <Services />
      <Trainers />
      <Benefits />
      <Gallery />
      <Socials />
      <Location />
      <Footer />
    </main>
  );
}
