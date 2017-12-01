<template>
  <footer class="footer">
    <div class="footer__widgets-container">
      <div class="footer__container container">
        <div class="footer__widget-column footer__widget-column--menu">
          <l-footer-menu />
        </div>
        <div class="footer__widget-column footer__widget-column--contact">
          <l-footer-contact />
        </div>
        <div class="footer__widget-column footer__widget-column--zoover">
          <l-zoover-widget />
        </div>
        <div class="footer__widget-column footer__widget-column--facebook">
          <l-facebook-widget />
        </div>
      </div>
    </div>
    <div class="footer__bottom-container">
      <div class="footer__container container">
        <div class="footer__left-column">
          <router-link :to="$t('menu.legalMentions.path')"
                        class="footer__link">
              {{ $t("menu.legalMentions.label") }}
            </router-link>
        </div>
        <div class="footer__copyright">© 2017 - SARL Lestaubière</div>
      </div>
    </div>
    <cookie-law :message="cookieMessage" :buttonText="cookieButton" />
  </footer>
</template>

<script>
  import CookieLaw from 'vue-cookie-law';

  import LFooterMenu from '@/components/footer/FooterMenu';
  import LFooterContact from '@/components/footer/FooterContact';
  import LZooverWidget from '@/components/footer/ZooverWidget';
  import LFacebookWidget from '@/components/footer/FacebookWidget';

  export default {
    name: 'l-footer',

    computed: {
      cookieMessage() {
        return this.$i18n.t('footer.cookie.message');
      },

      cookieButton() {
        return this.$i18n.t('footer.cookie.button');
      },
    },

    components: {
      CookieLaw,
      LFooterMenu,
      LFooterContact,
      LZooverWidget,
      LFacebookWidget,
    },
  };
</script>

<style>
  .footer {
    margin-top: 75px;
    color: #ffffff;
  }

  .footer__container {
    display: flex;
    justify-content: space-between;
    padding: 10px 25px;
  }

  .footer__widgets-container {
    padding: 25px 0;
    background-color: #212121;
  }

  .footer__bottom-container {
    padding: 10px 0;
    background-color: #1b1b1b;
    font-size: .9em;
  }

  .footer__left-column {
    display: flex;
  }

  .footer__link {
    color: rgba(255, 255, 255, .25);
    text-decoration: none;
  }

  .footer__link:hover {
    text-decoration: underline;
  }

  .footer__copyright {
    color: rgba(255, 255, 255, .25);
  }

  .Cookie.Cookie--base {
    max-width: 1250px;
    width: calc(100% - 10px);
    margin: 0 auto;
    padding: 10px 25px;
    border-radius: 3px 3px 0 0;
    background-color: #212121;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }

  .Cookie--base .Cookie__content {
    margin: 0;
    color: #ffffff;
    line-height: 26px;
  }

  .Cookie--base .Cookie__buttons .Cookie__button {
    padding: 15px 50px;
    background-color: #D9237F;
    color: #ffffff;
    border-radius: 3px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    transition: box-shadow .3s ease;
  }

  .Cookie--base .Cookie__buttons .Cookie__button:hover {
    background-color: #D9237F;
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 16px 0 rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 960px) {
    .footer__container {
      flex-wrap: wrap;
    }

    .footer__widget-column--menu {
      display: none;
    }

    .footer__widget-column {
      flex-basis: 45%;
      order: 1;
    }

    .footer__widget-column--contact {
      flex-basis: 100%;
      margin-top: 20px;
      text-align: center;
      order: 10;
    }
  }

  @media (max-width: 800px) {
    .footer {
      margin-top: 50px;
    }

    .Cookie--base .Cookie__content {
      line-height: 24px;
    }

    .Cookie--base .Cookie__buttons {
      margin: 5px 0 0;
    }

    .Cookie--base .Cookie__buttons .Cookie__button {
      padding: 10px 35px;
    }
  }

  @media (max-width: 600px) {
    .footer__container {
      flex-direction: column
    }

    .footer__widget-column:not(:last-of-type) {
      margin-bottom: 20px;
    }

    .footer__bottom-container {
      text-align: center;
    }

    .footer__left-column {
      margin-bottom: 20px;
      justify-content: center;
    }
  }
</style>
