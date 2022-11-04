<template>
  <div class="LayoutDefault">
    <NavHeader :isLogin="false" />

    <slot />
  </div>
</template>

<style lang="scss" scoped>
.LayoutDefault {
  @include box-pd(64px);

  > .NavHeader {
    @include box(null, 64px);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 7000;
  }
}
</style>
