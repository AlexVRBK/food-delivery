<template>
    <h2 class="title">
        <slot />
    </h2>
</template>

<script>
export default {
    name: 'AppTitle',
}
</script>

<style lang="scss">
    .title {
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 55px;
        letter-spacing: 1.65px;
        color: #0093d7;
        margin: 0;
    }
</style>