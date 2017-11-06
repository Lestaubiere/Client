<template>
  <div class="direction__item">
    <p class="direction__information" v-if="hours > 0 && minutes > 0">
      <span class="direction__information-label">Duration</span>
      <span class="direction__information-value">{{ hours > 0 ? `${hours}h ` : '' }}{{ minutes > 0 ? `${minutes}min` : '' }}</span>
    </p>
    <p class="direction__information" v-if="kilometers > 0">
      <span class="direction__information-label">Distance</span>
      <span class="direction__information-value">{{ kilometers }} km</span>
    </p>
    <p class="direction__instruction" v-html="step.instruction" />
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

    computed: {
      hours() {
        return Math.floor(this.step.duration / 3600);
      },
      minutes() {
        return Math.floor((this.step.duration % 3600) / 60);
      },
      kilometers() {
        return Math.round(this.step.distance / 1000);
      },
      formattedDuration() {
        const hours = Math.floor(this.step.duration / 3600);
        const minutes = Math.floor((this.step.duration % 3600) / 60);
        return `${hours > 0 ? `${hours}h ` : ''}${minutes > 0 ? `${minutes}min` : ''}`;
      },
      formattedDistance() {
        const kilometers = Math.round(this.step.distance / 1000);
        return `${kilometers} km`;
      },
    },
  };
</script>

<style>
  .direction__item {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .direction__information {
    margin-bottom: 10px;
  }

  .direction__information-label {
    font-weight: bold;
  }

  .direction__instruction {
    line-height: 22px;
    word-break: break-all;
  }

  .direction__instruction b {
    font-weight: bold;
  }

  .direction__instruction div {
    margin-top: 10px;
    font-style: italic;
  }
</style>
