
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import MediaCard from "../components/MediaCard";
export const metadata = {
  title: "Environmental & ISO Certification Services | EIA, IEE, ISO 14001",
  description: "Comprehensive environmental assessment and ISO certification services in Pakistan. Expert EIA/IEE studies, ISO 14001, ISO 45001, and professional OHS training.",
};

const consultancyServices = [
  { title: "Environmental Impact Assessment (EIA)", desc: "Comprehensive statutory studies required for grand industrial, infrastructural, and construction approvals to monitor and mitigate developmental ecosystems safely." },
  { title: "Initial Environmental Examination (IEE)", desc: "Initial, concise structural reviews mapping ecological impacts to establish baseline compliance parameters for secondary level operations." },
  { title: "Strategic Environmental Assessment (SEA)", desc: "Integrating clean environment rules straight into legislative programs, local public plans, and national economic frameworks." },
  { title: "Environmental Monitoring", desc: "Rigorous field diagnostics analyzing raw emissions, ambient noise levels, effluents, and air metrics to verify running operations preserve local guidelines." },
  { title: "Environmental Management Plans", desc: "Actionable institutional blueprints explicitly outlining steps, verification cycles, and accountability lines to offset long-term degradation patterns." },
  { title: "Environmental Assessments", desc: "Comprehensive technical audits evaluating dynamic workplace processes to maximize optimization and minimize environmental liabilities." }
];

const certificationServices = [
  { title: "QMS Certification", desc: "Structuring Quality Management Frameworks to boost efficiency, maintain manufacturing workflows, and align institutional client criteria systematically.", borderColor: "#2563EB" },
  { title: "Anti Bribery Management System", desc: "Engineered operational guardrails mapping internal corporate oversight to safeguard workflows against corrupt interactions.", borderColor: "#1E3A8A" },
  { title: "EMS Certification", desc: "Deploying deep ISO 14001 criteria to systematically record material emissions, limit resource wastage, and fulfill environmental performance indicators.", borderColor: "#2F6F5F" },
  { title: "OH&S Certification", desc: "Creating absolute safety paradigms to protect teams from structural site hazards, reducing incident metrics across high-exposure plants.", borderColor: "#D97706" },
  { title: "Energy Management Certification", desc: "Establishing strict diagnostic boundaries to curb power consumption metrics and drive down structural utility liabilities seamlessly.", borderColor: "#4B5563" },
  { title: "Life and Fire Safety", desc: "Technical system deployment planning containing thermal maps, extraction lines, hazard boundaries, and active escape response training.", borderColor: "#DC2626" },
  { title: "Special Certifications", desc: "Tailored industrial compliance verifications custom-molded to fit specialized global regulatory demands and regional trading directives.", borderColor: "#7C3AED" }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F4F1EA] text-[#24312D] overflow-x-hidden w-full selection:bg-[#2F6F5F] selection:text-white">
      <TopBar />
      <Navbar />
      
      <HeroBanner
        badge="What We Offer"
        title="Our Professional Frameworks"
        description="Advancing organizational health, environmental sustainability, and governance standards across public and corporate infrastructure setups in Pakistan."
        buttons={[
          { text: "Environmental Consultancy", href: "#consultancy", primary: true },
          { text: "ISO Certifications & Safety", href: "#certifications", primary: false }
        ]}
      />

      {/* ENVIRONMENTAL CONSULTANCY SECTION */}
      <section id="consultancy" className="py-20 md:py-28 relative scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Division One"
            badgeColor="green"
            title="Environmental Consultancy"
            description="Providing technical data, compliance mapping, and statutory analysis required to meet national guidelines and secure critical environmental clearances."
          />

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {consultancyServices.map((service, idx) => (
                <ServiceCard key={idx} index={idx} title={service.title} description={service.desc} />
              ))}
            </div>

            <div className="space-y-6">
              <MediaCard
                src="/Award.jpg"
                alt="IOSHE Live Environmental Assessment Class"
                badge="Project Completion"
                title="Trusted by leading organizations across Pakistan and internationally"
              />
              <MediaCard
                src="/prize.jpg"
                alt="Environmental Consultation Sessions"
                badge="Interactive Seminars"
                title="Practical learning experiences"
                height="small"
              />
              
              <div className="bg-[#21473E] text-white rounded-[2rem] p-6 sm:p-8 shadow-xl">
                <h4 className="text-xl font-bold">Need a Custom Framework Assessment?</h4>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  Our professional auditing consultants travel directly across commercial installations to deploy modern telemetry monitoring setups.
                </p>
              <Link href="/contact" className="block">
    <button className="mt-6 w-full bg-[#2F6F5F] hover:bg-[#255548] text-white font-bold py-3 px-4 rounded-xl transition text-sm cursor-pointer">
      Request Technical Survey →
    </button>
  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* ISO & CERTIFICATION SECTION */}
      <section id="certifications" className="py-20 md:py-28 bg-[#E6E0D5]/40 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Division Two"
            badgeColor="orange"
            title="ISO & Certification Services"
            description="Standardizing process chains, mitigating industrial safety exposures, and establishing compliant transparency values verified under global criterion lines."
          />

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="space-y-6 lg:order-1 order-2">
              <MediaCard
                src="/govTrain.jpg"
                alt="ISO Management Training Session"
                badge="Safety Drills"
                title="OH&S Emergency Simulations"
              />
              <MediaCard
                src="/ba.jpeg"
                alt="Audit Framework Sessions"
                badge="Compliance Classrooms"
                title="Lead Auditor Qualification"
                height="small"
              />
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 lg:order-2 order-1">
              {certificationServices.map((service, idx) => (
                <ServiceCard 
                  key={idx} 
                  index={idx} 
                  title={service.title} 
                  description={service.desc}
                  borderColor={service.borderColor}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}