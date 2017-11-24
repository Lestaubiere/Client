<template>
  <input :id="name" class="input" :value="value" @input="handleChange" type="text" :required="required" />
</template>

<script>
  export default {
    name: 'l-text',

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
      handleChange(e) {
        this.$store.dispatch(this.action, e.target.value);
      },
    },
  };
</script>

<style scoped>
  .input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
  }
</style>
