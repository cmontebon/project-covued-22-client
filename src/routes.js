import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// components
import Home from '@/components/Home'
import Admin from '@/components/admin/Admin'
import Barangays from '@/components/admin/Barangays'
import Cases from '@/components/admin/Cases'

const routes = [
    { path: '/', component: Home },
    { 
        path: '/admin', component: Admin, redirect: '/admin/cases',
        children: [
            { path: 'barangays', component: Barangays },
            { path: 'cases', component: Cases }
        ]
    },
]

export default new VueRouter({mode: 'history', routes})