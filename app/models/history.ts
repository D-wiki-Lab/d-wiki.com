import { History as HistoryType } from '~/types/history';
import {ProjectContent, ProjectLink} from "~/types/project";

type HistoryClass = HistoryType & {};

export default class History implements HistoryClass {
  id: string;
  userId: string;
  projectId: string;
  contents: ProjectContent[];
  links: ProjectLink[];
  createdAt: number;

  constructor(
    id: string,
    userId: string,
    projectId: string,
    contents: ProjectContent[] | undefined,
    links: ProjectLink[] | undefined,
    createdAt: number,
  ) {
    this.id = id;
    this.userId = userId;
    this.projectId = projectId;
    this.contents = contents || [];
    this.links = links || [];
    this.createdAt = createdAt;
  }
}
