<template>
  <div class="UserIcon">
    {{ src }}
  </div>
</template>

<script lang="ts" setup>
import { ImageFitType, ImageLoadingType, ImageSource } from '~/types/image';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sources?: ImageSource[];
  fit?: ImageFitType;
  loading?: ImageLoadingType;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.UserIcon {
  @include bg(var(--color-bg-primary));

  border: solid 2px var(--color-bar-light);
  border-radius: 50%;
  overflow: hidden;
}
</style>
