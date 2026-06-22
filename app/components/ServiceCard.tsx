"use client";

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  borderColor?: string;
}

export default function ServiceCard({ index, title, description, borderColor = "#2F6F5F" }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-black/5 hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group relative overflow-hidden">
      {borderColor && (
        <div className={`absolute left-0 top-0 bottom-0 w-1.5`} style={{ backgroundColor: borderColor }} />
      )}
      <div>
        {!borderColor && (
          <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] flex items-center justify-center text-[#2F6F5F] font-bold text-lg mb-5 group-hover:bg-[#2F6F5F] group-hover:text-white transition duration-300">
            0{index + 1}
          </div>
        )}
        <h3 className="text-xl font-extrabold text-[#21473E] leading-snug">
          {title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[#5D6965] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}