<template>
  <component
    v-bind="$attrs"
    :is="componentIs"
    :disabled="props.disabled"
    :class="['ButtonDefault', ...classes]"
    @click="clickHandler"
  >
    <slot>
      Label
    </slot>
  </component>
</template>

<script lang="ts" setup>
interface Props {
  tag?: 'button' | 'NuxtLink',
  variant?: 'contained' | 'outlined',
  disabled?: 'disabled',
}

interface Emits {
  (e: 'click'): void
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  variant: 'contained',
  disabled: undefined
});
const emits = defineEmits<Emits>();

const classes = computed(() => [
  `-variant-${props.variant}`,
]);

const componentIsNuxtLink = resolveComponent('NuxtLink');
const componentIs = computed(() => {
  switch (props.tag) {
    case 'button':
      return 'button';
    case 'NuxtLink':
      return componentIsNuxtLink;
    default:
      return 'button';
  }
});

const clickHandler = () => {
  emits('click');
}
</script>

<style lang="scss" scoped>
.ButtonDefault {
  @include flex(center, center);
  @include box-pd(8px, 16px, 8px, 16px);
  @include font(null, 700, 1.2);

  gap: 8px;
  border-radius: 4px;

  &:disabled {
    opacity: 0.4;
  }

  &.-variant-contained {
    @include bg(var(--color-button-primary));

    color: var(--color-button-primary-text);
  }

  &.-variant-outlined {
    @include bg(var(--color-button-secondary));

    color: var(--color-button-secondary-text);
    border: solid 1px var(--color-button-secondary-text);
  }
}
</style>
