"use client";
import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercent(scrolled);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrollPercent === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#2F6F5F]/20 z-50">
      <div className="h-full bg-[#2F6F5F] transition-all duration-150" style={{ width: `${scrollPercent}%` }} />
    </div>
  );
}