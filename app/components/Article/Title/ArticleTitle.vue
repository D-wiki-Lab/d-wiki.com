<template>
  <div class="ArticleTitle">
    <h1 class="ArticleTitle-txt">
      {{ props.text }}
    </h1>
    <div
      v-if="props.isLogin"
      class="ArticleTitle-nav"
    >
      <NuxtLink
        to="history/"
        class="ArticleTitle-btn"
      >
        <IconHistory
          :width="32"
          :height="32"
          class="ArticleTitle-icn"
        />
      </NuxtLink>
      <NuxtLink
        to="edit/"
        class="ArticleTitle-btn"
      >
        <IconEdit
          :width="32"
          :height="32"
          class="ArticleTitle-icn"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  isLogin: boolean,
  text: string,
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.ArticleTitle {
  $root: &;

  @include box-pd(null, null, 8px);

  position: relative;

  &::after {
    @include pseudo(100%, 1px, absolute, null, 0, 0, 0);
    @include bg(var(--color-bar-primary));

    opacity: 0.12;
  }

  > &-txt {
    @include font(40px, 700, 1.2);
  }

  > &-nav {
    @include flex(null, center);

    position: absolute;
    right: 0;
    bottom: 50%;
    transform: translateY(50%) translateY(-4px);
    gap: 16px;

    > #{$root}-btn {
      @include box-pd(8px, 8px, 8px, 8px);

      > #{$root}-icn {
        @include box(32px, 32px);
      }
    }
  }
}
</style>
