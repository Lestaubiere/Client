import Campground from '@/components/pages/Campground';
import Leisure from '@/components/pages/Leisure';
import Facilities from '@/components/pages/Facilities';
import Rentals from '@/components/pages/Rentals';
import Surroundings from '@/components/pages/Surroundings';
import Prices from '@/components/pages/Prices';
import Booking from '@/components/pages/Booking';
import BookingMentions from '@/components/pages/BookingMentions';

const routes = [
  {
    path: '/:lang/camping',
    name: 'FR_Camping',
    component: Campground,
    meta: {
      nl: 'camping',
      en: 'campground',
    },
  },
  {
    path: '/:lang/detente',
    name: 'FR_Détente',
    component: Leisure,
    meta: {
      nl: 'ontspanning',
      en: 'leisure',
    },
  },
  {
    path: '/detente',
    redirect: '/fr/detente',
  },
  {
    path: '/:lang/amenagements',
    name: 'FR_Aménagements',
    component: Facilities,
    meta: {
      nl: 'voorzieningen',
      en: 'facilities',
    },
  },
  {
    path: '/amenagements',
    redirect: '/fr/amenagements',
  },
  {
    path: '/:lang/locations',
    name: 'FR_Locations',
    component: Rentals,
    meta: {
      nl: 'verhuuraccommodaties',
      en: 'rentals',
    },
  },
  {
    path: '/locations',
    redirect: '/fr/locations',
  },
  {
    path: '/:lang/environs',
    name: 'FR_Environs',
    component: Surroundings,
    meta: {
      nl: 'omgeving',
      en: 'surroundings',
    },
  },
  {
    path: '/environs',
    redirect: '/fr/environs',
  },
  {
    path: '/:lang/tarifs',
    name: 'FR_Tarifs',
    component: Prices,
    meta: {
      nl: 'tarieven',
      en: 'prices',
    },
  },
  {
    path: '/tarifs',
    redirect: '/fr/tarifs',
  },
  {
    path: '/:lang/reserver',
    name: 'FR_Réserver',
    component: Booking,
    meta: {
      nl: 'reserveren',
      en: 'booking',
    },
  },
  {
    path: '/reserver',
    redirect: '/fr/reserver',
  },
  {
    path: '/:lang/conditions-de-reservation',
    name: 'FR_Conditions_de_Reservation',
    component: BookingMentions,
    meta: {
      nl: 'reserverings-voorwaarden',
      en: 'booking-conditions',
    },
  },
  {
    path: '/conditions-de-reservation',
    redirect: '/fr/conditions-de-reservation',
  },
];

export default routes;
