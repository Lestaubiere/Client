import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import { GOOGLEMAPS_API_KEY } from '@/config/config';

const googleMaps = Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLEMAPS_API_KEY,
  },
});

export default googleMaps;
