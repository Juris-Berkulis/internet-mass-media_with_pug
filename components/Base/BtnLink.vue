<script setup lang="ts">
import { ArticleLink } from '~/types';

interface Props {
    to: ArticleLink,
}

defineProps<Props>();
</script>

<template>
<NuxtLink class="btnLink" :to="to">
    <slot>Читать</slot>
</NuxtLink>
</template>

<style scoped lang="scss">
.btnLink {
    display: inline-block;
    margin-top: auto;
    padding: 10px 50px;
    border-radius: 2px;
    background-color: #1b1b1b;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    transition: all 0.4s linear;

    &:hover {
        background-color: #3657d3;
    }
}
</style>
