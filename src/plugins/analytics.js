import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

import router from '@/router';

const analytics = Vue.use(VueAnalytics, {
  id: 'UA-39908849-3',
  router,
});

export default analytics;
