import React, { useEffect, useState } from 'react';
import {
  FileSpreadsheet,
  MapPin,
  Building2,
  Snowflake,
  Fan,
  Gauge,
  ShieldCheck,
  Home,
  CheckCircle2,
  Utensils,
  FileCheck,
  Compass,
  Zap,
} from 'lucide-react';

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

  // 1. MahaPoshan Register (PM-POSHAN School Register & Inventory)
  if (type === 'stream-db') {
    const riceStock = 840 + (pulse % 5);
    const wheatStock = 460 - (pulse % 3);
    return (
      <div className="relative w-full h-full bg-[#08090B] flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_65%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7ADB7] border-b border-[#191C22] pb-2">
          <div className="flex items-center gap-1.5 text-[#F5F7FA]">
            <Utensils className="w-3.5 h-3.5 text-[#4ADE80]" />
            <span>MAHAPOSHAN ENGINE v2.4</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#4ADE80]">OFFLINE-READY</span>
            <span className="text-[#6F7682]">|</span>
            <span className="text-[#7C5CFC]">SCHEDULE-II PART-2</span>
          </div>
        </div>

        {/* Dynamic Meal Calculation & Stock Matrix */}
        <div className="relative z-10 my-auto space-y-2.5">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-[6px] border border-[#232730] bg-[#12151A]/80 text-center">
              <div className="text-[9px] font-mono text-[#6F7682]">Meals Served</div>
              <div className="text-[12px] font-mono font-semibold text-[#F5F7FA] mt-0.5">384 Heads</div>
              <div className="text-[9px] font-mono text-[#4ADE80]">Primary + Upper</div>
            </div>

            <div className="p-2 rounded-[6px] border border-[#232730] bg-[#12151A]/80 text-center">
              <div className="text-[9px] font-mono text-[#6F7682]">Rice Reserve</div>
              <div className="text-[12px] font-mono font-semibold text-[#F5F7FA] mt-0.5">{riceStock} kg</div>
              <div className="text-[9px] font-mono text-[#60A5FA]">Inward Synced</div>
            </div>

            <div className="p-2 rounded-[6px] border border-[#232730] bg-[#12151A]/80 text-center">
              <div className="text-[9px] font-mono text-[#6F7682]">Wheat Balance</div>
              <div className="text-[12px] font-mono font-semibold text-[#F5F7FA] mt-0.5">{wheatStock} kg</div>
              <div className="text-[9px] font-mono text-[#FBBF24]">Quota Validated</div>
            </div>
          </div>

          {/* Export & Compliance Row */}
          <div className="p-2 rounded-[6px] border border-[#191C22] bg-[#0D0F12] flex items-center justify-between text-[10px] font-mono">
            <span className="text-[#A7ADB7] flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-[#7C5CFC]" />
              Schedule-II Page 43 Formatter
            </span>
            <span className="text-[#4ADE80] font-medium">EXPORT READY: PDF / XLSX</span>
          </div>
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#6F7682] pt-2 border-t border-[#191C22]">
          <span className="text-[#4ADE80]">LOCALSTORAGE: SYNCED</span>
          <span className="text-[#A7ADB7]">CLERK AUTHENTICATED</span>
          <span className="text-[#7C5CFC]">REACT + PWA</span>
        </div>
      </div>
    );
  }

  // 2. propSetu (Real Estate Discovery & Verified Housing)
  if (type === 'vector-engine') {
    const lat = 19.8762 + (pulse % 3) * 0.0001;
    const lng = 75.3433 + (pulse % 4) * 0.0001;
    return (
      <div className="relative w-full h-full bg-[#08090B] flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,92,252,0.15),transparent_65%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7ADB7] border-b border-[#191C22] pb-2">
          <div className="flex items-center gap-1.5 text-[#F5F7FA]">
            <Building2 className="w-3.5 h-3.5 text-[#7C5CFC]" />
            <span>PROPSETU GEOSPATIAL MAPS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#4ADE80]">0% BROKERAGE</span>
            <span className="text-[#6F7682]">|</span>
            <span className="text-[#7C5CFC]">3-PT PASSPORT</span>
          </div>
        </div>

        {/* Geospatial Radar / Property Visual */}
        <div className="relative z-10 my-auto grid grid-cols-12 gap-3 items-center">
          {/* Map Coordinates Radar Box */}
          <div className="col-span-5 h-20 rounded-[8px] border border-[#232730] bg-[#12151A] p-2 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full border border-[#7C5CFC]/30 animate-ping pointer-events-none" />
            <div className="flex items-center justify-between text-[9px] font-mono text-[#7C5CFC]">
              <span className="flex items-center gap-1">
                <Compass className="w-2.5 h-2.5" />
                Leaflet Ping
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
            </div>
            <div className="text-[10px] font-mono text-[#F5F7FA] font-medium leading-tight">
              {lat.toFixed(4)}° N<br />
              {lng.toFixed(4)}° E
            </div>
            <div className="text-[8px] font-mono text-[#6F7682]">Direct Owner Pin</div>
          </div>

          {/* Active Verified Listing Card */}
          <div className="col-span-7 p-2.5 rounded-[8px] border border-[#7C5CFC]/30 bg-[#0D0F12] space-y-1.5 shadow-[0_0_15px_rgba(124,92,252,0.12)]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#F5F7FA]">3 BHK Premium Villa</span>
              <span className="text-[9px] font-mono text-[#4ADE80] bg-[#4ADE80]/10 px-1.5 py-0.5 rounded border border-[#4ADE80]/30 flex items-center gap-0.5">
                <ShieldCheck className="w-2.5 h-2.5" /> Verified
              </span>
            </div>
            <p className="text-[9px] font-mono text-[#A7ADB7]">Direct Owner • 1,650 sq ft • Garden Facing</p>
            <div className="flex items-center justify-between pt-1 border-t border-[#191C22] text-[10px] font-mono">
              <span className="text-[#7C5CFC] font-semibold">₹68.5 Lakh</span>
              <span className="text-[#6F7682]">Direct Call/WA</span>
            </div>
          </div>
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#6F7682] pt-2 border-t border-[#191C22]">
          <span className="text-[#4ADE80]">LEAFLET CLUSTER: 60 FPS</span>
          <span className="text-[#A7ADB7]">FILTER LATENCY &lt; 65ms</span>
          <span className="text-[#7C5CFC]">REACT + TAILWIND</span>
        </div>
      </div>
    );
  }

  // 3. Chandrama (Commercial AC Sales & Industrial Maintenance)
  if (type === 'crdt-collab') {
    const tempReading = 18.2 + (pulse % 4) * 0.1;
    return (
      <div className="relative w-full h-full bg-[#08090B] flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.15),transparent_65%)] pointer-events-none" />

        {/* Top HUD */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7ADB7] border-b border-[#191C22] pb-2">
          <div className="flex items-center gap-1.5 text-[#F5F7FA]">
            <Snowflake className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>CHANDRAMA COMMERCIAL HVAC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#4ADE80]">VRF & CHILLER</span>
            <span className="text-[#6F7682]">|</span>
            <span className="text-[#7C5CFC]">98% EFFICIENCY</span>
          </div>
        </div>

        {/* HVAC Unit & Vent Visual */}
        <div className="relative z-10 my-auto grid grid-cols-3 gap-2 items-center">
          <div className="p-2.5 rounded-[8px] border border-[#232730] bg-[#12151A] text-center">
            <div className="flex justify-center mb-1">
              <Fan className="w-5 h-5 text-[#60A5FA] animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="text-[9px] font-mono text-[#6F7682]">Central Plant</div>
            <div className="text-[11px] font-mono text-[#F5F7FA] font-medium">{tempReading.toFixed(1)}°C Airflow</div>
          </div>

          <div className="p-2.5 rounded-[8px] border border-[#232730] bg-[#12151A] text-center">
            <div className="flex justify-center mb-1">
              <Gauge className="w-5 h-5 text-[#7C5CFC]" />
            </div>
            <div className="text-[9px] font-mono text-[#6F7682]">System Pressure</div>
            <div className="text-[11px] font-mono text-[#4ADE80] font-medium">Optimal 120 PSI</div>
          </div>

          <div className="p-2.5 rounded-[8px] border border-[#232730] bg-[#12151A] text-center">
            <div className="flex justify-center mb-1">
              <Zap className="w-5 h-5 text-[#FBBF24]" />
            </div>
            <div className="text-[9px] font-mono text-[#6F7682]">Maintenance</div>
            <div className="text-[11px] font-mono text-[#A996FF] font-medium">AMC Active</div>
          </div>
        </div>

        {/* Bottom stats ticker */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#6F7682] pt-2 border-t border-[#191C22]">
          <span>FRAMER MOTION ROUTING</span>
          <span className="text-[#A7ADB7]">VRF / DUCTABLE / CASSETTE</span>
          <span className="text-[#4ADE80]">DIRECT ENQUIRY API</span>
        </div>
      </div>
    );
  }

  // 4. MahaBuild Engineers (Civil Construction & Budget Management)
  return (
    <div className="relative w-full h-full bg-[#08090B] flex flex-col justify-between p-4 overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_65%)] pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A7ADB7] border-b border-[#191C22] pb-2">
        <div className="flex items-center gap-1.5 text-[#F5F7FA]">
          <Home className="w-3.5 h-3.5 text-[#FBBF24]" />
          <span>MAHABUILD CIVIL 3D PLATFORM</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#4ADE80]">ENGINEER-LED</span>
          <span className="text-[#6F7682]">|</span>
          <span className="text-[#7C5CFC]">₹15L – ₹75L HOMES</span>
        </div>
      </div>

      {/* Structural Wireframe & Process Pipeline */}
      <div className="relative z-10 my-auto space-y-2">
        <div className="p-2.5 rounded-[8px] border border-[#232730] bg-[#12151A] flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold text-[#F5F7FA] block">Waluj 2BHK Turnkey Residence</span>
            <span className="text-[9px] font-mono text-[#A7ADB7]">1,450 sq ft • Foundation to RCC Roof Slab</span>
          </div>
          <span className="text-[10px] font-mono text-[#FBBF24] bg-[#FBBF24]/10 border border-[#FBBF24]/30 px-2 py-0.5 rounded">
            Stage 4 of 5
          </span>
        </div>

        {/* 5-Stage Protocol Indicator */}
        <div className="grid grid-cols-5 gap-1 text-center">
          {['Site Visit', 'Budgeting', 'Planning', 'RCC Slab', 'Handover'].map((stage, idx) => (
            <div
              key={stage}
              className={`p-1 rounded-[4px] border text-[8px] font-mono ${
                idx <= 3
                  ? 'border-[#7C5CFC] bg-[#7C5CFC]/20 text-[#FFFFFF]'
                  : 'border-[#232730] bg-[#0D0F12] text-[#6F7682]'
              }`}
            >
              {stage}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stats ticker */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#6F7682] pt-2 border-t border-[#191C22]">
        <span className="text-[#4ADE80]">THREE.JS 3D SHOWCASE</span>
        <span className="text-[#A7ADB7]">TRANSPARENT COSTING</span>
        <span className="text-[#7C5CFC]">WHATSAPP CONSULTATION</span>
      </div>
    </div>
  );
};
