<script setup lang="ts">
import { type SliderBlock } from '~/types';

interface Props {
    payload: SliderBlock,
};

const props = defineProps<Props>();

const indexOfOpenedImg: Ref<number> = ref(0);

const numberOfOpenedImg: ComputedRef<number> = computed(() => {
    return indexOfOpenedImg.value + 1
});

const prevImg = (): void => {
    if (indexOfOpenedImg.value === 0) indexOfOpenedImg.value = props.payload.data.length - 1;
    else indexOfOpenedImg.value--;
};

const nextImg = (): void => {
    if (indexOfOpenedImg.value === props.payload.data.length - 1) indexOfOpenedImg.value = 0;
    else indexOfOpenedImg.value++;
};
</script>

<template lang="pug">
section
    div.container
        button.btn.prev(@click="prevImg")
            IconsArrow
        button.btn.next(@click="nextImg")
            IconsArrow
        template(v-for="src, index of payload.data" :key="src")
            figure.figure(v-if="index === indexOfOpenedImg")
                img.img(:src="src" :alt="src")
    div.pagination {{ numberOfOpenedImg }} / {{ payload.data.length }}
</template>

<style scoped lang="scss">
.container {
    position: relative;
    margin-bottom: 25px;
    padding: 0 114px;

    @media (max-width: 1040px) {
        & {
            padding-right: 0;
            padding-left: 0;
        }
    }
}

.btn {
    position: absolute;
    top: 50%;

    &.prev {
        left: 0;
        transform: translateY(-50%);
    }

    &.next {
        right: 0;
        transform: translateY(-50%) rotateZ(180deg);
    }
}

.img {
    width: 100%;
}

.pagination {
    color: #000000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    text-align: center;
}
</style>
