<template>
  <div class="LayoutWiki">
    <NavHeader
      :isLogin="meStore.isVerified"
      @login="loginHandler"
    />

    <div class="LayoutWiki-section">
      <div class="LayoutWiki-container">
        <div class="LayoutWiki-first">
          <ClientOnly>
            <NavAside :toc="toc || []" />
          </ClientOnly>
        </div>
        <div class="LayoutWiki-second">
          <slot />
        </div>
        <div class="LayoutWiki-third" />
      </div>
    </div>

    <NavFooter />
  </div>
</template>

<script lang="ts" setup>
import { useMeStore } from '~/stores/me';
import { User } from '~/types/user';
import {useProjectStore} from "~/stores/project";

const meStore = useMeStore();
const projectStore = useProjectStore();

const toc = computed(() => projectStore.projectToc);

const loginHandler = async () => {
  const id = await meStore.walletIsVerified();
  if (!id) {
    throw new Error('Id don\'t find');
  }

  const meCookie = useCookie<User>('me');
  const me = await meStore.getMe(id);
  if (me) {
    meCookie.value = me;
    meStore.login(me);
  } else {
    meStore.register(id);
  }
};
</script>

<style lang="scss" scoped>
.LayoutWiki {
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
    @include box-pd(64px, 20px, 40px, 20px);

    > #{$root}-container {
      @include flex(center, flex-start);
      @include box(100%);

      gap: 20px;
      max-width: 1400px;

      > #{$root}-first,
      > #{$root}-third {
        flex: 1;
        max-width: 260px;
      }

      > #{$root}-second {
        flex: 4;
      }

      > #{$root}-first {
        position: sticky;
        top: 80px;
        left: 0;
      }
    }
  }
}
</style>
