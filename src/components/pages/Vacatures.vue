<template>
</template>

<script>
  export default {
    name: 'l-vacatures',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('vacatures.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
