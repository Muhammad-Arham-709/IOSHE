"use client";
import Image from "next/image";

const partners = [
  { img: "/MiniCOM.jpg", title: "Ministry of Communications" },
  { img: "/MiniCliCha.png", title: "Ministry of Climate Change" },
  { img: "/MiniOvS.jpg", title: "Overseas Pakistanis" },
  { img: "/NHA.jpg", title: "NHA" },
  { img: "/USAID.png", title: "USAID" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-[#2F6F5F] font-extrabold">Client Portfolio</p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#21473E]">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mt-10 md:mt-14">
          {partners.map((item, i) => (
            <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="relative h-12 sm:h-14 w-full">
                <Image src={item.img} alt={item.title} fill className="object-contain" loading="lazy" sizes="(max-width: 640px) 40vw, 15vw" />
              </div>
              <p className="mt-3 text-center text-[#5E6965] font-bold text-[10px] sm:text-xs">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}