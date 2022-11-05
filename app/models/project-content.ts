import { ProjectContent as ProjectContentType } from '~/types/project';

type ProjectContentClass = ProjectContentType & {};

export default class ProjectContent implements ProjectContentClass {
  id: string;
  title: string;
  body: string;
  order: number;

  constructor(
    id: string,
    title: string,
    body: string,
    order?: number,
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.order = order || 0;
  }
}
