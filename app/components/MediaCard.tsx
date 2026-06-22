"use client";
import Image from "next/image";

interface MediaCardProps {
  src: string;
  alt: string;
  badge: string;
  title: string;
  height?: "small" | "large";
}

export default function MediaCard({ src, alt, badge, title, height = "large" }: MediaCardProps) {
  const heightClass = height === "large" ? "h-[300px] sm:h-[400px] lg:h-[360px]" : "h-[250px]";
  
  return (
    <div className={`relative ${heightClass} rounded-[2rem] overflow-hidden shadow-xl border border-black/5 bg-white group`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition duration-700"
        loading="lazy"
        quality={70}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={(e) => {
          // Fallback if image doesn't exist
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <span className="text-[10px] uppercase tracking-widest text-white/70 font-bold block">{badge}</span>
        <h4 className="text-lg font-bold mt-1">{title}</h4>
      </div>
    </div>
  );
}