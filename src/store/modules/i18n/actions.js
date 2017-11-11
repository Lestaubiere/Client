import Vue from 'vue';

import SET_LANGUAGE from './mutation-types';

import router from '../../../router';

const actions = {
  setLanguage({ commit }, language) {
    Vue.prototype.$locale.change(language);

    commit(SET_LANGUAGE, language);
  },

  changeLanguage({ commit }, language) {
    Vue.prototype.$locale.change(language);

    commit(SET_LANGUAGE, language);

    const currentRoute = router.history.current;
    if (currentRoute.meta[language]) {
      router.push(`/${language}/${router.history.current.meta[language]}`);
    } else {
      router.push(`/${language}`);
    }
  },
};

export default actions;
