import React, { useState, useEffect } from 'react';
import {
  Utensils,
  Building2,
  Snowflake,
  Home,
  CheckCircle2,
  FileCheck,
  Compass,
  ShieldCheck,
  Zap,
  Fan,
  Gauge,
} from 'lucide-react';

interface ProjectCardVisualProps {
  type: string;
  title: string;
}

export const ProjectCardVisual: React.FC<ProjectCardVisualProps> = ({ type }) => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // 1. MahaPoshan Register (PM-POSHAN School Register & Inventory)
  if (type === 'stream-db') {
    const riceStock = 840 + (pulse % 5);
    const wheatStock = 460 - (pulse % 3);
    return (
      <div className="relative w-full h-full bg-[#0c0e17] flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_65%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between gap-2 border-b border-white/[0.08] pb-2 text-[10px] sm:text-[11px] font-mono text-[#94a3b8]">
          <div className="flex items-center gap-1.5 text-[#f1f5f9] min-w-0">
            <Utensils className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
            <span className="font-semibold truncate">MAHAPOSHAN ENGINE v2.4</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[#fbbf24] whitespace-nowrap">OFFLINE-READY</span>
            <span className="text-[#64748b] hidden sm:inline">|</span>
            <span className="text-[#d97706] hidden sm:inline whitespace-nowrap">SCHEDULE-II</span>
          </div>
        </div>

        {/* Dynamic Meal Calculation & Stock Matrix */}
        <div className="relative z-10 my-auto space-y-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-[8px] border border-white/[0.08] bg-[rgba(22,26,40,0.7)] backdrop-blur-sm text-center">
              <div className="text-[9px] font-mono text-[#64748b]">Meals Served</div>
              <div className="text-[11px] sm:text-[12px] font-mono font-semibold text-[#f1f5f9] mt-0.5">384 Heads</div>
              <div className="text-[8px] sm:text-[9px] font-mono text-[#fbbf24]">Primary + Upper</div>
            </div>

            <div className="p-2 rounded-[8px] border border-white/[0.08] bg-[rgba(22,26,40,0.7)] backdrop-blur-sm text-center">
              <div className="text-[9px] font-mono text-[#64748b]">Rice Reserve</div>
              <div className="text-[11px] sm:text-[12px] font-mono font-semibold text-[#f1f5f9] mt-0.5">{riceStock} kg</div>
              <div className="text-[8px] sm:text-[9px] font-mono text-[#06b6d4]">Inward Synced</div>
            </div>

            <div className="p-2 rounded-[8px] border border-white/[0.08] bg-[rgba(22,26,40,0.7)] backdrop-blur-sm text-center">
              <div className="text-[9px] font-mono text-[#64748b]">Wheat Balance</div>
              <div className="text-[11px] sm:text-[12px] font-mono font-semibold text-[#f1f5f9] mt-0.5">{wheatStock} kg</div>
              <div className="text-[8px] sm:text-[9px] font-mono text-[#ec4899]">Quota Valid</div>
            </div>
          </div>

          {/* Export & Compliance Row */}
          <div className="p-2 rounded-[8px] border border-white/[0.06] bg-[rgba(14,16,24,0.85)] flex items-center justify-between text-[9px] sm:text-[10px] font-mono gap-2">
            <span className="text-[#94a3b8] flex items-center gap-1 truncate">
              <FileCheck className="w-3 h-3 text-[#f59e0b] shrink-0" />
              <span className="truncate">Schedule-II Formatter</span>
            </span>
            <span className="text-[#fbbf24] font-medium shrink-0">EXPORT: PDF / XLSX</span>
          </div>
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#64748b] pt-2 border-t border-white/[0.08] gap-1">
          <span className="text-[#fbbf24] truncate">LOCALSTORAGE: SYNCED</span>
          <span className="text-[#94a3b8] hidden sm:inline truncate">CLERK AUTH</span>
          <span className="text-[#d97706] shrink-0">REACT + PWA</span>
        </div>
      </div>
    );
  }

  // 2. propSetu (Real Estate Discovery & Verified Housing)
  if (type === 'vector-engine') {
    const lat = 19.8762 + (pulse % 3) * 0.0001;
    const lng = 75.3433 + (pulse % 4) * 0.0001;
    return (
      <div className="relative w-full h-full bg-[#0c0e17] flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.15),transparent_65%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between gap-2 border-b border-white/[0.08] pb-2 text-[10px] sm:text-[11px] font-mono text-[#94a3b8]">
          <div className="flex items-center gap-1.5 text-[#f1f5f9] min-w-0">
            <Building2 className="w-3.5 h-3.5 text-[#d97706] shrink-0" />
            <span className="font-semibold truncate">PROPSETU GEOSPATIAL MAPS</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[#fbbf24] whitespace-nowrap">0% BROKERAGE</span>
            <span className="text-[#64748b] hidden sm:inline">|</span>
            <span className="text-[#ec4899] hidden sm:inline whitespace-nowrap">3-PT PASSPORT</span>
          </div>
        </div>

        {/* Geospatial Radar / Property Visual */}
        <div className="relative z-10 my-auto grid grid-cols-12 gap-2 sm:gap-3 items-center">
          {/* Map Coordinates Radar Box */}
          <div className="col-span-5 h-20 rounded-[8px] border border-white/[0.08] bg-[rgba(22,26,40,0.7)] p-2 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full border border-[#d97706]/35 animate-ping pointer-events-none" />
            <div className="flex items-center justify-between text-[9px] font-mono text-[#d97706]">
              <span className="flex items-center gap-1">
                <Compass className="w-2.5 h-2.5" />
                Leaflet Ping
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_6px_#f59e0b]" />
            </div>
            <div className="text-[9px] sm:text-[10px] font-mono text-[#f1f5f9] font-medium leading-tight">
              {lat.toFixed(4)}° N<br />
              {lng.toFixed(4)}° E
            </div>
            <div className="text-[8px] font-mono text-[#64748b]">Direct Owner Pin</div>
          </div>

          {/* Active Verified Listing Card */}
          <div className="col-span-7 p-2 sm:p-2.5 rounded-[8px] border border-[#f59e0b]/30 bg-[rgba(14,16,24,0.85)] space-y-1 shadow-[0_0_20px_rgba(245,158,11,0.12)]">
            <div className="flex items-center justify-between gap-1">
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#f1f5f9] truncate">3 BHK Luxury Villa</span>
              <span className="text-[8px] sm:text-[9px] font-mono text-[#fbbf24] bg-[#f59e0b]/10 px-1 py-0.5 rounded border border-[#f59e0b]/30 flex items-center gap-0.5 shrink-0">
                <ShieldCheck className="w-2.5 h-2.5 text-[#f59e0b]" /> Verified
              </span>
            </div>
            <p className="text-[8px] sm:text-[9px] font-mono text-[#94a3b8] truncate">Direct Owner • 1,650 sq ft • Garden</p>
            <div className="flex items-center justify-between pt-1 border-t border-white/[0.06] text-[9px] sm:text-[10px] font-mono">
              <span className="text-[#fbbf24] font-semibold">₹68.5 Lakh</span>
              <span className="text-[#64748b]">Direct Call</span>
            </div>
          </div>
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#64748b] pt-2 border-t border-white/[0.08] gap-1">
          <span className="text-[#06b6d4] truncate">LEAFLET: 60 FPS</span>
          <span className="text-[#94a3b8] hidden sm:inline truncate">LATENCY &lt; 65ms</span>
          <span className="text-[#d97706] shrink-0">REACT + TAILWIND</span>
        </div>
      </div>
    );
  }

  // 3. Chandrama (Commercial AC Sales & Industrial Maintenance)
  if (type === 'crdt-collab') {
    const tempReading = 18.2 + (pulse % 4) * 0.1;
    return (
      <div className="relative w-full h-full bg-[#0c0e17] flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_65%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between gap-2 border-b border-white/[0.08] pb-2 text-[10px] sm:text-[11px] font-mono text-[#94a3b8]">
          <div className="flex items-center gap-1.5 text-[#f1f5f9] min-w-0">
            <Snowflake className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
            <span className="font-semibold truncate">CHANDRAMA COMMERCIAL HVAC</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[#fbbf24] whitespace-nowrap">VRF & CHILLER</span>
            <span className="text-[#64748b] hidden sm:inline">|</span>
            <span className="text-[#d97706] hidden sm:inline whitespace-nowrap">98% EFFICIENCY</span>
          </div>
        </div>

        {/* HVAC Unit & Vent Visual */}
        <div className="relative z-10 my-auto grid grid-cols-3 gap-2 items-center">
          <div className="p-2 sm:p-2.5 rounded-[8px] border border-white/[0.08] bg-[rgba(22,26,40,0.7)] text-center">
            <div className="flex justify-center mb-1">
              <Fan className="w-4 h-4 sm:w-5 sm:h-5 text-[#06b6d4] animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="text-[8px] sm:text-[9px] font-mono text-[#64748b]">Central Plant</div>
            <div className="text-[10px] sm:text-[11px] font-mono text-[#f1f5f9] font-medium">{tempReading.toFixed(1)}°C Airflow</div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-[8px] border border-white/[0.08] bg-[rgba(22,26,40,0.7)] text-center">
            <div className="flex justify-center mb-1">
              <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-[#d97706]" />
            </div>
            <div className="text-[8px] sm:text-[9px] font-mono text-[#64748b]">Pressure</div>
            <div className="text-[10px] sm:text-[11px] font-mono text-[#fbbf24] font-medium">Optimal 120 PSI</div>
          </div>

          <div className="p-2 sm:p-2.5 rounded-[8px] border border-white/[0.08] bg-[rgba(22,26,40,0.7)] text-center">
            <div className="flex justify-center mb-1">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#ec4899]" />
            </div>
            <div className="text-[8px] sm:text-[9px] font-mono text-[#64748b]">Maintenance</div>
            <div className="text-[10px] sm:text-[11px] font-mono text-[#f59e0b] font-medium">AMC Active</div>
          </div>
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#64748b] pt-2 border-t border-white/[0.08] gap-1">
          <span className="text-[#d97706] truncate">FRAMER MOTION</span>
          <span className="text-[#94a3b8] hidden sm:inline truncate">VRF / CASSETTE</span>
          <span className="text-[#fbbf24] shrink-0">DIRECT API</span>
        </div>
      </div>
    );
  }

  // 4. MahaBuild Engineers (Civil Construction & Budget Management)
  return (
    <div className="relative w-full h-full bg-[#0c0e17] flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_65%)] pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-white/[0.08] pb-2 text-[10px] sm:text-[11px] font-mono text-[#94a3b8]">
        <div className="flex items-center gap-1.5 text-[#f1f5f9] min-w-0">
          <Home className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
          <span className="font-semibold truncate">MAHABUILD CIVIL 3D</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[#fbbf24] whitespace-nowrap">ENGINEER-LED</span>
          <span className="text-[#64748b] hidden sm:inline">|</span>
          <span className="text-[#d97706] hidden sm:inline whitespace-nowrap">₹15L – ₹75L</span>
        </div>
      </div>

      {/* Structural Wireframe & Process Pipeline */}
      <div className="relative z-10 my-auto space-y-2">
        <div className="p-2 sm:p-2.5 rounded-[8px] border border-white/[0.08] bg-[rgba(22,26,40,0.7)] flex items-center justify-between gap-2">
          <div className="space-y-0.5 min-w-0">
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#f1f5f9] block truncate">Waluj 2BHK Turnkey Residence</span>
            <span className="text-[8px] sm:text-[9px] font-mono text-[#94a3b8] block truncate">1,450 sq ft • Foundation to RCC</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-[#fbbf24] bg-[#f59e0b]/10 border border-[#f59e0b]/30 px-1.5 py-0.5 rounded shrink-0">
            Stage 4/5
          </span>
        </div>

        {/* 5-Stage Protocol Indicator */}
        <div className="grid grid-cols-5 gap-1 text-center">
          {['Site Visit', 'Budgeting', 'Planning', 'RCC Slab', 'Handover'].map((stage, idx) => (
            <div
              key={stage}
              className={`p-1 rounded-[4px] border text-[8px] font-mono truncate ${
                idx <= 3
                  ? 'border-[#f59e0b] bg-[#f59e0b]/20 text-white font-semibold'
                  : 'border-white/[0.08] bg-[rgba(14,16,24,0.7)] text-[#64748b]'
              }`}
            >
              {stage}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stats ticker */}
      <div className="relative z-10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#64748b] pt-2 border-t border-white/[0.08] gap-1">
        <span className="text-[#fbbf24] truncate">THREE.JS 3D</span>
        <span className="text-[#94a3b8] hidden sm:inline truncate">TRANSPARENT COSTING</span>
        <span className="text-[#d97706] shrink-0">CONSULTATION</span>
      </div>
    </div>
  );
};
