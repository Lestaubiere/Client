const state = {
  lang: localStorage.getItem('language') || 'nl',
  locales: ['nl', 'fr', 'en', 'de'],
};

export default state;
