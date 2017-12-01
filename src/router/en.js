import Campsite from '@/components/pages/Campsite';
import Leisure from '@/components/pages/Leisure';
import Facilities from '@/components/pages/Facilities';
import Rentals from '@/components/pages/Rentals';
import Surroundings from '@/components/pages/Surroundings';
import Prices from '@/components/pages/Prices';
import Booking from '@/components/pages/Booking';
import BookingMentions from '@/components/pages/BookingMentions';

const routes = [
  {
    path: '/:lang/campsite',
    name: 'EN_Campsite',
    component: Campsite,
    meta: {
      nl: 'camping',
      fr: 'camping',
    },
  },
  {
    path: '/campsite',
    redirect: '/en/campsite',
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

  {
    path: '/:lang/booking-conditions',
    name: 'EN_Booking_Conditions',
    component: BookingMentions,
    meta: {
      nl: 'reserverings-voorwaarden',
      fr: 'conditions-de-reservation',
    },
  },
  {
    path: '/booking-conditions',
    redirect: '/en/booking-conditions',
  },
];

export default routes;
