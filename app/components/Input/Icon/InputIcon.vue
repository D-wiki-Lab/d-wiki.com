<template>
  <label class="InputIcon">
    <input
      type="file"
      class="InputIcon-input"
      @change="changeFileHandler"
    >
    <UserIcon
      :src="modelValue"
      :alt="alt"
      :width="width"
      :height="height"
      :fit="fit"
      :loading="loading"
    />
  </label>
</template>

<script lang="ts" setup>
import { ImageFitType, ImageLoadingType, ImageSource } from '~/types/image';
import renderImage from '~/utils/render-image';

interface Props {
  alt: string;
  width?: number;
  height?: number;
  sources?: ImageSource[];
  fit?: ImageFitType;
  loading?: ImageLoadingType;
  modelValue: string,
}

interface Emits {
  (e: 'update:modelValue', $event: string): void
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Label',
  modelValue: '',
  type: 'text',
});
const emits = defineEmits<Emits>();

const changeFileHandler = (e: Event) => {
  if ((e.target as HTMLInputElement).files?.[0]) {
    let render = renderImage((e.target as HTMLInputElement).files?.[0]);

    render!.onload = (e) => {
      emits('update:modelValue', (e.target as FileReader).result + '');
    }
  }
}
</script>

<style lang="scss" scoped>
.InputIcon {
  @include flex();

  position: relative;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;

  > &-input {
    opacity: 0;
  }

  > .UserIcon {
    @include box(100%, 100%);

    position: absolute;
    inset: 0;
  }
}
</style>
