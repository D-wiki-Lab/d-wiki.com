<template>
  <div class="PageWikiWikiIdHistory">
    <p class="PageWikiWikiIdHistory-pageTtl">
      History
    </p>

    <div class="PageWikiWikiIdHistory-cont">
      <HistoryPreview
        v-if="project.history && project.history.length"
        :history="project.history || []"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/project';

definePageMeta({
  middleware: ['auth-check'],
});

const route = useRoute();
const router = useRouter();
const projectStore = useProjectStore();

const result = await projectStore.setProject(route.params.wikiId as string);
if (!result) {
  router.push('/');
}
const project = computed(() => projectStore.project);
</script>

<style lang="scss" scoped>
.PageWikiWikiIdHistory {
  $root: &;

  @include box-pd(null, 20px, null, 20px);

  > &-pageTtl {
    @include font(32px, 700, 1.2);
  }

  > &-cont {
    @include box-mg(40px);
  }
}
</style>
