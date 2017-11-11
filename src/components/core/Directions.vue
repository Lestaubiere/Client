<template>
  <div class="directions">
    <form class="directions__form" @submit.prevent="handleSubmit">
      <input id="direction-departure" class="directions__input" type="text" :placeholder="placeholder" :value="departure" @input="handleChange" />
      <input class="directions__submit" type="submit" :value="button" :disabled="departure.length === 0" />
    </form>
    <div class="directions__loader-container" v-if="loading">
      <clip-loader :color="'#D9237F'"></clip-loader>
    </div>
    <div class="directions__container" v-if="!loading && Object.keys(route).length > 0">
      <div class="directions__information-container">
        <p class="directions__information">
          <span class="directions__information-icon">
            <img src="../../assets/icons/duration.svg" alt="Duration icon" />
          </span>
          <span class="directions__information-value">{{ formattedDuration(route.duration) }}</span>
        </p>
        <p class="directions__information">
          <span class="directions__information-icon">
            <img src="../../assets/icons/distance.svg" alt="Distance icon" />
          </span>
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
    <div class="directions__error" v-if="!loading && (error || Object.keys(route).length === 0)">
      <p class="directions__error-message" v-if="!error && Object.keys(route).length === 0">{{ initialMessage }}</p>
      <p class="directions__error-message" v-if="error === ERROR_404">{{ notFoundMessage }}</p>
      <p class="directions__error-message" v-if="error === ERROR_500">{{ errorMessage }}</p>
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
        departure: state => state.map.departure,
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
      placeholder() {
        return this.$i18n.t('contact.map.placeholder');
      },
      button() {
        return this.$i18n.t('contact.map.button');
      },
      initialMessage() {
        return this.$i18n.t('contact.map.messages.initial');
      },
      notFoundMessage() {
        return this.$i18n.t('contact.map.messages.not_found');
      },
      errorMessage() {
        return this.$i18n.t('contact.map.messages.error');
      },
    },

    methods: {
      handleChange(e) {
        this.setDeparture(e.target.value);
      },

      handleSubmit() {
        this.fetchMapDirections([this.departure, this.language]);
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
        setDeparture: 'setDeparture',
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
    border-radius: 0;
    cursor: pointer;
    transition: .2s ease;
  }

  .directions__submit:disabled {
    background-color: rgba(0, 0, 0, .4);
    cursor: default;
  }

  .directions__information-container {
    display: flex;
    padding: 10px 25px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .directions__information {
    display: flex;
    align-items: center;
    margin-right: 25px;
  }

  .directions__information-icon {
    width: 20px;
    margin-right: 8px;
  }

  .directions__information-label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .directions__steps {
    padding: 10px;
    max-height: 373px;
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
