import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import auth from './modules/auth' 
import barangays from './modules/barangays' 
import cases from './modules/cases' 

export default new Vuex.Store({
    modules: {
        auth,
        barangays,
        cases
    }
})