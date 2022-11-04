<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="IconEdit"
  >
    <path
      :fill="props.fill"
      d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
    />
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  width?: number
  height?: number
  fill?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 24,
  height: 24,
  fill: '#000000',
})
</script>
