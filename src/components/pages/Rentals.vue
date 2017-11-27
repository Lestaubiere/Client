<template>
  <div class="rentals container">
    <div v-for="(section, index) in sections" :key="index">
      <l-section :section="section" />
      <div class="separator" v-if="index < sections.length -1" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import LSection from '@/components/core/Section';

  export default {
    name: 'l-rentals',

    metaInfo() {
      return {
        title: this.title,
      };
    },

    computed: {
      title() {
        return this.$i18n.t('rentals.meta.title');
      },
      sections() {
        return this.$i18n.t('rentals.sections');
      },
      ...mapState({
        lang: state => state.i18n.lang,
      }),
    },

    components: {
      LSection,
    },
  };
</script>

<style scoped>
  .rentals {
    padding: 0 25px;
  }

  @media (max-width: 600px) {
    .rentals {
      padding: 0 10px;
    }
  }
</style>
