import axios from 'axios'
import axiosAuth from '@/axios-auth'

const state = {
    cases: []
}

const getters = {
    cases: state => {
        return state.cases
    }
}

const mutations = {
    'SET_CASES': (state, payload) => {
        state.cases = payload.data
    },
    'ADD_CASE': (state, payload) => {
        state.cases.push(payload)
    },
    'DELETE_CASE': (state, payload) => {
        const _case = state.cases.find(element => element.id == payload.data.id)
        state.cases.splice(state.cases.indexOf(_case), 1)
    },
    'UPDATE_CASE': (state, payload) => {
        state.cases = state.cases.map(_case => {
            if (_case.id === payload.data.id) {
                return Object.assign({}, _case, payload.data)
            }
            return _case
        })
    }
}

const actions = {
    fetchCases: ({commit}) => {
        console.log('hello')
        axios.get('/cases')
            .then(res => commit('SET_CASES', res.data))
            .catch(err => console.log(err))
    },
    addCase({commit, rootGetters}, payload){
        axiosAuth.post('/cases', payload)
            .then(res => {
                const { data } = res.data
                data.barangay = rootGetters.barangays.find(b => b.id === data.brgy_id)

                commit('ADD_CASE', data)
            })
            .catch(err => console.log(err))
    },
    deleteCase: ({commit}, id) => {
        axiosAuth.delete(`/cases/${id}`)
            .then(res => commit('DELETE_CASE', res.data))
            .catch(err => console.log(err))
    },
    updateCase: ({commit}, payload) => {
        axiosAuth.put(`/cases/${payload.id}`, payload)
            .then(res => commit('UPDATE_CASE', res.data))
            .catch(err => console.log(err))
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}