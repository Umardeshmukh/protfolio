import { Project } from '../../data/portfolioData';

export interface EvidenceNote {
  id: string;
  projectId: string;
  title: string;
  codeName: string;
  content: string;
  stamp: string;
  tags: string[];
  rotation: number; // degrees
  // Default desktop position percentages (0 - 100)
  defaultX: number;
  defaultY: number;
  colorTheme?: 'cream' | 'kraft' | 'blueprint';
}

export interface ConnectionLink {
  id: string;
  fromId: string;
  toId: string;
  fromType: 'project' | 'note';
  toType: 'project' | 'note';
  label?: string;
  color?: string; // default red #D85B68 or custom
}

export type ConnectionMode = 'all' | 'focused' | 'simplified';

export interface BoardPosition {
  x: number;
  y: number;
}
