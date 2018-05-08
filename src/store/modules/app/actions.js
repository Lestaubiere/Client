import Cookies from 'js-cookie';

import { GA_PROPERTY, GA_COOKIE_NAMES } from '@/config/config';

import {
  ACCEPT_CONSENT,
  DENY_CONSENT,
} from './mutation-types';

const actions = {
  acceptConsent({ commit }) {
    Cookies.set('hasConsent', true, { expires: 365 });

    commit(ACCEPT_CONSENT);
  },

  denyConsent({ commit }) {
    Cookies.set('hasConsent', false, { expires: 395 });

    Cookies.set(`ga-disable-${GA_PROPERTY}`, true, { expires: 395 });
    window[`ga-disable-${GA_PROPERTY}`] = true;
    GA_COOKIE_NAMES.forEach(cookieName => Cookies.remove(cookieName));

    commit(DENY_CONSENT);
  },
};

export default actions;
