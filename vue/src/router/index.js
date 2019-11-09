import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent'

Vue.use(Router)
Vue.use(Vuelidate)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'TestComponent',
            component: TestComponent
        }
    ]
})
