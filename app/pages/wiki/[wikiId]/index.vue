<template>
  <article class="PageWikiWikiId">
    <ArticleTitle
      :isLogin="meStore.isVerified"
      :text="project.name"
    />

    <div class="PageWikiWikiId-cont">
      <ArticleBody
        :contents="project.body.contents"
        :links="project.body.links"
      />
      <HistoryPreviewIcon
        v-if="project.history && project.history.length"
        :history="project.history || []"
      />
    </div>
  </article>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/project';
import { useMeStore } from '~/stores/me';

definePageMeta({
  middleware: ['auth-check'],
  layout: 'wiki',
})

const route = useRoute();
const router = useRouter();
const projectStore = useProjectStore();
const meStore = useMeStore();

const result = await projectStore.setProject(route.params.wikiId as string);
if (!result) {
  router.push('/');
}
const project = computed(() => projectStore.project);
</script>

<style lang="scss" scoped>
.PageWikiWikiId {
  $root: &;

  > &-cont {
    @include box-mg(40px);

    > .HistoryPreviewIcon {
      @include box-mg(56px);
    }
  }
}
</style>
