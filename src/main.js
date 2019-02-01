import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import axios from 'axios'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);



Vue.config.productionTip = false
Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["x-access-token"] = token
}

/* eslint-disable no-new  */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')