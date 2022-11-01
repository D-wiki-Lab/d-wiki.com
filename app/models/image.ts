import { Image as ImageType, ImageFitType, ImageLoadingType, ImageSource } from '~/types/image';

type ImageClass = ImageType & {};

export default class Image implements ImageClass {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sources?: ImageSource[];
  fit?: ImageFitType;
  loading?: ImageLoadingType;

  constructor(
    src: string,
    alt: string,
    width?: number,
    height?: number,
    sources?: ImageSource[],
    fit?: ImageFitType,
    loading?: ImageLoadingType
  ) {
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.sources = sources;
    this.fit = fit;
    this.loading = loading;
  }
}
