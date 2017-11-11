import { ERROR_500 } from '@/config/config';

import {
  REQUEST_CONTACT_SUBMIT,
  FETCHED_CONTACT_SUBMIT_SUCCESS,
  FETCHED_CONTACT_SUBMIT_ERROR,
  SET_NAME,
  SET_EMAIL,
  SET_MESSAGE,
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
    state.name = '';
    state.email = '';
    state.message = '';
  },
  [FETCHED_CONTACT_SUBMIT_ERROR](state) {
    state.loading = false;
    state.error = ERROR_500;
  },
  [SET_NAME](state, name) {
    state.name = name;
  },
  [SET_EMAIL](state, email) {
    state.email = email;
  },
  [SET_MESSAGE](state, message) {
    state.message = message;
  },
};

export default mutations;
