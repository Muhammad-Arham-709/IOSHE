import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedinIn, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-black/5">
        <h3 className="text-xl font-extrabold text-[#21473E] mb-6">Reach Out to Us</h3>
        <p className="text-[#5D6965] mb-8 leading-relaxed">
          Our team is committed to providing timely responses, professional support, and clear communication.
        </p>
        
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#EAF5F1] rounded-xl flex items-center justify-center">
              <FaEnvelope className="text-[#2F6F5F] text-xl" />
            </div>
            <div>
              <p className="text-sm text-[#8A9B95] font-semibold">Email Us</p>
              <a href="mailto:info@ioshe.org.pk" className="text-[#21473E] font-bold hover:text-[#2F6F5F] transition">info@ioshe.org.pk</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#EAF5F1] rounded-xl flex items-center justify-center">
              <FaPhone className="text-[#2F6F5F] text-xl" />
            </div>
            <div>
              <p className="text-sm text-[#8A9B95] font-semibold">Call Us</p>
              <a href="tel:+92328494004" className="text-[#21473E] font-bold hover:text-[#2F6F5F] transition">+92 328 494004</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#EAF5F1] rounded-xl flex items-center justify-center">
              <FaMapMarkerAlt className="text-[#2F6F5F] text-xl" />
            </div>
            <div>
              <p className="text-sm text-[#8A9B95] font-semibold">Visit Us</p>
              <p className="text-[#21473E] font-bold">Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#EAF5F1] rounded-xl flex items-center justify-center">
              <FaClock className="text-[#2F6F5F] text-xl" />
            </div>
            <div>
              <p className="text-sm text-[#8A9B95] font-semibold">Business Hours</p>
              <p className="text-[#21473E] font-bold">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E5E9E7]">
          <p className="text-sm font-semibold text-[#21473E] mb-3">Connect With Us</p>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/ioshe-pakistan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#EAF5F1] rounded-full flex items-center justify-center text-[#2F6F5F] hover:bg-[#2F6F5F] hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/IOSHEPAKISTAN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#EAF5F1] rounded-full flex items-center justify-center text-[#2F6F5F] hover:bg-[#2F6F5F] hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="https://wa.me/92328494004" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#EAF5F1] rounded-full flex items-center justify-center text-[#2F6F5F] hover:bg-[#2F6F5F] hover:text-white transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#21473E] to-[#18352E] rounded-3xl shadow-xl p-6 sm:p-8 text-white text-center">
        <h3 className="text-xl font-extrabold mb-3">Professional Guidance Starts with a Conversation</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-6">
          Tell us about your organization's objectives, and our team will connect with you.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="bg-white/10 rounded-full px-4 py-2 text-sm font-semibold">✓ ISO 14001</div>
          <div className="bg-white/10 rounded-full px-4 py-2 text-sm font-semibold">✓ EIA / IEE</div>
          <div className="bg-white/10 rounded-full px-4 py-2 text-sm font-semibold">✓ OHS Training</div>
        </div>
      </div>
    </div>
  );
}