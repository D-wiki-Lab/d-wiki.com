import { HistoryTmp as HistoryType } from '~/types/history';
import { Link } from '~/types/link';

type HistoryClass = HistoryType & {};

export default class History implements HistoryClass {
  id: string;
  userId: string;
  projectId: string;
  contentId: string;
  content?: {
    title: string;
    body: string;
  }
  link?: Omit<Link, 'target'>;
  createdAt: number;

  constructor(
    to: 'content' | 'link',
    id: string,
    userId: string,
    projectId: string,
    contentId: string,
    body: { title: string; body: string; } | Omit<Link, 'target'>,
    createdAt: number,
  ) {
    this.id = id;
    this.userId = userId;
    this.projectId = projectId;
    this.contentId = contentId;
    // @ts-ignore
    // Todo: fix type
    this[to] = body;
    this.createdAt = createdAt;
  }
}
