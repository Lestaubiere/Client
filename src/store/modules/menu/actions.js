import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from './mutation-types';

const actions = {
  [OPEN_MOBILE_MENU]({ commit }) {
    commit(OPEN_MOBILE_MENU);
  },
  [CLOSE_MOBILE_MENU]({ commit }) {
    commit(CLOSE_MOBILE_MENU);
  },
};

export default actions;
