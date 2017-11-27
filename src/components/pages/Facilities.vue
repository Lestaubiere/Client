<template>
  <div class="facilities container">
    <div v-for="(section, index) in sections" :key="index">
      <l-section :section="section" />
      <div class="separator" v-if="index < sections.length -1" />
    </div>
  </div>
</template>

<script>
  import LSection from '@/components/core/Section';

  export default {
    name: 'l-facilities',

    metaInfo() {
      return {
        title: this.title,
      };
    },

    computed: {
      title() {
        return this.$i18n.t('facilities.meta.title');
      },
      sections() {
        return this.$i18n.t('facilities.sections');
      },
    },

    components: {
      LSection,
    },
  };
</script>

<style scoped>
  .facilities {
    padding: 0 25px;
  }

  @media (max-width: 600px) {
    .facilities {
      padding: 0 10px;
    }
  }
</style>
