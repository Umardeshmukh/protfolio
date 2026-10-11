import React from 'react';
import { ConnectionMode } from './types';
import { RotateCcw, GitBranch, Flashlight, SlidersHorizontal } from 'lucide-react';

interface BoardControlsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  connectionMode: ConnectionMode;
  onChangeConnectionMode: (mode: ConnectionMode) => void;
  spotlightEnabled: boolean;
  onToggleSpotlight: () => void;
  onResetLayout: () => void;
  hasMovedCards: boolean;
}

export const BoardControls: React.FC<BoardControlsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  connectionMode,
  onChangeConnectionMode,
  spotlightEnabled,
  onToggleSpotlight,
  onResetLayout,
  hasMovedCards,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-[16px] bg-white border border-black/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
      {/* Left: Category Filters */}
      <div className="flex flex-wrap items-center gap-1.5">
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[#64748b]">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#b45309]" />
          <span>CLASSIFICATION:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-3.5 py-1.5 rounded-[9px] text-xs font-mono transition-all duration-200 whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#0f172a] text-white font-semibold shadow-sm'
                : 'text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Right: Board Utilities */}
      <div className="flex items-center gap-2">
        {/* Spotlight Torch Toggle */}
        <button
          type="button"
          onClick={onToggleSpotlight}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[9px] text-xs font-mono border transition-all ${
            spotlightEnabled
              ? 'bg-[#d97706]/10 text-[#b45309] border-[#d97706]/30 shadow-sm'
              : 'bg-white text-[#64748b] border-black/[0.08] hover:text-[#0f172a]'
          }`}
          title="Toggle Board Flashlight / Spotlight Effect"
          aria-label="Toggle flashlight spotlight"
        >
          <Flashlight className={`w-3.5 h-3.5 ${spotlightEnabled ? 'text-[#b45309]' : 'text-[#64748b]'}`} />
          <span className="hidden sm:inline">
            {spotlightEnabled ? 'Spotlight: ON' : 'Spotlight: OFF'}
          </span>
        </button>

        {/* Connection Threads Mode */}
        <div className="relative inline-flex rounded-[9px] bg-[#f8fafc] p-0.5 border border-black/[0.08]">
          <button
            type="button"
            onClick={() =>
              onChangeConnectionMode(
                connectionMode === 'all'
                  ? 'simplified'
                  : connectionMode === 'simplified'
                  ? 'all'
                  : 'all'
              )
            }
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[7px] text-xs font-mono transition-all ${
              connectionMode === 'all'
                ? 'bg-white text-[#0f172a] border border-black/[0.08] font-semibold shadow-sm'
                : 'text-[#64748b] hover:text-[#0f172a]'
            }`}
            title="Toggle between All Threads and Simplified Threads"
            aria-label="Toggle connection threads mode"
          >
            <GitBranch className="w-3.5 h-3.5 text-[#c53030]" />
            <span className="hidden md:inline">
              {connectionMode === 'all' ? 'All Threads' : 'Simplified'}
            </span>
          </button>
        </div>

        {/* Reset Layout Button */}
        <button
          type="button"
          onClick={onResetLayout}
          disabled={!hasMovedCards}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[9px] text-xs font-mono border transition-all ${
            hasMovedCards
              ? 'bg-white text-[#b45309] border-[#d97706]/30 hover:bg-[#fffbeb] cursor-pointer shadow-sm'
              : 'bg-[#f8fafc] text-[#94a3b8] border-black/[0.05] cursor-not-allowed opacity-60'
          }`}
          title="Reset all dragged case files to original positions"
          aria-label="Reset board layout"
        >
          <RotateCcw className={`w-3.5 h-3.5 ${hasMovedCards ? 'text-[#b45309]' : 'text-[#94a3b8]'}`} />
          <span className="hidden sm:inline">Reset Board</span>
        </button>
      </div>
    </div>
  );
};
