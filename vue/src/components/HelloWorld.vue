<template>
    <div>
        <h1>Hello world</h1>
        <input type="text"
               v-model="inputName"
               @blur="$v.inputName.$touch()">
        <pre>{{ $v }}</pre>
        <router-link to="/test">
            Test
        </router-link>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'

    export default {
        name: 'HelloWorld',
        data() {
            return {}
        },
        validations: {
            inputName: ''
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
