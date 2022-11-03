import { History } from './history';
import { Image } from './image';
import { Link } from './link';

export type ProjectContent = {
  id: string;
  title: string;
  body: string;
  order: number;
};

export type ProjectLink = Omit<Link, 'target'> & {
  order: number;
};

export type Project = {
  id: string;
  name: string;
  thumbnail: Image;
  meta: {
    startedAt: number;
  }
  body: {
    contents: ProjectContent[];
    links: ProjectLink[];
  }
  history: History[];
};
