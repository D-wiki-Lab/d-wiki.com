<template>
  <li class="HistoryPreviewItem">
    <p class="HistoryPreviewItem-date">
      {{ createdAtDate }}
    </p>
    <div class="HistoryPreviewItem-cont">
      <UserIcon
        v-bind="profileImage"
      />
      <p class="HistoryPreviewItem-nm">
        {{ props.userId }}
      </p>
    </div>
  </li>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

import Image from '~/models/image';
import { ImageFitType, ImageLoadingType } from '~/types/image';
import {ProjectContent, ProjectLink} from "~/types/project";

interface Props {
  id: string;
  userId: string;
  projectId: string;
  contents: ProjectContent[];
  links: ProjectLink[];
  createdAt: number;
}

const props = defineProps<Props>();

const createdAtDate = computed(() =>
  dayjs(props.createdAt).format('YYYY.MM.DD HH:mm')
);
const profileImage = computed(() => new Image(
  `/user/${props.userId}/profile-image.jpg`,
  `${props.userId}'s Profile Image`,
  36,
  36,
  undefined,
  ImageFitType.cover,
  ImageLoadingType.lazy,
));
</script>

<style lang="scss" scoped>
.HistoryPreviewItem {
  $root: &;

  @include flex(null, center);
  @include box-pd(12px, null, 12px);

  > &-date {
    @include box(144px);
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
