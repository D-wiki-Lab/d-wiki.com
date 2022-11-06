<template>
  <aside class="NavAside">
    <ContentToc
      v-if="toc.length"
      :toc="toc"
    />
  </aside>
</template>

<script lang="ts" setup>
import { Toc } from '~/types/toc';

interface Props {
  toc: Toc[],
}

const props = defineProps<Props>();
</script>
