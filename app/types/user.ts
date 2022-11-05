import { Image } from './image';
import { Wallet } from './wallet';

export type User = {
  id: string;
  name: string;
  wallet: Wallet[];
  profileImage: Omit<Image, 'width' | 'height'>;
};

export type UserPublic = Omit<User, 'wallet'>;
