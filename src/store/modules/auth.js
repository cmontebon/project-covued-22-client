import axios from 'axios'
import router from '@/routes'

const state = {
    idToken: null,
}

const getters = {
    isAuthenticated: state => {
        return state.idToken !== null
    },
    token: state => {
        return state.idToken
    }
}

const mutations = {
    'AUTH_USER': (state, token) => {
        state.idToken = token
    },
    'LOG_OUT': state => {
        state.idToken = null
    }
}

const actions = {
    login: ({commit}, payload) => {
        axios.post('/login', payload)
            .then(res => {
                const { token } = res.data.success
                commit('AUTH_USER', token)
                localStorage.setItem('token', token)
                router.replace('/admin')
            })
    },
    logout: ({commit}) => {
        commit('LOG_OUT')
        localStorage.removeItem('token')
        router.replace('/login');
    },
    initToken: ({commit}) => {
        const token = localStorage.getItem('token')
        
        if (token) {
            commit('AUTH_USER', token)
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}