<template>
  <div class="campground container">
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
</template>

<script>
  import phototour from '@/config/phototour.json';

  import MapItem from '@/components/core/MapItem';

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

      phototour() {
        return phototour;
      },
    },

    components: {
      MapItem,
    },
  };
</script>

<style scoped>
  .campground {
    padding: 0 25px;
  }

  @media (max-width: 600px) {
    .campground {
      padding: 0 10px;
    }
  }
</style>
