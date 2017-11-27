<template>
  <div class="surroundings container">
    <div v-for="(section, index) in sections" :key="index">
      <l-section :section="section" />
    </div>
    <div class="separator"></div>
    <h2 class="surroundings__subtitle">{{ subtitle }}</h2>
    <div class="surroundings__cards-container">
      <l-card class="surroundings__card"
            v-for="(card, index) in cards"
            :key="index"
            :title="card.name"
            :content="card.content"
            :imagePath="card.image_path"
            :color="card.color" />
    </div>
  </div>
</template>

<script>
  import LSection from '@/components/core/Section';
  import LCard from '@/components/core/Card';

  export default {
    name: 'l-surroundings',

    metaInfo() {
      return {
        title: this.title,
      };
    },

    computed: {
      title() {
        return this.$i18n.t('surroundings.meta.title');
      },
      subtitle() {
        return this.$i18n.t('surroundings.subtitle');
      },
      sections() {
        return this.$i18n.t('surroundings.sections');
      },
      cards() {
        return this.$i18n.t('surroundings.cards');
      },
    },

    components: {
      LSection,
      LCard,
    },
  };
</script>

<style scoped>
  .surroundings {
    padding: 0 25px;
  }

  .surroundings__row {
    display: flex;
    flex-wrap: wrap;
  }

  .surroundings__paragraph-container {
    order: 2;
    flex-basis: 100%;
    margin-top: 75px;
  }

  .surroundings__image-container,
  .surroundings__content-container {
    order: 1;
    flex-basis: 50%;
  }

  .surroundings__image-container {
    display: flex;
    align-items: center;
    padding-right: 35px;
  }

  .surroundings__image {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .surroundings__image > img {
    position: absolute;
    max-height: 100%;
    max-width: none;
    right: 0;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  .surroundings__content-container {
    padding: 35px 0 35px 35px;
  }

  .surroundings__subtitle {
    margin-top: 50px;
  }

  .surroundings__cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .surroundings__card {
    flex-basis: 30%;
  }

  @media (max-width: 960px) {
    .surroundings__row {
      flex-direction: column;
    }

    .surroundings__image-container {
      order: 10;
    }

    .surroundings__image > img {
      position: initial;
      max-width: 100%;
    }

    .surroundings__image-container {
      padding-right: 0;
      margin-top: 35px;
    }

    .surroundings__content-container {
      padding: 0;
      margin-bottom: 15px;
    }

    .surroundings__paragraph-container {
      margin-top: 0;
    }

    .surroundings__card {
      flex-basis: calc(50% - 100px);
    }
  }

  @media (max-width: 800px) {
    .surroundings__card {
      flex-basis: 100%;
    }
  }

  @media (max-width: 600px) {
    .surroundings {
      padding: 0 10px;
    }
  }
</style>
