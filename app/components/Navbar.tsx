"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#24312D]/10 w-full print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-3">
          <Image
            src="/IOSHE_Final.png"
            alt="IOSHE Logo"
            width={40}
            height={40}
            className="rounded-xl lg:w-[50px] lg:h-[50px]"
            priority
          />
          <div>
            <h2 className="text-lg lg:text-2xl font-extrabold text-[#21473E] tracking-tight leading-tight">IOSHE</h2>
            <p className="text-[0.5rem] lg:text-[0.6rem] tracking-[0.3em] uppercase text-[#65716D]">Pakistan</p>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 xl:gap-12 text-sm xl:text-base font-bold text-[#31443F]">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="hidden lg:block">
          <button className="bg-[#2F6F5F] hover:bg-[#255548] transition px-6 py-2.5 rounded-xl text-white font-semibold shadow-md text-sm">
            Contact Now
          </button>
        </div>

        <button 
          className="lg:hidden text-xl text-[#21473E] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-t border-[#24312D]/10">
          <div className="px-6 py-4 flex flex-col gap-3 text-base font-bold text-[#31443F]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2">Home</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="py-2">Services</Link>
            <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="py-2">Projects</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-2">Contact</Link>
            <button className="bg-[#2F6F5F] hover:bg-[#255548] transition w-full py-3 rounded-xl text-white font-bold mt-2">
              Contact Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}