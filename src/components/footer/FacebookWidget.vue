<template>
  <div class="facebook-widget">
    <div class="fb-page"
         data-href="https://www.facebook.com/CampingLestaubiere/"
         data-tabs="timeline"
         data-height="350"
         data-small-header="true"
         data-adapt-container-width="true"
         data-hide-cover="false"
         data-show-facepile="false">
      <blockquote cite="https://www.facebook.com/CampingLestaubiere/" class="fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/CampingLestaubiere/">Camping Lestaubiere</a>
      </blockquote>
    </div>
  </div>
</template>

<script>
  import { FB_APP_ID } from '@/config/config';

  export default {
    name: 'l-facebook-widget',

    mounted() {
      window.fbAsyncInit = () => {
        FB.init({
          appId: FB_APP_ID,
          xfbml: true,
          version: 'v2.11',
        });
      };

      (function (d, s, id) {
        let js = {};
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    },
  };
</script>

<style scoped>
</style>
