<template>
  <form
    class="MeEdit"
    @submit.prevent="submitHandler"
  >
    <div class="MeEdit-cont">
      <div class="MeEdit-icn-and-nm">
        <InputIcon
          v-model="form.profileImage.src"
          v-bind="profileImage"
        />
        <InputText
          v-model="form.name"
          label="Name"
        />
      </div>
      <InputText
        v-model="form.id"
        :disabled="true"
        label="Wallet Address"
      />
    </div>
    <div class="MeEdit-btnWrap">
      <ButtonDefault
        :disabled="false"
      >
        Save
      </ButtonDefault>
      <ButtonDefault
        variant="outlined"
        type="button"
        @click="cancelHandler"
      >
        Cancel
      </ButtonDefault>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { Image } from '~/types/image';
import { User } from '~/types/user';

interface Props {
  id: string,
  name: string,
  profileImage: Omit<Image, 'width' | 'height'>,
}

interface Emits {
  (e: 'submit', $event: User): void,
  (e: 'cancel'): void,
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const form = reactive({
  id: props.id,
  name: props.name,
  profileImage: props.profileImage,
});

const submitHandler = () => {
  emits('submit', form);
};

const cancelHandler = () => {
  emits('cancel');
};
</script>

<style lang="scss" scoped>
.MeEdit {
  $root: &;

  > &-cont {
    > #{$root}-icn-and-nm {
      @include flex(null, center);

      gap: 32px;

      > .InputIcon {
        @include box(160px, 160px);
      }

      > .InputText {
        flex: 1;
      }
    }

    > .InputText {
      @include box-mg(40px);
    }
  }

  > &-btnWrap {
    @include flex(center);
    @include box-mg(48px);

    gap: 12px;

    > .ButtonDefault {
      @include box(104px, 40px);
    }
  }
}
</style>
