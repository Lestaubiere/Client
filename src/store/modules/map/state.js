import { LESTAUBIERE_COORDINATES } from '@/config/config';

const state = {
  loading: false,
  departure: '',
  route: {},
  markers: [
    LESTAUBIERE_COORDINATES,
  ],
  line: '',
  bounds: {},
  error: null,
};

export default state;
