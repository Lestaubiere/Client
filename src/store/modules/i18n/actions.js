import SET_LANGUAGE from './mutation-types';

const actions = {
  [SET_LANGUAGE]({ commit }, language) {
    commit(SET_LANGUAGE, language);
  },
};

export default actions;
