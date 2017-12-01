<template>
  <div class="campsite container">
    <div class="campsite__section campsite__section--fototour">
      <h1>{{ phototourSectionTitle }} - <span>{{ phototourSectionSubtitle }}</span></h1>
      <svg viewBox="0 0 1250 950"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
        <image xlink:href="/static/img/phototour/Phototour.png" width="1250" height="950"/>
        <MapItem
          v-for="(item, index) in phototour"
          :key="index"
          :imagePath="item.image"
          :transform="item.transform"
          :cx="item.cx"
          :cy="item.cy"
          :rx="item.rx"
          :ry="item.ry" />
      </svg>
    </div>
    <div class="separator" />
    <div class="campsite__section">
      <div class="campsite__cards-container">
        <card class="campsite__card"
                v-for="(card, index) in cards"
                :key="index"
                :title="card.name"
                :link="card.link"
                :linkLabel="card.linkLabel"
                :imagePath="card.image_path"
                :color="card.color" />
      </div>
    </div>
  </div>
</template>

<script>
  import phototour from '@/config/phototour.json';

  import MapItem from '@/components/core/MapItem';
  import Card from '@/components/core/Card';

  export default {
    name: 'l-campsite',

    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('campsite.meta.title');
      },
      phototourSectionTitle() {
        return this.$i18n.t('campsite.sections.phototour.title');
      },
      phototourSectionSubtitle() {
        return this.$i18n.t('campsite.sections.phototour.subtitle');
      },
      cards() {
        return this.$i18n.t('campsite.cards');
      },
      phototour() {
        return phototour;
      },
    },

    components: {
      MapItem,
      Card,
    },
  };
</script>

<style scoped>
  .campsite {
    padding: 0 25px;
  }

  .campsite h1 {
    display: flex;
    align-items: center;
    margin-bottom: 75px;
  }

  .campsite h1 span {
    margin-left: 15px;
    font-size: 0.5em;
  }

  .campsite__cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .campsite__card {
    flex-basis: 30%;
  }

  @media (max-width: 960px) {
    .campsite__card {
      flex-basis: calc(50% - 100px);
    }
  }

  @media (max-width: 800px) {
    .campsite__section--fototour,
    .separator {
      display: none;
    }

    .campsite__card {
      flex-basis: 100%;
    }
  }

  @media (max-width: 600px) {
    .campsite {
      padding: 0 10px;
    }
  }
</style>
