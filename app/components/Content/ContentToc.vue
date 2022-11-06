<template>
  <ul class="ContentToc">
    <li
      v-for="item in toc"
      :key="item.id"
      class="ContentToc-item"
    >
      <a
        :href="`#${item.id}`"
        class="ContentToc-link"
      >
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Toc } from '~/types/toc';

interface Props {
  toc: Toc[],
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.ContentToc {
  $root: &;

  > &-item {
    > #{$root}-link {
      @include box-pd(8px, 20px, 8px, 20px);
      @include font(null, 700);

      display: block;
      opacity: 0.32;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
