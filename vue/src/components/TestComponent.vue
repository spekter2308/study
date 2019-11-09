<template>
    <div>
        <counter>
            <template>
                <app-onoff v-model="swiched"></app-onoff>
            </template>
        </counter>
        <counter></counter>
    </div>
</template>

<script>
    import Counter from '@/components/Counter'
    import OnOff from '@/components/OnOff'

    export default {
        name: "TestComponent",
        components: {
            'counter': Counter,
            appOnoff: OnOff
        },
        data() {
            return {
                swiched: true
            }
        }
    }
</script>

<style scoped>

</style>