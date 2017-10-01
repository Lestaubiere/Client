import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from '@/components/pages/Home';
import Campground from '@/components/pages/Campground';
import Rentals from '@/components/pages/Rentals';
import Surroundings from '@/components/pages/Surroundings';
import Photos from '@/components/pages/Photos';
import Directions from '@/components/pages/Directions';
import Booking from '@/components/pages/Booking';

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
      path: '/photos',
      name: 'Photos',
      component: Photos,
    },
    {
      path: '/directions',
      name: 'Directions',
      component: Directions,
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking,
    },
  ],
});
