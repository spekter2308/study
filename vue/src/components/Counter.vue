<template>
    <div>
        <h1 @click="UpdateCounter(1)">Counter {{ counter }}</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter
            }
        },
        methods: {
            UpdateCounter(val) {
                this.$store.state.counter += val;
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid black;
    }
</style>