import {
  REQUEST_AVAILABILITIES,
  FETCHED_AVAILABILITIES,
} from './mutation-types';

const mutations = {
  [REQUEST_AVAILABILITIES](state) {
    state.loading = true;
  },
  [FETCHED_AVAILABILITIES](state, data) {
    state.loading = false;

    if (data.columns && data.rows) {
      state.columns = data.columns;
      state.rows = data.rows;
    }
  },
};

export default mutations;
