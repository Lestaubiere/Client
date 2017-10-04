<template>
</template>

<script>
  export default {
    name: 'l-surroundings',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('surroundings.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
