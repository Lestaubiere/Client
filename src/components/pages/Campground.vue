<template>
</template>

<script>
  export default {
    name: 'l-campground',

    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('campground.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
