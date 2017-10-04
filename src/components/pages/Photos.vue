<template>
</template>

<script>
  export default {
    name: 'l-photos',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('photos.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
