import Vue from 'vue';
import VueI18n from 'vue-i18n';

import * as NL from '@/locales/nl.json';
import * as FR from '@/locales/fr.json';
import * as EN from '@/locales/en.json';
import * as DE from '@/locales/de.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'nl',
  messages: {
    nl: NL,
    fr: FR,
    en: EN,
    de: DE,
  },
});

Vue.prototype.$locale = {
  change(language) {
    i18n.locale = language;
  },
  current() {
    return i18n.locale;
  },
};

export default i18n;
