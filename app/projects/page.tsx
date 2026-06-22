

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects | IOSHE Pakistan",
  description: "See our successful projects with DRAP, USAID, UKAID, and government organizations.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#F4F1EA] text-[#24312D] overflow-x-hidden w-full">
      <TopBar />
      <Navbar />
      <ProjectsClient />
      <Footer />
    </main>
  );
}