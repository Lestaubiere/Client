<template>
  <div class="people-select">
    <div class="people-select__inputs">
      <datepicker class="datepicker" v-for="(value, index) in Array(Number(numberOfPeople)).length" :key="index" :value="people[index]" @input="(value) => handleDateChange(index, value)" />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: 'l-people-select',

    props: {
      required: {
        type: Boolean,
        required: true,
      },
    },

    computed: {
      ...mapState({
        numberOfPeople: state => state.booking.numberOfPeople,
        people: state => state.booking.people,
      }),
    },

    methods: {
      handleNumberChange(e) {
        if (e.target.value <= 8 && e.target.value >= 1) {
          this.setBookingNumberOfPeople(e.target.value);
        }
      },

      handleDateChange(index, value) {
        this.setPerson([index, value]);
      },

      ...mapActions({
        setBookingNumberOfPeople: 'setBookingNumberOfPeople',
        setPerson: 'setPerson',
        addPerson: 'addPerson',
        removePerson: 'removePerson',
      }),
    },

    components: {
      Datepicker,
    },
  };
</script>

<style scoped>
  .people-select {
    flex-grow: 1;
  }

  .people-select__container {
    display: flex;
    margin-bottom: 25px;
  }

  .input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .people-select__inputs {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
  }

  .datepicker {
    flex-basis: calc(100% / 3 - 10px);
    flex-grow: 0;
    margin: 0 5px 15px;
  }
</style>
