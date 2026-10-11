import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { EvidenceNote } from './types';
import { Tag, Sparkles } from 'lucide-react';

interface ResearchNoteProps {
  note: EvidenceNote;
  isHovered: boolean;
  isRelatedToHovered: boolean;
  onHover: (id: string | null) => void;
  onClick?: () => void;
  onDragEnd?: (id: string, offset: { x: number; y: number }) => void;
  isDraggable?: boolean;
  currentOffset?: { x: number; y: number };
}

export const ResearchNote: React.FC<ResearchNoteProps> = ({
  note,
  isHovered,
  isRelatedToHovered,
  onHover,
  onClick,
  onDragEnd,
  isDraggable = true,
  currentOffset = { x: 0, y: 0 },
}) => {
  const noteRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const isHighlighted = isHovered || isRelatedToHovered;

  return (
    <motion.div
      ref={noteRef}
      id={`note-${note.id}`}
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
          onDragEnd(note.id, {
            x: currentOffset.x + info.offset.x,
            y: currentOffset.y + info.offset.y,
          });
        }
      }}
      animate={{
        x: currentOffset.x,
        y: currentOffset.y,
        rotate: isHovered ? 0 : note.rotation,
        scale: isHovered ? 1.04 : 1,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      whileDrag={{ scale: 1.06, rotate: 1, zIndex: 40 }}
      onMouseEnter={() => onHover(note.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => {
        if (!isDraggingRef.current && onClick) {
          onClick();
        }
      }}
      className={`absolute w-48 sm:w-52 select-none cursor-grab active:cursor-grabbing transition-shadow duration-300 ${
        isHighlighted ? 'z-30' : 'z-10'
      }`}
      style={{
        left: `${note.defaultX}%`,
        top: `${note.defaultY}%`,
      }}
    >
      {/* Pushpin at Top Center */}
      <div
        id={`pin-${note.id}`}
        className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none"
      >
        <div className="relative">
          {/* Pushpin shadow */}
          <div className="absolute top-2 left-0.5 w-3.5 h-3.5 rounded-full bg-black/60 blur-[2px]" />
          {/* Metallic / Crimson Pinhead */}
          <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-[#ff6b7a] via-[#d85b68] to-[#7f1d28] border border-white/40 shadow-[0_2px_6px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-inner" />
          </div>
        </div>
      </div>

      {/* Frosted Scotch Tape strip effect */}
      <div
        className="absolute -top-2.5 left-6 w-14 h-4 bg-white/25 backdrop-blur-[2px] border border-white/30 rotate-[-4deg] pointer-events-none rounded-[1px] shadow-sm z-10"
        aria-hidden="true"
      />

      {/* Note Body (Off-white paper with typewriter styling) */}
      <div
        className={`relative p-3 sm:p-3.5 rounded-[6px] transition-all duration-300 font-handwriting ${
          note.colorTheme === 'kraft'
            ? 'bg-[#e4d5be] text-[#24211b] border border-[#bfa583]'
            : 'bg-[#f4efe4] text-[#1c1c1f] border border-[#d8d0bf]'
        } ${
          isHighlighted
            ? 'shadow-[0_12px_30px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.3)] ring-2 ring-black/40'
            : 'shadow-[0_6px_20px_rgba(0,0,0,0.45)]'
        }`}
      >
        {/* Subtle lined paper pattern watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15 rounded-[inherit]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '100% 18px',
          }}
          aria-hidden="true"
        />

        {/* Top Header: Code Name & Angled Stamp ("Projects") */}
        <div className="relative flex items-center justify-between gap-1.5 border-b border-black/10 pb-1.5 mb-2">
          <span className="text-[12px] font-handwriting font-bold tracking-wide uppercase text-black/75 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#d85b68]" />
            {note.codeName}
          </span>
          <span
            className="text-[10px] font-handwriting font-bold tracking-wider px-1.5 py-0.5 rounded-[2px] uppercase border rotate-[-2deg] bg-black/[0.08] text-black/85 border-black/15 shadow-sm"
          >
            Projects
          </span>
        </div>

        {/* Title */}
        <h4 className="text-[17px] sm:text-[18px] font-handwriting font-bold text-black/90 leading-tight mb-1">
          {note.title}
        </h4>

        {/* Content body */}
        <p className="text-[14px] leading-[1.35] text-black/85 mb-2.5 font-handwriting font-medium">
          {note.content}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1 border-t border-black/10">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-0.5 text-[11px] font-handwriting font-semibold px-1.5 py-0.5 rounded bg-black/[0.07] text-black/80"
            >
              <Tag className="w-2.5 h-2.5 opacity-60" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
