<template>
  <header class="NavHeader">
    <div class="NavHeader-container">
      <div class="NavHeader-first">
        <NuxtLink to="/" class="NavHeader-logo">
          <IconLogo :width="117" :height="24" />
        </NuxtLink>
      </div>
      <div class="NavHeader-second">
        <NuxtLink
          v-if="isLogin"
          to="/me/"
          class="NavHeader-wallet -is-me"
        >
          <IconUser :width="32" :height="32" />
        </NuxtLink>
        <button
          v-else
          class="NavHeader-wallet -is-yet"
          @click="connectWalletHandler"
        >
          CONNECT WALLET
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Web3 from 'web3';

import metamask from '~/utils/metamask';

interface Props {
  isLogin: boolean,
}

const props = defineProps<Props>();

const runtimeConfig = useRuntimeConfig()

const connectWalletHandler = async () => {
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

  console.log(data)
};
</script>

<style lang="scss" scoped>
.NavHeader {
  $root: &;

  @include flex(null, center);
  @include box-pd(4px, 20px, 4px, 20px);
  @include bg(hsla(0, 0%, 100%, .56));

  backdrop-filter: blur(4px);

  > &-container {
    @include flex(null, center);
    @include box(100%);

    > #{$root}-first,
    > #{$root}-second {
      flex: 1;
    }

    > #{$root}-first {
      @include flex(null, center);

      > #{$root}-logo {
        @include box-pd(12px, 20px, 12px, 20px);

        > .IconLogo {
          @include box(117px, 24px);
        }
      }
    }

    > #{$root}-second {
      @include flex(flex-end, center);

      > #{$root}-wallet {
        &.-is-me {
          @include box-pd(12px, 16px, 12px, 16px);

          > .IconUser {
            @include box(32px, 32px);
          }
        }

        &.-is-yet {
          @include box-pd(12px, 20px, 12px, 20px);
          @include font(null, 700);
        }
      }
    }
  }
}
</style>
