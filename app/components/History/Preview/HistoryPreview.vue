<template>
  <div class="HistoryPreview">
    <ul class="HistoryPreview-list">
      <HistoryPreviewItem
        v-for="item in props.history"
        v-bind="item"
        :key="item.id"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import Image from '~/models/image';
import { History } from '~/types/history';
import { ImageFitType, ImageLoadingType } from '~/types/image';

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
