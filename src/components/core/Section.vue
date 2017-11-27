<template>
  <div class="section">
    <div class="section__image-container">
      <div class="section__images">
        <slider class="section__slider" :images="section.slider"></slider>
      </div>
    </div>
    <div class="section__content-container">
      <h2 v-if="section.title">{{ section.title }}</h2>
      <p class="paragraph"
          v-for="(paragraph, index) in section.content"
          :key="index">
        {{ paragraph }}
      </p>
      <ul class="list" v-if="Array.isArray(section.list)">
        <li class="list__item"
            v-for="(item, index) in section.list"
            :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="section__actions-container" v-if="Array.isArray(section.actions)">
        <p class="section__action"
           v-for="(action, index) in section.actions"
           :key="index">
          <a v-if="action.url"
             class="button"
             :href="action.url"
             target="_blank" >
            {{ action.title }}
          </a>

          <router-link v-if="action.page"
                       class="button"
                       :to="`${action.page}`" >
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
      section: {
        type: Object,
        required: true,
      },
    },

    components: {
      Slider,
    },
  };
</script>

<style scoped>
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
    margin-bottom: 50px;
  }

  .section__actions-container {
    display: flex;
    max-width: 800px;
    margin: 25px auto;
  }

  .section__action {
    display: flex;
  }

  .section__action:not(:last-of-type) {
    margin-right: 15px;
  }

  @media (max-width: 960px) {
    .section__image-container {
      margin-bottom: 35px;
    }

    .section__images {
      height: auto;
    }

    .section__slider {
      position: initial;
      height: auto;
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
