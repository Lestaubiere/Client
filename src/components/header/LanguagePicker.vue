<template>
  <div class="language-picker">
    <button class="language-picker__item" v-for="locale in locales" :key="locale" @click="changeLocale(locale)">
      <img :src="require(`../../assets/icons/${locale}.png`)" :alt="locale">
      <span :class="`language-picker__icon language-picker__icon--${locale}`"></span>
    </button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import SET_LANGUAGE from '@/store/modules/i18n/mutation-types';

  export default {
    name: 'l-language-picker',

    computed: mapState({
      locales: state => state.i18n.locales,
    }),

    methods: mapActions({
      changeLocale: SET_LANGUAGE,
    }),
  };
</script>

<style scoped>
  .language-picker {
    margin-left: 25px;
    padding: 3px 5px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
  }

  .language-picker__item {
    margin: 0 2px;
    color: #ffffff;
    cursor: pointer;
  }

  .header__primary-menu--mobile .language-picker {
    margin-left: 0;
    padding: 0;
  }

  .header__primary-menu--mobile .language-picker button:first-of-type {
    margin-left: 0;
  }

  .header__primary-menu--mobile .language-picker button:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 960px) {
    .language-picker {
      position: absolute;
      top: 15px;
      right: 15px;
    }

    .language-picker__item {
      margin: 0 5px;
    }
  }

  @media (max-width: 600px) {
    .language-picker {
      position: initial;
    }
  }
</style>
