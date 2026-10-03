import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Layers, Server, Monitor, Activity, CheckCircle, Copy, Check } from 'lucide-react';
import { MatrixText } from './MatrixText';
import { TorchCard } from './TorchCard';

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
    <section id="architecture" className="py-24 lg:py-36 border-t border-[#191C22] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[12px] uppercase tracking-[0.12em] text-[#7C5CFC] font-medium font-mono">
            <MatrixText text="03 — ARCHITECTURE & SKILLS" trigger="view" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-display font-semibold text-[#F5F7FA] leading-[1.1] tracking-[-0.03em]">
            Technical Stack & Core Skills
          </h2>
          <p className="text-base sm:text-lg text-[#A7ADB7] leading-[1.6]">
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
                  className={`w-full text-left p-5 rounded-[16px] border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#12151A] border-[#7C5CFC] shadow-[0_10px_30px_rgba(124,92,252,0.08)]'
                      : 'bg-[#0D0F12] border-[#232730] hover:border-[#303540] hover:bg-[#0D0F12]/80'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-[10px] mt-0.5 border ${
                      isSelected
                        ? 'bg-[#7C5CFC]/15 text-[#9278FF] border-[#7C5CFC]/30'
                        : 'bg-[#12151A] text-[#A7ADB7] border-[#232730]'
                    }`}
                  >
                    {getIcon(skill.id)}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-base font-semibold ${
                          isSelected ? 'text-[#F5F7FA]' : 'text-[#A7ADB7]'
                        }`}
                      >
                        {skill.title}
                      </h3>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC]" />
                      )}
                    </div>
                    <p className="text-xs text-[#6F7682] leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Details Container with Torch Effect */}
          <TorchCard
            className="lg:col-span-7 p-6 lg:p-8 space-y-6"
            torchColor="rgba(124, 92, 252, 0.15)"
            borderGlowColor="rgba(146, 120, 255, 0.45)"
            torchRadius={380}
          >
            <div className="flex items-center justify-between border-b border-[#191C22] pb-4">
              <div>
                <span className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider">
                  Pattern Signature
                </span>
                <h4 className="text-lg font-display font-semibold text-[#F5F7FA] mt-0.5">
                  <MatrixText
                    key={activeSkill.patternName}
                    text={activeSkill.patternName}
                    trigger="mount"
                    revealSpeed={0.5}
                    scrambleClassName="text-[#A996FF]"
                  />
                </h4>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#4ADE80]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Pattern</span>
              </div>
            </div>

            <p className="text-sm text-[#A7ADB7] leading-relaxed">
              {activeSkill.patternDescription}
            </p>

            {/* Code / Configuration Snippet */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#6F7682]">
                <span className="flex items-center gap-1 text-[#A7ADB7]">
                  <Terminal className="w-3.5 h-3.5 text-[#7C5CFC]" />
                  <span>Pattern Implementation Snippet</span>
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[#A7ADB7] hover:text-[#F5F7FA] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#4ADE80]" />
                      <span className="text-[#4ADE80]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-[10px] bg-[#08090B] border border-[#232730] font-mono text-xs text-[#A7ADB7] overflow-x-auto leading-relaxed">
                <code>{activeSkill.sampleCode}</code>
              </pre>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-medium text-[#6F7682] uppercase tracking-wider">
                Production Tooling & Core Primitives
              </div>
              <div className="flex flex-wrap gap-2">
                {activeSkill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#12151A] border border-[#232730] text-[#A7ADB7] rounded-full px-[10px] py-[6px] text-xs font-medium transition-colors hover:border-[#7C5CFC] hover:text-[#F5F7FA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </TorchCard>
        </div>
      </div>
    </section>
  );
};
