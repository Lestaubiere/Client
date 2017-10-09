<template>
</template>

<script>
  export default {
    name: 'l-prices',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('prices.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
