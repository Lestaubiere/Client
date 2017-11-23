<template>
  <div class="select__container">
    <select class="select" @change="handleChange" :value="value" :required="required">
      <option disabled value="">Select a value</option>
      <option v-for="option in options"
              :key="option.value"
              :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'l-select',

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
  .select__container {
    position: relative;
    display: flex;
    flex-grow: 1;
  }

  .select__container::after {
    content: " ";
    position: absolute;
    top: 12px;
    right: 15px;
    width: 10px;
    height: 10px;
    display: block;
    border: 1px solid #000000;
    border-right: 0;
    border-top: 0;
    transform: rotate(-45deg);
    transform-origin: center;
  }

  .select {
    display: block;
    flex-grow: 1;
    padding: 10px 35px 10px 10px;
    background-color: #ffffff;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 0;
    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
  }
</style>
