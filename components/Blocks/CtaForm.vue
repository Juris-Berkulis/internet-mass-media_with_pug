<script setup lang="ts">
import { type CtaFormBlock } from '~/types';
import ctaImg from '~/assets/img/ctaImg.png';

interface Props {
    payload: CtaFormBlock,
};

defineProps<Props>();
</script>

<template lang="pug">
section
    div.background
        img.img(:src="ctaImg" alt="photo")
        div.primary
            h2.title Стань участником проекта
            form.form(@submit.prevent="console.log('Заявка отправлена')")
                BaseInput.form__input(type="text" placeholder="Имя")
                BaseInput.form__input(type="tel" placeholder="Телефон")
                BaseInput.form__input(type="email" placeholder="Email")
                BaseButton.submit Присоединиться
</template>

<style scoped lang="scss">
.background {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 60px;
    background-color: #1b1b1b;

    @media (max-width: 1040px) {
        & {
            flex-direction: column;
        }
    }
}

.img {
    width: 100%;
    max-width: 595px;
}

.title {
    margin-bottom: 50px;
    color: #fefefe;
    font-family: Montserrat;
    font-size: 34px;
    font-style: normal;
    font-weight: 800;
    line-height: 46px; 
}

.form__input {
    margin-right: 25px;
    margin-bottom: 25px;

    &:last-of-type {
        margin-bottom: 50px;
    }
}
</style>
