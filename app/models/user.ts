import { Image } from '~/types/image';
import { User as UserType, UserPublic } from '~/types/user';
import { Wallet } from '~/types/wallet';

type UserClass = UserType & {
  public: UserPublic;
};

export default class User implements UserClass {
  id: string;
  name: string;
  wallet: Wallet[];
  profileImage?: Omit<Image, 'width' | 'height'>;

  constructor(
    id: string,
    name: string,
    wallet?: Wallet[],
    profileImage?: Omit<Image, 'width' | 'height'>
  ) {
    this.id = id;
    this.name = name;
    this.wallet = wallet || [];
    this.profileImage = profileImage;
  }

  get public(): UserPublic {
    const user: Partial<UserType> = {...this};
    delete user.wallet;

    return user as UserPublic;
  }
}
