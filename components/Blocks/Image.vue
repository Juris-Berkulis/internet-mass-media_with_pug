<script setup lang="ts">
import { ImageBlock } from '~/types';

interface Props {
    payload: ImageBlock,
};

defineProps<Props>();
</script>

<template>
<section>
    <figure class="figure">
        <img class="img" :src="payload.data.src" :alt="payload.data.caption">
        <figcaption class="figcaption" v-if="payload.data.caption">{{ payload.data.caption }}</figcaption>
    </figure>
</section>
</template>

<style scoped lang="scss">
.img {
    width: 100%;
}

.figure:has(.img + .figcaption) .img {
    margin-bottom: 15px;
}

.figcaption {
    color: #8d959c;
    text-align: right;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}
</style>
