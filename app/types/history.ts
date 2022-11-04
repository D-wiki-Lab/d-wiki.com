import { ProjectContent, ProjectLink } from './project';

export type History = {
  id: string;
  userId: string;
  projectId: string;
  contents: ProjectContent[];
  links: ProjectLink[];
  createdAt: number;
};

