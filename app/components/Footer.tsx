"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#21473E] text-white py-12 md:py-16 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <Image src="/IOSHE_Final.png" alt="IOSHE" width={50} height={50} className="rounded-xl mx-auto sm:mx-0" />
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              IOSHE supports environmental governance, ISO systems, and OHS development across Pakistan.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-extrabold">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2 text-white/60 text-sm">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <Link href="/projects" className="hover:text-white transition">Projects</Link>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-extrabold">Services</h3>
            <div className="mt-4 flex flex-col gap-2 text-white/60 text-sm">
              <span className="hover:text-white transition cursor-pointer">ISO 14001</span>
              <span className="hover:text-white transition cursor-pointer">Environmental Audits</span>
              <span className="hover:text-white transition cursor-pointer">Climate Governance</span>
              <span className="hover:text-white transition cursor-pointer">Carbon Footprint Assessment</span>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-extrabold">Contact</h3>
            <div className="mt-4 flex flex-col gap-2 text-white/60 text-sm">
              <p>Islamabad, Pakistan</p>
              <p className="hover:text-white transition cursor-pointer">info@ioshe.org.pk</p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xl shadow-xl hover:scale-110 active:scale-95 transition-all z-50"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}