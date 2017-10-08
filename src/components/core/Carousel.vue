<template>
  <carousel class="carousel"
            :perPage="1"
            :perPageCustom="[[600, 2], [800, 3], [960, 4]]"
            :navigationEnabled="true"
            :paginationEnabled="false">
    <slide v-for="(item, index) in carouselItems" :key="index">
      <carousel-item :item="item"></carousel-item>
    </slide>
  </carousel>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  import CarouselItem from '@/components/core/CarouselItem';

  export default {
    name: 'l-carousel',

    data() {
      return {
        maxItems: 10,
      };
    },

    computed: {
      carouselItems() {
        return this.$i18n.t('home.carousel.items');
      },
    },

    components: {
      Carousel,
      Slide,
      CarouselItem,
    },
  };
</script>

<style scoped>
  .carousel {
    display: flex;
    width: 100%;
    margin-top: 100px;
  }
</style>
