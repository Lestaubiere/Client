<template>
  <div class="rentals container">
    <l-section
      :index="0"
      :images="mobilhomesSectionSlider"
      :title="mobilhomesSectionTitle"
      :content="mobilhomesSectionContent"
      :actions="mobilhomesSectionActions"></l-section>
    <div v-if="lang === 'nl'" class="separator"></div>
    <l-section
      v-if="lang === 'nl'"
      :index="1"
      :images="greencampSectionSlider"
      :title="greencampSectionTitle"
      :content="greencampSectionContent"
      :actions="greencampSectionActions"></l-section>
    <div v-if="lang === 'nl'" class="separator"></div>
    <l-section
      v-if="lang === 'nl'"
      :index="2"
      :images="villatentSectionSlider"
      :title="villatentSectionTitle"
      :content="villatentSectionContent"
      :actions="villatentSectionActions"></l-section>
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
      mobilhomesSectionTitle() {
        return this.$i18n.t('rentals.sections.mobilhomes.title');
      },
      mobilhomesSectionContent() {
        return this.$i18n.t('rentals.sections.mobilhomes.content');
      },
      mobilhomesSectionActions() {
        return this.$i18n.t('rentals.sections.mobilhomes.actions');
      },
      mobilhomesSectionSlider() {
        return this.$i18n.t('rentals.sections.mobilhomes.slider');
      },
      greencampSectionTitle() {
        return this.$i18n.t('rentals.sections.greencamp.title');
      },
      greencampSectionContent() {
        return this.$i18n.t('rentals.sections.greencamp.content');
      },
      greencampSectionActions() {
        return this.$i18n.t('rentals.sections.greencamp.actions');
      },
      greencampSectionSlider() {
        return this.$i18n.t('rentals.sections.greencamp.slider');
      },
      villatentSectionTitle() {
        return this.$i18n.t('rentals.sections.villatent.title');
      },
      villatentSectionContent() {
        return this.$i18n.t('rentals.sections.villatent.content');
      },
      villatentSectionActions() {
        return this.$i18n.t('rentals.sections.villatent.actions');
      },
      villatentSectionSlider() {
        return this.$i18n.t('rentals.sections.villatent.slider');
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
