<template>
    <div class="carousel">
        <carousel-item v-for="(item, index) in carouselItems" :key="index" :item="item"></carousel-item>
    </div>
</template>

<script>
  import CarouselItem from '@/components/core/CarouselItem';

  export default {
    name: 'l-carousel',

    computed: {
      carouselItems() {
        return this.$i18n.t('home.carousel.items');
      },
    },

    components: {
      CarouselItem,
    },
  };
</script>

<style scoped>
  .carousel {
    display: flex;
    margin-top: 100px;
  }
</style>
