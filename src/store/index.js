import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import i18n from './modules/i18n';
import menu from './modules/menu';
import modal from './modules/modal';
import map from './modules/map';
import weather from './modules/weather';
import contact from './modules/contact';
import zoover from './modules/zoover';
import booking from './modules/booking';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    app,
    i18n,
    menu,
    modal,
    map,
    weather,
    contact,
    zoover,
    booking,
  },
  strict: debug,
});
