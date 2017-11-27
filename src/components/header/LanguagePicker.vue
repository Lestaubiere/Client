<template>
  <div class="language-picker">
    <button class="language-picker__item" v-for="locale in locales" :key="locale" @click="handleClick(locale)">
      <img :src="require(`../../assets/icons/${locale}.svg`)" :alt="`Flag ${locale}`">
    </button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'l-language-picker',

    computed: mapState({
      lang: state => state.i18n.lang,
      locales: state => state.i18n.locales,
    }),

    methods: {
      handleClick(locale) {
        if (locale !== this.lang) {
          this.changeLanguage(locale);
        }
      },
      ...mapActions({
        changeLanguage: 'changeLanguage',
      }),
    },
  };
</script>

<style scoped>
  .language-picker {
    display: flex;
    margin-left: 25px;
    padding: 5px 5px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
  }

  .language-picker__item {
    display: flex;
    align-items: center;
    margin: 0 5px;
    color: #ffffff;
    cursor: pointer;
  }

  .language-picker__item img {
    width: 25px;
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

    .language-picker__item img {
      width: 30px;
    }
  }

  @media (max-width: 800px) {
    .language-picker {
      position: initial;
    }

    .language-picker__item img {
      width: 35px;
    }
  }
</style>
