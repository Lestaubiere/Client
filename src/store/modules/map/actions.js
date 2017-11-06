import { LESATUBIERE_API_URL, LESTAUBIERE_COORDINATES } from '@/config/config';

import { REQUEST_MAP_DIRECTION, FETCHED_MAP_DIRECTION } from './mutation-types';

const actions = {
  fetchMapDirections({ commit }, departure) {
    commit(REQUEST_MAP_DIRECTION);

    fetch(`${LESATUBIERE_API_URL}/map/directions?origin=${departure}&destination=${LESTAUBIERE_COORDINATES.lat},${LESTAUBIERE_COORDINATES.lng}`)
      .then(response => response.json())
      .then((data) => {
        commit(FETCHED_MAP_DIRECTION, data);
      });
  },
};

export default actions;
