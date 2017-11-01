import { SHOW_IMAGE_MODAL, HIDE_IMAGE_MODAL } from './mutation-types';

const mutations = {
  [SHOW_IMAGE_MODAL](state, imagePath) {
    state.visible = true;
    state.imagePath = imagePath;
  },
  [HIDE_IMAGE_MODAL](state) {
    state.visible = false;
    state.imagePath = '';
  },
};

export default mutations;
