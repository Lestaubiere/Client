<template>
  <div id="app">
    <l-header></l-header>
    <main>
      <router-view></router-view>
    </main>
    <l-footer></l-footer>
  </div>
</template>

<script>
  import LHeader from '@/components/header/Header';
  import LFooter from '@/components/footer/Footer';

  export default {
    name: 'app',
    metaInfo: {
      titleTemplate: '%s | Lestaubière',
    },
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

  .container {
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
