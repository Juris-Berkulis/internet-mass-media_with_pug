<script setup lang="ts">
import { type Article } from '~/types';

interface Props {
    articlesList: Array<Article>,
};

defineProps<Props>();
</script>

<template lang="pug">
div.articlesList
    ArticleItem(v-for="article of articlesList" :key="article.link" :article="article")
</template>

<style scoped lang="scss">
.articlesList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
}
</style>
