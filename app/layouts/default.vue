<template>
  <div class="LayoutDefault">
    <NavHeader :isLogin="false" />

    <div class="LayoutDefault-section">
      <div class="LayoutDefault-container">
        <slot />
      </div>
    </div>

    <NavFooter />
  </div>
</template>

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
    @include box-pd(64px, 20px, 40px, 20px);

    > #{$root}-container {
      @include box(100%);

      max-width: 1400px;
    }
  }
}
</style>
