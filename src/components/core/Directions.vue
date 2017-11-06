<template>
  <div class="directions">
    <form class="directions__form" @submit.prevent="handleSubmit">
      <input id="direction-departure" class="directions__input" type="text" placeholder="Departure" />
      <input class="directions__submit" type="submit" value="Go" />
    </form>
    <div class="directions__loader-container" v-if="loading">
      <clip-loader :color="'#D9237F'"></clip-loader>
    </div>
    <div class="directions__container" v-if="!loading && Object.keys(route).length > 0">
      <div class="directions__information-container">
        <p class="directions__information">
          <span class="directions__information-label">Duration</span>
          <span class="directions__information-value">{{ formattedDuration(route.duration) }}</span>
        </p>
        <p class="directions__information">
          <span class="directions__information-label">Distance</span>
          <span class="directions__information-value">{{ formattedDistance(route.distance) }}</span>
        </p>
      </div>
      <div class="directions__steps">
        <l-direction-item
          v-for="(step, index) in route.steps"
          :key="index"
          :step="step" />
      </div>
    </div>
    <div class="directions__error" v-if="error">
      <p class="directions__error-message" v-if="error === ERROR_404">No Directions were found for this place</p>
      <p class="directions__error-message" v-if="error === ERROR_500">There was an error when trying to fetch the Directions. Please try again later.</p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import ClipLoader from 'vue-spinner/src/ClipLoader';

  import { ERROR_404, ERROR_500 } from '@/config/config';

  import LDirectionItem from '@/components/core/DirectionItem';

  export default {
    name: 'l-directions',

    computed: {
      ...mapState({
        loading: state => state.map.loading,
        route: state => state.map.route,
        error: state => state.map.error,
        language: state => state.i18n.lang,
      }),
      ERROR_404() {
        return ERROR_404;
      },
      ERROR_500() {
        return ERROR_500;
      },
    },

    methods: {
      handleSubmit(e) {
        const value = e.target.elements[0].value;
        this.fetchMapDirections([value, this.language]);
      },
      formattedDuration(duration) {
        const minutes = Math.floor((duration % 3600) / 60);
        const hours = Math.floor(duration / 3600);
        return `${hours}h ${minutes}min`;
      },
      formattedDistance(distance) {
        const kilometers = Math.round(distance / 1000);
        return `${kilometers} km`;
      },
      ...mapActions({
        fetchMapDirections: 'fetchMapDirections',
      }),
    },

    components: {
      ClipLoader,
      LDirectionItem,
    },
  };
</script>

<style scoped>
  .directions {
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
  }

  .directions__form {
    display: flex;
    flex-shrink: 0;
  }

  .directions__input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .directions__submit {
    padding: 5px 20px;
    background-color: #D9237F;
    color: #ffffff;
  }

  .directions__information-container {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .directions__information {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
  }

  .directions__information-label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .directions__steps {
    padding: 10px;
    max-height: 350px;
    overflow-y: scroll;
  }

  .directions__loader-container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    min-height: 100px;
  }

  .directions__error {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    padding: 10px;
    text-align: center;
    line-height: 30px;
    color: rgba(0, 0, 0, .4);
  }

  @media (max-width: 960px) {
    .directions {
      flex-basis: auto;
    }

    .directions__submit {
      padding: 20px 50px;
    }
  }

  @media (max-width: 600px) {
    .directions__form {
      flex-direction: column;
    }

    .directions__input {
      padding: 20px;
      text-align: center;
    }
  }
</style>
