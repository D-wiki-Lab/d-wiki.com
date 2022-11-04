<template>
  <div class="LayoutWiki">
    <NavHeader :isLogin="false" />

    <div class="LayoutWiki-section">
      <div class="LayoutWiki-container">
        <div class="LayoutWiki-first">
          <NavAside :toc="toc" />
        </div>
        <div class="LayoutWiki-second">
          <slot />
        </div>
        <div class="LayoutWiki-third" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Toc from '~/models/toc';

const toc: Toc[] = [
  new Toc('about', 'About'),
  new Toc('mint-info', 'Mint Info'),
  new Toc('team', 'Team'),
  new Toc('roadmap', 'Roadmap'),
  new Toc('utility', 'Utility'),
  new Toc('other', 'Other'),
  new Toc('links', 'Links'),
];
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
