"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-12 md:pt-16 pb-16 md:pb-24">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-[#DCEAE3] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2F6F5F]/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-[#21473E]/10">
            <div className="w-2 h-2 rounded-full bg-[#2F6F5F]" />
            <span className="font-bold text-[#21473E] text-xs">ISO 14001 • OHS • Environment • Climate</span>
          </div>

          <h1 className="mt-6 lg:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] text-[#21473E]">
            IOSHE: Shaping Sustainable, Safe, and Transparent Organizations.
          </h1>

          <p className="mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-[#5D6965] max-w-2xl">
            IOSHE supports sustainable institutions through climate governance, EMS/ISO compliance, and professional OHS training across Pakistan.
          </p>

          <div className="mt-6 lg:mt-10 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <button className="bg-[#21473E] hover:bg-[#18352e] transition px-5 sm:px-7 py-3 sm:py-4 rounded-xl text-white text-sm sm:text-base font-bold shadow-lg">
              Explore Services
            </button>
            <button className="bg-white hover:bg-[#ECE7DD] transition px-5 sm:px-7 py-3 sm:py-4 rounded-xl text-[#21473E] text-sm sm:text-base font-bold border border-[#21473E]/10 shadow-md">
              Contact IOSHE
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 lg:mt-16 max-w-md mx-auto lg:mx-0">
            {[["14001", "Environmental"], ["45001", "OHS Systems"], ["37001", "Governance"]].map((item, i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border border-black/5 text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#21473E]">{item[0]}</h3>
                <p className="mt-1 text-[10px] sm:text-xs text-[#66716D] font-bold">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/CarbonFtPrnt.jpg"
              alt="IOSHE Carbon Footprint Assessment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              quality={75}
              priority
            />
            <div className="absolute inset-0 bg-[#21473E]/10" />
          </div>
          
          <div className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:-left-8 bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl max-w-[280px] sm:max-w-sm border">
            <div className="flex items-center gap-3">
              <Image src="/IOSHE_Final.png" alt="IOSHE" width={35} height={35} className="rounded-lg" />
              <div>
                <h3 className="font-extrabold text-lg sm:text-xl text-[#21473E]">IOSHE</h3>
                <p className="text-[#6A7571] font-bold text-[10px] sm:text-xs">Environmental Systems</p>
              </div>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-[#5E6965] leading-relaxed">
              Supporting sustainable institutions through climate governance and ISO compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}