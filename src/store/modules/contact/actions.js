import { LESATUBIERE_API_URL } from '@/config/config';

import {
  REQUEST_CONTACT_SUBMIT,
  FETCHED_CONTACT_SUBMIT_SUCCESS,
  FETCHED_CONTACT_SUBMIT_ERROR,
  SET_NAME,
  SET_EMAIL,
  SET_MESSAGE,
} from './mutation-types';

const actions = {
  sendContactInformation({ commit }, [name, email, message]) {
    commit(REQUEST_CONTACT_SUBMIT);

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);

    fetch(`${LESATUBIERE_API_URL}/contact`, { method: 'POST', body: data })
      .then((response) => {
        switch (response.status) {
          case 200:
            commit(FETCHED_CONTACT_SUBMIT_SUCCESS);
            break;
          case 500:
            commit(FETCHED_CONTACT_SUBMIT_ERROR);
            break;
          default:
            commit(FETCHED_CONTACT_SUBMIT_ERROR);
        }
      });
  },

  setName({ commit }, name) {
    commit(SET_NAME, name);
  },

  setEmail({ commit }, email) {
    commit(SET_EMAIL, email);
  },

  setMessage({ commit }, message) {
    commit(SET_MESSAGE, message);
  },
};

export default actions;
