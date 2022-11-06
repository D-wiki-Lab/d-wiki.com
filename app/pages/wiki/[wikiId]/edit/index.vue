<template>
  <div class="PageWikiWikiIdEdit">
    <p class="PageWikiWikiIdEdit-pageTtl">
      Edit
    </p>
    <h1 class="PageWikiWikiIdEdit-ttl">
      {{ project.name }}
    </h1>

    <div
      class="PageWikiWikiIdEdit-cont"
    >
      <ArticleEdit
        v-bind="project"
        @submit="submitHandler"
        @cancel="cancelHandler"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from '~/stores/project';
import { Project } from '~/types/project';

definePageMeta({
  middleware: ['auth', 'auth-check'],
});

const route = useRoute();
const router = useRouter();
const projectStore = useProjectStore();

const result = await projectStore.setProject(route.params.wikiId as string);
if (!result) {
  router.push('/');
}
const project = projectStore.project;

const submitHandler = async (form: Project) => {
  const project = await projectStore.updateProject(form);
  if (!project) {
    throw new Error('Update project error');
  }
  router.push('../');
};

const cancelHandler = () => {
  const router = useRouter();
  router.back();
};
</script>

<style lang="scss" scoped>
.PageWikiWikiIdEdit {
  $root: &;

  @include box-pd(null, 20px, null, 20px);

  > &-pageTtl {
    @include font(32px, 700, 1.2);
  }

  > &-ttl {
    @include box-mg(24px);
    @include font(40px, 700, 1.2);
  }

  > &-cont {
    @include box-mg(40px);
  }
}
</style>
