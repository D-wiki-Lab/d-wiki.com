<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="IconUser"
  >
    <path
      :fill="fill"
      d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
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
