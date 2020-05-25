import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// modules
import barangays from './modules/barangays' 
import cases from './modules/cases' 

export default new Vuex.Store({
    modules: {
        barangays,
        cases
    }
})