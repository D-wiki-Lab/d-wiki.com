<template>
  <label class="InputText">
    <span class="InputText-label">
      {{ label }}
    </span>
    <input
      :value="modelValue"
      :type="type"
      :disabled="disabled"
      class="InputText-input"
      @change="changeTextHandler"
    >
  </label>
</template>

<script lang="ts" setup>
interface Props {
  label: string,
  modelValue: string,
  type?: string,
  disabled?: boolean,
}

interface Emits {
  (e: 'update:modelValue', $event: string): void
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Label',
  modelValue: '',
  type: 'text',
  disabled: false,
});
const emits = defineEmits<Emits>();

const changeTextHandler = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value || '');
}
</script>

<style lang="scss" scoped>
.InputText {
  display: block;

  > &-label {
    @include font(20px, 700, 1.2);

    display: block;
  }

  > &-input {
    @include box(100%, null, 16px, 20px, 16px, 20px);
    @include box-mg(8px);
    @include font(null, 300, 1.6);

    display: block;
    border: solid 1px var(--color-bar-primary);
    border-radius: 4px;
  }
}
</style>
