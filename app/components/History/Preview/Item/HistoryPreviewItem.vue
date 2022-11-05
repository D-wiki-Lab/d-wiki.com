<template>
  <li class="HistoryPreviewItem">
    <p class="HistoryPreviewItem-date">
      {{ props.history.createdAt }}
    </p>
    <div class="HistoryPreviewItem-cont">
      <UserIcon
        v-bind="profileImage(props.history.userId)"
      />
      <p class="HistoryPreviewItem-nm">
        {{ props.history.userId }}
      </p>
    </div>
  </li>
</template>

<script lang="ts" setup>
import Image from '~/models/image';
import { History } from '~/types/history';
import { ImageFitType, ImageLoadingType } from '~/types/image';

interface Props {
  history: History,
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
.HistoryPreviewItem {
  $root: &;

  @include flex(null, center);
  @include box-pd(12px, null, 12px);

  > &-date {
    @include box(132px);
    @include box-mg(null, 8px);
  }

  > &-cont {
    @include flex(null, center);

    > .UserIcon {
      @include box(40px, 40px);
      @include box-mg(null, 8px);
    }

    > #{$root}-nm {
      @include font(null, 500);
    }
  }
}
</style>
