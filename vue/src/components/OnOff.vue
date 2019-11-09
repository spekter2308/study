<template>
    <div style="display: flex; justify-content: center">
        <button class="on"
                :class="{active: value}"
                @click="onChange(true)">
            On
        </button>
        <button class="off"
                :class="{active: !value}"
                @click="onChange(false)">
            Off
        </button>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            onChange(newValue) {
                this.$emit('input', newValue)
            }
        },
        watch: {
            value(v) {
                console.log(v)
            }
        }
    }
</script>

<style scoped>
    .on{
        display: block;
        height: 80px;
        width: 80px;
    }
    .on.active {
        background-color: green;
    }
    .off{
        display: block;
        height: 80px;
        width: 80px;
    }
    .off.active{
        background-color: red;
    }
</style>