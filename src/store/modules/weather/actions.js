import { LESATUBIERE_API_URL } from '@/config/config';

import { REQUEST_CURRENT_WEATHER, FETCHED_CURRENT_WEATHER } from './mutation-types';

const actions = {
  fetchCurrentWeather({ commit }) {
    commit(REQUEST_CURRENT_WEATHER);

    fetch(`${LESATUBIERE_API_URL}/weather/current`)
      .then(response => response.json())
      .then((data) => {
        commit(FETCHED_CURRENT_WEATHER, data);
      });
  },
};

export default actions;
