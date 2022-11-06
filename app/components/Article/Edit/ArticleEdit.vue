<template>
  <form
    class="ArticleEdit"
    @submit.prevent="submitHandler"
  >
    <div class="ArticleEdit-cont">
      <ArticleEditContents :contents="form.body.contents" />
      <ArticleEditLinks :links="form.body.links" />
    </div>
    <div class="ArticleEdit-btnWrap">
      <ButtonDefault
        :disabled="false"
      >
        Save
      </ButtonDefault>
      <ButtonDefault
        variant="outlined"
        type="button"
        @click="cancelHandler"
      >
        Cancel
      </ButtonDefault>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { Project, ProjectContent, ProjectLink } from '~/types/project';
import {Image} from '~/types/image';

interface Props {
  id: string;
  name: string;
  thumbnail?: Image;
  meta: {
    startedAt: number;
  }
  body: {
    contents: ProjectContent[];
    links: ProjectLink[];
  }
}

interface Emits {
  (e: 'submit', $event: Project): void,
  (e: 'cancel'): void,
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const form = reactive({
  id: props.id,
  name: props.name,
  thumbnail: props.thumbnail,
  meta: props.meta,
  body: props.body,
});

const submitHandler = () => {
  emits('submit', form);
};

const cancelHandler = () => {
  emits('cancel');
};
</script>

<style lang="scss" scoped>
.ArticleEdit {
  $root: &;

  > &-cont {
    > .ArticleEditLinks {
      @include box-mg(40px);
    }
  }

  > &-btnWrap {
    @include flex(center);
    @include box-mg(48px);

    gap: 12px;

    > .ButtonDefault {
      @include box(104px, 40px);
    }
  }
}
</style>
