import Image from './image';
import { Image as ImageType, ImageFitType, ImageLoadingType } from '~/types/image';
import { User as UserType } from '~/types/user';

type UserClass = UserType & {};

export default class User implements UserClass {
  id: string;
  name: string;
  profileImage: Omit<ImageType, 'width' | 'height'>;

  constructor(
    id: string,
    name: string,
    profileImage?: Omit<ImageType, 'width' | 'height'>
  ) {
    this.id = id;
    this.name = name;

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
}
