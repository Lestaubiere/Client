<template>
  <header class="header">
    <div class="header__top-bar">
      <div class="header__top-bar-container container">
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
  import LPrimaryMenu from '@/components/header/PrimaryMenu';
  import LLanguagePicker from '@/components/header/LanguagePicker';
  import LHeaderWidget from '@/components/header/HeaderWidget';
  import LSecondaryMenu from '@/components/header/SecondaryMenu';

  export default {
    name: 'l-header',
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

  .header__left-container,
  .header__right-container {
    flex-basis: 50%;
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
</style>
