<template>
</template>

<script>
  export default {
    name: 'l-facilities',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('facilities.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
