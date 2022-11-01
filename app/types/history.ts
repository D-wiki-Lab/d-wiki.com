import { RequireAtLeastOne } from './utils/requireAtLeastOne';
import { Link } from './link';

export type HistoryTmp = {
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
};

export type History = RequireAtLeastOne<HistoryTmp, 'content' | 'link'>;
