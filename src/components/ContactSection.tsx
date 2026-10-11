import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Clock, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { Mascot } from 'page-mascot';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Frontend Development Project',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        topic: 'Frontend Development Project',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 lg:py-40 border-t border-black/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="text-[12px] uppercase tracking-[0.16em] text-[#b45309] font-medium font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-ping" />
              <span>04 — TRANSMISSION & CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-bold text-[#0f172a] leading-[1.1] tracking-[-0.03em]">
              Let's Engineer Something <span className="text-gradient-amber">Exceptional</span>
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-[1.7]">
              Available for remote Frontend Development roles, Project Coordination, and administrative management opportunities. Reach out directly or dispatch a transmission below.
            </p>
          </div>

          {/* Interactive Page Mascot */}
          <div className="flex flex-col items-center justify-center self-start md:self-end">
            <div className="p-3.5 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col items-center relative group">
              <Mascot
                directions="/mascots/beard-directions.webp"
                reactions="/mascots/beard-reactions.webp"
              />
              <span className="text-[11px] font-mono text-[#64748b] tracking-wider mt-1 opacity-80 group-hover:text-[#b45309] transition-colors">
                Click to poke!
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels & Presence */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Email Box */}
            <div className="p-7 sm:p-8 rounded-[22px] bg-white border border-black/[0.06] space-y-5 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
              <div className="text-xs font-mono uppercase text-[#b45309] tracking-wider flex items-center gap-2 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                Direct Communication Hub
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#7c3aed] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[#0f172a] truncate font-medium">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-[8px] text-[#64748b] hover:text-[#0f172a] hover:bg-black/[0.04] transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#16a34a]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="text-xs text-[#15803d] font-mono flex items-center gap-1.5 animate-fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-xs font-mono text-[#b45309] shrink-0 font-semibold">TEL:</span>
                  <a
                    href="tel:+918484040411"
                    className="font-mono text-xs sm:text-sm text-[#0f172a] hover:text-[#7c3aed] transition-colors truncate font-medium"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
                <span className="text-[11px] font-mono text-[#15803d] px-2.5 py-0.5 rounded-full bg-[#16a34a]/10 border border-[#16a34a]/25">
                  Direct Line
                </span>
              </div>

              <div className="text-xs text-[#64748b] leading-relaxed pt-1">
                <span>Location: </span>
                <strong className="text-[#0f172a]">{PORTFOLIO_DATA.personal.location}</strong>
                <span className="block mt-1">Fluent in English and Hindi for high-tempo global remote collaboration.</span>
              </div>
            </div>

            {/* Timezone & Availability Card */}
            <div className="p-6 rounded-[20px] bg-white border border-black/[0.06] space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-[#64748b]">
                <Clock className="w-3.5 h-3.5 text-[#7c3aed]" />
                <span>Operating Timezone: IST (UTC+5:30)</span>
              </div>
              <div className="text-sm text-[#0f172a] font-medium flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16a34a]" />
                </span>
                <span>Available for Immediate Full-Time / Contract Remote Roles</span>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-6 rounded-[20px] bg-white border border-black/[0.06] flex items-center justify-between shadow-sm">
              <span className="text-xs font-mono text-[#64748b]">Developer Profile</span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-[10px] bg-[#f8fafc] border border-black/[0.08] text-xs text-[#475569] hover:text-[#0f172a] hover:border-black/[0.15] transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4 text-[#7c3aed]" />
                  <span className="font-mono">github.com/umardesh</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-[22px] bg-white border border-black/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <h3 className="text-xl font-display font-bold text-[#0f172a] mb-6 flex items-center gap-2.5 tracking-tight">
              <MessageSquare className="w-5 h-5 text-[#7c3aed]" />
              <span>Direct Transmission</span>
            </h3>

            {status === 'success' ? (
              <div className="p-8 rounded-[16px] bg-[#f8fafc] border border-[#16a34a]/30 text-center space-y-3">
                <div className="inline-flex p-3 rounded-full bg-[#16a34a]/15 text-[#15803d]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-[#0f172a]">Transmission Received</h4>
                <p className="text-sm text-[#475569] max-w-md mx-auto">
                  Thank you for reaching out. Your message has been routed to Mohammed Umer Deshmukh. You will receive a response shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#475569] mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-[12px] bg-[#f8fafc] border border-black/[0.08] px-4 py-2.5 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#7c3aed] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#475569] mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-[12px] bg-[#f8fafc] border border-black/[0.08] px-4 py-2.5 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#7c3aed] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#475569] mb-1.5 font-medium">
                    Subject / Role Opportunity
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full rounded-[12px] bg-[#f8fafc] border border-black/[0.08] px-4 py-2.5 text-sm text-[#0f172a] focus:outline-none focus:border-[#7c3aed] focus:bg-white transition-colors"
                  >
                    <option value="Frontend Development Project">Frontend Development (React.js / Tailwind)</option>
                    <option value="Project Coordination Role">Project Coordination & Administrative Management</option>
                    <option value="Full-Time Remote Position">Full-Time Remote Position (Developer / PM)</option>
                    <option value="Freelance & Consulting">Freelance or Consulting Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#475569] mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role, project requirements, or team..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-[12px] bg-[#f8fafc] border border-black/[0.08] px-4 py-2.5 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#7c3aed] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-[12px] bg-[#0f172a] hover:bg-[#1e293b] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
