"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import GallerySection from "../components/GallerySection";
import CTASection from "../components/CTASection";

// Move ALL your data and the main component logic here
const allProjects = [  { id: 1, name: "Drug Regulatory Authority of Pakistan (DRAP)", category: "governance", image: "/DRA.png", shortResult: "Implemented ISO 37001 Anti-Bribery Management System", expandedDetails: ["Complete gap analysis and risk assessment", "Anti-bribery policy framework development", "Training for 50+ regulatory staff members", "Whistleblower mechanism establishment", "Successfully achieved ISO 37001 certification"], metrics: "6 months completion" },
  { id: 2, name: "Serena Hotel", category: "iso", image: "/Serena.jpeg", shortResult: "ISO 14001 Environmental Management System implementation", expandedDetails: ["Environmental policy development", "Waste management protocols established", "Carbon footprint baseline measurement", "Internal auditor training program", "Documentation and record management system"], metrics: "Achieved 98% compliance rate" },
  { id: 3, name: "Establishment Division Pakistan", category: "governance", image: "/Estment.jpg", shortResult: "Governance framework and compliance systems", expandedDetails: ["Internal control systems review", "Standard operating procedures development", "Compliance monitoring dashboard", "Staff capacity building sessions"], metrics: "Streamlined 15+ departmental processes" },
  { id: 4, name: "Ministry of Communications", category: "iso", image: "/MiniCOM.jpg", shortResult: "Integrated management systems implementation", expandedDetails: ["Quality management system setup", "Environmental compliance protocols", "Occupational health & safety standards", "Document control and records management"], metrics: "ISO 9001:2015 readiness achieved" },
  { id: 5, name: "USAID Pakistan", category: "environmental", image: "/USAID.png", shortResult: "Environmental compliance for development projects", expandedDetails: ["EIA screening for multiple infrastructure projects", "Environmental monitoring framework", "Stakeholder consultation facilitation", "Environmental management plans development"], metrics: "Covered 25+ project sites" },
  { id: 6, name: "Khyber Pakhtunkhwa Government", category: "environmental", image: "/KPK.png", shortResult: "Strategic Environmental Assessment (SEA)", expandedDetails: ["Regional environmental baseline study", "Climate resilience strategy development", "Policy framework recommendations", "Stakeholder workshops and consultations"], metrics: "Covered 7 key districts" },
  { id: 7, name: "Ministry of Overseas Pakistanis & HRD", category: "training", image: "/MiniOvS.jpg", shortResult: "OHS training and compliance programs", expandedDetails: ["Workplace safety training for 200+ staff", "Emergency response procedure development", "Safety equipment assessment", "Incident reporting mechanism setup"], metrics: "Zero incidents post-training" },
  { id: 8, name: "Overseas Pakistanis Foundation (OPF)", category: "training", image: "/OPF.gif", shortResult: "Professional development and safety training", expandedDetails: ["Leadership and management training", "Customer service excellence program", "Workplace safety certifications", "Compliance awareness workshops"], metrics: "300+ staff members trained" },
  { id: 9, name: "Government of Punjab", category: "governance", image: "/MiniMon.png", shortResult: "General monitoring and evaluation framework", expandedDetails: ["M&E system design and implementation", "Performance indicator development", "Data collection protocols", "Quarterly reporting mechanism"], metrics: "Monitoring coverage across 36 departments" },
  { id: 10, name: "John Snow Inc. (JSI)", category: "environmental", image: "/JSI.png", shortResult: "Health systems environmental compliance", expandedDetails: ["Healthcare waste management assessment", "Environmental impact review", "Compliance gap analysis", "Recommendations implementation support"], metrics: "15 healthcare facilities assessed" },
  { id: 11, name: "UKAID", category: "environmental", image: "/UKaid.png", shortResult: "Climate resilience and environmental governance", expandedDetails: ["Climate vulnerability assessment", "Adaptation strategy development", "Environmental governance framework", "Stakeholder capacity building"], metrics: "£2M program support" },
  { id: 12, name: "US Pharmacopeia (USP)", category: "governance", image: "/USC.jpg", shortResult: "Quality assurance and compliance systems", expandedDetails: ["Quality management system review", "Regulatory compliance assessment", "Standard operating procedure development", "Staff training on quality standards"], metrics: "ISO compliance achieved" } ]; // Your 12 projects
const trainingGallery = [  { id: 1, src: "/project-1.jpg", title: "ISO 14001 Training Session", alt: "ISO 14001 Training" },
  { id: 2, src: "/project-2.jpg", title: "Environmental Assessment Workshop", alt: "EIA Workshop" },
  { id: 3, src: "/smok.jpg", title: "OHS Safety Training", alt: "OHS Training"  }, ]; // Your images
const categories = [ { id: "all", label: "All Projects" },
  { id: "iso", label: "ISO Certification" },
  { id: "environmental", label: "Environmental" },
  { id: "training", label: "Training" },
  { id: "governance", label: "Governance" } ];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#21473E] to-[#18352E] text-white overflow-hidden">
        {/* ... hero content ... */}
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`...`}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isExpanded={expandedId === project.id}
                onToggle={() => toggleExpand(project.id)}
              />
            ))}
          </div>

          {/* Gallery */}
          <GallerySection 
            title="Training & Event Gallery"
            subtitle="A glimpse into our professional training sessions..."
            images={trainingGallery}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}