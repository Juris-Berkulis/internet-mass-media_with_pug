<script setup lang="ts">
import { Block, FetchResponse } from '~/types';

definePageMeta({
    validate: async (route) => {
        const path: string | string[] = route.params.article;
        if (typeof path === 'string') return /^article-\d+$/.test(path)
        return false
    },
});

const route = useRoute();

const response: Ref<FetchResponse<"article"> | null> = ref(null);

try {
    const {data} = await useFetch(`https://devtwit8.ru/api/v1/page/?path=${route.fullPath}`, {
        transform: (data: FetchResponse<'article'>) => data,
    });

    if (data.value) {
        response.value = data.value;
    } else {
        throw createError({ statusCode: 404, message: 'Ошибка при запросе!' })
    }
} catch (error) {
    console.warn(error);
}

const blocksList: ComputedRef<Array<Block>> = computed(() => {
    return response.value?.body || []
});
</script>

<template>
<article>
    <Head>
        <Title>{{ response?.meta.title }}</Title>
        <Meta name="description" :content="response?.meta.description" />
    </Head>

    <template v-for="block of blocksList" :key="block.id">
        <BlocksArticleIntro class="section" v-if="block.type === 'article_intro_block'" :payload="block" />
        <BlocksArticleList class="section" v-else-if="block.type === 'article_list_block'" :payload="block" />
        <BlocksCtaForm class="section" v-else-if="block.type === 'cta_form_block'" :payload="block" />
        <BlocksImage class="section" v-else-if="block.type === 'image_block'" :payload="block" />
        <BlocksSubscribeForm class="section" v-else-if="block.type === 'subscribe_form_block'" :payload="block" />
        <BlocksText class="section" v-else-if="block.type === 'text_block'" :payload="block" />
        <BlocksSlider class="section" v-else-if="block.type === 'slider_block'" :payload="block" />
    </template>
</article>
</template>

<style scoped lang="scss">
.section {
    padding: 50px 0;

    @media (max-width: 600px) {
        & {
            padding: 30px 0;
        }
    }

    &:first-of-type {
        padding-top: 0;
    }

    &:last-of-type {
        padding-bottom: 0;
    }
}
</style>
