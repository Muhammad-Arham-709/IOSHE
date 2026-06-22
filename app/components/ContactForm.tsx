"use client";
import { useState } from "react";
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showServiceSelect?: boolean;
  accessKey?: string;
}

export default function ContactForm({ 
  title = "Request a Consultation",
  subtitle = "Fill out the form and our team will respond within 24 hours.",
  buttonText = "Submit Request →",
  showServiceSelect = true,
  accessKey = "c2d840a8-063c-4251-a035-0e0f19048950"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          from_url: window.location.href,
          botcheck: false
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', organization: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-black/5">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#21473E]">{title}</h2>
      <p className="mt-2 text-[#5D6965]">{subtitle}</p>
      
      {status === 'success' && (
        <div className="mt-6 bg-[#E8F5E9] border border-[#2F6F5F]/30 rounded-2xl p-4 text-center">
          <p className="text-[#21473E] font-semibold">✓ Thank you! We'll contact you within 24 hours.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
          <p className="text-red-600 font-semibold">✗ Failed. Please email info@ioshe.org.pk</p>
        </div>
      )}
      
      {status === 'loading' && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
          <p className="text-blue-600 font-semibold">⏳ Sending...</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-[#21473E] mb-2">
              <FaUser className="inline mr-2 text-[#2F6F5F]" size={14} /> Full Name *
            </label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#CAD5CF] focus:ring-2 focus:ring-[#2F6F5F]" placeholder="Ahmed Khan" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#21473E] mb-2">
              <FaBuilding className="inline mr-2 text-[#2F6F5F]" size={14} /> Organization *
            </label>
            <input type="text" name="organization" required value={formData.organization} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#CAD5CF] focus:ring-2 focus:ring-[#2F6F5F]" placeholder="Your Company Ltd." />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-[#21473E] mb-2">
              <FaEnvelope className="inline mr-2 text-[#2F6F5F]" size={14} /> Email *
            </label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#CAD5CF] focus:ring-2 focus:ring-[#2F6F5F]" placeholder="john@company.com" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#21473E] mb-2">
              <FaPhone className="inline mr-2 text-[#2F6F5F]" size={14} /> Phone
            </label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#CAD5CF] focus:ring-2 focus:ring-[#2F6F5F]" placeholder="+92 300 1234567" />
          </div>
        </div>

        {showServiceSelect && (
          <div>
            <label className="block text-sm font-bold text-[#21473E] mb-2">Service of Interest *</label>
            <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#CAD5CF] focus:ring-2 focus:ring-[#2F6F5F] bg-white">
              <option value="">Select a Service</option>
              <option value="ISO 14001 Environmental Management">ISO 14001 Environmental Management</option>
              <option value="ISO 45001 OHS Systems">ISO 45001 OHS Systems</option>
              <option value="ISO 37001 Anti-Bribery">ISO 37001 Anti-Bribery</option>
              <option value="EIA / IEE Environmental Assessments">EIA / IEE Environmental Assessments</option>
              <option value="Professional OHS Training">Professional OHS Training</option>
              <option value="Environmental Audit">Environmental Audit</option>
              <option value="Other / Custom Solution">Other / Custom Solution</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-bold text-[#21473E] mb-2">
            <FaCommentDots className="inline mr-2 text-[#2F6F5F]" size={14} /> Message
          </label>
          <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#CAD5CF] focus:ring-2 focus:ring-[#2F6F5F] resize-none" placeholder="Please describe your needs..." />
        </div>

        <button type="submit" disabled={status === 'loading'} className="w-full bg-[#21473E] hover:bg-[#18352e] text-white font-bold py-4 rounded-xl transition shadow-lg disabled:opacity-50">
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>

        <p className="text-xs text-center text-[#8A9B95]">By submitting, you agree to our privacy policy.</p>
      </form>
    </div>
  );
}