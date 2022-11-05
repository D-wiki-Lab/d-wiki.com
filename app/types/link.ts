export const LinkTargetType = {
  self: '_self',
  blank: '_blank',
} as const;
export type LinkTargetType = typeof LinkTargetType[keyof typeof LinkTargetType];

export type Link = {
  text: string;
  href: string;
  title?: string;
  target?: LinkTargetType;
};
