<script setup lang="ts">
import { type ArticleIntroBlock } from '~/types';

interface Props {
    payload: ArticleIntroBlock,
};

defineProps<Props>();
</script>

<template lang="pug">
section.section
    figure.figure
        img.img(:src="payload.data.image" :alt="payload.data.title")
    div.primary
        h1.title {{ payload.data.title }}
        div.additionally
            IconsClock
            p.additionally__text {{ payload.data.reading_time }} мин время чтения
        div.additionally
            IconsEye
            p.additionally__text {{ payload.data.views_count }} прочитали статью
        p.description {{ payload.data.short_description }}
</template>

<style scoped lang="scss">
.section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media (max-width: 1040px) {
        & {
            flex-direction: column-reverse;
        }
    }
}

.figure {
    position: relative;
    min-width: 540px;
    aspect-ratio: calc(540 / 580);
    border-top-right-radius: 40%;
    overflow: hidden;

    @media (max-width: 1040px) {
        & {
            width: 100%;
            min-width: 0;
            max-width: 540px;
        }
    }
}

.img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

.primary {
    flex-grow: 1;
}

.title {
    margin-bottom: 30px;
    color: #1b1b1b;
    font-family: Montserrat;
    font-size: 56px;
    font-style: normal;
    font-weight: 800;
    line-height: 66px;

    @media (max-width: 480px) {
        & {
            font-size: 42px;
            line-height: 48px;
        }
    }
}

.additionally {
    margin-bottom: 4px;
    display: flex;
    align-items: center;

    &:last-of-type {
        margin-bottom: 50px;
    }
}

.additionally svg {
    margin-right: 8px;
    opacity: 0.6;
}

.additionally__text {
    color: #8d959c;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.description {
    color: #1B1B1B;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
}
</style>
