<template>
  <select class="select" @change="handleChange" :value="value" :required="required">
    <option disabled value="">{{ placeholder }}</option>
    <option v-for="option in options"
            :key="option.value"
            :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'l-select',

    props: {
      name: {
        type: String,
        required: true,
      },
      placeholder: {
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
      options: {
        type: Array,
        required: true,
      },
    },

    computed: {
      value() {
        return this.$store.state.booking[this.name];
      },
    },

    methods: {
      handleChange(e) {
        this.$store.dispatch(this.action, e.target.value);
      },
    },
  };
</script>

<style scoped>
  .select {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
  }
</style>
