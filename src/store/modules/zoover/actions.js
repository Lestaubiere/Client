import { LESATUBIERE_API_URL } from '@/config/config';

import { REQUEST_ZOOVER_INFORMATION, FETCHED_ZOOVER_INFORMATION } from './mutation-types';

const actions = {
  fetZooverInformation({ commit }) {
    commit(REQUEST_ZOOVER_INFORMATION);

    fetch(`${LESATUBIERE_API_URL}/zoover`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        commit(FETCHED_ZOOVER_INFORMATION, data);
      });
  },
};

export default actions;
