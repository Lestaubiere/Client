import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from './mutation-types';

const actions = {
  openMenu({ commit }) {
    commit(OPEN_MOBILE_MENU);
  },

  closeMenu({ commit }) {
    commit(CLOSE_MOBILE_MENU);
  },
};

export default actions;
