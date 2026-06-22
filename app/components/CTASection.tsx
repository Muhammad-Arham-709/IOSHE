import Link from "next/link";

export default function CTASection({ 
  title = "Ready to Add Your Organization to Our Success Story?",
  subtitle = "Let's discuss how IOSHE can help you achieve your environmental and compliance goals.",
  buttonText = "Start Your Project →",
  buttonLink = "/contact"
}: any) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#21473E] to-[#18352E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{title}</h2>
        <p className="text-white/80 mb-8">{subtitle}</p>
        <Link href={buttonLink} className="inline-block bg-white text-[#21473E] hover:bg-[#EAF5F1] px-8 py-3 rounded-xl font-bold transition shadow-lg">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}