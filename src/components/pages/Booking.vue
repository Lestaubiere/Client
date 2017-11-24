<template>
  <div class="booking container">
    <l-booking-form />
  </div>
</template>

<script>
  import LBookingForm from '@/components/core/BookingForm';

  export default {
    name: 'l-booking',

    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('booking.meta.title');
      },
    },

    components: {
      LBookingForm,
    },
  };
</script>

<style scoped>
  .booking {
    padding: 0 25px;
  }

  @media (max-width: 600px) {
    .booking {
      padding: 0 10px;
    }
  }
</style>
