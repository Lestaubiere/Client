<template>
  <div class="surroundings container">
    <div class="surroundings__content-container">
      <h1>{{ title }}</h1>
      <p class="paragraph"
        v-for="(paragraph, index) in mainContent"
        :key="index">
        {{ paragraph }}
      </p>
    </div>
    <div class="separator"></div>
    <h2 class="surroundings__subtitle">{{ subtitle }}</h2>
    <div class="surroundings__cards-container">
      <card class="surroundings__card"
            v-for="(card, index) in cards"
            :key="index"
            :title="card.name"
            :content="card.content"
            :imagePath="card.image_path"
            :color="card.color">
      </card>
    </div>
  </div>
</template>

<script>
  import Card from '@/components/core/Card';

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
      mainContent() {
        return this.$i18n.t('surroundings.content');
      },
      cards() {
        return this.$i18n.t('surroundings.cards');
      },
    },

    components: {
      Card,
    },
  };
</script>

<style scoped>
  .surroundings {
    padding: 0 25px;
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
