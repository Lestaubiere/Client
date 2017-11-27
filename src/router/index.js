import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import smoothScroll from 'vue-smoothscroll';

import { LOCALES } from '@/config/config';

import Home from '@/components/pages/Home';
import Contact from '@/components/pages/Contact';
import LegalMentions from '@/components/pages/LegalMentions';
import NotFound from '@/components/pages/NotFound';

import NLroutes from './nl';
import FRroutes from './fr';
import ENroutes from './en';

Vue.use(Router);
Vue.use(Meta);
Vue.use(smoothScroll);

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
      path: '/:lang/mentions-legales',
      name: 'Mentions Légales',
      component: LegalMentions,
      meta: {
        nl: 'mentions-legales',
        fr: 'mentions-legales',
        en: 'mentions-legales',
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
});

router.beforeEach((to, from, next) => {
  const scrollToElement = document.getElementById('secondary-menu');
  if (scrollToElement) {
    const secondaryMenuPosition = scrollToElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollToPosition = (secondaryMenuPosition.top + scrollTop) - 25;

    Vue.prototype.$SmoothScroll(scrollToPosition, 500);
  }

  if (LOCALES.includes(to.params.lang)) {
    next();
  } else {
    next({ path: '/nl/404' });
  }
});

export default router;
