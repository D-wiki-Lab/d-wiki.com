<template>
  <div class="ArticleEdit">
    <ArticleEditContents :contents="contents" />

    <ArticleEditLinks :links="links" />
  </div>
</template>

<script lang="ts" setup>
import { ProjectContent, ProjectLink } from '~/types/project';

interface Props {
  contents: ProjectContent[],
  links: ProjectLink[],
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.ArticleEdit {
  $root: &;

  > .ArticleEditLinks {
    @include box-mg(40px);
  }
}
</style>
