<script setup lang="ts">
const inputId: string = Date.now().toString();
</script>

<template>
<form class="form" @submit.prevent="console.log('Подписка оформлена')" method="post">
    <label class="form__label" :for="inputId">Подпишитесь на рассылку</label>
    <BaseInput class="form__input" type="text" :id="inputId" placeholder="Email" />
    <BaseButton type="submit" />
</form>
</template>

<style scoped lang="scss">
.form {
    width: 100%;
    max-width: 1340px;
    margin: 0 auto;
    padding: 27px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    background-color: #1B1B1B;

    @media (max-width: 1040px) {
        & {
            flex-direction: column;
            row-gap: 20px;
        }
    }
}

.form__label {
    margin-right: auto;
    color: #fefefe;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;

    @media (max-width: 1040px) {
        & {
            margin-right: 0;
            text-align: center;
        }
    }
}

.form__input {
    margin-right: 87px;

    @media (max-width: 1040px) {
        & {
            margin-right: 0;
        }
    }
}
</style>
