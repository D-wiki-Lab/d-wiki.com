<template>
  <article class="PageWikiWikiId">
    <ArticleTitle
      :isLogin="true"
      :text="project.name"
    />

    <div class="PageWikiWikiId-cont">
      <ArticleBody
        :contents="project.body.contents"
        :links="project.body.links"
        :history="project.history"
      />
    </div>
  </article>
</template>

<script lang="ts" setup>
import Project from '~/models/project';
import ProjectContent from '~/models/project-content';
import ProjectLink from '~/models/project-link';

definePageMeta({
  layout: 'wiki',
});

const project = new Project(
  'd-wiki',
  'D-wiki',
  undefined,
  1,
  [
    new ProjectContent(
      'about',
      'About',
      'About の本文',
      0,
    ),
    new ProjectContent(
      'mint-info',
      'Mint Info',
      'Mint Info の本文',
      1,
    ),
    new ProjectContent(
      'team',
      'Team',
      'Team の本文',
      2,
    ),
    new ProjectContent(
      'roadmap',
      'Roadmap',
      'Roadmap の本文',
      3,
    ),
    new ProjectContent(
      'utility',
      'Utility',
      'Utility の本文',
      4,
    ),
    new ProjectContent(
      'other',
      'Other',
      'Other の本文',
      5,
    ),
  ],
  [
    new ProjectLink(
      'Site',
      'https://d-wiki.com/',
      0,
    ),
    new ProjectLink(
      'Twitter',
      'https://twitter.com/',
      1,
    ),
  ],
  [],
);
</script>

<style lang="scss" scoped>
.PageWikiWikiId {
  $root: &;

  > &-cont {
    @include box-mg(24px);
  }
}
</style>
