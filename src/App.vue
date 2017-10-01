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
</style>
