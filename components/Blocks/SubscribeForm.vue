<script setup lang="ts">
import { type SubscribeFormBlock } from '~/types';

interface Props {
    payload: SubscribeFormBlock,
};

defineProps<Props>();
</script>

<template lang="pug">
section
    BaseForm
</template>

<style scoped lang="scss">
</style>
