import { Link as LinkType, LinkTargetType } from '~/types/link';

type LinkClass = LinkType & {};

export default class Link implements LinkClass {
  text: string;
  href: string;
  title?: string;
  target?: LinkTargetType;

  constructor(text: string, href: string, title?: string, target?: LinkTargetType) {
    this.text = text;
    this.href = href;
    this.title = title;
    this.target = target;
  }
}
