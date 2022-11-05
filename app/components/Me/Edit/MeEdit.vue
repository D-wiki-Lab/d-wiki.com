<template>
  <div class="MeEdit">
    <div class="MeEdit-icn-and-nm">
      <InputIcon
        v-model="profileImage.src"
        v-bind="profileImage"
      />
      <InputText
        v-model="name"
        label="Name"
      />
    </div>
    <InputText
      v-model="wallet[0]['address'][0]"
      label="Wallet Address"
    />
  </div>
</template>

<script lang="ts" setup>
import { Wallet } from '~/types/wallet';
import { Image } from '~/types/image';

interface Props {
  name: string,
  wallet: Wallet[],
  profileImage: Omit<Image, 'width' | 'height'>,
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.MeEdit {
  > &-icn-and-nm {
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
</style>
