import { PORTFOLIO_DATA, Project } from './portfolioData';
import { EvidenceNote, ConnectionLink } from '../components/projects/types';

export const RESEARCH_NOTES: EvidenceNote[] = [
  {
    id: 'note-mahaposhan',
    projectId: 'mahaposhan-register',
    codeName: 'EXHIBIT 01-A',
    title: 'Mid-Day Meal Scheme',
    content:
      'Digital solution to maintain the mid day meal scheme of gov. of maharashtra in schools.',
    stamp: 'GOVT. SCHEME',
    tags: ['Accurate', 'Easy to Use', 'Bilingual Support'],
    rotation: -2.5,
    defaultX: 2,
    defaultY: 28,
    colorTheme: 'cream',
  },
  {
    id: 'note-propsetu',
    projectId: 'propsetu-real-estate',
    codeName: 'EXHIBIT 02-B',
    title: 'Aurangabad Properties',
    content:
      'Only for the people of Aurangabad , a free solution to list properties.',
    stamp: 'FREE SOLUTION',
    tags: ['Aurangabad', 'Free Listings', 'Direct Connect'],
    rotation: 3.2,
    defaultX: 82,
    defaultY: 8,
    colorTheme: 'cream',
  },
  {
    id: 'note-chandrama',
    projectId: 'chandrama-hvac',
    codeName: 'EXHIBIT 03-C',
    title: 'Commercial AC Agency',
    content:
      'Unfinished project of a commercial Air conditioning agency.',
    stamp: 'UNFINISHED',
    tags: ['Commercial AC', 'Agency Client', 'In Progress'],
    rotation: 2.1,
    defaultX: 3,
    defaultY: 80,
    colorTheme: 'kraft',
  },
  {
    id: 'note-mahabuild',
    projectId: 'mahabuild-engineers',
    codeName: 'EXHIBIT 04-D',
    title: 'Construction Site',
    content:
      'A website for developers to show their projects and generate leads.',
    stamp: 'LEAD ENGINE',
    tags: ['Developers', 'Show Projects', 'Generate Leads'],
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
    label: 'Govt. MDM Scheme Ledger',
    color: '#D85B68',
  },
  {
    id: 'conn-2',
    fromId: 'propsetu-real-estate',
    toId: 'note-propsetu',
    fromType: 'project',
    toType: 'note',
    label: 'Aurangabad Free Listings',
    color: '#D85B68',
  },
  {
    id: 'conn-3',
    fromId: 'chandrama-hvac',
    toId: 'note-chandrama',
    fromType: 'project',
    toType: 'note',
    label: 'Commercial AC Agency',
    color: '#D85B68',
  },
  {
    id: 'conn-4',
    fromId: 'mahabuild-engineers',
    toId: 'note-mahabuild',
    fromType: 'project',
    toType: 'note',
    label: 'Developer Leads Engine',
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
