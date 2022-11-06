<template>
  <li class="HistoryPreviewItem">
    <p class="HistoryPreviewItem-date">
      {{ createdAtDate }}
    </p>
    <div class="HistoryPreviewItem-cont">
      <UserIcon
        v-bind="user.profileImage"
        :width="36"
        :height="36"
      />
      <p class="HistoryPreviewItem-nm">
        {{ user.name }}
      </p>
    </div>
  </li>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

import { ProjectContent, ProjectLink } from '~/types/project';
import { UserPublic } from '~/types/user';

interface Props {
  id: string;
  userId: string;
  user: UserPublic,
  projectId: string;
  contents: ProjectContent[];
  links: ProjectLink[];
  createdAt: number;
}

const props = defineProps<Props>();

const createdAtDate = computed(() =>
  dayjs(props.createdAt).format('YYYY.MM.DD HH:mm')
);
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
