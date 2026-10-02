import React, { useEffect, useRef, useState } from 'react';
import { Activity, RefreshCw, Cpu, ShieldCheck } from 'lucide-react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  isLeader?: boolean;
  pulse: number;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export const InteractiveMeshCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [topology, setTopology] = useState<'mesh' | 'cluster' | 'ring'>('mesh');
  const [lastPing, setLastPing] = useState<string>('1.8ms');
  const [packetCount, setPacketCount] = useState<number>(42);
  const [activeNodesCount, setActiveNodesCount] = useState<number>(8);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const nodeCount = 8;
    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const initNodes = () => {
      nodes = [];
      packets = [];
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < nodeCount; i++) {
        let x = 0;
        let y = 0;

        if (topology === 'ring') {
          const angle = (i / nodeCount) * Math.PI * 2;
          const r = Math.min(width, height) * 0.35;
          x = centerX + Math.cos(angle) * r;
          y = centerY + Math.sin(angle) * r;
        } else if (topology === 'cluster') {
          if (i === 0) {
            x = centerX;
            y = centerY;
          } else {
            const angle = ((i - 1) / (nodeCount - 1)) * Math.PI * 2;
            const r = Math.min(width, height) * 0.36;
            x = centerX + Math.cos(angle) * r;
            y = centerY + Math.sin(angle) * r;
          }
        } else {
          // mesh layout with gentle randomized distributed placement
          const margin = 50;
          x = margin + Math.random() * (width - margin * 2);
          y = margin + Math.random() * (height - margin * 2);
        }

        nodes.push({
          id: i,
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: i === 0 ? 7 : 5,
          label: i === 0 ? 'Leader:0' : `Node:${i}`,
          isLeader: i === 0,
          pulse: Math.random() * Math.PI * 2,
        });
      }
      setActiveNodesCount(nodes.length);
    };

    initNodes();

    // Spawn packets periodically
    const packetInterval = setInterval(() => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) {
        to = Math.floor(Math.random() * nodes.length);
      }
      packets.push({
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: 0.015 + Math.random() * 0.01,
      });
      setPacketCount((prev) => prev + 1);
    }, 700);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid inside canvas
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const step = 32;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update node physics
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.pulse += 0.03;

        // Gentle floating
        if (topology === 'mesh') {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 40 || node.x > width - 40) node.vx *= -1;
          if (node.y < 40 || node.y > height - 40) node.vy *= -1;
        }

        // Mouse interaction (subtle repulsion)
        if (mouseRef.current.active) {
          const dx = node.x - mouseRef.current.x;
          const dy = node.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && dist > 1) {
            const force = (100 - dist) / 100;
            node.x += (dx / dist) * force * 1.5;
            node.y += (dy / dist) * force * 1.5;
          }
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = topology === 'mesh' ? 220 : 280;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 92, 252, ${alpha})`;
            ctx.lineWidth = a.isLeader || b.isLeader ? 1.5 : 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw and update packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const from = nodes[pkt.fromNode];
        const to = nodes[pkt.toNode];
        if (!from || !to) continue;

        const curX = from.x + (to.x - from.x) * pkt.progress;
        const curY = from.y + (to.y - from.y) * pkt.progress;

        // Packet glow
        ctx.beginPath();
        ctx.arc(curX, curY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#9278FF';
        ctx.shadowColor = '#7C5CFC';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulseScale = 1 + Math.sin(node.pulse) * 0.15;

        // Outer halo
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseScale * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = node.isLeader ? 'rgba(124, 92, 252, 0.15)' : 'rgba(124, 92, 252, 0.08)';
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isLeader ? '#9278FF' : '#7C5CFC';
        ctx.fill();
        ctx.strokeStyle = '#F5F7FA';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node label
        ctx.font = '10px monospace';
        ctx.fillStyle = '#A7ADB7';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.radius + 14);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(packetInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [topology]);

  const triggerPing = () => {
    const latencies = ['1.2ms', '0.9ms', '1.6ms', '2.1ms', '1.4ms'];
    const selected = latencies[Math.floor(Math.random() * latencies.length)];
    setLastPing(selected);
  };

  return (
    <div className="relative w-full rounded-[16px] border border-[#232730] bg-[#0D0F12] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Visual Header / Telemetry Bar */}
      <div className="flex items-center justify-between border-b border-[#191C22] pb-3 mb-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[#F5F7FA]">
            <Activity className="w-3.5 h-3.5 text-[#7C5CFC]" />
            <span>Interactive Client & Service Mesh</span>
          </div>
          <span className="text-[#6F7682]">·</span>
          <span className="font-mono text-[#4ADE80]">Sync 100%</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTopology(topology === 'mesh' ? 'cluster' : topology === 'cluster' ? 'ring' : 'mesh')}
            className="flex items-center gap-1 px-2 py-1 rounded-[6px] bg-[#12151A] border border-[#232730] text-[#A7ADB7] hover:text-[#F5F7FA] hover:border-[#303540] transition-colors"
            title="Cycle topology mode"
          >
            <Cpu className="w-3 h-3 text-[#7C5CFC]" />
            <span className="capitalize">{topology}</span>
          </button>

          <button
            onClick={triggerPing}
            className="flex items-center gap-1 px-2 py-1 rounded-[6px] bg-[#12151A] border border-[#232730] text-[#A7ADB7] hover:text-[#F5F7FA] hover:border-[#303540] transition-colors"
            title="Ping cluster"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Ping</span>
          </button>
        </div>
      </div>

      {/* Main Canvas */}
      <div
        className="relative h-[320px] w-full cursor-crosshair rounded-[10px] bg-[#08090B]/60"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
          };
        }}
        onMouseLeave={() => {
          mouseRef.current.active = false;
        }}
        onClick={triggerPing}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Floating telemetry pills inside visual */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[11px] font-mono text-[#A7ADB7] pointer-events-none">
          <span className="px-2 py-1 rounded-[6px] bg-[#0D0F12]/80 border border-[#232730] backdrop-blur-sm">
            Active: <span className="text-[#F5F7FA]">{activeNodesCount}</span> services
          </span>
          <span className="px-2 py-1 rounded-[6px] bg-[#0D0F12]/80 border border-[#232730] backdrop-blur-sm">
            API Sync: <span className="text-[#7C5CFC]">{lastPing}</span>
          </span>
        </div>

        <div className="absolute top-3 right-3 text-[11px] font-mono text-[#6F7682] pointer-events-none flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" />
          <span>Client State Synchronized</span>
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="mt-3 pt-3 border-t border-[#191C22] grid grid-cols-3 gap-2 text-center text-xs">
        <div>
          <div className="text-[11px] text-[#6F7682]">Event Stream</div>
          <div className="font-mono text-[#F5F7FA] font-medium mt-0.5">REST & Sockets</div>
        </div>
        <div>
          <div className="text-[11px] text-[#6F7682]">Render Budget</div>
          <div className="font-mono text-[#F5F7FA] font-medium mt-0.5">60 FPS Smooth</div>
        </div>
        <div>
          <div className="text-[11px] text-[#6F7682]">Dispatched Events</div>
          <div className="font-mono text-[#7C5CFC] font-medium mt-0.5">{packetCount}</div>
        </div>
      </div>
    </div>
  );
};
