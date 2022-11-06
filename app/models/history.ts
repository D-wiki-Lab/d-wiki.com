import { History as HistoryType } from '~/types/history';
import { ProjectContent, ProjectLink } from '~/types/project';
import { User } from '~/types/user';

type HistoryClass = HistoryType & {};

export default class History implements HistoryClass {
  id: string;
  userId: string;
  user: User;
  projectId: string;
  contents: ProjectContent[];
  links: ProjectLink[];
  createdAt: number;

  constructor(
    id: string,
    userId: string,
    user: User,
    projectId: string,
    contents: ProjectContent[] | undefined,
    links: ProjectLink[] | undefined,
    createdAt: number,
  ) {
    this.id = id;
    this.userId = userId;
    this.user = user;
    this.projectId = projectId;
    this.contents = contents || [];
    this.links = links || [];
    this.createdAt = createdAt;
  }
}
