<template>
<button class="btn">
    <slot>Подписаться</slot>
</button>
</template>

<style scoped lang="scss">
$color: #3657d3;

.btn {
    padding: 10px 50px;
    border-radius: 2px;
    background-color: $color;
    border: 1px solid $color;
    color:#ffffff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    transition: all 0.4s linear;

    &:hover {
        background-color: #cdc8cf;
        border: 1px solid $color;
    }
}
</style>
