<script setup lang="ts">
import { type FetchResponse, type Article } from '~/types';

const route = useRoute();

const response: Ref<FetchResponse<"home"> | null> = ref(null);

try {
    const { data } = await useFetch(`https://devtwit8.ru/api/v1/page/?path=${route.fullPath}`, {
        transform: (data: FetchResponse<'home'>) => data,
    });

    if (data.value) {
        response.value = data.value;
    } else {
        throw createError({ statusCode: 404, message: 'Ошибка при запросе!' })
    }
} catch (error) {
    console.warn(error);
}

const articlesList: ComputedRef<Article[]> = computed(() => {
    return response.value?.body[0].data.articles || []
});
</script>

<template lang="pug">
div.homePage
    Head
        Title {{ response?.meta.title }}
        Meta(name="description" :content="response?.meta.description")

    ArticlesList(:articlesList="articlesList")
</template>
