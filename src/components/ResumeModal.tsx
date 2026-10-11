import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  X,
  Download,
  Printer,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
} from 'lucide-react';

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
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md animate-fade-in print:p-0 print:bg-white print:static print:block"
      onClick={onClose}
    >
      <div
        id="resume-modal-wrapper"
        className="relative w-full max-w-3xl max-h-[92vh] bg-white border border-black/[0.08] rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.16)] flex flex-col overflow-hidden text-[#0f172a] print:border-none print:shadow-none print:rounded-none print:max-h-none print:w-full print:bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (Hidden on Print) */}
        <div className="resume-modal-header flex items-center justify-between p-6 border-b border-black/[0.06] bg-[#f8fafc] print:hidden">
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
              <span>Print / PDF (1 Page)</span>
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

        {/* Scrollable CV Body / Single Page Print Document */}
        <div
          id="resume-print-document"
          className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 sm:space-y-7 bg-white text-[#0f172a] print:p-0 print:space-y-2.5 print:overflow-visible"
        >
          {/* Header Contact Block */}
          <div className="border-b border-black/[0.06] pb-5 print:pb-2 space-y-2.5 print:space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h1 className="text-2xl sm:text-3xl print:text-xl font-display font-bold text-[#0f172a]">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <span className="text-xs print:text-[11px] font-mono text-[#b45309] font-semibold">
                {PORTFOLIO_DATA.personal.role}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs print:text-[10px] font-mono text-[#64748b]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#b45309]" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="text-black/20">·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#b45309]" />
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <span className="text-black/20">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#b45309]" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <span className="text-black/20">·</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#0f172a] transition-colors"
              >
                <Github className="w-3 h-3 text-[#b45309]" />
                github.com/umardesh
              </a>
              <span className="text-black/20">·</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#0a66c2] transition-colors"
              >
                <Linkedin className="w-3 h-3 text-[#0a66c2]" />
                linkedin.com/in/umer-deshmukh
              </a>
            </div>

            {/* Professional Summary */}
            <div className="pt-2 print:pt-1">
              <h2 className="text-xs print:text-[10px] font-mono text-[#b45309] uppercase tracking-wider font-semibold mb-1 print:mb-0.5">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm print:text-[10px] print:leading-relaxed text-[#475569] leading-relaxed font-sans">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2 print:space-y-1">
            <h2 className="text-xs print:text-[10px] font-mono text-[#b45309] uppercase tracking-wider font-semibold">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-1.5 print:gap-1 text-xs print:text-[9px]">
              {[
                'Project Coordination',
                'Administrative Management',
                'Client Communication',
                'Executive Calendar & Scheduling',
                'Documentation & Reporting',
                'CRM & Lead Management',
                'Advanced Excel & MIS',
                'React.js',
                'Tailwind CSS',
                'JavaScript / TypeScript',
                'Remote Cross-Functional Teams',
              ].map((comp) => (
                <span
                  key={comp}
                  className="bg-[#f8fafc] border border-black/[0.08] text-[#334155] rounded-full px-2.5 py-0.5 print:px-2 print:py-0.2"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-2.5 print:space-y-1">
            <h2 className="text-xs print:text-[10px] font-mono text-[#b45309] uppercase tracking-wider font-semibold">
              Professional Experience
            </h2>
            <div className="p-4 print:p-2.5 rounded-[16px] print:rounded-[8px] bg-[#f8fafc] border border-black/[0.06] space-y-2 print:space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs print:text-[10.5px] gap-1">
                <div>
                  <span className="font-semibold text-[#0f172a] text-sm print:text-xs block">
                    iTUX Technologies
                  </span>
                  <span className="text-[#b45309] font-medium print:text-[10px]">
                    Frontend Developer & Admin Management
                  </span>
                </div>
                <span className="font-mono text-[#b45309] bg-white px-2 py-0.5 rounded-[6px] border border-black/[0.08] text-xs print:text-[9.5px]">
                  Dec 2023 – Present
                </span>
              </div>

              <ul className="space-y-1.5 print:space-y-0.5 text-xs print:text-[9.5px] text-[#475569] pt-1 print:pt-0">
                {PORTFOLIO_DATA.experience[0].achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#d97706] mt-0.5 print:mt-0">•</span>
                    <span className="leading-relaxed print:leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlighted Projects */}
          {PORTFOLIO_DATA.projects.length > 0 && (
            <div className="space-y-2 print:space-y-1">
              <h2 className="text-xs print:text-[10px] font-mono text-[#b45309] uppercase tracking-wider font-semibold">
                Highlighted Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-2.5 print:gap-1.5">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3 print:p-2 rounded-[12px] print:rounded-[6px] bg-[#f8fafc] border border-black/[0.06] space-y-0.5"
                  >
                    <div className="font-semibold text-[#0f172a] text-xs print:text-[10px] truncate">
                      {proj.title}
                    </div>
                    <p className="text-[11px] print:text-[9px] text-[#64748b] line-clamp-2 print:leading-snug">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Breakdown */}
          <div className="space-y-2 print:space-y-1">
            <h2 className="text-xs print:text-[10px] font-mono text-[#b45309] uppercase tracking-wider font-semibold">
              Skills Breakdown
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-2.5 print:gap-1.5 text-xs">
              <div className="p-3 print:p-2 rounded-[12px] print:rounded-[6px] bg-[#f8fafc] border border-black/[0.06] space-y-0.5">
                <span className="font-semibold block text-[11px] print:text-[9.5px] uppercase tracking-wide text-[#b45309]">
                  Technical
                </span>
                <p className="text-[11px] print:text-[9px] text-[#475569] leading-relaxed print:leading-snug">
                  React.js, JavaScript, Python, HTML5, CSS3, Tailwind CSS, MySQL, Git, GitHub.
                </p>
              </div>

              <div className="p-3 print:p-2 rounded-[12px] print:rounded-[6px] bg-[#f8fafc] border border-black/[0.06] space-y-0.5">
                <span className="font-semibold block text-[11px] print:text-[9.5px] uppercase tracking-wide text-[#b45309]">
                  Business & PM
                </span>
                <p className="text-[11px] print:text-[9px] text-[#475569] leading-relaxed print:leading-snug">
                  Project Coordination, Client Communication, Executive Assistance, Excel MIS.
                </p>
              </div>

              <div className="p-3 print:p-2 rounded-[12px] print:rounded-[6px] bg-[#f8fafc] border border-black/[0.06] space-y-0.5">
                <span className="font-semibold block text-[11px] print:text-[9.5px] uppercase tracking-wide text-[#b45309]">
                  Soft Skills
                </span>
                <p className="text-[11px] print:text-[9px] text-[#475569] leading-relaxed print:leading-snug">
                  Problem Solving, Time Management, Agile Collaboration, Conflict Resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 print:gap-2">
            {/* Education */}
            <div className="space-y-1.5 print:space-y-0.5">
              <h2 className="text-xs print:text-[10px] font-mono text-[#b45309] uppercase tracking-wider font-semibold">
                Education
              </h2>
              <div className="p-3 print:p-2 rounded-[12px] print:rounded-[6px] bg-[#f8fafc] border border-black/[0.06] text-xs print:text-[9.5px] space-y-0.5">
                <span className="font-semibold text-[#0f172a] block print:text-[10px]">
                  {PORTFOLIO_DATA.education.degree}
                </span>
                <p className="text-[#64748b] print:text-[9px]">{PORTFOLIO_DATA.education.institution}</p>
                <span className="font-mono text-[#b45309] text-[10px] print:text-[8.5px] block">
                  Graduation: {PORTFOLIO_DATA.education.year}
                </span>
              </div>
            </div>

            {/* Certifications & Languages */}
            <div className="space-y-1.5 print:space-y-0.5">
              <h2 className="text-xs print:text-[10px] font-mono text-[#b45309] uppercase tracking-wider font-semibold">
                Certifications & Languages
              </h2>
              <div className="p-3 print:p-2 rounded-[12px] print:rounded-[6px] bg-[#f8fafc] border border-black/[0.06] text-xs print:text-[9.5px] space-y-1">
                <div className="space-y-0.5">
                  {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1 text-[10px] print:text-[9px] text-[#475569]">
                      <span className="text-[#d97706]">•</span>
                      <span className="truncate">{cert.title}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-1 border-t border-black/[0.06] text-[10px] print:text-[9px] text-[#64748b]">
                  <strong className="text-[#0f172a]">Languages:</strong> English, Hindi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer (Hidden on Print) */}
        <div className="resume-modal-footer p-4 sm:p-6 border-t border-black/[0.06] bg-[#f8fafc] flex items-center justify-between print:hidden">
          <div className="text-xs text-[#64748b] font-mono">
            {PORTFOLIO_DATA.personal.name} — Verified Curriculum Vitae
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-[12px] bg-[#0f172a] hover:bg-[#1e293b] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print / Save PDF (1 Page)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
