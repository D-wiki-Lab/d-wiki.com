export const ImageMediaType = {
  apng: 'image/apng',
  avif: 'image/avif',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  webp: 'image/webp',
} as const;
export type ImageMediaType = typeof ImageMediaType[keyof typeof ImageMediaType];

export const ImageLoadingType = {
  lazy: 'lazy',
  eager: 'eager',
  auto: 'auto',
} as const;
export type ImageLoadingType = typeof ImageLoadingType[keyof typeof ImageLoadingType];

export const ImageFitType = {
  initial: 'initial',
  cover: 'cover',
  contain: 'contain',
  fill: 'fill',
} as const;
export type ImageFitType = typeof ImageFitType[keyof typeof ImageFitType];

export type ImageSource = {
  srcset: string;
  media?: string;
  type?: ImageMediaType;
};

export type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sources?: ImageSource[];
  fit?: ImageFitType;
  loading?: ImageLoadingType;
};
