<template>
</template>

<script>
  export default {
    name: 'l-leisure',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('leisure.meta.title');
      },
    },
  };
</script>

<style scoped>
</style>
