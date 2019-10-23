// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
//轮播css
import 'swiper/dist/css/swiper.css'
//使用轮播
Vue.use(VueAwesomeSwiper)

import './assets/style/reset.css' //重置样式
import Base from '../static/base.js';
import { http} from '../static/http';

import qs from 'qs';
Vue.prototype.Base = Base;
Vue.prototype.http = http;
Vue.prototype.$qs = qs;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
