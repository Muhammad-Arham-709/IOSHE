"use client";

interface SectionHeaderProps {
  badge?: string;
  badgeColor?: "green" | "orange" | "blue";
  title: string;
  description?: string;
}

export default function SectionHeader({ badge, badgeColor = "green", title, description }: SectionHeaderProps) {
  const badgeColors = {
    green: "bg-[#EAF5F1] border-[#2F6F5F]/20 text-[#2F6F5F]",
    orange: "bg-[#FFF6EE] border-[#D97706]/20 text-[#B45309]",
    blue: "bg-[#EFF6FF] border-[#2563EB]/20 text-[#1D4ED8]",
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
      <div>
        {badge && (
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${badgeColors[badgeColor]}`}>
            <div className="w-2 h-2 rounded-full bg-current" />
            <span className="font-bold text-xs uppercase tracking-wider">{badge}</span>
          </div>
        )}
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#21473E]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-base sm:text-lg text-[#5D6965] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}