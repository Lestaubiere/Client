import { REQUEST_CURRENT_WEATHER, FETCHED_CURRENT_WEATHER } from './mutation-types';

const mutations = {
  [REQUEST_CURRENT_WEATHER](state) {
    state.loading = true;
  },
  [FETCHED_CURRENT_WEATHER](state, weather) {
    state.loading = false;
    state.temperature = weather.temperature;
    state.code = weather.code;
  },
};

export default mutations;
