import { LESATUBIERE_API_URL, LESTAUBIERE_COORDINATES } from '@/config/config';

import {
  REQUEST_MAP_DIRECTION,
  FETCHED_MAP_DIRECTION_SUCCESS,
  FETCHED_MAP_DIRECTION_NOT_FOUND,
  FETCHED_MAP_DIRECTION_ERROR,
  SET_DEPARTURE,
} from './mutation-types';

const actions = {
  fetchMapDirections({ commit }, [departure, language]) {
    commit(REQUEST_MAP_DIRECTION);

    fetch(`${LESATUBIERE_API_URL}/map/directions?origin=${departure}&destination=${LESTAUBIERE_COORDINATES.lat},${LESTAUBIERE_COORDINATES.lng}&language=${language}`)
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.json();
          case 404:
            commit(FETCHED_MAP_DIRECTION_NOT_FOUND);
            break;
          case 500:
            commit(FETCHED_MAP_DIRECTION_ERROR);
            break;
          default:
            commit(FETCHED_MAP_DIRECTION_ERROR);
        }

        return null;
      })
      .then((data) => {
        if (data) {
          commit(FETCHED_MAP_DIRECTION_SUCCESS, data);
        }
      });
  },

  setDeparture({ commit }, departure) {
    commit(SET_DEPARTURE, departure);
  },
};

export default actions;
