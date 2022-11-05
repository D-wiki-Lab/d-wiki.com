<template>
  <footer class="NavFooter">
    <div class="NavFooter-container">
      <div class="NavFooter-first">
        <p class="NavFooter-copyright">
          ©2022 D-wiki
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.NavFooter {
  $root: &;

  @include flex(null, center);
  @include box-pd(40px, 20px, 24px, 20px);

  > &-container {
    @include flex(null, center);
    @include box(100%);

    > #{$root}-first {
      flex: 1;

      > #{$root}-copyright {
        @include font(12px);

        text-align: center;
        opacity: 0.4;
      }
    }
  }
}
</style>
