<template>
  <transition appear name="slideFromBottom">
    <div class="cookie-law" v-if="isOpen">
      <div class="cookie-law__content">
        {{ message[0] }}
        <router-link class="map__link" :to="$t('menu.privacy.path')">{{ message[1] }}</router-link>
        {{ message[2] }}
      </div>
      <div class="cookie-law__actions">
        <button class="cookie-law__button" @click="handleDeny">{{ denyButton }}</button>
        <button class="cookie-law__button" @click="handleAccept">{{ acceptButton }}</button>
      </div>
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue';
  import { mapActions, mapState } from 'vuex';
  import VueAnalytics from 'vue-analytics';
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Cookies from 'js-cookie';

  import router from '@/router';
  import { GOOGLEMAPS_API_KEY } from '@/config/config';

  export default {
    name: 'l-cookie-law',

    data() {
      return {
        isOpen: false,
      };
    },

    computed: {
      message() {
        return this.$i18n.t('footer.cookie.message').split(/\{(.*?)\}/g);
      },

      denyButton() {
        return this.$i18n.t('footer.cookie.denyButton');
      },

      acceptButton() {
        return this.$i18n.t('footer.cookie.acceptButton');
      },

      ...mapState({
        hasConsent: state => state.app.hasConsent,
      }),
    },

    watch: {
      hasConsent(newConsent, oldConsent) {
        if (!oldConsent && newConsent) {
          this.startServices();
        }
      },
    },

    mounted() {
      const consentCookie = Cookies.getJSON('hasConsent');
      const doNotTrack = navigator.doNotTrack || navigator.msDoNotTrack;

      if (this.hasConsent) {
        this.startServices();
      } else if (doNotTrack === 'yes' || doNotTrack === '1' || consentCookie === false) {
        this.deny();
      } else if (doNotTrack === 'no' || doNotTrack === '0') {
        this.accept();
      } else {
        this.isOpen = true;
      }
    },

    methods: {
      accept() {
        this.acceptConsent();
      },

      deny() {
        this.denyConsent();
      },

      startServices() {
        Vue.use(VueAnalytics, {
          id: 'UA-39908849-3',
          router,
        });

        Vue.use(VueGoogleMaps, {
          load: {
            key: GOOGLEMAPS_API_KEY,
          },
        });
      },

      handleDeny() {
        this.isOpen = false;
        this.deny();
      },

      handleAccept() {
        this.isOpen = false;
        this.accept();
      },

      ...mapActions({
        acceptConsent: 'acceptConsent',
        denyConsent: 'denyConsent',
      }),
    },
  };
</script>

<style>
  .cookie-law {
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    max-width: 1250px;
    width: calc(100% - 25px);
    margin: 0 auto;
    padding: 10px 25px;
    border-radius: 3px 3px 0 0;
    background-color: #212121;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }

  .cookie-law__content {
    margin-right: 35px;
    color: #ffffff;
    line-height: 26px;
  }

  .cookie-law__content a {
    color: #D9237F;
    text-decoration: none;
  }

  .cookie-law__content a:hover {
    text-decoration: underline;
  }

  .cookie-law__actions {
    display: flex;
    flex-shrink: 0;
  }

  .cookie-law__button {
    margin: 0 5px;
    padding: 15px 35px;
    background-color: #D9237F;
    color: #ffffff;
    border-radius: 3px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: box-shadow .3s ease;
  }

  .cookie-law__button:hover {
    background-color: #D9237F;
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 16px 0 rgba(0, 0, 0, 0.12);
  }

  .slideFromBottom-enter,
  .slideFromBottom-leave-to {
    transform: translate(0px, 12.500em);
  }

  .slideFromBottom-enter-to,
  .slideFromBottom-leave {
    transform: translate(0px, 0px);
  }

  .slideFromBottom-enter-active,
  .slideFromBottom-leave-active {
    transition: transform .4s ease-in;
  }

  @media (max-width: 1100px) {
    .cookie-law {
      flex-direction: column;
      align-items: center;
    }

    .cookie-law__content {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 800px) {
    .cookie-law__content {
      line-height: 24px;
    }

    .cookie-law__button {
      padding: 10px 35px;
    }
  }
</style>
