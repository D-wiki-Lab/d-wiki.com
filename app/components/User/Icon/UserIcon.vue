<template>
  <NuxtPicture
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :fit="fit"
    :loading="loading"
    class="UserIcon"
  />
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
  @include flex();
  @include bg(var(--color-bg-primary));

  border: solid 2px var(--color-bar-light);
  border-radius: 50%;
  overflow: hidden;

  > ::v-deep(img) {
    @include box(100%, auto);

    object-fit: cover;
  }
}
</style>
