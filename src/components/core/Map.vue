<template>
  <div class="map-container">
    <div class="map" v-if="hasConsent">
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
          :path="decodedPath"
          :options="{ strokeColor: '#34b3fe', strokeWeight: 5 }" />
      </gmap-map>
    </div>
    <div class="map__consent" v-else>
      <p>
        {{ consentMessage[0] }}
        <router-link class="map__link" :to="$t('menu.privacy.path')">{{ consentMessage[1] }}</router-link>
        {{ consentMessage[2] }}
      </p>
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

    mounted() {
      if (this.bounds.southwest && this.bounds.southwest) {
        setTimeout(() => {
          const bounds = new google.maps.LatLngBounds(this.bounds.southwest, this.bounds.northeast);
          this.$refs.map.fitBounds(bounds);
        }, 100);
      }
    },

    watch: {
      bounds() {
        if (this.bounds.southwest && this.bounds.southwest) {
          const bounds = new google.maps.LatLngBounds(this.bounds.southwest, this.bounds.northeast);
          this.$refs.map.fitBounds(bounds);
        } else if (this.markers.length > 0) {
          const bounds = new google.maps.LatLngBounds(this.markers[0]);
          this.$refs.map.fitBounds(bounds);
        }
      },
    },

    computed: {
      decodedPath() {
        return decodePolyline(this.line);
      },

      consentMessage() {
        return this.$i18n.t('contact.map.messages.consent').split(/\{(.*?)\}/g);
      },

      ...mapState({
        hasConsent: state => state.app.hasConsent,
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
    height: 450px;
  }

  .map__consent {
    position: relative;
    flex-basis: calc(100% - 300px);
    height: 450px;
    display: flex;
    align-items: center;
  }

  .map__consent p {
    margin: 0 35px;
    text-align: center;
    line-height: 1.5;
  }

  .map__link {
    color: #D9237F;
    text-decoration: none;
  }

  .map__link:hover {
    text-decoration: underline;
  }

  @media (max-width: 960px) {
    .map-container {
      flex-direction: column;
    }
  }
</style>
