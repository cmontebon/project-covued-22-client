import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps"
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_BASEURL
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Accepts'] = 'application/json'

import router from './routes'
import store from './store/store'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: "visualization" // necessary for places input
  }
});

new Vue({ 
  render: h => h(App),
  store,
  router
}).$mount('#app')
