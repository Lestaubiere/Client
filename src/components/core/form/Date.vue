<template>
  <datepicker
    :id="name"
    class="datepicker"
    :value="value"
    @input="handleChange"
    :required="required"
    :disabled="disabled"
    :openDate="openingDate"
    :language="lang"
    maximumView="day"
    :fullMonthName="true"
    format="dd MMMM yyyy"
    :mondayFirst="true"
  />
</template>

<script>
  import { mapState } from 'vuex';
  import Datepicker from 'vuejs-datepicker';

  import { OPENING_DATE, CLOSING_DATE } from '@/config/config';

  export default {
    name: 'l-date',

    data() {
      return {
        disabled: {
          to: OPENING_DATE,
          from: CLOSING_DATE,
        },
      };
    },

    props: {
      name: {
        type: String,
        required: true,
      },
      required: {
        type: Boolean,
        required: true,
      },
      action: {
        type: String,
        required: true,
      },
    },

    computed: {
      value() {
        return this.$store.state.booking[this.name];
      },
      openingDate() {
        return OPENING_DATE;
      },
      ...mapState({
        lang: state => state.i18n.lang,
      }),
    },

    methods: {
      handleChange(value) {
        this.$store.dispatch(this.action, value);
      },
    },

    components: {
      Datepicker,
    },
  };
</script>

<style>
  .datepicker {
    flex-grow: 1;
  }

  .datepicker > div:not(.vdp-datepicker__calendar) {
    display: flex;
  }

  .datepicker input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
  }
</style>
