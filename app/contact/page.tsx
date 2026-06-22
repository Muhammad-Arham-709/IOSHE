"use client";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function ContactPage() {
  return (
    <main className="bg-[#F4F1EA] text-[#24312D] overflow-x-hidden w-full">
      <TopBar />
      <Navbar />

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#21473E] to-[#18352E] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F6F5F]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a2e28]/30 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-[#86A795] font-semibold">Get In Touch</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Let's Discuss Your<br />
            <span className="text-[#86A795]">Organizational Goals</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Fill out the form below and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}