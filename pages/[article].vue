<script setup lang="ts">
import { type Block, type FetchResponse } from '~/types';

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

<template lang="pug">
article
    Head
        Title {{ response?.meta.title }}
        Meta(name="description" :content="response?.meta.description")

    Blocks(v-for="block of blocksList" :key="block.id" :block="block")
</template>
