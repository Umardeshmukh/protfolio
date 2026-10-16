import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Project } from '../../data/portfolioData';
import { ProjectCardVisual } from '../ProjectCardVisual';
import { ExternalLink, FolderOpen, ArrowRight, ShieldCheck, Pin } from 'lucide-react';

interface ProjectEvidenceCardProps {
  project: Project;
  caseNumber: number;
  isAnchor?: boolean;
  isHovered: boolean;
  isRelatedToHovered: boolean;
  onHover: (id: string | null) => void;
  onSelect: (project: Project) => void;
  onDragEnd?: (id: string, offset: { x: number; y: number }) => void;
  isDraggable?: boolean;
  currentOffset?: { x: number; y: number };
  defaultPosition: { x: number; y: number };
}

export const ProjectEvidenceCard: React.FC<ProjectEvidenceCardProps> = ({
  project,
  caseNumber,
  isAnchor = false,
  isHovered,
  isRelatedToHovered,
  onHover,
  onSelect,
  onDragEnd,
  isDraggable = true,
  currentOffset = { x: 0, y: 0 },
  defaultPosition,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const isHighlighted = isHovered || isRelatedToHovered;

  const cardWidthClass = isAnchor ? 'w-[360px] lg:w-[410px]' : 'w-[330px] lg:w-[370px]';

  return (
    <motion.div
      ref={cardRef}
      id={`project-${project.id}`}
      drag={isDraggable}
      dragMomentum={false}
      dragElastic={0.08}
      onDragStart={() => {
        isDraggingRef.current = true;
      }}
      onDragEnd={(_e, info) => {
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 80);
        if (onDragEnd) {
          onDragEnd(project.id, {
            x: currentOffset.x + info.offset.x,
            y: currentOffset.y + info.offset.y,
          });
        }
      }}
      animate={{
        x: currentOffset.x,
        y: currentOffset.y,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      whileDrag={{ scale: 1.04, zIndex: 40 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className={`group/card absolute ${cardWidthClass} select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 ${
        isHighlighted ? 'z-30' : 'z-20'
      }`}
      style={{
        left: `${defaultPosition.x}%`,
        top: `${defaultPosition.y}%`,
      }}
    >
      {/* Top Pushpin Attachment Point */}
      <div
        id={`pin-${project.id}`}
        className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none"
      >
        <div className="relative">
          {/* Tack Drop Shadow */}
          <div className="absolute top-2.5 left-1 w-4 h-4 rounded-full bg-black/70 blur-[3px]" />
          {/* Metallic / Crimson Pinhead */}
          <div
            className={`relative w-4.5 h-4.5 rounded-full border border-white/50 shadow-[0_2px_8px_rgba(0,0,0,0.6)] flex items-center justify-center transition-all ${
              isHighlighted
                ? 'bg-gradient-to-br from-[#f59e0b] via-[#b45309] to-[#78350f] ring-2 ring-[#b45309]'
                : 'bg-gradient-to-br from-[#ff6b7a] via-[#d85b68] to-[#8b1e2a]'
            }`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-sm" />
          </div>
        </div>
      </div>

      {/* Main Investigation Case Card Container */}
      <div
        className={`relative rounded-[16px] bg-[#0d0f14]/95 backdrop-blur-xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
          isHighlighted
            ? 'border-[#b45309] shadow-[0_20px_50px_rgba(217,119,6,0.18),0_0_0_1px_rgba(217,119,6,0.35)]'
            : 'border-[#232730] hover:border-[#383d4c] shadow-[0_12px_36px_rgba(0,0,0,0.45)]'
        }`}
      >
        {/* Top Case Label HUD */}
        <div className="px-4 py-2.5 bg-[#12151d] border-b border-[#232730] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d85b68] animate-pulse" />
            <span className="text-[#a7adb7] font-semibold tracking-wider">
              CASE #{String(caseNumber).padStart(2, '0')}
            </span>
            <span className="text-[#454b55]">|</span>
            <span className="text-[#b45309] font-medium text-[11px] truncate max-w-[120px]">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#4ade80]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-mono">ACTIVE FILE</span>
          </div>
        </div>

        {/* Visual Slot: Photographic Evidence Container */}
        <div className="p-3.5 pb-2">
          <div className="relative aspect-[16/10] w-full rounded-[10px] overflow-hidden border border-[#232730] bg-[#08090b] shadow-inner group-hover/card:border-[#b45309]/50 transition-colors">
            <div className="w-full h-full transition-transform duration-500 ease-out group-hover/card:scale-[1.03]">
              <ProjectCardVisual type={project.visualType} title={project.title} />
            </div>

            {/* Subtle Evidence Tag Overlay */}
            <div className="absolute top-2 left-2 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#f5f7fa]">
                <Pin className="w-2.5 h-2.5 text-[#d85b68]" />
                EXHIBIT #{caseNumber}
              </span>
            </div>

            {/* Metric badge top-right */}
            {project.metrics?.[0] && (
              <div className="absolute bottom-2 right-2 pointer-events-none">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#12151d]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#f5f7fa] shadow-md">
                  <span className="text-[#a7adb7] text-[10px]">{project.metrics[0].label}:</span>
                  <span className="text-[#b45309] font-bold">{project.metrics[0].value}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Card Body: Title, Description & Tags */}
        <div className="p-4 pt-2 space-y-3">
          <div>
            <h3 className="text-base sm:text-lg font-display font-bold text-[#f5f7fa] tracking-tight leading-snug group-hover/card:text-white transition-colors">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-[#a7adb7] line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#171a22] border border-[#232730] text-[11px] font-mono text-[#a7adb7] hover:border-[#b45309]/60 hover:text-[#f5f7fa] transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[10px] font-mono text-[#6f7682] self-center">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Hover Clue Indicator */}
          <div className="pt-1 text-[11px] font-mono text-[#b45309] flex items-center justify-between">
            <span className="opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center gap-1">
              <span>Inspect full investigation dossier</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card Footer: Action Links */}
        <div
          className="px-4 py-3 bg-[#101319] border-t border-[#232730] flex items-center justify-between gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {/* External links */}
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#a7adb7] hover:text-[#b45309] transition-colors"
                title="Open Live Demonstration"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#b45309]" />
                <span className="hidden sm:inline">Live Demo</span>
              </a>
            )}
          </div>

          {/* View Case File Trigger */}
          <button
            type="button"
            onClick={() => {
              if (!isDraggingRef.current) {
                onSelect(project);
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-[#b45309]/15 hover:bg-[#b45309] border border-[#b45309]/40 hover:border-[#b45309] text-xs font-medium text-[#f5f7fa] transition-all duration-200 group/btn shadow-sm"
          >
            <FolderOpen className="w-3.5 h-3.5 text-[#b45309] group-hover/btn:text-white" />
            <span>Case File</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
