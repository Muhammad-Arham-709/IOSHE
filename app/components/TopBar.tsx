"use client";
import { FaLinkedinIn, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  // Update these URLs with your actual social media links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/ioshe-pakistan",
    facebook: "https://www.facebook.com/IOSHEPAKISTAN",
    whatsapp: "https://wa.me/923328494004", // Replace with your actual WhatsApp number
  };

  return (
    <div className="bg-[#2F6F5F] text-white text-sm print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Location & Services Info - Good for local SEO */}
        <div className="tracking-wide font-semibold text-xs sm:text-sm">
          Islamabad, Pakistan • Climate Governance • ISO Systems
        </div>
        
        {/* Social Links - External links with proper SEO attributes */}
        <div className="flex gap-4 text-base sm:text-lg">
          <a 
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-transform hover:scale-110 duration-200"
            aria-label="Follow IOSHE Pakistan on LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          
          <a 
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-transform hover:scale-110 duration-200"
            aria-label="Follow IOSHE Pakistan on Facebook"
            title="Facebook"
          >
            <FaFacebook />
          </a>
          
          <a 
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-transform hover:scale-110 duration-200"
            aria-label="Contact IOSHE Pakistan on WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}