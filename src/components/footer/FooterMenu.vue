<template>
  <div class="footer-menu">
    <h3 class="footer-menu__title">Menu</h3>
    <nav class="footer-menu__container">
      <router-link :to="$t('menu.campground.path')"
                  class="footer-menu__item">
        {{ $t("menu.campground.label") }}
      </router-link>
      <router-link :to="$t('menu.leisure.path')"
                  class="footer-menu__item">
        {{ $t("menu.leisure.label") }}
      </router-link>
      <router-link :to="$t('menu.facilities.path')"
                  class="footer-menu__item">
        {{ $t("menu.facilities.label") }}
      </router-link>
      <router-link :to="$t('menu.rentals.path')"
                  class="footer-menu__item">
        {{ $t("menu.rentals.label") }}
      </router-link>
      <router-link :to="$t('menu.surroundings.path')"
                  class="footer-menu__item">
        {{ $t("menu.surroundings.label") }}
      </router-link>
      <router-link :to="$t('menu.prices.path')"
                  class="footer-menu__item">
        {{ $t("menu.prices.label") }}
      </router-link>
      <router-link :to="$t('menu.booking.path')"
                  class="footer-menu__item">
        {{ $t("menu.booking.label") }}
      </router-link>
      <router-link :to="$t('menu.contact.path')"
                  class="footer-menu__item">
        {{ $t("menu.contact.label") }}
      </router-link>
    </nav>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'l-footer-menu',

    computed: {
      ...mapState({
        lang: state => state.i18n.lang,
      }),
    },
  };
</script>

<style scoped>
  .footer-menu__title {
    margin-bottom: 20px;
    font-size: 1.3em;
  }

  .footer-menu__container {
    display: flex;
    flex-direction: column;
    font-size: .9em;
  }

  .footer-menu__item {
    margin: 6px 0;
    color: #ffffff;
    text-decoration: none;
  }

  .footer-menu__item:hover {
    text-decoration: underline;
  }
</style>
