<template>
  <div class="direction__item">
    <span>Distance: {{step.distance}}</span>
    <span>Duration: {{step.duration}}</span>
    <span style="word-break: break-all;">{{step.instruction}}</span>
  </div>
</template>

<script>
  export default {
    name: 'l-direction-item',

    props: {
      step: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
</style>
