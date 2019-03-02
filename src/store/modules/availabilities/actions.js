import { LESATUBIERE_API_URL } from '@/config/config';

import {
  REQUEST_AVAILABILITIES,
  FETCHED_AVAILABILITIES,
} from './mutation-types';

const actions = {
  fetchAvailabilities({ commit }) {
    commit(REQUEST_AVAILABILITIES);

    fetch(`${LESATUBIERE_API_URL}/availabilities`)
      .then(response => response.json())
      .then((data) => {
        commit(FETCHED_AVAILABILITIES, data);
      });
  },
};

export default actions;
