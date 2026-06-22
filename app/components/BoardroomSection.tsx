"use client";
import Image from "next/image";

export default function BoardroomSection() {
  return (
    <section className="py-16 md:py-24 bg-[#E6E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/boardroom.jpg"
            alt="IOSHE Boardroom Training Session"
            fill
            className="object-cover"
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 90vw, 45vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
          <p className="uppercase tracking-[0.25em] text-xs text-[#2F6F5F] font-extrabold text-center lg:text-left">Training & Governance</p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-[#21473E] text-center lg:text-left">
            Compliance Leadership & Professional ISO Systems
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5E6965]">
            IOSHE develops structured compliance ecosystems through occupational safety systems, governance planning, and professional training methodologies.
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-8">
            {[["14001", "Climate"], ["45001", "OHS"], ["37001", "Governance"]].map((item, i) => (
              <div key={i} className="bg-[#F4F1EA] rounded-xl p-3 text-center">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#21473E]">{item[0]}</h3>
                <p className="text-xs font-bold text-[#6B7571]">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}