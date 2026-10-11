import React, { useEffect, useState } from 'react';
import { Project } from '../../data/portfolioData';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Terminal,
  BarChart2,
  ShieldAlert,
  FileText,
  Cpu,
  Bookmark,
} from 'lucide-react';
import { ProjectCardVisual } from '../ProjectCardVisual';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectDossierProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDossier: React.FC<ProjectDossierProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'benchmarks' | 'code'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-black/[0.08] rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.16)] flex flex-col overflow-hidden text-[#0f172a]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Dossier Classification Header Bar */}
          <div className="bg-[#f8fafc] px-6 py-3.5 border-b border-black/[0.06] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-[#c53030]/10 border border-[#c53030]/25 text-[#c53030] font-bold tracking-wider">
                CONFIDENTIAL // CASE DOSSIER
              </span>
              <span className="text-[#94a3b8] hidden sm:inline">|</span>
              <span className="text-[#475569] hidden sm:inline font-mono">
                RECORD ID: {project.id.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
              <span className="text-[#15803d] font-semibold text-[11px]">VERIFIED CASE FILE</span>
            </div>
          </div>

          {/* Dossier Header */}
          <div className="p-6 sm:p-8 border-b border-black/[0.06] flex items-start justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#b45309]">
                <span>{project.category}</span>
                <span className="text-[#cbd5e1]">·</span>
                <span className="text-[#b45309] flex items-center gap-1 font-medium">
                  <Bookmark className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Production Architecture</span>
                </span>
              </div>
              <h2
                id="dossier-title"
                className="text-2xl sm:text-3xl font-display font-bold text-[#0f172a] tracking-tight"
              >
                {project.title}
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">{project.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-[10px] text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] border border-transparent hover:border-black/[0.08] transition-colors"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 px-6 sm:px-8 border-b border-black/[0.06] bg-[#fafaf9] text-xs font-mono overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-[#0f172a] text-[#0f172a] font-semibold'
                  : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#b45309]" />
              <span>01. Overview & Problem</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'architecture'
                  ? 'border-[#0f172a] text-[#0f172a] font-semibold'
                  : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-[#b45309]" />
              <span>02. System Architecture</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('benchmarks')}
              className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'benchmarks'
                  ? 'border-[#0f172a] text-[#0f172a] font-semibold'
                  : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>03. Benchmarks & SLA</span>
            </button>
            {project.codeSnippet && (
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'code'
                    ? 'border-[#0f172a] text-[#0f172a] font-semibold'
                    : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-[#d97706]" />
                <span>04. Source Kernel</span>
              </button>
            )}
          </div>

          {/* Scrollable Body Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Visual Preview */}
                <div className="w-full h-48 sm:h-64 rounded-[14px] overflow-hidden border border-black/[0.08] bg-[#0c0e17]">
                  <ProjectCardVisual type={project.visualType} title={project.title} />
                </div>

                {/* Challenge & Resolution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-[14px] bg-[#f8fafc] border border-black/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#c53030] mb-2 font-medium">
                      <ShieldAlert className="w-4 h-4" />
                      <span>THE ENGINEERING CHALLENGE</span>
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="p-5 rounded-[14px] bg-[#f8fafc] border border-black/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#15803d] mb-2 font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>ARCHITECTURAL RESOLUTION</span>
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Long description summary */}
                <div>
                  <h4 className="text-sm font-semibold text-[#0f172a] mb-2 font-mono">
                    INVESTIGATION BRIEFING
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-[12px] bg-[#f8fafc] border border-black/[0.06] text-center"
                    >
                      <div className="text-xs font-mono text-[#64748b]">{m.label}</div>
                      <div className="font-mono text-lg font-bold text-[#b45309] mt-1">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-[#0f172a] mb-3 font-mono">
                    ARCHITECTURAL PILLARS & DECISIONS
                  </h4>
                  <div className="space-y-3">
                    {project.architectureHighlights.map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-[12px] bg-[#f8fafc] border border-black/[0.06]"
                      >
                        <span className="font-mono text-xs text-[#b45309] mt-0.5 font-bold">
                          0{i + 1}
                        </span>
                        <p className="text-sm text-[#475569] leading-relaxed">{hl}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#0f172a] mb-3 font-mono">
                    TECHNOLOGIES & PROTOCOLS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono text-[#475569] shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'benchmarks' && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-sm font-mono text-[#15803d]">
                  <BarChart2 className="w-4 h-4" />
                  <span>DETERMINISTIC SLA & VALIDATED BENCHMARKS</span>
                </div>

                <div className="space-y-3">
                  {project.benchmarks.map((bm, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-[12px] bg-[#f8fafc] border border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-sm font-medium text-[#0f172a]">{bm.name}</div>
                        <div className="text-xs text-[#64748b] mt-0.5">{bm.comparison}</div>
                      </div>
                      <div className="font-mono text-base font-bold text-[#b45309]">
                        {bm.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'code' && project.codeSnippet && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                  <div className="flex items-center gap-1.5 text-[#0f172a]">
                    <Terminal className="w-4 h-4 text-[#b45309]" />
                    <span>{project.codeSnippet.filename}</span>
                  </div>
                  <span className="uppercase text-[#b45309] font-semibold">
                    {project.codeSnippet.language}
                  </span>
                </div>

                <pre className="p-4 rounded-[12px] bg-[#f1f5f9] border border-black/[0.06] font-mono text-xs text-[#334155] overflow-x-auto leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Dossier Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-black/[0.06] bg-[#f8fafc] flex items-center justify-between gap-3">
            <div className="text-xs text-[#64748b] font-mono hidden sm:block">
              Investigated & Architected by Mohammed Umer Deshmukh
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[12px] bg-[#0f172a] hover:bg-[#1e293b] px-5 py-2.5 text-xs font-mono font-semibold text-white shadow-sm transition-all"
                >
                  <span>Live Demonstration</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
