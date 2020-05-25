import axios from 'axios'

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
        state.barangays = payload.data
    },
    'ADD_BARANGAY': (state, payload) => {
        state.barangays.push(payload.data)
    },
    'DELETE_BARANGAY': (state, payload) => {
        const brgy = state.barangays.find(element => element.id == payload.data.id)
        state.barangays.splice(state.barangays.indexOf(brgy), 1)
    },
    'UPDATE_BARANGAYS': (state, payload) => {
        state.barangays = state.barangays.map(brgy => {
            if (brgy.id === payload.data.id) {
                return Object.assign({}, brgy, payload.data)
            }
            return brgy
        })
    }
}

const actions = {
    fetchCases: ({commit}) => {
        axios.get('/cases')
            .then(res => commit('SET_CASES', res.data))
            .catch(err => console.log(err))
    },
    addBarangay({commit}, payload){
        axios.post('/barangays', payload)
            .then(res => commit('ADD_BARANGAY', res.data))
            .catch(err => console.log(err))
    },
    deleteBarangay: ({commit}, id) => {
        console.log(id)
        axios.delete('/barangays/' + id)
            .then(res => commit('DELETE_BARANGAY', res.data))
            .catch(err => console.log(err))
    },
    updateBarangay: ({commit}, payload) => {
        console.log(payload);
        axios.put(`/barangays/${payload.id}`, payload)
            .then(res => commit('UPDATE_BARANGAYS', res.data))
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}