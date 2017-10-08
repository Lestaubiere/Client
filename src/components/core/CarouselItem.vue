<template>
  <div class="carousel__item">
    <a v-if="item.url" :href="item.url" target="_blank">
      <img :src="`../../${item.image_path}`" :alt="`Logo ${item.name}`">
    </a>
    <img v-else :src="`../../${item.image_path}`" :alt="`Logo ${item.name}`">
  </div>
</template>

<script>
  export default {
    name: 'l-carousel-item',

    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
