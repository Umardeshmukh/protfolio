import React, { useEffect, useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, Terminal, BarChart2, ShieldAlert } from 'lucide-react';
import { ProjectCardVisual } from './ProjectCardVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08090B]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D0F12] border border-[#232730] rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[#191C22]">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#7C5CFC]">
              <span>{project.category}</span>
              <span className="text-[#6F7682]">·</span>
              <span className="text-[#4ADE80]">Production Deployed</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F7FA] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-[#A7ADB7]">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-[10px] text-[#A7ADB7] hover:text-[#F5F7FA] hover:bg-[#12151A] border border-transparent hover:border-[#232730] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 sm:px-8 border-b border-[#191C22] bg-[#08090B]/40 text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#7C5CFC] text-[#F5F7FA]'
                : 'border-transparent text-[#A7ADB7] hover:text-[#F5F7FA]'
            }`}
          >
            Overview & Problem
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-[#7C5CFC] text-[#F5F7FA]'
                : 'border-transparent text-[#A7ADB7] hover:text-[#F5F7FA]'
            }`}
          >
            Systems Architecture
          </button>
          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`py-3 px-3 border-b-2 transition-colors ${
              activeTab === 'benchmarks'
                ? 'border-[#7C5CFC] text-[#F5F7FA]'
                : 'border-transparent text-[#A7ADB7] hover:text-[#F5F7FA]'
            }`}
          >
            Benchmarks & SLA
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-3 border-b-2 transition-colors ${
                activeTab === 'code'
                  ? 'border-[#7C5CFC] text-[#F5F7FA]'
                  : 'border-transparent text-[#A7ADB7] hover:text-[#F5F7FA]'
              }`}
            >
              Kernel / Code Snippet
            </button>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Preview Display */}
              <div className="w-full h-48 sm:h-64 rounded-[12px] overflow-hidden border border-[#232730]">
                <ProjectCardVisual type={project.visualType} title={project.title} />
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-[12px] bg-[#12151A] border border-[#232730]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#F87171] mb-2 font-medium">
                    <ShieldAlert className="w-4 h-4" />
                    <span>The Engineering Challenge</span>
                  </div>
                  <p className="text-sm text-[#A7ADB7] leading-relaxed">{project.problem}</p>
                </div>

                <div className="p-5 rounded-[12px] bg-[#12151A] border border-[#232730]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#4ADE80] mb-2 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Architectural Resolution</span>
                  </div>
                  <p className="text-sm text-[#A7ADB7] leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Long Description */}
              <div>
                <h4 className="text-sm font-semibold text-[#F5F7FA] mb-2">Technical Summary</h4>
                <p className="text-sm text-[#A7ADB7] leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-[10px] bg-[#12151A] border border-[#232730] text-center">
                    <div className="text-xs text-[#6F7682]">{m.label}</div>
                    <div className="font-mono text-lg font-semibold text-[#7C5CFC] mt-1 tabular-nums">
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
                <h4 className="text-sm font-semibold text-[#F5F7FA] mb-3">Core Architectural Pillars</h4>
                <div className="space-y-3">
                  {project.architectureHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-[10px] bg-[#12151A] border border-[#232730]">
                      <span className="font-mono text-xs text-[#7C5CFC] mt-0.5 font-bold">
                        0{i + 1}
                      </span>
                      <p className="text-sm text-[#A7ADB7] leading-relaxed">{hl}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#F5F7FA] mb-3">Technologies & Protocols</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#12151A] border border-[#232730] text-[#A7ADB7] rounded-full px-3 py-1.5 text-xs font-medium"
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
              <div className="flex items-center gap-2 text-sm font-mono text-[#4ADE80]">
                <BarChart2 className="w-4 h-4" />
                <span>Deterministic Benchmark Results (P99 Tested)</span>
              </div>

              <div className="space-y-3">
                {project.benchmarks.map((bm, i) => (
                  <div key={i} className="p-4 rounded-[10px] bg-[#12151A] border border-[#232730] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-medium text-[#F5F7FA]">{bm.name}</div>
                      <div className="text-xs text-[#6F7682] mt-0.5">{bm.comparison}</div>
                    </div>
                    <div className="font-mono text-base font-bold text-[#7C5CFC] tabular-nums">
                      {bm.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#A7ADB7]">
                <div className="flex items-center gap-1.5 text-[#F5F7FA]">
                  <Terminal className="w-4 h-4 text-[#7C5CFC]" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <span className="uppercase text-[#6F7682]">{project.codeSnippet.language}</span>
              </div>

              <pre className="p-4 rounded-[10px] bg-[#08090B] border border-[#232730] font-mono text-xs text-[#A7ADB7] overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-[#191C22] bg-[#0D0F12] flex items-center justify-between gap-3">
          <div className="text-xs text-[#6F7682] font-mono hidden sm:block">
            Developed by Mohammed Umer Deshmukh
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#303540] bg-transparent px-4 py-2.5 text-xs font-medium text-[#F5F7FA] hover:bg-[#12151A] hover:border-[#454B55] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#7C5CFC] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#9278FF] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
