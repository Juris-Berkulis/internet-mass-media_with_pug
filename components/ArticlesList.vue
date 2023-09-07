<script setup lang="ts">
import { Article } from '~/types';

interface Props {
    articlesList: Array<Article>,
};

defineProps<Props>();
</script>

<template>
<div class="articlesList">
    <ArticleItem v-for="article of articlesList" :key="article.link" :article="article" />
</div>
</template>

<style scoped lang="scss">
.articlesList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
}
</style>
