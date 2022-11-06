<template>
  <label class="ArticleEditContent">
    <span class="ArticleEditContent-label">
      {{ title }}
    </span>
    <textarea
      :value="modelValue"
      placeholder="ここに本文を入力"
      class="ArticleEditContent-input"
      @change="changeBodyHandler"
    />
  </label>
</template>

<script lang="ts" setup>
interface Props {
  title: string,
  modelValue: string,
}

interface Emits {
  (e: 'update:modelValue', $event: string): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const changeBodyHandler = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value || '');
}
</script>

<style lang="scss" scoped>
.ArticleEditContent {
  display: block;

  > &-label {
    @include font(20px, 700, 1.2);

    display: block;
  }

  > &-input {
    @include box(100%, 280px, 16px, 20px, 16px, 20px);
    @include box-mg(8px);
    @include font(null, 300, 1.6);

    display: block;
    border: solid 1px var(--color-bar-primary);
    border-radius: 4px;
    resize: none;

    &::placeholder {
      color: var(--color-text-placeholder);
    }
  }
}
</style>
