<template>
  <nav class="primary-menu">
    <router-link :to="$t('menu.home.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.home.label") }}
    </router-link>
    <router-link v-if="isMobile"
                 :to="$t('menu.campsite.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.campsite.label") }}
    </router-link>
    <router-link :to="$t('menu.leisure.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.leisure.label") }}
    </router-link>
    <router-link :to="$t('menu.facilities.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.facilities.label") }}
    </router-link>
    <router-link v-if="isMobile"
                 :to="$t('menu.rentals.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.rentals.label") }}
    </router-link>
    <router-link :to="$t('menu.surroundings.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.surroundings.label") }}
    </router-link>
    <router-link v-if="isMobile"
                 :to="$t('menu.prices.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.prices.label") }}
    </router-link>
    <router-link v-if="isMobile"
                 :to="$t('menu.booking.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.booking.label") }}
    </router-link>
    <router-link v-if="lang === 'nl'"
                 :to="$t('menu.vacatures.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.vacatures.label") }}
    </router-link>
    <router-link :to="$t('menu.contact.path')"
                 class="primary-menu__item"
                 @click.native="handleClick">
      {{ $t("menu.contact.label") }}
    </router-link>
  </nav>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

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
      open: state => state.menu.open,
    }),

    methods: {
      handleClick() {
        if (this.open) {
          this.closeMenu();
        }
      },
      ...mapActions({
        closeMenu: 'closeMenu',
      }),
    },
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

  @media (max-width: 800px) {
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
