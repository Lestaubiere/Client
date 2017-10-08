<template>
  <div class="carousel__item">
    <a :href="item.url" target="_blank">
      <img :src="`../../${item.image_path}`" :alt="`Logo ${item.name}`">
    </a>
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
</style>
