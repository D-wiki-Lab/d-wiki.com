<template>
  <div class="ArticleEditLinks">
    <p class="ArticleEditLinks-label">
      Links
    </p>

    <div class="ArticleEditLinks-cont">
      <ArticleEditLink
        v-for="(link, i) in links"
        v-model="links[i]"
        :key="link.href"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProjectLink } from '~/types/project';

interface Props {
  links: ProjectLink[],
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.ArticleEditLinks {
  > &-label {
    @include font(20px, 700, 1.2);
  }

  > &-cont {
    @include box-mg(8px);

    > .ArticleEditLink {
      + * {
        @include box-mg(24px);
      }
    }
  }
}
</style>
