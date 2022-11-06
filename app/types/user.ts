import { Image } from './image';

export type User = {
  id: string;
  name: string;
  profileImage: Omit<Image, 'width' | 'height'>;
};
