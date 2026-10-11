import React from 'react';
import { Project } from '../data/portfolioData';
import { ProjectDossier } from './projects/ProjectDossier';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return <ProjectDossier project={project} onClose={onClose} />;
};

export default ProjectModal;
