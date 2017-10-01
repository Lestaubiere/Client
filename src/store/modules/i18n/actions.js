import Vue from 'vue';

import SET_LANGUAGE from './mutation-types';

const actions = {
  [SET_LANGUAGE]({ commit }, language) {
    Vue.prototype.$locale.change(language);
    localStorage.setItem('language', language);
    commit(SET_LANGUAGE, language);
  },
};

export default actions;
