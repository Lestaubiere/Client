<template>
  <datepicker :id="name" class="datepicker" :value="value" @input="handleChange" :required="required" />
</template>

<script>
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: 'l-date',

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
