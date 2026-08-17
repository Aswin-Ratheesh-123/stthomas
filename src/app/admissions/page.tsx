'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { ShieldCheck, Calendar, Info, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Computer Science & Engineering',
    score: '',
    msg: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.score) {
      setStatus('error');
      return;
    }
    setStatus('success');
    // Reset form
    setFormData({ name: '', email: '', phone: '', course: 'Computer Science & Engineering', score: '', msg: '' });
  };

  const seatsData = [
    { branch: 'Computer Science & Engineering', code: 'CSE', seats: 120 },
    { branch: 'Electronics & Communication Engineering', code: 'ECE', seats: 60 },
    { branch: 'Mechanical Engineering', code: 'ME', seats: 60 },
    { branch: 'Civil Engineering', code: 'CE', seats: 60 }
  ];

  return (
    <div className="flex flex-col w-full text-navy-dark">
      {/* Banner */}
      <section className="relative bg-navy-deep text-white py-24 sm:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <span className="text-xs font-black tracking-widest  text-blue-bright mb-3 block">
            Admissions 2026-27
          </span>
          <h1 className="text-4xl sm:text-5xl font-black  tracking-tight leading-none">
            Enrollment & Admissions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mt-4">
            Find seats allocations, eligibility criteria, and complete our digital enquiry application to begin your technical study.
          </p>
        </div>
      </section>

      {/* 2. Seats and Eligibility */}
      <section id="eligibility" className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left: Eligibility checklist */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <SectionHeading label="Requirements" title="B.Tech Admission Eligibility" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Candidates seeking engineering seats under Merit or Management categories must fulfill the guidelines set by APJ Abdul Kalam Technological University (KTU).
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="p-5 bg-blue-light/40 border border-gray-100 rounded-xl flex items-start gap-4">
                  <div className="p-2 bg-blue-royal text-white rounded-lg shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm uppercase text-navy-deep">Academic Marks</h4>
                    <p className="text-xs text-gray-500 mt-1">10+2 with Physics, Chemistry, and Mathematics (minimum 45% aggregate in science subjects).</p>
                  </div>
                </div>

                <div className="p-5 bg-blue-light/40 border border-gray-100 rounded-xl flex items-start gap-4">
                  <div className="p-2 bg-blue-royal text-white rounded-lg shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm uppercase text-navy-deep">Entrance Exams</h4>
                    <p className="text-xs text-gray-500 mt-1">Must qualify with a valid rank in the KEAM (Kerala Engineering Agriculture Medical) entrance examination.</p>
                  </div>
                </div>

                <div className="p-5 bg-blue-light/40 border border-gray-100 rounded-xl flex items-start gap-4">
                  <div className="p-2 bg-blue-royal text-white rounded-lg shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm uppercase text-navy-deep">Age Limit</h4>
                    <p className="text-xs text-gray-500 mt-1">Candidates must have completed 17 years of age as of 31st December of the admission year.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Seat allotment chart */}
            <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 text-left">
              <h3 className="font-extrabold text-xs tracking-widest uppercase text-blue-bright mb-6">
                B.Tech Seats Allocation Chart
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left text-gray-500">
                  <thead className="text-[10px] sm:text-xs font-black uppercase text-navy-deep border-b border-gray-200 tracking-wider">
                    <tr>
                      <th scope="col" className="pb-3.5 pr-2">Engineering Branch</th>
                      <th scope="col" className="pb-3.5 px-2">Code</th>
                      <th scope="col" className="pb-3.5 pl-2 text-right">Annual Seats</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {seatsData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/40 transition-colors">
                        <td className="py-3.5 font-bold text-navy-deep pr-2">{row.branch}</td>
                        <td className="py-3.5 font-semibold text-gray-600 px-2">{row.code}</td>
                        <td className="py-3.5 font-black text-blue-royal pl-2 text-right">{row.seats}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold leading-relaxed mt-6 flex items-start gap-1.5">
                <Info size={13} className="text-blue-royal shrink-0 mt-0.5" />
                <span>Seat allocation represents approved intake. 50% is filled through government merit counseling rounds and 50% through management quotas.</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Apply Form */}
      <section id="apply" className="py-20 bg-blue-light/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SectionHeading
            label="Digital Inquiry"
            title="Start Your Application"
            subtitle="Complete our online B.Tech enquiry form, and our placement/admissions advisors will connect with you."
            align="center"
          />

          <div className="bg-white border border-gray-100 p-6 sm:p-10 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form notifications */}
              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 font-semibold text-sm rounded-xl border border-green-200">
                  Form submitted successfully! Our advisors will reach out to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 font-semibold text-sm rounded-xl border border-red-200">
                  Please fill in all the required fields correctly before submitting.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
                    Applicant Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
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
                    placeholder="name@example.com"
                    className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter phone number"
                    className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
                    Preferred Branch Option
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
                  >
                    {seatsData.map((opt, idx) => (
                      <option key={idx} value={opt.branch}>
                        {opt.branch} ({opt.code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="score" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
                  12th Class Board Score / KEAM Rank *
                </label>
                <input
                  type="text"
                  id="score"
                  value={formData.score}
                  onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                  placeholder="e.g. 88% in PCM / KEAM Rank 12400"
                  className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
                  required
                />
              </div>

              <div>
                <label htmlFor="msg" className="block text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-2">
                  Message / Queries (Optional)
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  placeholder="Ask a question about scholarships, hostels..."
                  className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 focus:border-blue-bright focus:bg-white rounded-lg p-3 text-sm outline-none transition-all text-navy-dark"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-royal hover:bg-blue-bright text-white font-bold text-xs uppercase py-4 rounded-xl shadow-lg transition-colors cursor-pointer active:scale-95 flex items-center justify-center gap-2"
              >
                <GraduationCap size={16} /> Submit Application Enquiry
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
