import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from '@/components/pages/Home';
import Contact from '@/components/pages/Contact';
import NotFound from '@/components/pages/NotFound';

import { LOCALES } from '@/config/config';

import NLroutes from './nl';
import FRroutes from './fr';
import ENroutes from './en';

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/nl',
    },
    ...NLroutes,
    ...FRroutes,
    ...ENroutes,
    {
      path: '/:lang',
      name: 'Home',
      component: Home,
    },
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
      path: '/:lang/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '/:lang/*',
      redirect: '/:lang/404',
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (LOCALES.includes(to.params.lang)) {
    next();
  } else {
    next({ path: '/nl/404' });
  }
});

export default router;
