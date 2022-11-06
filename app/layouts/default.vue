<template>
  <div class="LayoutDefault">
    <NavHeader
      :isLogin="meStore.isVerified"
      @login="loginHandler"
    />

    <div class="LayoutDefault-section">
      <div class="LayoutDefault-container">
        <slot />
      </div>
    </div>

    <NavFooter />
  </div>
</template>

<script lang="ts" setup>
import { useMeStore } from '~/stores/me';

const meStore = useMeStore();

const loginHandler = async () => {
  const id = await meStore.walletIsVerified();
  if (!id) {
    throw new Error('Id don\'t find');
  }

  const me = await meStore.getMe(id);
  if (me) {
    meStore.login(me);
  } else {
    meStore.register(id);
  }
};
</script>

<style lang="scss" scoped>
.LayoutDefault {
  $root: &;

  @include box-pd(64px);

  > .NavHeader {
    @include box(null, 64px);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 7000;
  }

  > &-section {
    @include flex(center);
    @include box-pd(null, 20px, 40px, 20px);

    > #{$root}-container {
      @include box(100%);

      max-width: 880px;
    }
  }
}
</style>
