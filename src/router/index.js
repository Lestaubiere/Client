import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from '@/components/pages/Home';
import Campground from '@/components/pages/Campground';
import Leisure from '@/components/pages/Leisure';
import Facilities from '@/components/pages/Facilities';
import Rentals from '@/components/pages/Rentals';
import Surroundings from '@/components/pages/Surroundings';
import Prices from '@/components/pages/Prices';
import Booking from '@/components/pages/Booking';
import Vacatures from '@/components/pages/Vacatures';
import Contact from '@/components/pages/Contact';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/campground',
      name: 'Campground',
      component: Campground,
    },
    {
      path: '/leisure',
      name: 'Leisure',
      component: Leisure,
    },
    {
      path: '/facilities',
      name: 'Facilities',
      component: Facilities,
    },
    {
      path: '/rentals',
      name: 'Rentals',
      component: Rentals,
    },
    {
      path: '/surroundings',
      name: 'Surroundings',
      component: Surroundings,
    },
    {
      path: '/prices',
      name: 'Prices',
      component: Prices,
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking,
    },
    {
      path: '/vacatures',
      name: 'Vacatures',
      component: Vacatures,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
