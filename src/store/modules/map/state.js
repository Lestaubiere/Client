import { LESTAUBIERE_COORDINATES } from '@/config/config';

const state = {
  loading: false,
  route: {},
  markers: [
    LESTAUBIERE_COORDINATES,
  ],
  line: '',
  bounds: {},
};

export default state;
