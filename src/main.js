import 'babel-polyfill';
import 'whatwg-fetch';

import Vue from 'vue';

import App from '@/App';
import router from '@/router';
import store from '@/store';
import analytics from '@/plugins/analytics';
import i18n from '@/plugins/i18n';

Vue.config.productionTip = false;

if (window.navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });
}

/* eslint-disable no-new */
/* eslint arrow-parens: ["error", "always"] */
new Vue({
  el: '#app',
  router,
  store,
  analytics,
  i18n,
  render: (h) => h(App),
});
