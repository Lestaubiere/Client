import SET_LANGUAGE from './mutation-types';

const mutations = {
  [SET_LANGUAGE](state, lang) {
    if (state.locales.indexOf(lang) !== -1) {
      state.lang = lang;
    }
  },
};

export default mutations;
