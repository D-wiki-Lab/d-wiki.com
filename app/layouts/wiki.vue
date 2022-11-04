<template>
  <div class="LayoutWiki">
    <NavHeader :isLogin="false" />

    <div class="LayoutWiki-section">
      <div class="LayoutWiki-container">
        <div class="LayoutWiki-first">
        </div>
        <div class="LayoutWiki-second">
          <slot />
        </div>
        <div class="LayoutWiki-third" />
      </div>
    </div>
  </div>
</template>

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
    @include box-pd(64px, 20px, null, 20px);

    > #{$root}-container {
      @include flex(center);
      @include box(100%);

      gap: 20px;
      max-width: 1400px;

      > #{$root}-first,
      > #{$root}-third {
        flex: 1;
        max-width: 260px;
      }

      > #{$root}-second {
        flex: 2;
      }
    }
  }
}
</style>
