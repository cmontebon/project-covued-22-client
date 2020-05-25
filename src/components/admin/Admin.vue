<template>
    <div>
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" to="/">COVUED-22</router-link>
            <ul class="navbar-nav">
                <li class="nav-item text-nowrap">
                <a class="nav-link sign-out px-3" @click="logout">Sign out</a>
                </li>
            </ul>
        </nav>

        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column mb-2" :style="{marginTop: '50px'}">                         
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin/cases">Cases</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin/barangays">Barangays</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        
        <div class="container-fluid">
            <router-view></router-view>
            <!-- <keep-alive>
                <component v-bind:is="activeComponent"></component>
            </keep-alive> -->
        </div>
    </div>
</template>

<script>
import Barangays from './Barangays'
import Cases from './Cases'

export default {
    name: 'Admin',
    components: {
        Barangays,
        Cases
    },
    methods: {
        logout() {
            return this.$store.dispatch('logout');
        }
    },
    data() {
        return {
            activeComponent: 'Cases'
        }
    }
}
</script>

<style scoped>
    a.nav-link {
        cursor: pointer;
    }

    .sign-out:hover {
        background: #262626 !important;
    }

    li.nav-item:hover, a.nav-link:hover {
        background: #d5d5d5;
    }

    .sign-out {
        padding-left: 10px;
        border-left: 1px solid white;
    }

    
</style>