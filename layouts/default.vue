<template lang="pug">
TheHeader
main.main
    slot
TheFooter
</template>

<style scoped lang="scss">
.main {
    width: 100%;
    max-width: 1370px;
    margin: 0 auto;
    padding: 30px 15px 200px;
}
</style>
