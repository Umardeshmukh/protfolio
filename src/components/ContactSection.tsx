import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Clock,
  CheckCircle2,
  Sparkles,
  Phone,
  ArrowUpRight,
  MapPin,
  Globe,
} from 'lucide-react';
import { Mascot } from 'page-mascot';
import { Magnetic } from '@/components/core/magnetic';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-40 border-t border-black/[0.05] relative bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pb-4 border-b border-black/[0.05]">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#b45309] font-medium font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-ping" />
              <span>04 — GET IN TOUCH</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] font-display font-bold text-[#0f172a] leading-[1.15] sm:leading-[1.1] tracking-[-0.03em]">
              Let's Build Something <span className="text-gradient-amber">Exceptional</span>
            </h2>
            <p className="text-sm sm:text-lg text-[#475569] leading-[1.7]">
              Available for remote Frontend Development roles, Project Coordination, and administrative management opportunities. Reach out directly via email, direct phone line, or GitHub.
            </p>
          </div>

          {/* Interactive Page Mascot */}
          <div className="flex flex-col items-center justify-center self-center md:self-end">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col items-center relative group">
              <Mascot
                directions="/mascots/beard-directions.webp"
                reactions="/mascots/beard-reactions.webp"
              />
              <span className="text-[10px] sm:text-[11px] font-mono text-[#64748b] tracking-wider mt-1 opacity-80 group-hover:text-[#b45309] transition-colors">
                Click to poke!
              </span>
            </div>
          </div>
        </div>

        {/* Clean Luxury Communication Cards Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Direct Communication Channels */}
          <div className="p-5 sm:p-8 md:p-9 rounded-[20px] sm:rounded-[24px] bg-white border border-black/[0.07] space-y-5 sm:space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                <div className="text-[11px] sm:text-xs font-mono uppercase text-[#b45309] tracking-wider flex items-center gap-2 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                  Direct Channels
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#16a34a]/10 text-[#15803d] border border-[#16a34a]/25 font-semibold">
                  Quick Response
                </span>
              </div>

              {/* Email Box */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#64748b] font-medium block">
                  Primary Email
                </span>
                <div className="flex items-center justify-between p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="flex items-center gap-3 overflow-hidden group/mail"
                  >
                    <Mail className="w-4 h-4 text-[#b45309] shrink-0" />
                    <span className="font-mono text-sm text-[#0f172a] group-hover/mail:text-[#b45309] transition-colors truncate font-medium">
                      {PORTFOLIO_DATA.personal.email}
                    </span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-[8px] text-[#64748b] hover:text-[#0f172a] hover:bg-black/[0.04] transition-colors shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#16a34a]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {copied && (
                  <div className="text-xs text-[#15803d] font-mono flex items-center gap-1.5 pt-1 animate-fade-in">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Email address copied to clipboard!</span>
                  </div>
                )}
              </div>

              {/* Phone Line Box */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#64748b] font-medium block">
                  Direct Line / Phone
                </span>
                <div className="flex items-center justify-between p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 overflow-hidden group/phone"
                  >
                    <Phone className="w-4 h-4 text-[#b45309] shrink-0" />
                    <span className="font-mono text-sm text-[#0f172a] group-hover/phone:text-[#b45309] transition-colors truncate font-medium">
                      {PORTFOLIO_DATA.personal.phone}
                    </span>
                  </a>
                  <span className="text-[11px] font-mono text-[#15803d] px-2.5 py-0.5 rounded-full bg-[#16a34a]/10 border border-[#16a34a]/25 shrink-0">
                    Direct Line
                  </span>
                </div>
              </div>

              {/* Location & Languages */}
              <div className="p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#475569]">
                  <MapPin className="w-4 h-4 text-[#b45309] shrink-0" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#475569]">
                  <Globe className="w-4 h-4 text-[#b45309] shrink-0" />
                  <span>English & Hindi Fluent</span>
                </div>
              </div>
            </div>

            {/* Email CTA Button with Magnetic Physics */}
            <div className="pt-4">
              <Magnetic
                intensity={0.2}
                springOptions={{ bounce: 0.1 }}
                actionArea="global"
                range={200}
              >
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Frontend%20Development%20/%20Project%20Opportunity`}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-[12px] bg-[#0f172a] hover:bg-[#1e293b] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 shadow-sm active:scale-[0.98]"
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={{ bounce: 0.1 }}
                    actionArea="global"
                    range={200}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>Send an Email</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </Magnetic>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Card 2: Availability & Digital Presence */}
          <div className="p-5 sm:p-8 md:p-9 rounded-[20px] sm:rounded-[24px] bg-white border border-black/[0.07] space-y-5 sm:space-y-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                <div className="text-[11px] sm:text-xs font-mono uppercase text-[#b45309] tracking-wider flex items-center gap-2 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#d97706]" />
                  Operational Availability
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#0284c7]/10 text-[#0369a1] border border-[#0284c7]/25 font-semibold">
                  IST (UTC+5:30)
                </span>
              </div>

              {/* Live Status Card */}
              <div className="p-3.5 sm:p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748b]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16a34a]" />
                  </span>
                  <span className="text-[#0f172a] font-semibold">Active & Open for Roles</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Available for  Frontend Development   (React.js, TypeScript, Tailwind) and Project Coordination / Management positions.
                </p>
              </div>

              {/* Professional Profiles (GitHub & LinkedIn) */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#64748b] font-medium block">
                  Professional Profiles & Code
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* GitHub Profile */}
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] hover:border-black/[0.15] hover:bg-white transition-all group/gh active:scale-[0.99]"
                    aria-label="GitHub profile"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-[8px] bg-white border border-black/[0.08] flex items-center justify-center text-[#0f172a] group-hover/gh:text-[#b45309] transition-colors shrink-0 shadow-xs">
                        <Github className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-xs font-semibold text-[#0f172a] block truncate">
                          GitHub
                        </span>
                        <span className="text-[10px] text-[#64748b] block truncate">
                          Umardeshmukh
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#94a3b8] group-hover/gh:text-[#0f172a] group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-all shrink-0 ml-1.5" />
                  </a>

                  {/* LinkedIn Profile */}
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] hover:border-black/[0.15] hover:bg-white transition-all group/li active:scale-[0.99]"
                    aria-label="LinkedIn profile"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-[8px] bg-white border border-black/[0.08] flex items-center justify-center text-[#0a66c2] group-hover/li:text-[#004182] transition-colors shrink-0 shadow-xs">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-xs font-semibold text-[#0f172a] block truncate">
                          LinkedIn
                        </span>
                        <span className="text-[10px] text-[#64748b] block truncate">
                          umer-deshmukh
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#94a3b8] group-hover/li:text-[#0f172a] group-hover/li:translate-x-0.5 group-hover/li:-translate-y-0.5 transition-all shrink-0 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Call / Contact CTA with Magnetic Physics */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Magnetic
                intensity={0.2}
                springOptions={{ bounce: 0.1 }}
                actionArea="global"
                range={200}
              >
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-[12px] bg-white border border-black/[0.08] hover:border-black/[0.18] hover:bg-[#f8fafc] px-6 py-3.5 text-sm font-medium text-[#0f172a] transition-all duration-200 shadow-sm active:scale-[0.98]"
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={{ bounce: 0.1 }}
                    actionArea="global"
                    range={200}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#b45309]" />
                      <span>Call Directly</span>
                    </span>
                  </Magnetic>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
