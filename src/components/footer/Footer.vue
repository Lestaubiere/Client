<template>
  <footer class="footer">
    <div class="footer__widgets-container">
      <div class="footer__container container">
        <div class="footer__widget-column">
        </div>
        <div class="footer__widget-column">
          <l-zoover-widget />
        </div>
        <div class="footer__widget-column">
          <l-facebook-widget />
        </div>
      </div>
    </div>
    <div class="footer__bottom-container">
      <div class="footer__container container">
        <div class="footer__left-column">Copyright © 2017</div>
        <div class="footer__right-column">Last updated at: {{updatedAt}}</div>
      </div>
    </div>
  </footer>
</template>

<script>
  import deployment from '@/config/deployment.json';

  import LFacebookWidget from '@/components/footer/FacebookWidget';
  import LZooverWidget from '@/components/footer/ZooverWidget';

  export default {
    name: 'l-footer',

    data() {
      return {
        updatedAt: deployment.updated_at,
      };
    },

    components: {
      LFacebookWidget,
      LZooverWidget,
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
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
  }

  .footer__widgets-container {
    padding: 25px 0;
    background-color: #292929;
  }

  .footer__widget-column {
    flex-basis: 25%;
  }

  .footer__widget-column:first-of-type {
    flex-basis: 50%;
  }

  .footer__bottom-container {
    background-color: #262525;
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

    .footer__left-column {
      margin-bottom: 15px;
    }
  }
</style>
