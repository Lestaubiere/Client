<template>
  <div class="home container">
    <div class="home__row">
      <div class="home__image-container">
        <div class="home__image">
          <img src="../../assets/photos/image_2.jpg" alt="Picture of the lake at Camping Lestaubière">
        </div>
      </div>
      <div class="home__content-container">
        <h1>{{ title }}</h1>
        <p class="paragraph"
          v-for="(paragraph, index) in mainContentOne"
          :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="home__paragraph-container">
        <p class="paragraph"
            v-for="(paragraph, index) in mainContentTwo"
            :key="index">
            {{ paragraph }}
          </p>
      </div>
    </div>
    <div class="home__row">
      <carousel></carousel>
    </div>
  </div>
</template>

<script>
  import Carousel from '@/components/core/Carousel';

  export default {
    name: 'l-home',

    metaInfo() {
      return {
        title: this.title,
      };
    },

    computed: {
      title() {
        return this.$i18n.t('home.meta.title');
      },
      mainContentOne() {
        return this.$i18n.t('home.content.main_one');
      },
      mainContentTwo() {
        return this.$i18n.t('home.content.main_two');
      },
    },

    components: {
      Carousel,
    },
  };
</script>

<style scoped>
  .home {
    padding: 0 25px;
  }

  .home__row {
    display: flex;
    flex-wrap: wrap;
  }

  .home__image-container,
  .home__content-container {
    order: 1;
    flex-basis: 50%;
  }

  .home__paragraph-container {
    order: 2;
    flex-basis: 100%;
    margin-top: 75px;
  }

  .home__image-container {
    display: flex;
    align-items: center;
    padding-right: 35px;
  }

  .home__content-container {
    padding: 35px 0 35px 35px;
  }

  .home__image {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .home__image > img {
    position: absolute;
    max-height: 100%;
    max-width: none;
    right: 0;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 960px) {
    .home__row {
      flex-direction: column;
    }

    .home__image-container {
      order: 10;
    }

    .home__image > img {
      position: initial;
      max-width: 100%;
    }

    .home__image-container {
      padding-right: 0;
      margin-top: 35px;
    }

    .home__content-container {
      padding: 0;
      margin-bottom: 15px;
    }

    .home__paragraph-container {
      margin-top: 0;
    }
  }

  @media (max-width: 600px) {
    .home {
      padding: 0 10px;
    }
  }
</style>
