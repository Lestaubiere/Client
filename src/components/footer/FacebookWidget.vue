<template>
  <div class="facebook-widget">
    <div class="facebook-widget__container">
      <div class="fb-page"
          data-href="https://www.facebook.com/CampingLestaubiere/"
          data-tabs="timeline"
          data-width="300"
          data-height="350"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false">
        <blockquote cite="https://www.facebook.com/CampingLestaubiere/" class="fb-xfbml-parse-ignore">
          <a class="fb-xfbml-parse-ignore facebook-widget__mobile" href="https://www.facebook.com/CampingLestaubiere/" target="_blank">
            <img src="../../assets/icons/facebook.svg" alt="Facebook logo">
            <span>{{ $t('footer.facebook') }}</span>
          </a>  
        </blockquote>
      </div>
    </div>
    <div class="facebook-widget__container facebook-widget__container--mobile">
      <a class="facebook-widget__mobile" href="https://www.facebook.com/CampingLestaubiere/" target="_blank">
        <img src="../../assets/icons/facebook.svg" alt="Facebook logo">
        <span>{{ $t('footer.facebook') }}</span>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import { FB_APP_ID } from '@/config/config';

  export default {
    name: 'l-facebook-widget',

    computed: {
      ...mapState({
        hasConsent: state => state.app.hasConsent,
      }),
    },

    watch: {
      hasConsent(newConsent, oldConsent) {
        if (!oldConsent && newConsent) {
          this.loadFacebook();
        }
      },
    },

    mounted() {
      if (this.hasConsent) {
        this.loadFacebook();
      }
    },

    methods: {
      loadFacebook() {
        window.fbAsyncInit = () => {
          FB.init({
            appId: FB_APP_ID,
            xfbml: true,
            version: 'v2.11',
          });
        };
  
        // eslint-disable-next-line func-names
        (function (d, s, id) {
          let js = {};
          const fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = '//connect.facebook.net/en_US/sdk.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      },
    },
  };
</script>

<style scoped>
  .facebook-widget {
    display: flex;
    justify-content: center;
  }

  .fb-page {
    width: 300px;
  }

  .facebook-widget__container--mobile {
    display: none;
  }

  .facebook-widget__mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    background-color: #3B5998;
    border-radius: 3px;
    text-decoration: none;
  }

  .facebook-widget__mobile img {
    max-width: 200px;
    margin-bottom: 15px;
  }

  .facebook-widget__mobile span {
    color: #ffffff;
  }

  @media (max-width: 600px) {
    .facebook-widget__container:not(.facebook-widget__container--mobile) {
      display: none;
    }

    .facebook-widget__container--mobile {
      display: flex;
      flex-direction: column;
    }
  }
</style>
