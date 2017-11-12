import Campground from '@/components/pages/Campground';
import Leisure from '@/components/pages/Leisure';
import Facilities from '@/components/pages/Facilities';
import Rentals from '@/components/pages/Rentals';
import Surroundings from '@/components/pages/Surroundings';
import Prices from '@/components/pages/Prices';
import Booking from '@/components/pages/Booking';
import Vacatures from '@/components/pages/Vacatures';

const routes = [
  {
    path: '/:lang/camping',
    name: 'NL_Camping',
    component: Campground,
    meta: {
      fr: 'camping',
      en: 'campground',
    },
  },
  {
    path: '/camping',
    redirect: '/nl/camping',
  },
  {
    path: '/:lang/ontspanning',
    name: 'NL_Ontspanning',
    component: Leisure,
    meta: {
      fr: 'detente',
      en: 'leisure',
    },
  },
  {
    path: '/ontspanning',
    redirect: '/nl/ontspanning',
  },
  {
    path: '/:lang/voorzieningen',
    name: 'NL_Voorzieningen',
    component: Facilities,
    meta: {
      fr: 'amenagements',
      en: 'facilities',
    },
  },
  {
    path: '/voorzieningen',
    redirect: '/nl/voorzieningen',
  },
  {
    path: '/:lang/verhuuraccommodaties',
    name: 'NL_Verhuuraccommodations',
    component: Rentals,
    meta: {
      fr: 'locations',
      en: 'rentals',
    },
  },
  {
    path: '/verhuuraccommodations',
    redirect: '/nl/verhuuraccommodations',
  },
  {
    path: '/:lang/omgeving',
    name: 'NL_Omgeving',
    component: Surroundings,
    meta: {
      fr: 'environs',
      en: 'surroundings',
    },
  },
  {
    path: '/omgeving',
    redirect: '/nl/omgeving',
  },
  {
    path: '/:lang/tarieven',
    name: 'NL_Tarieven',
    component: Prices,
    meta: {
      fr: 'tarifs',
      en: 'prices',
    },
  },
  {
    path: '/tarieven',
    redirect: '/nl/tarieven',
  },
  {
    path: '/:lang/reserveren',
    name: 'NL_Reserveren',
    component: Booking,
    meta: {
      fr: 'reserver',
      en: 'booking',
    },
  },
  {
    path: '/reserveren',
    redirect: '/nl/reserveren',
  },
  {
    path: '/:lang/vacatures',
    name: 'NL_Vacatures',
    component: Vacatures,
  },
  {
    path: '/vacatures',
    redirect: '/nl/vacatures',
  },
];

export default routes;