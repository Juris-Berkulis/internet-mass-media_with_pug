<template>
<input class="input">
</template>

<style scoped lang="scss">
.form__input {
    width: 100%;
    max-width: 353px;
    padding: 0 5px;
    border: none;
    border-bottom: 1px solid #8d959c;
    color: #8d959c;
    background-color: transparent;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    transition: all 0.4s linear;

    &:active, 
    &:focus {
        border-bottom: 1px solid #3657d3;
    }
}
</style>
