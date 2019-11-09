<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid black;
    }
</style>