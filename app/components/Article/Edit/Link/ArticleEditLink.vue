<template>
  <div class="ArticleEditLink">
    <input
      :value="modelValue.text"
      type="text"
      placeholder="リンクタイトル"
      class="ArticleEditLink-input -is-text"
      @change="updateTextHandler"
    >
    <div class="ArticleEditLink-hr" />
    <input
      :value="modelValue.href"
      type="url"
      placeholder="リンク"
      class="ArticleEditLink-input -is-href"
      @change="updateHrefHandler"
    >
  </div>
</template>

<script lang="ts" setup>
import { ProjectLink } from '~/types/project';

interface Props {
  modelValue: ProjectLink,
}

interface Emits {
  (e: 'update:modelValue', $event: ProjectLink): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const updateTextHandler = (e: Event) => {
  emits('update:modelValue', {
    ...props.modelValue,
    text: (e.target as HTMLInputElement).value || '',
  });
}

const updateHrefHandler = (e: Event) => {
  emits('update:modelValue', {
    ...props.modelValue,
    href: (e.target as HTMLInputElement).value || '',
  });
}
</script>

<style lang="scss" scoped>
.ArticleEditLink {
  border: solid 1px var(--color-bar-primary);
  border-radius: 4px;

  > &-input {
    @include box(100%, null, 16px, 20px, 16px, 20px);

    display: block;
    border-radius: 4px;

    &::placeholder {
      color: var(--color-text-placeholder);
    }
  }

  > &-hr {
    @include box(100%, 1px);
    @include bg(var(--color-bar-primary));
  }
}
</style>
