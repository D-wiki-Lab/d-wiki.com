import Image from './image';
import {Image as ImageType, ImageFitType, ImageLoadingType} from '~/types/image';
import { User as UserType, UserPublic } from '~/types/user';
import { Wallet } from '~/types/wallet';

type UserClass = UserType & {
  public: UserPublic;
};

export default class User implements UserClass {
  id: string;
  name: string;
  wallet: Wallet[];
  profileImage: Omit<ImageType, 'width' | 'height'>;

  constructor(
    id: string,
    name: string,
    wallet?: Wallet[],
    profileImage?: Omit<ImageType, 'width' | 'height'>
  ) {
    this.id = id;
    this.name = name;
    this.wallet = wallet || [];

    if (profileImage) {
      this.profileImage = profileImage;
    } else {
      const _profileImage = new Image(
        '/user/official/profile-image.jpg',
        'official\'s Profile Image',
        undefined,
        undefined,
        undefined,
        ImageFitType.cover,
        ImageLoadingType.lazy,
      );
      delete _profileImage.width;
      delete _profileImage.height;

      this.profileImage = _profileImage;
    }
  }

  get public(): UserPublic {
    const user: Partial<UserType> = {...this};
    delete user.wallet;

    return user as UserPublic;
  }
}
