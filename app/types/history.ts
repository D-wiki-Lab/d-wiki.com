import { RequireAtLeastOne } from './utils/requireAtLeastOne';
import { Link } from './link';

export type History = RequireAtLeastOne<{
  id: string;
  projectId: string;
  contentId: string;
  userId: string;
  content?: {
    title: string;
    body: string;
  }
  link?: Omit<Link, 'target'>;
  createdAt: number;
}, 'content' | 'link'>;
