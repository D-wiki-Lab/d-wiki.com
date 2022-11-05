<template>
  <div class="HistoryPreviewIcon">
    <p class="HistoryPreviewIcon-label">
      Editors
    </p>
    <ul class="HistoryPreviewIcon-list">
      <li
        v-for="item in props.history"
        :key="item.id"
        class="HistoryPreviewIcon-item"
      >
        <UserIcon
          v-bind="profileImage(item.userId)"
        />
      </li>
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

const profileImage = (userId: string) => new Image(
  `/user/${userId}/profile-image.jpg`,
  `${userId}'s Profile Image`,
  36,
  36,
  undefined,
  ImageFitType.cover,
  ImageLoadingType.lazy,
);
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
