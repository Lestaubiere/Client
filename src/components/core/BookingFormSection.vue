<template>
  <div class="booking-form__section">
    <h3 class="booking-form__section-title">{{ section.name }}</h3>
    <div
      class="booking-form__row"
      v-for="(row, index) in section.rows"
      :key="index"
    >
      <l-input
        v-if="!(input.name === 'electricity' && (equipment === 'mobilhome' || equipment === 'villatent'))"
        :style="{flexBasis: `${100 / row.inputs.length}%`}"
        v-for="(input, index) in row.inputs"
        :key="index"
        :input="input"
      />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import LInput from '@/components/core/form/Input';

  export default {
    name: 'l-booking-form-section',

    props: {
      section: {
        type: Object,
        required: true,
      },
    },

    computed: {
      ...mapState({
        equipment: state => state.booking.equipment,
      }),
    },

    components: {
      LInput,
    },
  };
</script>

<style scoped>
  .booking-form__section {
    margin-bottom: 75px;
  }

  .booking-form__section-title {
    position: relative;
    margin-bottom: 50px;
    font-size: 1.25rem;
  }

  .booking-form__section-title::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #D9237F;
  }

  .booking-form__row {
    display: flex;
    margin-bottom: 25px;
  }

  @media (max-width: 800px) {
    .booking-form__row {
      flex-direction: column;
    }
  }
</style>
