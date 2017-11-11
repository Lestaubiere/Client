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
          <p>Last updated at: {{updatedAt}}</p>
        </div>
        <div class="footer__copyright">© 2017 - SARL Lestaubière</div>
      </div>
    </div>
  </footer>
</template>

<script>
  import deployment from '@/config/deployment.json';

  import LFooterMenu from '@/components/footer/FooterMenu';
  import LFooterContact from '@/components/footer/FooterContact';
  import LZooverWidget from '@/components/footer/ZooverWidget';
  import LFacebookWidget from '@/components/footer/FacebookWidget';

  export default {
    name: 'l-footer',

    data() {
      return {
        updatedAt: deployment.updated_at,
      };
    },

    components: {
      LFooterMenu,
      LFooterContact,
      LZooverWidget,
      LFacebookWidget,
    },
  };
</script>

<style scoped>
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
  .footer__copyright {
    color: rgba(255, 255, 255, .25);
  }

  @media (max-width: 960px) {
    .footer__widget-column--menu,
    .footer__widget-column--contact {
      display: none;
    }

    .footer__widget-column {
      flex-basis: 50%;
    }
  }

  @media (max-width: 800px) {
    .footer {
      margin-top: 50px;
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
    }
  }
</style>
