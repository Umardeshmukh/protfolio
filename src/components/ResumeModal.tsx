import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Download, Printer, Mail, MapPin, Phone, Github, Award, BookOpen, Briefcase, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white border border-black/[0.08] rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.16)] flex flex-col overflow-hidden text-[#0f172a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/[0.06] bg-[#f8fafc]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d97706]" />
            <h3 className="text-base font-display font-semibold text-[#0f172a]">
              Curriculum Vitae — {PORTFOLIO_DATA.personal.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-black/[0.08] bg-white text-xs font-mono text-[#475569] hover:text-[#0f172a] hover:border-black/[0.15] transition-colors shadow-sm"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-[8px] text-[#64748b] hover:text-[#0f172a] hover:bg-black/[0.04] transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-7 bg-white text-[#0f172a]">
          {/* Header Contact Block */}
          <div className="border-b border-black/[0.06] pb-6 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#0f172a]">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <span className="text-xs font-mono text-[#b45309] font-semibold">
                {PORTFOLIO_DATA.personal.role}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#64748b]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#7c3aed]" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="text-black/20">·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#7c3aed]" />
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <span className="text-black/20">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#7c3aed]" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <span className="text-black/20">·</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#0f172a] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#7c3aed]" />
                github.com/umardesh
              </a>
            </div>

            {/* Professional Summary */}
            <div className="pt-3">
              <h2 className="text-xs font-mono text-[#b45309] uppercase tracking-wider font-semibold mb-1.5">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono text-[#b45309] uppercase tracking-wider font-semibold">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Project Coordination',
                'Administrative Management',
                'Executive Assistance',
                'Client Communication',
                'Calendar & Documentation Management',
                'CRM & Lead Management',
                'Advanced Excel & MIS Reporting',
                'Online Research',
                'React.js',
                'JavaScript',
                'Remote Collaboration',
              ].map((comp) => (
                <span
                  key={comp}
                  className="bg-[#f8fafc] border border-black/[0.08] text-[#334155] rounded-full px-3 py-1 text-xs hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-[#b45309] uppercase tracking-wider font-semibold">
              Professional Experience
            </h2>
            <div className="p-5 rounded-[16px] bg-[#f8fafc] border border-black/[0.06] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                <div>
                  <span className="font-semibold text-[#0f172a] text-sm block">
                    iTUX Technologies
                  </span>
                  <span className="text-[#7c3aed] font-medium">Frontend Developer & Admin Management</span>
                </div>
                <span className="font-mono text-[#b45309] bg-white px-2.5 py-1 rounded-[6px] border border-black/[0.08]">
                  Dec 2023 – Present
                </span>
              </div>

              <ul className="space-y-2 text-xs text-[#475569] pt-1">
                {PORTFOLIO_DATA.experience[0].achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#d97706] mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          {PORTFOLIO_DATA.projects.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-[#b45309] uppercase tracking-wider font-semibold">
                Highlighted Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] space-y-1">
                    <div className="font-semibold text-[#0f172a] text-xs">{proj.title}</div>
                    <p className="text-[11px] text-[#64748b] line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#b45309] uppercase tracking-wider font-semibold">
              Skills Breakdown
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] space-y-1">
                <span className="font-semibold block text-[11px] uppercase tracking-wide text-[#b45309]">
                  Technical
                </span>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  React.js, JavaScript, Python, HTML5, CSS3, Tailwind CSS, MySQL, Git, GitHub, AWS Basics.
                </p>
              </div>

              <div className="p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] space-y-1">
                <span className="font-semibold block text-[11px] uppercase tracking-wide text-[#b45309]">
                  Business & PM
                </span>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  Executive Assistance, Project Coordination, CRM, Management, Online Research, Documentation, Excel, Reporting, Artificial Intelligence, Prompting.
                </p>
              </div>

              <div className="p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] space-y-1">
                <span className="font-semibold block text-[11px] uppercase tracking-wide text-[#b45309]">
                  Soft Skills
                </span>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  Communication, Problem Solving, Time Management, Collaboration, Conflict Resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono text-[#b45309] uppercase tracking-wider font-semibold">
                Education
              </h2>
              <div className="p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] text-xs space-y-1">
                <span className="font-semibold text-[#0f172a] block">
                  {PORTFOLIO_DATA.education.degree}
                </span>
                <p className="text-[#64748b]">{PORTFOLIO_DATA.education.institution}</p>
                <span className="font-mono text-[#b45309] text-[11px] block mt-1">
                  Graduation: {PORTFOLIO_DATA.education.year}
                </span>
              </div>
            </div>

            {/* Certifications & Languages */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono text-[#b45309] uppercase tracking-wider font-semibold">
                Certifications & Languages
              </h2>
              <div className="p-4 rounded-[14px] bg-[#f8fafc] border border-black/[0.06] text-xs space-y-2">
                <div className="space-y-1">
                  {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1.5 text-[11px] text-[#475569]">
                      <span className="text-[#d97706]">•</span>
                      <span>{cert.title}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-black/[0.06] text-[11px] text-[#64748b]">
                  <strong className="text-[#0f172a]">Languages:</strong> English, Hindi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-black/[0.06] bg-[#f8fafc] flex items-center justify-between">
          <div className="text-xs text-[#64748b] font-mono">
            {PORTFOLIO_DATA.personal.name} — Verified Curriculum Vitae
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-[12px] bg-[#0f172a] hover:bg-[#1e293b] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
