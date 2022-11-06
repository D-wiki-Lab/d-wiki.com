<template>
  <div class="PageMe">
    <p class="PageMe-pageTtl">
      My Page
    </p>

    <MeEdit
      :id="meStore.id"
      :name="meStore.name"
      :profileImage="meStore.profileImage"
      @submit="submitHandler"
      @cancel="cancelHandler"
    />
  </div>
</template>

<script lang="ts" setup>
import User from '~/models/user';
import { useMeStore } from '~/stores/me';

definePageMeta({
  middleware: ['auth', 'auth-check'],
});

const meStore = useMeStore();

const submitHandler = (form: User) => {
  console.log('Submit!');
  console.log(form)
};

const cancelHandler = () => {
  const router = useRouter();
  router.back();
};
</script>

<style lang="scss" scoped>
.PageMe {
  $root: &;

  @include box-pd(null, 20px, null, 20px);

  > &-pageTtl {
    @include font(32px, 700, 1.2);
  }

  > .MeEdit {
    @include box-mg(40px);
  }
}
</style>
