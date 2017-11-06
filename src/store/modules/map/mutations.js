import { LESTAUBIERE_COORDINATES } from '@/config/config';

import { REQUEST_MAP_DIRECTION, FETCHED_MAP_DIRECTION } from './mutation-types';

const mutations = {
  [REQUEST_MAP_DIRECTION](state) {
    state.loading = true;
    state.markers = [LESTAUBIERE_COORDINATES];
    state.route = {};
    state.line = '';
    state.bounds = {};
  },
  [FETCHED_MAP_DIRECTION](state, directions) {
    state.loading = false;
    state.markers = directions.markers;
    state.route = directions.route;
    state.line = directions.line;
    state.bounds = directions.bounds;
  },
};

export default mutations;
