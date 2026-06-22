"use client";

export default function IsoStandards() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#dffcf4]/20 to-transparent border-t border-[#24312D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="uppercase tracking-[0.25em] text-xs text-[#2F6F5F] font-extrabold">Core Frameworks</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#21473E]">Globally Recognized Standards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {/* ISO 14001 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border hover:-translate-y-1 transition-all duration-300">
            <div className="inline-flex items-center gap-2 bg-[#f2f6f5] px-3 py-1.5 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-[#2F6F5F]" />
              <span className="font-extrabold text-[#2F6F5F] text-xs">Environment</span>
            </div>
            <h3 className="mt-4 text-2xl font-black text-[#21473E]">ISO 14001</h3>
            <p className="text-sm font-bold text-[#55635E]">Environmental Management Systems</p>
            <p className="mt-3 text-xs sm:text-sm text-[#606C67] leading-relaxed">
              Frameworks to manage environmental risks, reduce carbon footprints, and ensure compliance.
            </p>
            <div className="mt-5 pt-4 border-t flex justify-between">
              <span className="text-xs font-bold text-[#606C67]">Compliance Core</span>
              <div className="w-6 h-1 rounded-full bg-[#2F6F5F]" />
            </div>
          </div>

          {/* ISO 45001 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border hover:-translate-y-1 transition-all duration-300">
            <div className="inline-flex items-center gap-2 bg-[#FFF6EE] px-3 py-1.5 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span className="font-extrabold text-[#B45309] text-xs">Health & Safety</span>
            </div>
            <h3 className="mt-4 text-2xl font-black text-[#7C2D12]">ISO 45001</h3>
            <p className="text-sm font-bold text-[#9A3412]">Occupational Health & Safety</p>
            <p className="mt-3 text-xs sm:text-sm text-[#7C665E] leading-relaxed">
              Global criteria for mitigating workplace hazards and improving operational safety.
            </p>
            <div className="mt-5 pt-4 border-t flex justify-between">
              <span className="text-xs font-bold text-[#7C665E]">Protection Core</span>
              <div className="w-6 h-1 rounded-full bg-[#D97706]" />
            </div>
          </div>

          {/* ISO 37001 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border hover:-translate-y-1 transition-all duration-300">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] px-3 py-1.5 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="font-extrabold text-[#1D4ED8] text-xs">Governance</span>
            </div>
            <h3 className="mt-4 text-2xl font-black text-[#1E3A8A]">ISO 37001</h3>
            <p className="text-sm font-bold text-[#1E40AF]">Anti-Bribery Management</p>
            <p className="mt-3 text-xs sm:text-sm text-[#5A6880] leading-relaxed">
              Structures to safeguard business integrity and standardize corporate transparency.
            </p>
            <div className="mt-5 pt-4 border-t flex justify-between">
              <span className="text-xs font-bold text-[#5A6880]">Integrity Core</span>
              <div className="w-6 h-1 rounded-full bg-[#2563EB]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}