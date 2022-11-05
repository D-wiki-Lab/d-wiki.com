<template>
  <article class="PageWikiWikiId">
    <ArticleTitle
      :isLogin="false"
      :text="project.name"
    />

    <div class="PageWikiWikiId-cont">
      <ArticleBody
        :contents="project.body.contents"
        :links="project.body.links"
      />
      <HistoryPreviewIcon
        v-if="project.history.length"
        :history="project.history"
      />
    </div>
  </article>
</template>

<script lang="ts" setup>
import History from '~/models/history';
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
      'content-0',
      'About',
      'About の本文',
      0,
    ),
    new ProjectContent(
      'content-1',
      'Mint Info',
      'Mint Info の本文',
      1,
    ),
    new ProjectContent(
      'content-2',
      'Team',
      'Team の本文',
      2,
    ),
    new ProjectContent(
      'content-3',
      'Roadmap',
      'Roadmap の本文',
      3,
    ),
    new ProjectContent(
      'content-4',
      'Utility',
      'Utility の本文',
      4,
    ),
    new ProjectContent(
      'content-5',
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
  [
    new History(
      'history-0',
      'official',
      'd-wiki',
      [
        new ProjectContent(
          'content-0',
          'About',
          'About の本文',
          0,
        ),
        new ProjectContent(
          'content-3',
          'Roadmap',
          'Roadmap の本文',
          3,
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
      1,
    ),
    new History(
      'history-1',
      'official-sub',
      'd-wiki',
      [
        new ProjectContent(
          'content-0',
          'About',
          'About の本文',
          0,
        ),
        new ProjectContent(
          'content-3',
          'Roadmap',
          'Roadmap の本文',
          3,
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
      1,
    ),
  ],
);
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
