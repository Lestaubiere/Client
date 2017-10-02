<template>
  <header class="header">
    <div
      :class="`header__primary-menu--mobile ${menuIsOpen ? 'header__primary-menu--mobile--is-visible' : ''}`">
      <l-primary-menu></l-primary-menu>
    </div>
    <div class="header__top-bar">
      <div class="header__top-bar-container container">
        <button class="header__mobile-menu-button" @click.prevent="openMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="header__logo-container">
          <img src="../../assets/logo_white.png" alt="Logo Camping Lestaubière"/>
        </div>
        <div class="header__primary-menu">
          <l-primary-menu></l-primary-menu>
          <l-language-picker></l-language-picker>
        </div>
      </div>
    </div>
    <div class="header__main-container container">
      <div class="header__left-container">
        <h1>Bienvenue au Camping Lestaubière</h1>
      </div>
      <div class="header__right-container">
        <l-header-widget></l-header-widget>
      </div>
    </div>
    <div class="header__secondary-menu container">
      <l-secondary-menu></l-secondary-menu>
    </div>
  </header>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from '@/store/modules/menu/mutation-types';

  import LPrimaryMenu from '@/components/header/PrimaryMenu';
  import LLanguagePicker from '@/components/header/LanguagePicker';
  import LHeaderWidget from '@/components/header/HeaderWidget';
  import LSecondaryMenu from '@/components/header/SecondaryMenu';

  export default {
    name: 'l-header',

    computed: mapState({
      menuIsOpen: state => state.menu.open,
    }),

    methods: mapActions({
      openMenu: OPEN_MOBILE_MENU,
      closeMenu: CLOSE_MOBILE_MENU,
    }),

    components: {
      LPrimaryMenu,
      LLanguagePicker,
      LHeaderWidget,
      LSecondaryMenu,
    },
  };
</script>

<style scoped>
  .header {
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url('../../assets/photos/image_1.jpg') center / cover;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .header__top-bar,
  .header__logo-container,
  .header__main-container,
  .header__left-container,
  .header__right-container {
    z-index: 1;
  }

  .header__top-bar {
    position: relative;
    margin-bottom: 75px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .header__top-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
  }

  .header__primary-menu {
    display: flex;
    align-items: center;
  }

  .header__main-container {
    display: flex;
    padding: 10px 25px;
  }

  .header__left-container {
    display: flex;
    align-items: center;
    flex-basis: 65%;
  }

  .header__right-container {
    flex-basis: 35%;
  }

  .header__left-container {
    margin-right: 25px;
  }

  .header__right-container {
    margin-left: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .header__left-container h1 {
    color: #ffffff;
    font-size: 2.5rem;
    line-height: 3.5rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  .header__secondary-menu {
    transform: translateY(50%);
  }

  .header__mobile-menu-button {
    display: flex;
    flex-direction: column;
  }

  .header__mobile-menu-button span {
    width: 30px;
    height: 3px;
    margin: 2px 0;
    background-color: #ffffff;
  }

  @media (min-width: 601px) {
    .header__primary-menu--mobile,
    .header__mobile-menu-button {
      display: none;
    }
  }

  @media (max-width: 960px) {
    .header__top-bar-container {
      flex-direction: column;
    }

    .header__logo-container {
      margin-bottom: 15px;
    }

    .header__left-container h1 {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  @media (max-width: 800px) {
    .header__top-bar {
      margin-bottom: 0;
    }

    .header__top-bar-container {
      padding: 10px;
    }

    .header__main-container {
      padding: 40px 10px;
    }

    .header__left-container h1 {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }

    .header__secondary-menu {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .header__top-bar-container {
      flex-direction: row;
    }

    .header__logo-container {
      margin-bottom: 0;
    }

    .header__main-container {
      flex-direction: column;
      align-items: center;
    }

    .header__left-container {
      flex-basis: 100%;
      margin-right: 0;
      margin-bottom: 15px;
    }

    .header__left-container {
      text-align: center;
    }

    .header__right-container {
      flex-basis: 100%;
      margin-left: 0;
    }

    .header__primary-menu--mobile {
      position: fixed;
      top: 0;
      bottom: 0;
      left: -100%;
      z-index: 3;
      background-color: #FFFFFF;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      transition: .3s ease;
    }

    .header__primary-menu--mobile.header__primary-menu--mobile--is-visible {
      left: 0;
    }
  }
</style>
