<template>
  <div :class="`section ${isLeft ? 'section--left' : 'section--right'}`">
    <div class="section__image-container">
      <div class="section__images">
        <slider class="section__slider" :images="images"></slider>
      </div>
    </div>
    <div class="section__content-container">
      <h2>{{ title }}</h2>
      <p class="paragraph"
          v-for="(paragraph, index) in content"
          :key="index">
        {{ paragraph }}
      </p>
      <ul class="list" v-if="Array.isArray(list)">
        <li class="list__item"
            v-for="(item, index) in list"
            :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="section__actions-container" v-if="Array.isArray(actions)">
        <p class="section__action"
           v-for="(action, index) in actions"
           :key="index">
          <a v-if="action.url"
             class="button"
             :href="action.url"
             target="_blank" >
            {{ action.title }}
          </a>

          <router-link v-if="action.page"
                       class="button"
                       :to="`/${action.page}`" >
            {{ action.title }}
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from '@/components/core/Slider';

  export default {
    name: 'l-section',

    props: {
      index: {
        type: Number,
        required: true,
      },
      images: {
        type: Array,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      content: {
        type: Array,
        required: true,
      },
      list: {
        type: Array,
        required: false,
      },
      actions: {
        type: Array,
        required: false,
      },
    },

    computed: {
      isLeft() {
        return this.index % 2 === 0;
      },
    },

    components: {
      Slider,
    },
  };
</script>

<style scoped>
  .section {
    display: flex;
    margin: 100px 0;
  }

  .section.section--right {
    flex-direction: row-reverse;
  }

  .section:first-of-type {
    margin-top: 35px;
  }

  .section:last-of-type {
    margin-bottom: 35px;
  }

  .section__image-container,
  .section__content-container {
    flex-basis: 50%;
  }

  .section__image-container {
    display: flex;
    align-items: center;
  }

  .section--left .section__image-container  {
    padding-right: 35px;
  }

  .section--right .section__image-container  {
    padding-left: 35px;
  }

  .section--right .section__content-container {
    padding: 35px 0;
  }

  .section--left .section__content-container {
    padding-left: 35px;
  }

  .section--right .section__content-container {
    padding-right: 35px;
  }

  .section__images {
    position: relative;
    width: 100%;
    height: 500px;
  }

  .section__slider {
    position: absolute;
    height: 500px;
  }

  .section--left .section__slider {
    right: 0;
  }

  .section--right .section__slider {
    left: 0;
  }

  .section__actions-container {
    display: flex;
    margin: 25px 0;
  }

  .section__action {
    display: flex;
  }

  .section__action:not(:last-of-type) {
    margin-right: 15px;
  }

  @media (max-width: 960px) {
    .section.section--left,
    .section.section--right {
      flex-direction: column;
      margin: 0;
    }

    .section__image-container {
      margin-bottom: 35px;
    }

    .section--left .section__image-container {
      padding-right: 0;
    }

    .section--right .section__image-container {
      padding-left: 0;
    }

    .section__images {
      height: auto;
    }

    .section__slider {
      position: initial;
      height: auto;
    }

    .section--left .section__content-container {
      padding-left: 0;
    }

    .section--right .section__content-container {
      padding: 0;
    }
  }

  @media (max-width: 600px) {
    .section__actions-container {
      flex-direction: column
    }

    .section__action {
      margin: 10px 0;
    }

    .section__action:not(:last-of-type) {
      margin-right: 0;
    }
  }
</style>
