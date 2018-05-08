import 'babel-polyfill';
import 'whatwg-fetch';

import Vue from 'vue';

import App from '@/App';
import router from '@/router';
import store from '@/store';
import i18n from '@/plugins/i18n';
import googleMaps from '@/plugins/googleMaps';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  googleMaps,
  render: h => h(App),
});
