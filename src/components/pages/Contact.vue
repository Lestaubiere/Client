<template>
  <div class="contact container">
    <l-map />
  </div>
</template>

<script>
  import LMap from '@/components/core/Map';

  export default {
    name: 'l-contact',
    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('contact.meta.title');
      },
    },

    components: {
      LMap,
    },
  };
</script>

<style scoped>
  .contact {
    padding: 0 25px;
  }

  @media (max-width: 600px) {
    .contact {
      padding: 0 10px;
    }
  }
</style>
