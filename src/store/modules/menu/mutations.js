import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from './mutation-types';

const mutations = {
  [OPEN_MOBILE_MENU](state) {
    state.open = true;
  },
  [CLOSE_MOBILE_MENU](state) {
    state.open = false;
  },
};

export default mutations;
