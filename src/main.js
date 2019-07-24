// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vuex from 'vuex';

//引入样式
import '@/styles/index.scss';

import store from '@/store/breadcrumb.js';

Vue.use(store)

Vue.use(router);
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false
Vue.prototype.http = http;
Vue.prototype.axios = axios;

// request 封装axios;
import http from '@/servers/request.js';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
