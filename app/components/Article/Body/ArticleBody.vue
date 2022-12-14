<template>
  <div class="ArticleBody">
    <template
      v-for="content in contents"
      :key="content.id"
    >
      <h2 :id="content.id">
        {{ content.title }}
      </h2>
      <p>
        {{ content.body }}
      </p>
    </template>

    <h2 id="links">
      Links
    </h2>
    <ul class="lintList">
      <template v-for="link in links">
        <li
          v-if="link.text && link.href"
          :key="link.order"
        >
          <IconLink
            :width="20"
            :height="20"
          />
          <span>
          {{ link.text }}
        </span>
          <NuxtLink :href="link.href" target="_blank">
            {{ link.href }}
          </NuxtLink>
        </li>
      </template>
    </ul>
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
.ArticleBody {
  $root: &;

  @include box-pd(null, null, 32px);

  position: relative;

  &::after {
    @include pseudo(100%, 1px, absolute, null, 0, 0, 0);
    @include bg(var(--color-bar-primary));

    opacity: 0.12;
  }

  > * {
    @include box-mg(16px);
    @include font(null, 300, 2);

    &:first-child {
      @include box-mg(0 !important);
    }
  }

  > h2 {
    @include box-mg(40px);
    @include box-pd(6px, null, 6px);
    @include font(24px, 700, 1.2);

    position: relative;

    &::after {
      @include pseudo(100%, 1px, absolute, null, 0, 0, 0);
      @include bg(var(--color-bar-primary));

      opacity: 0.12;
    }
  }

  > .lintList {
    > li {
      @include flex(null, center);

      > .IconLink {
        @include box(20px, 20px);
        @include box-mg(null, 8px);
      }

      > span {
        @include box-mg(null, 16px);
        @include font(null, 500);
      }

      > a {
        color: #2400ff;
        text-decoration: underline;
      }
    }
  }
}
</style>
