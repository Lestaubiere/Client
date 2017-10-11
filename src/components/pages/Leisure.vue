<template>
  <div class="leisure container">
    <l-section
      :index="0"
      :images="sportsSectionSlider"
      :title="sportsSectionTitle"
      :content="sportsSectionContent"
      :list="sportsSectionList"></l-section>
    <div class="separator"></div>
    <l-section
      :index="1"
      :images="swimmingSectionSlider"
      :title="swimmingSectionTitle"
      :content="swimmingSectionContent"
      :list="swimmingSectionList"></l-section>
    <div class="separator"></div>
    <l-section
      :index="2"
      :images="animationSectionSlider"
      :title="animationSectionTitle"
      :content="animationSectionContent"></l-section>
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
      sportsSectionTitle() {
        return this.$i18n.t('leisure.sections.sports.title');
      },
      sportsSectionContent() {
        return this.$i18n.t('leisure.sections.sports.content');
      },
      sportsSectionList() {
        return this.$i18n.t('leisure.sections.sports.list');
      },
      sportsSectionSlider() {
        return this.$i18n.t('leisure.sections.sports.slider');
      },
      swimmingSectionTitle() {
        return this.$i18n.t('leisure.sections.swimming.title');
      },
      swimmingSectionContent() {
        return this.$i18n.t('leisure.sections.swimming.content');
      },
      swimmingSectionList() {
        return this.$i18n.t('leisure.sections.swimming.list');
      },
      swimmingSectionSlider() {
        return this.$i18n.t('leisure.sections.swimming.slider');
      },
      animationSectionTitle() {
        return this.$i18n.t('leisure.sections.animation.title');
      },
      animationSectionContent() {
        return this.$i18n.t('leisure.sections.animation.content');
      },
      animationSectionSlider() {
        return this.$i18n.t('leisure.sections.animation.slider');
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
