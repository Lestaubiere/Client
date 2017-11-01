import { SHOW_IMAGE_MODAL, HIDE_IMAGE_MODAL } from './mutation-types';

const actions = {
  [SHOW_IMAGE_MODAL]({ commit }, imagePath) {
    commit(SHOW_IMAGE_MODAL, imagePath);
  },
  [HIDE_IMAGE_MODAL]({ commit }) {
    commit(HIDE_IMAGE_MODAL);
  },
};

export default actions;
