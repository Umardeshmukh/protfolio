import { PORTFOLIO_DATA, Project } from './portfolioData';
import { EvidenceNote, ConnectionLink } from '../components/projects/types';

export const RESEARCH_NOTES: EvidenceNote[] = [
  {
    id: 'note-mahaposhan',
    projectId: 'mahaposhan-register',
    codeName: 'EXHIBIT 01-A',
    title: 'Offline Cache Protocol',
    content:
      'Zero-loss LocalStorage buffer. Generates certified Maharashtra Schedule-II Part-2 PDF/XLSX ledgers in <1.2s without rural network drops.',
    stamp: 'VERIFIED EXHIBIT',
    tags: ['Offline PWA', 'jsPDF', 'State Sync'],
    rotation: -2.5,
    defaultX: 2,
    defaultY: 28,
    colorTheme: 'cream',
  },
  {
    id: 'note-propsetu',
    projectId: 'propsetu-real-estate',
    codeName: 'EXHIBIT 02-B',
    title: '3-Point Property Passport',
    content:
      'Eliminates middleman brokerage via geospatial Leaflet boundary indexing, direct owner handshake, and real-time URL state preservation.',
    stamp: 'ARCHITECTURAL PROOF',
    tags: ['Geospatial', 'Leaflet', 'Direct Owner'],
    rotation: 3.2,
    defaultX: 82,
    defaultY: 8,
    colorTheme: 'cream',
  },
  {
    id: 'note-chandrama',
    projectId: 'chandrama-hvac',
    codeName: 'EXHIBIT 03-C',
    title: 'Heat-Load Telemetry Solver',
    content:
      'Deterministic 25 BTU/sq.ft thermodynamic solver factoring solar orientation and headcount to dynamically size VRF multi-splits.',
    stamp: 'FIELD TELEMETRY',
    tags: ['Thermodynamics', 'Framer Motion', 'HVAC'],
    rotation: 2.1,
    defaultX: 3,
    defaultY: 80,
    colorTheme: 'kraft',
  },
  {
    id: 'note-mahabuild',
    projectId: 'mahabuild-engineers',
    codeName: 'EXHIBIT 04-D',
    title: '5-Stage Quality Protocol',
    content:
      'Transparent turnkey cost breakdown from excavation to final painting. Features Three.js 3D models and instant NRI consultation funnels.',
    stamp: 'CONFIDENTIAL',
    tags: ['Three.js', 'Civil Tech', 'Lead Engine'],
    rotation: -3.5,
    defaultX: 83,
    defaultY: 65,
    colorTheme: 'cream',
  },
];

export const BOARD_CONNECTIONS: ConnectionLink[] = [
  // Primary evidence attachments
  {
    id: 'conn-1',
    fromId: 'mahaposhan-register',
    toId: 'note-mahaposhan',
    fromType: 'project',
    toType: 'note',
    label: 'State Ledger Sync',
    color: '#D85B68',
  },
  {
    id: 'conn-2',
    fromId: 'propsetu-real-estate',
    toId: 'note-propsetu',
    fromType: 'project',
    toType: 'note',
    label: 'Verified Passport',
    color: '#D85B68',
  },
  {
    id: 'conn-3',
    fromId: 'chandrama-hvac',
    toId: 'note-chandrama',
    fromType: 'project',
    toType: 'note',
    label: 'Telemetry Engine',
    color: '#D85B68',
  },
  {
    id: 'conn-4',
    fromId: 'mahabuild-engineers',
    toId: 'note-mahabuild',
    fromType: 'project',
    toType: 'note',
    label: 'Quality Protocol',
    color: '#D85B68',
  },
  // Cross-project investigative threads
  {
    id: 'conn-cross-1',
    fromId: 'mahaposhan-register',
    toId: 'propsetu-real-estate',
    fromType: 'project',
    toType: 'project',
    label: 'Offline & Geospatial Architecture',
    color: '#C53030',
  },
  {
    id: 'conn-cross-2',
    fromId: 'propsetu-real-estate',
    toId: 'mahabuild-engineers',
    fromType: 'project',
    toType: 'project',
    label: 'Real Estate & Civil Tech Synergy',
    color: '#D85B68',
  },
  {
    id: 'conn-cross-3',
    fromId: 'chandrama-hvac',
    toId: 'mahabuild-engineers',
    fromType: 'project',
    toType: 'project',
    label: 'Commercial MEP & Structural Systems',
    color: '#C53030',
  },
];

// Default responsive coordinates (percentage of board width & height)
export const DEFAULT_PROJECT_POSITIONS: Record<string, { x: number; y: number; width?: string; isAnchor?: boolean }> = {
  'mahaposhan-register': {
    x: 18,
    y: 4,
    isAnchor: true, // Primary anchor case file
  },
  'propsetu-real-estate': {
    x: 52,
    y: 2,
    isAnchor: false,
  },
  'chandrama-hvac': {
    x: 17,
    y: 53,
    isAnchor: false,
  },
  'mahabuild-engineers': {
    x: 51,
    y: 51,
    isAnchor: true,
  },
};

export { PORTFOLIO_DATA };
export type { Project };
