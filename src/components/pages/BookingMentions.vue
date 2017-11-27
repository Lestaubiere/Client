<template>
  <div class="booking-mentions container">
    <p class="booking-mentions__print-container">
      <button class="booking-mentions__print" @click="handleClick">
        <img src="../../assets/icons/print.svg" />
      </button>
    </p>
    <div class="booking-mentions__section" v-for="(section, index) in sections" :key="index">
      <h2 class="booking-mentions__title">{{ section.title }}</h2>
      <div class="booking-mentions__subsection" v-for="(subsection, index) in section.sections" :key="index">
        <h3 class="booking-mentions__subtitle">{{ subsection.title }}</h3>
        <p class="paragraph">{{ subsection.content }}</p>
      </div>
    </div>
    <div class="booking-mentions__actions">
      <router-link
        class="button"
        :to="$t('menu.booking.path')"
      >
        {{ $t("bookingMentions.actions.form.label") }}
      </router-link>
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

    methods: {
      handleClick() {
        window.print();
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

  .booking-mentions__print-container {
    display: flex;
    justify-content: flex-end;
    max-width: 800px;;
    margin: 0 auto;
  }

  .booking-mentions__print {
    cursor: pointer;
  }

  .booking-mentions__print img {
    width: 25px;
  }

  .booking-mentions__actions {
    display: flex;
    justify-content: center;
    max-width: 800px;
    margin: 50px auto 0;
    text-align: center;
  }

  @media (max-width: 600px) {
    .booking-mentions {
      padding: 0 10px;
    }
  }
</style>
