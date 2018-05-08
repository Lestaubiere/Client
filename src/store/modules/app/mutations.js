import {
  ACCEPT_CONSENT,
  DENY_CONSENT,
} from './mutation-types';

const mutations = {
  [ACCEPT_CONSENT](state) {
    state.hasConsent = true;
  },

  [DENY_CONSENT](state) {
    state.hasConsent = false;
  },
};

export default mutations;
