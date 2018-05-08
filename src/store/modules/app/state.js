import Cookies from 'js-cookie';

const consentCookie = Cookies.getJSON('hasConsent');
let hasConsent = false;

if (consentCookie === true) {
  hasConsent = true;
}

const state = {
  hasConsent,
};

export default state;
