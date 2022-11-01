import { Image } from './image';
import { Link } from './link';

export type ProjectContent = {
  id: string;
  title: string;
  body: string;
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
    links: Omit<Link, 'target'>[];
  }
};
