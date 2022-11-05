<template>
  <div class="PageWikiWikiIdEdit">
    <p class="PageWikiWikiIdEdit-pageTtl">
      Edit
    </p>
    <h1 class="PageWikiWikiIdEdit-ttl">
      {{ project.name }}
    </h1>

    <form
      class="PageWikiWikiIdEdit-cont"
      @submit.prevent.once="submitHandler"
    >
      <ArticleEdit
        :contents="project.body.contents"
        :links="project.body.links"
      />
      <div class="PageWikiWikiIdEdit-btnWrap">
        <ButtonDefault>
          Publish
        </ButtonDefault>
        <ButtonDefault
          to="../"
          tag="NuxtLink"
          variant="outlined"
        >
          Cancel
        </ButtonDefault>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import Project from '~/models/project';
import ProjectContent from '~/models/project-content';
import ProjectLink from '~/models/project-link';

const project = reactive(new Project(
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
    new ProjectLink(
      '',
      '',
      2,
    ),
    new ProjectLink(
      '',
      '',
      3,
    ),
  ]
));

const submitHandler = () => {
  console.log('Submit!');
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

    > #{$root}-btnWrap {
      @include flex(center);
      @include box-mg(48px);

      gap: 12px;

      > .ButtonDefault {
        @include box(104px, 40px);
      }
    }
  }
}
</style>
