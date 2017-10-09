<template>
  <nav class="primary-menu">
    <router-link to="/"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.home") }}
    </router-link>
    <router-link v-if="isMobile"
                 to="/campground"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.campground") }}
    </router-link>
    <router-link to="/leisure"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.leisure") }}
    </router-link>
    <router-link to="/facilities"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.facilities") }}
    </router-link>
    <router-link v-if="isMobile"
                 to="/rentals"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.rentals") }}
    </router-link>
    <router-link to="/surroundings"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.surroundings") }}
    </router-link>
    <router-link v-if="isMobile"
                 to="/prices"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.prices") }}
    </router-link>
    <router-link v-if="isMobile"
                 to="/booking"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.booking") }}
    </router-link>
    <router-link v-if="lang === 'nl'"
                 to="/vacatures"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.vacatures") }}
    </router-link>
    <router-link to="/directions"
                 class="primary-menu__item"
                 @click.native="closeMenu">
      {{ $t("menu.directions") }}
    </router-link>
  </nav>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import { CLOSE_MOBILE_MENU } from '@/store/modules/menu/mutation-types';

  export default {
    name: 'l-primary-menu',

    props: {
      isMobile: {
        type: Boolean,
        required: false,
      },
    },

    computed: mapState({
      lang: state => state.i18n.lang,
    }),

    methods: mapActions({
      closeMenu: CLOSE_MOBILE_MENU,
    }),
  };
</script>

<style scoped>
  .primary-menu__item {
    position: relative;
    margin: 0 5px;
    padding: 5px;
    color: #ffffff;
    text-decoration: none;
  }

  .primary-menu__item:last-of-type {
    margin-right: 0;
  }

  .primary-menu__item:first-of-type {
    margin-left: 0;
  }

  .primary-menu__item::after {
    position: absolute;
    content: '';
    width: 0;
    height: 1px;
    left: 50%;
    bottom: 0;
    margin-top: 5px;
    background-color: #ffffff;
    transition: width .3s ease, left .3s ease;
  }

  .primary-menu__item.router-link-exact-active::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 600px) {
    .primary-menu {
      display: none;
    }

    .header__primary-menu--mobile .primary-menu {
      display: block;
    }

    .primary-menu__item {
      display: block;
      margin: 0;
      padding: 25px;
      color: #000000;
      background-color: transparent;
      border-bottom: 1px solid rgba(0, 0, 0, .05);
      transition: background-color .3s ease, border-bottom .3s ease;
    }

    .primary-menu__item.router-link-exact-active {
      background-color: rgba(0, 0, 0, .05);
      border-bottom: 1px solid transparent;
    }

    .primary-menu__item.router-link-exact-active::after {
      content: none;
    }
  }
</style>
