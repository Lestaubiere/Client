<template>
</template>

<script>
  export default {
    name: 'l-directions',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('directions.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
