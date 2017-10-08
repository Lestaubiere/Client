<template>
  <carousel class="carousel"
            :perPage="1"
            :perPageCustom="[[600, 2], [800, 3], [960, 4]]"
            :navigationEnabled="true"
            :paginationEnabled="false"
            :navigationNextLabel="nextLabel"
            :navigationPrevLabel="previousLabel">
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
        nextLabel: '<span class="carousel__prev-label"></span>',
        previousLabel: '<span class="carousel__next-label"></span>',
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

<style>
  .carousel {
    display: flex;
    width: calc(100% - 64px);
    margin: 100px 0 0 32px;
  }

  .carousel__next-label {
    display: block;
    background: url(../../assets/icons/chevron-left.svg) no-repeat center;
    width: 16px;
    height: 16px;
  }

  .carousel__prev-label {
    display: block;
    background: url(../../assets/icons/chevron-right.svg) no-repeat center;
    width: 16px;
    height: 16px;
  }
</style>
