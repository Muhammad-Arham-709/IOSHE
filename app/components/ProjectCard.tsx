"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const getCategoryColor = (category: string) => {
  switch(category) {
    case "iso": return "bg-[#2F6F5F] text-white";
    case "environmental": return "bg-[#86A795] text-white";
    case "training": return "bg-[#D97706] text-white";
    case "governance": return "bg-[#1E3A8A] text-white";
    default: return "bg-gray-500 text-white";
  }
};

const getCategoryName = (category: string) => {
  switch(category) {
    case "iso": return "ISO Certification";
    case "environmental": return "Environmental";
    case "training": return "Training";
    case "governance": return "Governance";
    default: return category;
  }
};

export default function ProjectCard({ project, isExpanded, onToggle }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="flex gap-4 p-5 cursor-pointer" onClick={onToggle}>
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F4F1EA] rounded-xl overflow-hidden flex-shrink-0">
          <Image src={project.image} alt={project.name} width={80} height={80} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(project.category)}`}>
              {getCategoryName(project.category)}
            </span>
          </div>
          
          <h3 className="text-lg sm:text-xl font-extrabold text-[#21473E]">{project.name}</h3>
          <p className="text-sm text-[#5D6965] mt-1">{project.shortResult}</p>
          <div className="flex items-center gap-1 mt-2 text-[#2F6F5F] text-sm font-medium">
            {isExpanded ? <>Show less <FaChevronUp size={14} /></> : <>Read more <FaChevronDown size={14} /></>}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-[#E5E9E7] p-5 bg-[#FAFAFA]">
          <h4 className="font-bold text-[#21473E] mb-3">Key Achievements:</h4>
          <ul className="space-y-2 mb-4">
            {project.expandedDetails.map((detail: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#5D6965]">
                <span className="text-[#2F6F5F] mt-0.5">✓</span> {detail}
              </li>
            ))}
          </ul>
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F4F1EA] rounded-xl overflow-hidden flex-shrink-0">
  <Image
    src={project.image}
    alt={project.name}
    width={80}
    height={80}
    className="w-full h-full object-cover"
    loading="lazy"
    // Add priority for above-the-fold images
    priority={project.id <= 4}  // First 4 projects load immediately
  />
</div>
          <div className="bg-[#EAF5F1] rounded-xl p-3">
            <p className="text-sm font-semibold text-[#21473E]">📊 {project.metrics}</p>
          </div>
        </div>
        
      )}
    </div>
  );
}