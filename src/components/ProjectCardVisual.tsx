import React, { useEffect, useState } from 'react';
import { Calendar, BarChart3, Layout, Users, CheckCircle2, Clock, FileSpreadsheet } from 'lucide-react';

interface ProjectCardVisualProps {
  type: 'stream-db' | 'vector-engine' | 'cloud-mesh' | 'crdt-collab';
  title: string;
}

export const ProjectCardVisual: React.FC<ProjectCardVisualProps> = ({ type }) => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % 100);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // 1. Group Scheduler App (React.js)
  if (type === 'stream-db') {
    return (
      <div className="relative w-full h-full bg-[#08090B] flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,252,0.15),transparent_60%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7ADB7] border-b border-[#191C22] pb-2">
          <div className="flex items-center gap-1.5 text-[#F5F7FA]">
            <Calendar className="w-3.5 h-3.5 text-[#7C5CFC]" />
            <span>GROUP SCHEDULER ENGINE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#4ADE80]">REST API: SYNCED</span>
            <span className="text-[#6F7682]">|</span>
            <span className="text-[#7C5CFC]">AUTO-TIMEZONE</span>
          </div>
        </div>

        {/* Calendar Slot Matrix */}
        <div className="relative z-10 my-auto grid grid-cols-4 gap-2">
          {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '05:00 PM', '06:30 PM', '07:00 PM', '08:00 PM'].map((slot, i) => {
            const isBooked = i === 1 || i === 4;
            const isSelected = i === (Math.floor(pulse / 6) % 8);
            return (
              <div
                key={slot}
                className={`p-2 rounded-[6px] border text-center transition-all duration-300 ${
                  isSelected
                    ? 'border-[#7C5CFC] bg-[#7C5CFC]/20 text-[#FFFFFF] shadow-[0_0_12px_rgba(124,92,252,0.4)]'
                    : isBooked
                    ? 'border-[#232730] bg-[#12151A] text-[#6F7682] opacity-60'
                    : 'border-[#191C22] bg-[#0D0F12] text-[#A7ADB7]'
                }`}
              >
                <div className="text-[9px] font-mono text-[#6F7682]">Slot #{i + 1}</div>
                <div className="text-[11px] font-mono font-medium mt-0.5">{slot}</div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#6F7682] pt-2 border-t border-[#191C22]">
          <span className="text-[#4ADE80]">CONFLICT: 0 DETECTED</span>
          <span className="text-[#A7ADB7]">PAYLOAD: VALIDATED</span>
          <span className="text-[#7C5CFC]">REACT.JS</span>
        </div>
      </div>
    );
  }

  // 2. Unemployment Data Analysis (Python, Pandas, Matplotlib)
  if (type === 'vector-engine') {
    return (
      <div className="relative w-full h-full bg-[#08090B] flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.15),transparent_60%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7ADB7] border-b border-[#191C22] pb-2">
          <div className="flex items-center gap-1.5 text-[#F5F7FA]">
            <BarChart3 className="w-3.5 h-3.5 text-[#9278FF]" />
            <span>PANDAS & MATPLOTLIB PIPELINE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#7C5CFC]">ROLLING: 30D</span>
            <span className="text-[#6F7682]">|</span>
            <span className="text-[#4ADE80]">EDA CLEANSING</span>
          </div>
        </div>

        {/* Statistical Trend Curve */}
        <div className="relative z-10 h-28 my-auto flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 300 100">
            {/* Grid Lines */}
            <line x1="20" y1="20" x2="280" y2="20" stroke="#191C22" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="20" y1="50" x2="280" y2="50" stroke="#191C22" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="20" y1="80" x2="280" y2="80" stroke="#191C22" strokeWidth="1" />

            {/* Shaded Area under Curve */}
            <path
              d="M 20 75 Q 70 30, 120 60 T 200 25 T 280 40 L 280 80 L 20 80 Z"
              fill="rgba(124, 92, 252, 0.12)"
            />

            {/* Primary Trend Line */}
            <path
              d="M 20 75 Q 70 30, 120 60 T 200 25 T 280 40"
              fill="none"
              stroke="#7C5CFC"
              strokeWidth="2"
            />

            {/* Secondary Moving Average Line */}
            <path
              d="M 20 70 Q 80 50, 140 55 T 220 35 T 280 38"
              fill="none"
              stroke="#4ADE80"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />

            {/* Data points */}
            <circle cx="120" cy="60" r="3.5" fill="#7C5CFC" />
            <circle cx="200" cy="25" r="4.5" fill="#9278FF" className="animate-ping" />
            <circle cx="200" cy="25" r="3.5" fill="#FFFFFF" />

            <text x="205" y="20" fill="#F5F7FA" fontSize="8" fontFamily="monospace">Peak: 23.4%</text>
          </svg>
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#6F7682] pt-2 border-t border-[#191C22]">
          <span>PYTHON / PANDAS</span>
          <span className="text-[#A7ADB7]">DEMOGRAPHIC TRENDS</span>
          <span className="text-[#4ADE80]">100K+ RECORDS</span>
        </div>
      </div>
    );
  }

  // 3. Responsive Portfolio Platform (React & Tailwind)
  if (type === 'cloud-mesh') {
    return (
      <div className="relative w-full h-full bg-[#08090B] flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1),transparent_60%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7ADB7] border-b border-[#191C22] pb-2">
          <div className="flex items-center gap-1.5 text-[#F5F7FA]">
            <Layout className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>RESPONSIVE REACT PLATFORM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#4ADE80]">LIGHTHOUSE 99</span>
            <span className="text-[#6F7682]">|</span>
            <span className="text-[#7C5CFC]">WCAG AA</span>
          </div>
        </div>

        {/* Viewport & Component Hierarchy Visual */}
        <div className="relative z-10 my-auto flex items-center justify-center gap-4">
          <div className="w-36 h-20 rounded-[8px] border border-[#303540] bg-[#12151A] p-2 flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between border-b border-[#232730] pb-1">
              <span className="text-[8px] font-mono text-[#7C5CFC]">Desktop</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 bg-[#232730] rounded w-3/4" />
              <div className="h-1 bg-[#171A20] rounded w-full" />
            </div>
            <div className="flex gap-1">
              <div className="h-2 flex-1 bg-[#7C5CFC]/30 rounded" />
              <div className="h-2 flex-1 bg-[#232730] rounded" />
            </div>
          </div>

          <div className="w-16 h-24 rounded-[8px] border border-[#303540] bg-[#12151A] p-1.5 flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between border-b border-[#232730] pb-0.5">
              <span className="text-[7px] font-mono text-[#7C5CFC]">Mobile</span>
            </div>
            <div className="space-y-1">
              <div className="h-1 bg-[#232730] rounded w-full" />
              <div className="h-1 bg-[#171A20] rounded w-2/3" />
            </div>
            <div className="h-2 bg-[#7C5CFC]/40 rounded w-full" />
          </div>
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#6F7682] pt-2 border-t border-[#191C22]">
          <span>SPACE GROTESK & INTER</span>
          <span className="text-[#A7ADB7]">TAILWIND CSS</span>
          <span className="text-[#4ADE80]">ZERO PILL SLOP</span>
        </div>
      </div>
    );
  }

  // 4. Operations & CRM Suite (iTUX Technologies)
  return (
    <div className="relative w-full h-full bg-[#08090B] flex flex-col justify-between p-4 overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,252,0.12),transparent_60%)] pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7ADB7] border-b border-[#191C22] pb-2">
        <div className="flex items-center gap-1.5 text-[#F5F7FA]">
          <FileSpreadsheet className="w-3.5 h-3.5 text-[#7C5CFC]" />
          <span>OPERATIONS & CLIENT COORDINATION</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#4ADE80]">SOPs: STANDARDIZED</span>
          <span className="text-[#6F7682]">|</span>
          <span className="text-[#7C5CFC]">CRM</span>
        </div>
      </div>

      {/* Workflow lanes */}
      <div className="relative z-10 my-auto grid grid-cols-3 gap-2">
        <div className="p-2 rounded-[6px] border border-[#232730] bg-[#12151A] text-center">
          <div className="text-[9px] font-mono text-[#6F7682]">Client Comms</div>
          <div className="text-[11px] font-mono text-[#4ADE80] mt-0.5">100% On-Time</div>
        </div>

        <div className="p-2 rounded-[6px] border border-[#232730] bg-[#12151A] text-center">
          <div className="text-[9px] font-mono text-[#6F7682]">Calendar/Meetings</div>
          <div className="text-[11px] font-mono text-[#F5F7FA] mt-0.5">Coordinated</div>
        </div>

        <div className="p-2 rounded-[6px] border border-[#232730] bg-[#12151A] text-center">
          <div className="text-[9px] font-mono text-[#6F7682]">Excel / MIS</div>
          <div className="text-[11px] font-mono text-[#7C5CFC] mt-0.5">Weekly Report</div>
        </div>
      </div>

      {/* Bottom stats ticker */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#6F7682] pt-2 border-t border-[#191C22]">
        <span>iTUX TECHNOLOGIES</span>
        <span className="text-[#A7ADB7]">CROSS-FUNCTIONAL</span>
        <span className="text-[#4ADE80]">REMOTE DELIVERY</span>
      </div>
    </div>
  );
};
