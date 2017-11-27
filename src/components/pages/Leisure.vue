<template>
  <div class="leisure container">
    <div v-for="(section, index) in sections" :key="index">
      <l-section :section="section" />
      <div class="separator" v-if="index < sections.length -1" />
    </div>
  </div>
</template>

<script>
  import LSection from '@/components/core/Section';

  export default {
    name: 'l-leisure',

    metaInfo() {
      return {
        title: this.title,
      };
    },

    computed: {
      title() {
        return this.$i18n.t('leisure.meta.title');
      },
      sections() {
        return this.$i18n.t('leisure.sections');
      },
    },

    components: {
      LSection,
    },
  };
</script>

<style scoped>
  .leisure {
    padding: 0 25px;
  }

  @media (max-width: 600px) {
    .leisure {
      padding: 0 10px;
    }
  }
</style>
