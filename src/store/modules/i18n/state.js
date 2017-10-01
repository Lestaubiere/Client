const state = {
  lang: localStorage.getItem('language') || 'nl',
  locales: ['nl', 'fr', 'en'],
};

export default state;
