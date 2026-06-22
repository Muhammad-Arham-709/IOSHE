"use client";
import Image from "next/image";

export default function EnvironmentSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/forest-bg.jpg"
          fill
          alt = "detailed forest picture"
          className="object-cover opacity-20"
          quality={75}
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#E7F0EB] to-[#D5E2DB]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-12 items-center">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border">
            <p className="uppercase tracking-[0.25em] text-[#4C7867] font-bold text-xs">Climate • Environment</p>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-[#203C34] leading-tight">
              Building Greener Futures Through Environmental Leadership.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#57655F]">
              IOSHE promotes ISO 14001 environmental management systems, sustainability awareness, and climate responsibility frameworks for organizations across Pakistan.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {[["14001", "Environmental"], ["Climate", "Sustainability"], ["OHS", "Workplace Safety"]].map((stat, idx) => (
                <div key={idx} className="bg-[#EEF5F1] rounded-xl px-4 py-3 flex-1 min-w-[100px] text-center">
                  <p className="text-xl sm:text-2xl font-black text-[#21473E]">{stat[0]}</p>
                  <p className="text-[#61706A] text-xs mt-1">{stat[1]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/tree.png"
                alt="Environmental Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                <h3 className="text-lg sm:text-xl font-bold">Environmental Training</h3>
                <a href="#carbon-calculator" className="inline-block mt-2 px-4 py-2 rounded-lg bg-white text-[#21473E] text-sm font-semibold hover:bg-gray-100 transition">
                  Calculate Footprint
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}