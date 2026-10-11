import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Project } from '../../data/portfolioData';
import { ProjectCardVisual } from '../ProjectCardVisual';
import {
  ExternalLink,
  Tag,
  FolderOpen,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface ProjectStickyNoteProps {
  project: Project;
  caseNumber: number;
  isHovered: boolean;
  isRelatedToHovered: boolean;
  onHover: (id: string | null) => void;
  onSelect: (project: Project) => void;
  onDragEnd?: (id: string, offset: { x: number; y: number }) => void;
  isDraggable?: boolean;
  currentOffset?: { x: number; y: number };
  defaultPosition: { x: number; y: number };
  colorTheme?: 'canary' | 'cyan' | 'rose' | 'cream';
  rotation?: number;
}

export const ProjectStickyNote: React.FC<ProjectStickyNoteProps> = ({
  project,
  caseNumber,
  isHovered,
  isRelatedToHovered,
  onHover,
  onSelect,
  onDragEnd,
  isDraggable = true,
  currentOffset = { x: 0, y: 0 },
  defaultPosition,
  colorTheme = 'canary',
  rotation = 0,
}) => {
  const noteRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const isHighlighted = isHovered || isRelatedToHovered;

  // Visual color palette for the physical sticky note
  const themeStyles = {
    canary: {
      bg: 'bg-[#fff9c2]',
      border: 'border-[#f2e796]',
      text: 'text-[#1c1917]',
      accent: 'text-[#92400e]',
      stamp: 'text-[#b45309] border-[#b45309]/40 bg-[#b45309]/10',
      pin: 'from-[#ff6b7a] via-[#d85b68] to-[#8b1e2a]',
    },
    cyan: {
      bg: 'bg-[#e0f2fe]',
      border: 'border-[#bae6fd]',
      text: 'text-[#082f49]',
      accent: 'text-[#0369a1]',
      stamp: 'text-[#0284c7] border-[#0284c7]/40 bg-[#0284c7]/10',
      pin: 'from-[#38bdf8] via-[#0284c7] to-[#0369a1]',
    },
    rose: {
      bg: 'bg-[#ffe4e6]',
      border: 'border-[#fecdd3]',
      text: 'text-[#4c0519]',
      accent: 'text-[#be123c]',
      stamp: 'text-[#e11d48] border-[#e11d48]/40 bg-[#e11d48]/10',
      pin: 'from-[#fb7185] via-[#e11d48] to-[#9f1239]',
    },
    cream: {
      bg: 'bg-[#fef3c7]',
      border: 'border-[#fde68a]',
      text: 'text-[#451a03]',
      accent: 'text-[#b45309]',
      stamp: 'text-[#d97706] border-[#d97706]/40 bg-[#d97706]/10',
      pin: 'from-[#fcd34d] via-[#f59e0b] to-[#b45309]',
    },
  }[colorTheme];

  return (
    <motion.div
      ref={noteRef}
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
        rotate: isHovered ? 0 : rotation,
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      whileDrag={{ scale: 1.05, rotate: 1, zIndex: 40 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className={`group/sticky absolute w-[235px] sm:w-[255px] select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 ${
        isHighlighted ? 'z-30' : 'z-20'
      }`}
      style={{
        left: `${defaultPosition.x}%`,
        top: `${defaultPosition.y}%`,
      }}
    >
      {/* Pushpin at Top Center */}
      <div
        id={`pin-${project.id}`}
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none"
      >
        <div className="relative">
          {/* Tack Drop Shadow */}
          <div className="absolute top-2 left-0.5 w-3 h-3 rounded-full bg-black/60 blur-[2px]" />
          {/* Metallic / Crimson Pinhead */}
          <div
            className={`relative w-3.5 h-3.5 rounded-full border border-white/60 shadow-[0_2px_6px_rgba(0,0,0,0.5)] flex items-center justify-center bg-gradient-to-br ${themeStyles.pin} transition-transform ${
              isHighlighted ? 'scale-110 ring-2 ring-black/60' : ''
            }`}
          >
            <div className="w-1 h-1 rounded-full bg-white/80 shadow-sm" />
          </div>
        </div>
      </div>

      {/* Frosted Scotch Tape Strip */}
      <div
        className="absolute -top-2 left-5 w-12 h-3.5 bg-white/35 backdrop-blur-[2px] border border-white/40 rotate-[-3deg] pointer-events-none rounded-[1px] shadow-sm z-20"
        aria-hidden="true"
      />

      {/* Sticky Note Body with Compact Proportions & Paper Depth */}
      <div
        className={`relative p-3.5 sm:p-4 rounded-[4px] border font-handwriting ${themeStyles.bg} ${themeStyles.border} ${themeStyles.text} transition-all duration-300 ${
          isHighlighted
            ? 'shadow-[0_16px_36px_rgba(0,0,0,0.2),0_6px_14px_rgba(0,0,0,0.15)] ring-2 ring-black/30'
            : 'shadow-[0_8px_20px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.15)]'
        }`}
      >
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10 rounded-[inherit]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '100% 18px',
          }}
          aria-hidden="true"
        />

        {/* Top Header: Case File Stamp & "Projects" text on top right corner */}
        <div className="relative flex items-center justify-between gap-1.5 border-b border-black/10 pb-1.5 mb-2.5">
          <div className="flex items-center gap-1 text-[12px] sm:text-[13px] font-handwriting font-bold tracking-wide uppercase opacity-85">
            <Sparkles className="w-3 h-3 text-[#d85b68]" />
            <span>CASE #{String(caseNumber).padStart(2, '0')}</span>
          </div>

          {/* Top Right Corner Text: Replaced with "Projects" as requested */}
          <span
            className={`text-[10px] sm:text-[11px] font-handwriting font-bold tracking-wider px-1.5 py-0.5 rounded-[2px] uppercase border rotate-[1.5deg] ${themeStyles.stamp}`}
          >
            Projects
          </span>
        </div>

        {/* ============================================================== */}
        {/* CLICKABLE PROJECT NAME                                         */}
        {/* ============================================================== */}
        <div className="relative mb-2">
          <button
            type="button"
            onClick={(e) => {
              if (!isDraggingRef.current) {
                e.stopPropagation();
                onSelect(project);
              }
            }}
            className="text-left group/title block w-full focus:outline-none"
            title={`Click "${project.title}" to open investigation dossier`}
          >
            <div className="flex items-start justify-between gap-1.5">
              <h3 className="text-[20px] sm:text-[22px] font-handwriting font-bold tracking-normal leading-tight underline decoration-2 decoration-black/25 cursor-pointer flex items-center gap-1 text-inherit">
                <span>{project.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all text-current shrink-0" />
              </h3>
            </div>
            <div className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded bg-black/10 text-[11px] font-handwriting font-bold tracking-wide text-black/85 group-hover/title:bg-[#0f172a] group-hover/title:text-white transition-colors">
              <FolderOpen className="w-2.5 h-2.5" />
              <span>CLICK TO OPEN CASE</span>
            </div>
          </button>
        </div>

        {/* Attached Visual Thumbnail */}
        <div className="relative aspect-[16/9] w-full rounded-[3px] overflow-hidden border border-black/15 bg-[#08090b] shadow-inner mb-2.5">
          <div className="w-full h-full transition-transform duration-300 ease-out group-hover/sticky:scale-[1.03]">
            <ProjectCardVisual type={project.visualType} title={project.title} />
          </div>

          {/* Metric Badge pinned to photo corner */}
          {project.metrics?.[0] && (
            <div className="absolute bottom-1 right-1 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/85 backdrop-blur-md text-[11px] font-handwriting text-white shadow-sm border border-white/10">
                <span className="text-white/70">{project.metrics[0].label}:</span>
                <span className="text-[#fbbf24] font-bold">{project.metrics[0].value}</span>
              </span>
            </div>
          )}
        </div>

        {/* Short Description */}
        <p className="text-[14px] sm:text-[15px] font-handwriting font-medium leading-[1.35] text-black/90 mb-2.5 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 mb-2.5 pt-1.5 border-t border-black/10">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-0.5 text-[11px] sm:text-[12px] font-handwriting font-semibold px-1.5 py-0.5 rounded bg-black/[0.08] text-black/85"
            >
              <Tag className="w-2.5 h-2.5 opacity-60" />
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[11px] font-handwriting font-semibold text-black/70 self-center">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Sticky Note Footer: Demo link & Dossier button */}
        <div
          className="pt-1.5 border-t border-black/10 flex items-center justify-between gap-2 text-[13px] font-handwriting"
          onClick={(e) => e.stopPropagation()}
        >
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-black/80 hover:text-[#b45309] transition-colors"
              title="Open Live Demonstration"
            >
              <ExternalLink className="w-3 h-3 text-[#b45309]" />
              <span>Demo</span>
            </a>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={() => {
              if (!isDraggingRef.current) {
                onSelect(project);
              }
            }}
            className="inline-flex items-center gap-0.5 font-bold text-black hover:text-[#b45309] transition-colors"
          >
            <span>Dossier</span>
            <ArrowUpRight className="w-3 h-3 text-[#b45309]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
