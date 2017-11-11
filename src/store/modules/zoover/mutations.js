import { REQUEST_ZOOVER_INFORMATION, FETCHED_ZOOVER_INFORMATION } from './mutation-types';

const mutations = {
  [REQUEST_ZOOVER_INFORMATION](state) {
    state.loading = true;
  },
  [FETCHED_ZOOVER_INFORMATION](state, zoover) {
    state.loading = false;
    state.score = zoover.score;
    state.reviews = zoover.reviews;
  },
};

export default mutations;
