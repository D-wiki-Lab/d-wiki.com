import { defineStore } from 'pinia';
import Web3 from 'web3';

import Image from '~/models/image';
import User from '~/models/user';
import { User as UserType } from '~/types/user';
import metamask from '~/utils/metamask';

type UserStore = UserType & {};

export const useMeStore = defineStore('me', {
  state: (): UserStore => ({
    id: '',
    name: '',
    profileImage: {
      src: '',
      alt: '',
    },
  }),
  getters: {
    isVerified(): boolean {
      return !!this.id;
    },
  },
  actions: {
    init() {
      this.id = '';
      this.name = '';
      this.profileImage = {
        src: '',
        alt: '',
      };
    },
    async getMe(id: string): Promise<UserType | undefined> {
      return new User(
        'official',
        'D-wiki',
        new Image(
          '/user/official/profile-image.jpg',
          'official\'s Profile Image',
        ),
      );
    },
    register(id: string) {},
    login(me: UserType) {
      this.id = me.id;
      this.name = me.name;
      this.profileImage = me.profileImage;
    },
    async walletIsVerified(): Promise<string | undefined> {
      // @ts-ignore
      // Todo: fix index.d.ts
      const runtimeConfig = this.config;

      const provider = metamask.getProvider();
      const web3 = new Web3(provider);

      const [address] = await web3.eth.requestAccounts();

      const message = runtimeConfig.public.web3Message;
      const password = runtimeConfig.public.web3Password;

      const signature = await web3.eth.personal.sign(
        message,
        address,
        password
      );

      const { data, error } = await useFetch<{ isVerified: boolean; }>(
        '/api/metamask/verify',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ message, address, signature }),
        });

      if (error.value) {
        throw error;
      }

      if (!data.value?.isVerified) {
        throw new Error('Signature isn\'t verified');
      }
      return address;
    },
  },
});
