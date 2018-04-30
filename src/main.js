import 'es6-promise/auto';

import Vue from 'vue';

import App from '@/App';
import router from '@/router';
import store from '@/store';
import i18n from '@/plugins/i18n';
import analytics from '@/plugins/analytics';
import googleMaps from '@/plugins/googleMaps';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  analytics,
  googleMaps,
  render: h => h(App),
});
