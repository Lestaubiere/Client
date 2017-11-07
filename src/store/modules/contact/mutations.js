import { ERROR_500 } from '@/config/config';

import {
  REQUEST_CONTACT_SUBMIT,
  FETCHED_CONTACT_SUBMIT_SUCCESS,
  FETCHED_CONTACT_SUBMIT_ERROR,
  RESET_CONTACT_FORM,
} from './mutation-types';

const mutations = {
  [REQUEST_CONTACT_SUBMIT](state) {
    state.loading = true;
    state.error = null;
    state.valid = false;
  },
  [FETCHED_CONTACT_SUBMIT_SUCCESS](state) {
    state.loading = false;
    state.valid = true;
  },
  [FETCHED_CONTACT_SUBMIT_ERROR](state) {
    state.loading = false;
    state.error = ERROR_500;
  },
  [RESET_CONTACT_FORM](state) {
    state.loading = false;
    state.error = null;
    state.valid = false;
  },
};

export default mutations;
