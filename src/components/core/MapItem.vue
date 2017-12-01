<template>
  <a @click="showModal(imagePath)">
    <ellipse pointer-events="visible" :transform="transform" :cx="cx" :cy="cy" :rx="rx" :ry="ry"/>
  </a>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'l-map-item',

    props: {
      imagePath: {
        type: String,
        required: true,
      },

      transform: {
        type: String,
      },

      cx: {
        type: String,
        required: true,
      },

      cy: {
        type: String,
        required: true,
      },

      rx: {
        type: String,
        required: true,
      },

      ry: {
        type: String,
        required: true,
      },
    },

    methods: mapActions({
      showModal: 'showModal',
    }),
  };
</script>

<style scoped>
  a {
    cursor: pointer;
  }

  ellipse {
    fill: none;
  }
</style>
