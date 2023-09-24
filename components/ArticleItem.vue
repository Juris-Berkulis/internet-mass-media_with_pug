<script setup lang="ts">
import { type Article } from '~/types';

interface Props {
    article: Article,
};

const props = defineProps<Props>();

const articleImageSrc: ComputedRef<string> = computed(() => {
    return `url(${props.article.image})`
});
</script>

<template lang="pug">
div.article
    div.article__img
    h2.article__title {{ article.title }}
    BaseBtnLink(:to="article.link")
</template>

<style scoped lang="scss">
.article {
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 900px) {
        & {
            width: 48%;
        }
    }

    @media (max-width: 460px) {
        & {
            width: 100%;
        }
    }
}

.article__img {
    width: 100%;
    aspect-ratio: calc(427 / 320);
    margin-bottom: 20px;
    background-image: v-bind(articleImageSrc);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: lightgray;
}

.article__title {
    margin-bottom: 30px;
    color: #1B1B1B;
    text-overflow: ellipsis;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
}
</style>
