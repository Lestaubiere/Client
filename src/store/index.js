import Vue from 'vue';
import Vuex from 'vuex';

import i18n from './modules/i18n';
import menu from './modules/menu';
import modal from './modules/modal';
import map from './modules/map';
import weather from './modules/weather';
import contact from './modules/contact';
import zoover from './modules/zoover';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    i18n,
    menu,
    modal,
    map,
    weather,
    contact,
    zoover,
  },
  strict: debug,
});
