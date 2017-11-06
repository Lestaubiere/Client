<template>
  <div class="directions">
    <form @submit.prevent="handleSubmit">
      <input id="direction-departure" type="text" placeholder="Departure" />
      <input type="submit" value="Go" />
    </form>
    <div class="loader-container" v-if="loading">
      <clip-loader :color="'#D9237F'"></clip-loader>
    </div>
    <div v-else>
      <div>
        <span>Duration {{ route.duration }}</span>
        <span>Distance {{ route.distance }}</span>
      </div>
      <l-direction-item
        v-for="(step, index) in route.steps"
        :key="index"
        :step="step" />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import ClipLoader from 'vue-spinner/src/ClipLoader';

  import LDirectionItem from '@/components/core/DirectionItem';

  export default {
    name: 'l-directions',

    computed: {
      ...mapState({
        loading: state => state.map.loading,
        route: state => state.map.route,
      }),
    },

    methods: {
      handleSubmit(e) {
        const value = e.target.elements[0].value;
        this.fetchMapDirections(value);
      },
      ...mapActions({
        fetchMapDirections: 'fetchMapDirections',
      }),
    },

    components: {
      ClipLoader,
      LDirectionItem,
    },
  };
</script>

<style scoped>
  .directions {
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    max-height: 450px;
    overflow-y: scroll;
  }

  .loader-container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
</style>
