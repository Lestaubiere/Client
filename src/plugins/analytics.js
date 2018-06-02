import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

import router from '@/router';
import { GA_PROPERTY } from '@/config/config';

const analytics = Vue.use(VueAnalytics, {
  id: GA_PROPERTY,
  router,
});

export default analytics;
