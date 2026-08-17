'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert, Users } from 'lucide-react';

function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'General Enquiry';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialSubject,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  };

  const subjectOptions = [
    'General Enquiry',
    'B.Tech Admissions',
    'M.Tech Admissions',
    'Short-term Certificates',
    'Careers',
    'Placements Enquiry',
    'Branch Enquiry'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 font-semibold text-sm rounded-xl border border-green-200 flex items-center gap-2">
          <CheckCircle2 size={16} />
          <span>Message sent successfully! Our academic advisor will contact you soon.</span>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 font-semibold text-sm rounded-xl border border-red-200 flex items-center gap-2">
          <ShieldAlert size={16} />
          <span>Please fill in all the required input fields before sending.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Nair"
            className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="rahul@example.com"
            className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Enter contact number"
            className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
            Subject Heading
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
          >
            {subjectOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
          Message Details *
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Enter details of your query..."
          className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase py-4 rounded-xl shadow-lg transition-colors cursor-pointer active:scale-95 flex items-center justify-center gap-2"
      >
        <Send size={14} /> Send Message Enquiry
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest uppercase text-blue-bright mb-3 block">
            Communications
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Contact St. Thomas
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Connect with our admissions deans, write an enquiry mail, or find college location coordinates.
          </p>
        </div>
      </section>

      {/* Details Row */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left: Contact Info details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <SectionHeading label="Information" title="Contact Details" />
              
              <div className="space-y-6 text-sm text-gray-600">
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-royal/5 text-blue-royal rounded-xl shrink-0 h-fit">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy-deep uppercase text-xs tracking-wider mb-1">Campus Location</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      St. Thomas College of Engineering and Technology,<br />
                      Mattannur, Kannur District, Kerala, PIN - 670702
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-blue-royal/5 text-blue-royal rounded-xl shrink-0 h-fit">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy-deep uppercase text-xs tracking-wider mb-1">Office Telephone</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Admissions Cell: +91 490 2401700<br />
                      Office Helpdesk: +91 490 2401701
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-blue-royal/5 text-blue-royal rounded-xl shrink-0 h-fit">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy-deep uppercase text-xs tracking-wider mb-1">Email Coordinates</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Admissions: admissions@stcet.ac.in<br />
                      Administration: info@stcet.ac.in
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-gray-50 pt-6">
                  <div className="p-3 bg-blue-royal/5 text-blue-royal rounded-xl shrink-0 h-fit">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy-deep uppercase text-xs tracking-wider mb-1">Office Directory</h4>
                    <p className="text-gray-550 text-sm leading-relaxed font-normal">
                      Need to reach a specific department or clerk?<br />
                      Check the <Link href="/about/office" className="text-blue-royal hover:underline font-semibold">Administrative Office & Staff Directory</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vector Map Placeholder */}
              <div className="bg-gray-150 aspect-video rounded-2xl relative overflow-hidden border border-gray-200/50 flex flex-col justify-center items-center text-center p-6 bg-navy-dark text-white select-none">
                {/* Visual coordinate lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0" />
                <div className="relative z-10 space-y-3">
                  <MapPin size={32} className="text-blue-bright mx-auto animate-bounce" />
                  <h4 className="font-black text-sm uppercase tracking-wider">STCET Vector Map Grid</h4>
                  <p className="text-[10px] text-gray-400 font-semibold max-w-xs">
                    Coordinates: 11.9740° N, 75.5862° E<br />
                    Mattannur, Kannur District, Kerala
                  </p>
                  <a
                    href="https://maps.google.com/?q=St.+Thomas+College+of+Engineering+and+Technology+Mattannur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-royal hover:bg-blue-bright text-white text-[10px] font-black uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 text-left">
              <h3 className="font-extrabold text-xs tracking-widest uppercase text-blue-bright mb-6">
                Send Digital Enquiry
              </h3>
              
              <Suspense fallback={<div className="text-sm text-gray-500">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
