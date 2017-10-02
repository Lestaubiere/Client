<template>
  <div id="app">
    <l-header></l-header>
    <main>
      <router-view></router-view>
      <div :class="`overlay ${menuIsOpen ? 'overlay--is-active' : ''}`" @click.prevent="closeMenu"></div>
    </main>
    <l-footer></l-footer>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import { CLOSE_MOBILE_MENU } from '@/store/modules/menu/mutation-types';

  import LHeader from '@/components/header/Header';
  import LFooter from '@/components/footer/Footer';

  export default {
    name: 'app',

    metaInfo: {
      titleTemplate: '%s | Lestaubière',
    },

    computed: mapState({
      menuIsOpen: state => state.menu.open,
    }),

    methods: mapActions({
      closeMenu: CLOSE_MOBILE_MENU,
    }),

    components: {
      LFooter,
      LHeader,
    },
  };
</script>

<style>
  @import '~reset-css/reset.css';

  body {
    font-family: 'Lato', 'Helvetica', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  button {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-appearance: button;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  [id="app"] {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    background-color: rgba(255, 255, 255, .35);
    visibility: hidden;
    transition: .3s;
  }

  .overlay.overlay--is-active {
    opacity: 1;
    visibility: visible;
  }

  .container {
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
