<template>
</template>

<script>
  export default {
    name: 'l-rentals',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('rentals.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
