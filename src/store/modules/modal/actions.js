import { SHOW_IMAGE_MODAL, HIDE_IMAGE_MODAL } from './mutation-types';

const actions = {
  showModal({ commit }, imagePath) {
    commit(SHOW_IMAGE_MODAL, imagePath);
  },
  hideModal({ commit }) {
    commit(HIDE_IMAGE_MODAL);
  },
};

export default actions;
