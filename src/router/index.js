import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from '@/components/pages/Home';
import Contact from '@/components/pages/Contact';

import NLroutes from './nl';
import FRroutes from './fr';
import ENroutes from './en';

// import store from '../store';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/nl',
    },
    {
      path: '/:lang',
      name: 'Home',
      component: Home,
    },
    ...NLroutes,
    ...FRroutes,
    ...ENroutes,
    {
      path: '/:lang/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        nl: 'contact',
        fr: 'contact',
        en: 'contact',
      },
    },
    {
      path: '/contact',
      redirect: '/nl/contact',
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
