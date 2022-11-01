import { Project as ProjectType, ProjectContent } from '~/types/project';
import { History } from '~/types/history';
import { Image } from '~/types/image';
import { Link } from '~/types/link';

type ProjectClass = ProjectType & {};

export default class Project implements ProjectClass {
  id: string;
  name: string;
  thumbnail: Image;
  meta: {
    startedAt: number;
  }
  body: {
    contents: ProjectContent[];
    links: Omit<Link, 'target'>[];
  }
  history: History[];

  constructor(
    id: string,
    name: string,
    thumbnail: Image,
    startedAt: number,
    contents?: ProjectContent[],
    links?: Omit<Link, 'target'>[],
    history?: History[],
  ) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.meta = {startedAt};
    this.body = {
      contents: contents || [],
      links: links || [],
    };
    this.history = history || [];
  }
}
