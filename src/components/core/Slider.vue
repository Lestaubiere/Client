<template>
  <div class="slider">
    <transition name="fade" mode="out-in">
      <div class="slider__image-container" ref="image" :style="imageStyle">
        <img
          class="slider__image"
          v-for="(image, index) in images"
          v-if="index === activeImageIndex"
          :key="index"
          :src="image.image_path"
          :alt="image.description"
          @touchstart="handleTouchStart"
          @touchend="handleTouched">
        </div>
    </transition>
    <div class="slider__navigation">
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="setCurrentImage(index)"
        :class="`slider__bullet ${index === activeImageIndex ? 'slider__bullet--active' : ''}`">&#9679;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'l-slider',

    props: {
      images: {
        type: Array,
        required: true,
      },
      delay: {
        type: Number,
        required: false,
        default: 1000,
      },
      automated: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    data() {
      return {
        activeImageIndex: 0,
        imageHeight: null,
        swipeStartX: null,
        swipeStartTime: null,
      };
    },

    computed: {
      imageStyle() {
        return this.imageHeight ? { height: `${this.imageHeight}px` } : null;
      },
    },

    mounted() {
      window.addEventListener('resize', this.handleResize);

      if (this.automated) {
        setInterval(this.changeCurrentImage, this.delay);
      }
    },

    beforeUpdate() {
      this.imageHeight = this.$refs.image.clientHeight;
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },

    methods: {
      changeCurrentImage() {
        if (this.activeImageIndex === this.images.length - 1) {
          this.activeImageIndex = 0;
        } else {
          this.activeImageIndex += 1;
        }
      },

      setNextImage() {
        if (this.activeImageIndex !== this.images.length - 1) {
          this.activeImageIndex += 1;
        }
      },

      setPreviousImage() {
        if (this.activeImageIndex !== 0) {
          this.activeImageIndex -= 1;
        }
      },

      setCurrentImage(index) {
        this.activeImageIndex = index;
      },

      handleResize() {
        this.imageHeight = this.$refs.image.clientHeight;
      },

      handleTouchStart(e) {
        this.swipeStartX = e.changedTouches[0].pageX;
      },

      handleTouched(e) {
        const swipeDistance = e.changedTouches[0].pageX - this.swipeStartX;

        if (swipeDistance <= -50) {
          this.setNextImage();
        } else if (swipeDistance >= 50) {
          this.setPreviousImage();
        }
      },
    },
  };
</script>

<style scoped>
  .slider__image {
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  .slider__navigation {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }

  .slider__bullet {
    display: block;
    margin: 0 5px;
    font-size: 1.5rem;
    opacity: 0.25;
    border-radius: 50%;
    transition: opacity .3s ease;
    cursor: pointer;
  }

  .slider__bullet.slider__bullet--active {
    opacity: .8;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

  @media (max-width: 960px) {
    .slider {
      flex-direction: column !important;
    }

    .slider__image {
      max-width: 100%;
    }

    .slider__navigation {
      display: flex;
      margin: 10px auto;
    }

    .slider__bullet {
      margin: 0 10px;
    }
  }
</style>
