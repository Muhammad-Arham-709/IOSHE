"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 md:py-20 border-t border-[#24312D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl p-6 sm:p-10 border">
            <div className="relative h-[200px] sm:h-[280px] w-full">
              <Image
                src="/train1.jpg"
                alt="IOSHE Professional Training"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#21473E] text-center">IOSHE</h2>
            <p className="text-center uppercase tracking-[0.3em] text-[10px] text-[#66716D] font-bold">Pakistan</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <p className="uppercase tracking-[0.25em] text-xs font-extrabold text-[#2F6F5F]">About IOSHE</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#21473E]">
            Institute of Occupational Safety, Health & Environment
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5D6965]">
            IOSHE operates as an institute dedicated to building sustainable corporate frameworks. We specialize in implementing advanced EMS and ISO frameworks that empower organizations to mitigate environmental risks.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {["Climate Governance", "ISO 14001 Systems", "OHS Training", "Environmental Audits"].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 shadow-sm border text-center">
                <p className="font-extrabold text-[#21473E] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}