<template>
  <div class="booking-mentions container">
    <div class="booking-mentions__section" v-for="(section, index) in sections" :key="index">
      <h2 class="booking-mentions__title">{{ section.title }}</h2>
      <div class="booking-mentions__subsection" v-for="(subsection, index) in section.sections" :key="index">
        <h3 class="booking-mentions__subtitle">{{ subsection.title }}</h3>
        <p class="paragraph">{{ subsection.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-booking-mentions',

    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('bookingMentions.meta.title');
      },
      sections() {
        return this.$i18n.t('bookingMentions.sections');
      },
    },
  };
</script>

<style scoped>
  .booking-mentions {
    padding: 0 25px;
  }

  .booking-mentions__section:not(:first-of-type) .booking-mentions__title {
    margin-top: 50px;
  }

  .booking-mentions__subtitle {
    max-width: 800px;
    margin: 25px auto 10px;
    font-weight: bold;
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    .booking-mentions {
      padding: 0 10px;
    }
  }
</style>
