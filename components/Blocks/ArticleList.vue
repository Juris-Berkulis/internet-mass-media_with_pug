<script setup lang="ts">
import { Article, ArticleListBlock } from '~/types';

interface Props {
    payload: ArticleListBlock,
};

const props = defineProps<Props>();

const articlesList: ComputedRef<Array<Article>> = computed(() => {
    return props.payload.data.articles
});
</script>

<template>
<section>
    <h2 class="title">{{ payload.data.title }}</h2>
    <ArticlesList :articlesList="articlesList" />
</section>
</template>

<style scoped lang="scss">
.title {
    margin-bottom: 50px;
    color: #1b1b1b;
    font-family: Montserrat;
    font-size: 34px;
    font-style: normal;
    font-weight: 800;
    line-height: 46px;
}
</style>
