<template>
  <div class="PageMe">
    <p class="PageMe-pageTtl">
      My Page
    </p>

    <form
      class="PageMe-cont"
      @submit.prevent.once="submitHandler"
    >
      <MeEdit
        :id="me.id"
        :name="me.name"
        :profileImage="me.profileImage"
      />
      <div class="PageMe-btnWrap">
        <ButtonDefault
          disabled="disabled"
        >
          Save
        </ButtonDefault>
        <ButtonDefault
          variant="outlined"
          type="reset"
          @click="resetHandler"
        >
          Cancel
        </ButtonDefault>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import Image from '~/models/image';
import User from '~/models/user';
import { ImageFitType, ImageLoadingType } from '~/types/image';

const me = reactive(new User(
  'official',
  'D-wiki',
  new Image(
    '/user/official/profile-image.jpg',
    'official\'s Profile Image',
    160,
    160,
    undefined,
    ImageFitType.cover,
    ImageLoadingType.lazy,
  ),
));

const submitHandler = () => {
  console.log('Submit!');
};

const resetHandler = () => {
  console.log('Reset!');
};
</script>

<style lang="scss" scoped>
.PageMe {
  $root: &;

  @include box-pd(null, 20px, null, 20px);

  > &-pageTtl {
    @include font(32px, 700, 1.2);
  }

  > &-cont {
    @include box-mg(40px);

    > #{$root}-btnWrap {
      @include flex(center);
      @include box-mg(48px);

      gap: 12px;

      > .ButtonDefault {
        @include box(104px, 40px);
      }
    }
  }
}
</style>
