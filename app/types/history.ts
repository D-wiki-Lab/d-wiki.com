import { User } from './user';
import { ProjectContent, ProjectLink } from './project';

export type History = {
  id: string;
  userId: string;
  user: User;
  projectId: string;
  contents: ProjectContent[];
  links: ProjectLink[];
  createdAt: number;
};

