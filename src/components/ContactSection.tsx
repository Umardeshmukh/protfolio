import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, Twitter, Clock, CheckCircle2, MessageSquare } from 'lucide-react';

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
    <section id="contact" className="py-24 lg:py-36 border-t border-[#191C22] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[12px] uppercase tracking-[0.12em] text-[#7C5CFC] font-medium font-mono">
            05 — CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-semibold text-[#F5F7FA] leading-[1.1] tracking-[-0.03em]">
            Let's Build Something Together
          </h2>
          <p className="text-base sm:text-lg text-[#A7ADB7] leading-[1.6]">
            Available for remote Frontend Development roles, Project Coordination, and administrative management opportunities. Get in touch directly via email or phone.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels & Presence */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Email Box */}
            <div className="p-6 sm:p-8 rounded-[16px] bg-[#0D0F12] border border-[#232730] space-y-4">
              <div className="text-xs font-mono uppercase text-[#7C5CFC] tracking-wider">
                Direct Contact Channels
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-[10px] bg-[#12151A] border border-[#232730]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#7C5CFC] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[#F5F7FA] truncate">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-[8px] text-[#A7ADB7] hover:text-[#F5F7FA] hover:bg-[#171A20] transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#4ADE80]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="text-xs text-[#4ADE80] font-mono flex items-center gap-1.5 animate-fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-[10px] bg-[#12151A] border border-[#232730]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-xs font-mono text-[#7C5CFC] shrink-0">TEL:</span>
                  <a
                    href="tel:+918484040411"
                    className="font-mono text-xs sm:text-sm text-[#F5F7FA] hover:text-[#7C5CFC] transition-colors truncate"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
                <span className="text-[11px] font-mono text-[#4ADE80]">Direct</span>
              </div>

              <div className="text-xs text-[#6F7682] leading-relaxed pt-1">
                <span>Location: </span>
                <strong className="text-[#A7ADB7]">{PORTFOLIO_DATA.personal.location}</strong>
                <span className="block mt-1">Fluent in English and Hindi for remote global collaboration.</span>
              </div>
            </div>

            {/* Timezone & Availability Card */}
            <div className="p-6 rounded-[16px] bg-[#0D0F12] border border-[#232730] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB7]">
                <Clock className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>Operating Timezone: IST (UTC+5:30)</span>
              </div>
              <div className="text-sm text-[#F5F7FA] font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                <span>Available for Immediate Full-Time / Contract Remote Roles</span>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="p-6 rounded-[16px] bg-[#0D0F12] border border-[#232730] flex items-center justify-between">
              <span className="text-xs font-mono text-[#6F7682]">Developer Profile</span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-[#12151A] border border-[#232730] text-xs text-[#A7ADB7] hover:text-[#F5F7FA] hover:border-[#303540] transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4 text-[#7C5CFC]" />
                  <span className="font-mono">github.com/umardesh</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-[16px] bg-[#0D0F12] border border-[#232730]">
            <h3 className="text-xl font-display font-semibold text-[#F5F7FA] mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#7C5CFC]" />
              <span>Direct Message</span>
            </h3>

            {status === 'success' ? (
              <div className="p-8 rounded-[12px] bg-[#12151A] border border-[#4ADE80]/30 text-center space-y-3">
                <div className="inline-flex p-3 rounded-full bg-[#4ADE80]/15 text-[#4ADE80]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-[#F5F7FA]">Message Received</h4>
                <p className="text-sm text-[#A7ADB7] max-w-md mx-auto">
                  Thank you for reaching out. I have received your message and will reply to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A7ADB7] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-[10px] bg-[#12151A] border border-[#232730] px-4 py-2.5 text-sm text-[#F5F7FA] placeholder-[#454B55] focus:outline-none focus:border-[#7C5CFC] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A7ADB7] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-[10px] bg-[#12151A] border border-[#232730] px-4 py-2.5 text-sm text-[#F5F7FA] placeholder-[#454B55] focus:outline-none focus:border-[#7C5CFC] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A7ADB7] mb-1.5">
                    Subject / Role Opportunity
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full rounded-[10px] bg-[#12151A] border border-[#232730] px-4 py-2.5 text-sm text-[#F5F7FA] focus:outline-none focus:border-[#7C5CFC] transition-colors"
                  >
                    <option value="Frontend Development Project">Frontend Development (React.js / Tailwind)</option>
                    <option value="Project Coordination Role">Project Coordination & Administrative Management</option>
                    <option value="Full-Time Remote Position">Full-Time Remote Position (Developer / PM)</option>
                    <option value="Freelance & Consulting">Freelance or Consulting Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A7ADB7] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role, project requirements, or team..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-[10px] bg-[#12151A] border border-[#232730] px-4 py-2.5 text-sm text-[#F5F7FA] placeholder-[#454B55] focus:outline-none focus:border-[#7C5CFC] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-[10px] bg-[#7C5CFC] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9278FF] disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
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
