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
import moment from 'moment';

const currentDate = moment();

const openingDate = moment(`${currentDate.year()}-06-02`);
const closingDate = moment(`${currentDate.year()}-09-30`);
const nextOpeningDate = openingDate.clone().add(1, 'y');
const nextClosingDate = closingDate.clone().add(1, 'y');

let startDate = currentDate;

if (currentDate.isSameOrBefore(openingDate)) {
  startDate = openingDate;
} else if (currentDate.isSameOrAfter(closingDate)) {
  startDate = nextOpeningDate;
}

export default {
  name: 'l-date',

  data() {
    return {
      disabled: {
        to: startDate.toDate(),
        from: nextClosingDate.toDate(),
        ranges: [
          {
            from: closingDate.toDate(),
            to: nextOpeningDate.toDate(),
          },
        ],
      },
      openingDate: startDate,
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
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
