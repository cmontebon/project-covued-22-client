<template>
    <div>
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Covued-22</a>
            <ul class="navbar-nav">
                <li class="nav-item text-nowrap">
                <a class="nav-link sign-out px-3" href="#">Sign out</a>
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
    data() {
        return {
            activeComponent: 'Cases'
        }
    },
    created() {
        console.log(this.$route.params.component)
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