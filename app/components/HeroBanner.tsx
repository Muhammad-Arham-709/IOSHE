"use client";

interface HeroBannerProps {
  badge: string;
  title: string;
  description: string;
  buttons?: Array<{ text: string; href: string; primary?: boolean }>;
}

export default function HeroBanner({ badge, title, description, buttons = [] }: HeroBannerProps) {
  return (
    <section className="relative py-16 md:py-24 bg-[#EBE7DD]/50 border-b border-[#24312D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="uppercase tracking-[0.3em] text-xs sm:text-sm font-extrabold text-[#2F6F5F]">
          {badge}
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#21473E] tracking-tight">
          {title}
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#5D6965] max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        {buttons.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                className={btn.primary 
                  ? "bg-[#21473E] hover:bg-[#18352e] text-white px-6 py-3 rounded-xl font-bold transition shadow-md"
                  : "bg-white hover:bg-[#ECE7DD] text-[#21473E] px-6 py-3 rounded-xl font-bold border border-[#21473E]/10 transition shadow-sm"
                }
              >
                {btn.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}