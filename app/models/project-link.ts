import { ProjectLink as ProjectLinkType } from '~/types/project';

type ProjectLinkClass = ProjectLinkType & {};

export default class ProjectLink implements ProjectLinkClass {
  text: string;
  href: string;
  order: number;
  title?: string;

  constructor(
    text: string,
    href: string,
    order?: number,
    title?: string,
  ) {
    this.text = text;
    this.href = href;
    this.order = order || 0;
    this.title = title;
  }
}
