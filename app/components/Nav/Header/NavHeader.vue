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
        <NuxtLink
          v-else
          to="/add-wallet/"
          class="NavHeader-wallet -is-yet"
        >
          CONNECT WALLET
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
interface Props {
  isLogin: boolean,
}

const props = defineProps<Props>();
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
