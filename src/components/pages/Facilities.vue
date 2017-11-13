<template>
  <div class="facilities container">
    <l-section
      :index="0"
      :images="sportsSectionSlider"
      :title="sportsSectionTitle"
      :content="sportsSectionContent"></l-section>
    <div class="separator"></div>
    <l-section
      :index="1"
      :images="sanitarySectionSlider"
      :title="sanitarySectionTitle"
      :content="sanitarySectionContent"></l-section>
    <div class="separator"></div>
    <l-section
      :index="2"
      :images="mediaSectionSlider"
      :title="mediaSectionTitle"
      :content="mediaSectionContent"></l-section>
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
      sportsSectionTitle() {
        return this.$i18n.t('facilities.sections.food.title');
      },
      sportsSectionContent() {
        return this.$i18n.t('facilities.sections.food.content');
      },
      sportsSectionSlider() {
        return this.$i18n.t('facilities.sections.food.slider');
      },
      sanitarySectionTitle() {
        return this.$i18n.t('facilities.sections.sanitary.title');
      },
      sanitarySectionContent() {
        return this.$i18n.t('facilities.sections.sanitary.content');
      },
      sanitarySectionSlider() {
        return this.$i18n.t('facilities.sections.sanitary.slider');
      },
      mediaSectionTitle() {
        return this.$i18n.t('facilities.sections.media.title');
      },
      mediaSectionContent() {
        return this.$i18n.t('facilities.sections.media.content');
      },
      mediaSectionSlider() {
        return this.$i18n.t('facilities.sections.media.slider');
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
