<template>
  <div class="HistoryPreview">
    <ul class="HistoryPreview-list">
      <HistoryPreviewItem
        v-for="item in history"
        v-bind="item"
        :key="item.id"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { History } from '~/types/history';

interface Props {
  history: History[],
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.HistoryPreview {
  $root: &;

  > &-list {}
}
</style>
