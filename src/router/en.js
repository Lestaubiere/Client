import Campground from '@/components/pages/Campground';
import Leisure from '@/components/pages/Leisure';
import Facilities from '@/components/pages/Facilities';
import Rentals from '@/components/pages/Rentals';
import Surroundings from '@/components/pages/Surroundings';
import Prices from '@/components/pages/Prices';
import Booking from '@/components/pages/Booking';

const routes = [
  {
    path: '/:lang/campground',
    name: 'EN_Campground',
    component: Campground,
    meta: {
      nl: 'camping',
      fr: 'camping',
    },
  },
  {
    path: '/campground',
    redirect: '/en/campground',
  },
  {
    path: '/:lang/leisure',
    name: 'EN_Leisure',
    component: Leisure,
    meta: {
      nl: 'ontspanning',
      fr: 'detente',
    },
  },
  {
    path: '/leisure',
    redirect: '/en/leisure',
  },
  {
    path: '/:lang/facilities',
    name: 'EN_Facilities',
    component: Facilities,
    meta: {
      nl: 'voorzieningen',
      fr: 'amenagements',
    },
  },
  {
    path: '/facilities',
    redirect: '/en/facilities',
  },
  {
    path: '/:lang/rentals',
    name: 'EN_Rentals',
    component: Rentals,
    meta: {
      nl: 'verhuuraccommodaties',
      fr: 'locations',
    },
  },
  {
    path: '/rentals',
    redirect: '/en/rentals',
  },
  {
    path: '/:lang/surroundings',
    name: 'EN_Surroundings',
    component: Surroundings,
    meta: {
      nl: 'omgeving',
      fr: 'environs',
    },
  },
  {
    path: '/surroundings',
    redirect: '/en/surroundings',
  },
  {
    path: '/:lang/prices',
    name: 'EN_Prices',
    component: Prices,
    meta: {
      nl: 'tarieven',
      fr: 'tarifs',
    },
  },
  {
    path: '/prices',
    redirect: '/en/prices',
  },
  {
    path: '/:lang/booking',
    name: 'EN_Booking',
    component: Booking,
    meta: {
      nl: 'reserveren',
      fr: 'reserver',
    },
  },
  {
    path: '/booking',
    redirect: '/en/booking',
  },
];

export default routes;
