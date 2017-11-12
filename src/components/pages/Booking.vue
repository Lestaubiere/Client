<template>
  <l-booking-form />
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
</style>
