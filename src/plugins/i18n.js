import Vue from 'vue';
import VueI18n from 'vue-i18n';

import NL from '@/locales/nl';
import FR from '@/locales/fr';
import EN from '@/locales/en';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'nl',
  messages: {
    nl: NL,
    fr: FR,
    en: EN,
  },
});

Vue.prototype.$locale = {
  change(language) {
    i18n.locale = language;
  },
};

export default i18n;
