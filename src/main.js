// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
// eslint-disable-next-line
import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueSwal from 'vue-swal';
import App from './App';
import router from './router';
import {store} from './store/store'

// eslint-disable-next-line
Vue.use(BootstrapVue)
// eslint-disable-next-line
Vue.use(Vuetify)
// eslint-disable-next-line
Vue.use(VueSwal)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
