import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from './mutation-types';

const actions = {
  [OPEN_MOBILE_MENU]({ commit }) {
    document.body.classList.add('no-scroll');
    commit(OPEN_MOBILE_MENU);
  },
  [CLOSE_MOBILE_MENU]({ commit }) {
    document.body.classList.remove('no-scroll');
    commit(CLOSE_MOBILE_MENU);
  },
};

export default actions;
