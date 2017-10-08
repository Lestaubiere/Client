<template>
  <div class="carousel__item">
    <a v-if="url" :href="url" target="_blank">
      <img :src="`../../${imagePath}`" :alt="`Logo ${name}`">
    </a>
    <img v-else :src="`../../${imagePath}`" :alt="`Logo ${name}`">
  </div>
</template>

<script>
  export default {
    name: 'l-carousel-item',

    props: {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: false,
      },
      imagePath: {
        type: String,
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
