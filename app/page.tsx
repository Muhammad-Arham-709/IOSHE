
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EnvironmentSection from "./components/EnvironmentSection";
import BoardroomSection from "./components/BoardroomSection";
import PartnersSection from "./components/PartnersSection";
import IsoStandards from "./components/IsoStandards";
import ScrollProgressBar from "./components/ScrollProgressBar";
import CarbonCalculator from "./components/CarbonCalculator";
import Footer from "./components/Footer";

// Remove metadata from here - it will go in layout.tsx instead

export default function HomePage() {
  return (
    <main className="bg-[#F4F1EA] text-[#24312D] overflow-x-hidden w-full selection:bg-[#2F6F5F] selection:text-white">
      <ScrollProgressBar />
      
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <EnvironmentSection />
      <BoardroomSection />
      <PartnersSection />
      <IsoStandards />
      <CarbonCalculator />
      <Footer />
    </main>
  );
}