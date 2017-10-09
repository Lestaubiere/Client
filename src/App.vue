<template>
  <div id="app" :class="menuIsOpen ? 'no-scroll' : ''">
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
    font-family: 'Open Sans', 'Helvetica', sans-serif;
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

  .no-scroll {
    position: fixed;
    overflow-y: hidden;
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

  .paragraph {
    line-height: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .paragraph:not(:last-of-type) {
    margin-bottom: 15px;
  }

  img {
    max-width: 100%;
  }

  h1 {
    position: relative;
    max-width: 800px;
    margin: 0 auto 35px auto;
    padding-bottom: 10px;
    font-size: 2.25rem;
  }

  h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #D9237F;
  }

  h2 {
    position: relative;
    max-width: 800px;
    margin: 0 auto 35px auto;
    padding-bottom: 10px;
    font-size: 1.6rem;
  }

  h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35px;
    height: 2px;
    background-color: #D9237F;
  }

  .separator {
    max-width: 800px;
    margin: 50px auto;
    height: 1px;
    background-color: rgba(0, 0, 0, .1);
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }
</style>
