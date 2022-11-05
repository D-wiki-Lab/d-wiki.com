import { UserPublic } from './user';
import { ProjectContent, ProjectLink } from './project';

export type History = {
  id: string;
  userId: string;
  user: UserPublic;
  projectId: string;
  contents: ProjectContent[];
  links: ProjectLink[];
  createdAt: number;
};

