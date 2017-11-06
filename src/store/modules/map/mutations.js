import { LESTAUBIERE_COORDINATES, ERROR_404, ERROR_500 } from '@/config/config';

import {
  REQUEST_MAP_DIRECTION,
  FETCHED_MAP_DIRECTION_SUCCESS,
  FETCHED_MAP_DIRECTION_NOT_FOUND,
  FETCHED_MAP_DIRECTION_ERROR,
} from './mutation-types';

const mutations = {
  [REQUEST_MAP_DIRECTION](state) {
    state.loading = true;
    state.markers = [LESTAUBIERE_COORDINATES];
    state.route = {};
    state.line = '';
    state.bounds = {};
    state.error = null;
  },
  [FETCHED_MAP_DIRECTION_SUCCESS](state, directions) {
    state.loading = false;
    state.markers = directions.markers;
    state.route = directions.route;
    state.line = directions.line;
    state.bounds = directions.bounds;
  },
  [FETCHED_MAP_DIRECTION_NOT_FOUND](state) {
    state.loading = false;
    state.markers = [LESTAUBIERE_COORDINATES];
    state.route = {};
    state.line = '';
    state.bounds = {};
    state.error = ERROR_404;
  },
  [FETCHED_MAP_DIRECTION_ERROR](state) {
    state.loading = false;
    state.markers = [LESTAUBIERE_COORDINATES];
    state.route = {};
    state.line = '';
    state.bounds = {};
    state.error = ERROR_500;
  },
};

export default mutations;
