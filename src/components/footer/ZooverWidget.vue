<template>
  <div class="zoover-widget">
    <div class="zoover-widget__container">
      <div class="zoover-widget__score-container">
        <span>{{ score }}</span>
      </div>
      <div class="zoover-widget__reviews-container">
        <a :href="url" target="_blank">{{ reviews }} Reviews</a>
      </div>
      <a :href="url" target="_blank">
        <img class="zoover-widget__logo" src="../../assets/icons/zoover.svg" alt="Zoover logo" />
      </a>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'l-zoover-widget',

    computed: {
      url() {
        return this.$i18n.t('footer.zoover');
      },
      ...mapState({
        score: state => state.zoover.score,
        reviews: state => state.zoover.reviews,
      }),
    },

    mounted() {
      this.fetZooverInformation();
    },

    methods: {
      ...mapActions({
        fetZooverInformation: 'fetZooverInformation',
      }),
    },
  };
</script>

<style>
  .zoover-widget {
    display: flex;
    justify-content: center;
  }

  .zoover-widget__container {
    padding: 20px 10px;
    background-color: #ffffff;
    border-radius: 3px;
    text-align: center;
  }

  .zoover-widget__score-container {
    display: inline-block;
    padding: 15px;
    color: #008FC5;
    border: 1px solid #008FC5;
    border-radius: 3px;
    font-size: 1.6em;
    font-weight: bold;
  }

  .zoover-widget__reviews-container {
    margin: 25px 0;
  }

  .zoover-widget__reviews-container a {
    color: #008FC5;
  }

  .zoover-widget__reviews-container a:visited {
    color: #008FC5;
  }

  .zoover-widget__logo {
    height: 50px;
  }
</style>
