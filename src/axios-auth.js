import axios from 'axios'

import store from './store/store'

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASEURL,
  headers: { 
    'get': {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
})

instance.interceptors.request.use((request) => {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

    if(token) {
        request.headers.common['Authorization'] = `Bearer ${token}`
    }
    return request
})

//instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance