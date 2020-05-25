import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store/store'

Vue.use(VueRouter)

// components
import Home from '@/components/Home'
import Admin from '@/components/admin/Admin'
import Barangays from '@/components/admin/Barangays'
import Cases from '@/components/admin/Cases'
import Login from '@/components/auth/Login'

const guard = async (to, from, next) => {
      await store.dispatch('initToken');
      
      // we use await as this async request has to finish 
      // before we can be sure
      console.log(store.getters.isAuthenticated)
      if (store.getters.isAuthenticated || to.path == '/login') {
        if ( to.path == '/login' ) {
            next('/admin')
        } else {
            next();
        }
      } else {
        next('/login');
      }
    }

const routes = [
    { path: '/', component: Home },
    { 
        path: '/login', component: Login,
        beforeEnter: guard
    },
    {   
        path: '/admin', component: Admin, redirect: '/admin/cases',
        children: [
            { path: 'barangays', component: Barangays },
            { path: 'cases', component: Cases }
        ],
        beforeEnter: guard
    },
    { path: '*', redirect: '/'}
]

export default new VueRouter({mode: 'history', routes})