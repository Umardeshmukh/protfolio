import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Layers, Server, Monitor, Activity, CheckCircle, Copy, Check } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(PORTFOLIO_DATA.skills[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const activeSkill =
    PORTFOLIO_DATA.skills.find((s) => s.id === selectedSkillId) || PORTFOLIO_DATA.skills[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSkill.sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Monitor className="w-4 h-4" />;
      case 'admin-coordination':
        return <Layers className="w-4 h-4" />;
      case 'data-tools':
        return <Server className="w-4 h-4" />;
      case 'ai-prompting':
        return <Terminal className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <section id="architecture" className="py-28 lg:py-40 border-t border-black/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[12px] uppercase tracking-[0.16em] text-[#b45309] font-semibold font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            <span>02 — ARCHITECTURE & SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-bold text-[#0f172a] leading-[1.1] tracking-[-0.03em]">
            Technical Stack & Core Skills
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-[1.7] font-sans">
            Versatile expertise across React.js frontend engineering, project coordination, Python data analysis, and certified Prompt Engineering.
          </p>
        </div>

        {/* Interactive Architecture Sandbox */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Domain Selector Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {PORTFOLIO_DATA.skills.map((skill) => {
              const isSelected = skill.id === selectedSkillId;
              return (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkillId(skill.id)}
                  className={`w-full text-left p-5 rounded-[18px] border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-[#7c3aed]/50 shadow-[0_10px_30px_rgba(124,58,237,0.08)]'
                      : 'bg-white/70 backdrop-blur-md border-black/[0.06] hover:border-black/[0.12] hover:bg-white'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-[12px] mt-0.5 border ${
                      isSelected
                        ? 'bg-[#7c3aed]/10 text-[#7c3aed] border-[#7c3aed]/25'
                        : 'bg-[#f8fafc] text-[#64748b] border-black/[0.06]'
                    }`}
                  >
                    {getIcon(skill.id)}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-base font-semibold ${
                          isSelected ? 'text-[#0f172a]' : 'text-[#475569]'
                        }`}
                      >
                        {skill.title}
                      </h3>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                      )}
                    </div>
                    <p className="text-xs text-[#64748b] leading-relaxed line-clamp-2 font-sans">
                      {skill.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Details Container */}
          <div className="lg:col-span-7 p-7 lg:p-9 rounded-[22px] bg-white border border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.03)] space-y-6">
            <div className="flex items-start sm:items-center justify-between gap-3 flex-wrap border-b border-black/[0.06] pb-4">
              <div className="min-w-0">
                <span className="text-xs font-mono text-[#b45309] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                  Pattern Signature
                </span>
                <h4 className="text-lg font-display font-bold text-[#0f172a] mt-0.5">
                  {activeSkill.patternName}
                </h4>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#15803d] px-3 py-1 rounded-full bg-[#16a34a]/10 border border-[#16a34a]/25">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Pattern</span>
              </div>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed font-sans">
              {activeSkill.patternDescription}
            </p>

            {/* Code / Configuration Snippet */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                <span className="flex items-center gap-1.5 text-[#0f172a]">
                  <Terminal className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span>Pattern Implementation Snippet</span>
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-[#f8fafc] border border-black/[0.08] text-[#475569] hover:text-[#0f172a] hover:border-black/[0.15] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#16a34a]" />
                      <span className="text-[#16a34a]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-[14px] bg-[#f1f5f9] border border-black/[0.06] font-mono text-xs text-[#334155] overflow-x-auto leading-relaxed shadow-inner">
                <code>{activeSkill.sampleCode}</code>
              </pre>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-[#64748b] uppercase tracking-wider font-semibold">
                Production Tooling & Core Primitives
              </div>
              <div className="flex flex-wrap gap-2">
                {activeSkill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white border border-black/[0.08] text-[#475569] rounded-full px-3.5 py-1 text-xs font-mono font-medium transition-all hover:border-[#7c3aed] hover:text-[#7c3aed] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
