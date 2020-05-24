import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// components
import Home from '@/components/Home'
import Dashboard from '@/components/admin/Dashboard'

const routes = [
    { path: '/', component: Home },
    { path: '/admin/dashboard', component: Dashboard}
]

export default new VueRouter({mode: 'history', routes})