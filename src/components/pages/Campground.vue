<template>
  <div class="campground container">
    <div class="campground__section">
      <h1>{{ phototourSectionTitle }} - <span>{{ phototourSectionSubtitle }}</span></h1>
      <svg viewBox="0 0 1250 950"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
        <image href="static/img/phototour/Phototour.png" width="1250" height="950"/>
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
    <div class="campground__section">
      <div class="campground__cards-container">
        <card class="campground__card"
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
    name: 'l-campground',

    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('campground.meta.title');
      },
      phototourSectionTitle() {
        return this.$i18n.t('campground.sections.phototour.title');
      },
      phototourSectionSubtitle() {
        return this.$i18n.t('campground.sections.phototour.subtitle');
      },
      cards() {
        return this.$i18n.t('campground.cards');
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
  .campground {
    padding: 0 25px;
  }

  .campground h1 {
    display: flex;
    align-items: center;
    margin-bottom: 75px;
  }

  .campground h1 span {
    margin-left: 15px;
    font-size: 0.5em;
  }

  .campground__cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .campground__card {
    flex-basis: 30%;
  }

  @media (max-width: 600px) {
    .campground {
      padding: 0 10px;
    }
  }
</style>
