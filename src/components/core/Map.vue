<template>
  <div class="map-container">
    <div class="map">
      <gmap-map
        ref="map"
        :center="center"
        :zoom="14"
        style="width: 100%; height: 450px"
      >
        <gmap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker" />

        <gmap-polyline
          v-if="line.length > 0"
          :path="decodedPath" />
      </gmap-map>
    </div>
    <l-directions />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import decodePolyline from 'decode-google-map-polyline';

  import { LESTAUBIERE_COORDINATES } from '@/config/config';

  import LDirections from '@/components/core/Directions';

  export default {
    name: 'l-map',

    data() {
      return {
        center: LESTAUBIERE_COORDINATES,
      };
    },

    watch: {
      bounds() {
        if (this.bounds.southwest && this.bounds.southwest) {
          const bounds = new google.maps.LatLngBounds(this.bounds.southwest, this.bounds.northeast);
          this.$refs.map.fitBounds(bounds);
        }
      },
    },

    computed: {
      decodedPath() {
        return decodePolyline(this.line);
      },
      ...mapState({
        markers: state => state.map.markers,
        line: state => state.map.line,
        bounds: state => state.map.bounds,
      }),
    },

    components: {
      LDirections,
    },
  };
</script>

<style scoped>
  .map-container {
    display: flex;
    background-color: #ffffff;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  .map {
    position: relative;
    flex-basis: calc(100% - 300px);
  }
</style>
