<template>
  <div class="HistoryPreviewIcon">
    <p class="HistoryPreviewIcon-label">
      Editors
    </p>
    <ul class="HistoryPreviewIcon-list">
      <li
        v-for="item in history"
        :key="item.id"
        class="HistoryPreviewIcon-item"
      >
        <UserIcon
          v-bind="item.user.profileImage"
        />
      </li>
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
.HistoryPreviewIcon {
  $root: &;

  @include flex(flex-end, center);

  > &-label {
    @include box-mg(null, 16px);
    @include font(null, 700, 1.2);
  }

  > &-list {
    @include flex(null, center);

    > #{$root}-item {
      + * {
        @include box-mg(null, null, null, -8px);
      }

      > .UserIcon {
        @include box(40px, 40px);
      }
    }
  }
}
</style>
