<template>
  <div class="ArticleEditContents">
    <ArticleEditContent
      v-for="content in props.contents"
      v-model="content.body"
      :key="content.id"
      :title="content.title"
    />
  </div>
</template>

<script lang="ts" setup>
import { ProjectContent } from '~/types/project';

interface Props {
  contents: ProjectContent[],
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.ArticleEditContents {
  > .ArticleEditContent {
    + * {
      @include box-mg(40px);
    }
  }
}
</style>
