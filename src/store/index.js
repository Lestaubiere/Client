import Vue from 'vue';
import Vuex from 'vuex';

import i18n from './modules/i18n';
import menu from './modules/menu';
import modal from './modules/modal';
import map from './modules/map';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    i18n,
    menu,
    modal,
    map,
  },
  strict: debug,
});
