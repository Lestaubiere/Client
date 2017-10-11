<template>
  <div class="leisure container">
    <div class="leisure__row leisure__row--left">
      <div class="leisure__image-container">
        <div class="leisure__image">
          <slider class="leisure__slider" :images="sportsSectionSlider"></slider>
        </div>
      </div>
      <div class="leisure__content-container">
        <h2>{{ sportsSectionTitle }}</h2>
        <p class="paragraph"
           v-for="(paragraph, index) in sportsSectionContent"
           :key="index">
          {{ paragraph }}
        </p>
        <ul class="list" v-if="Array.isArray(sportsSectionList)">
          <li class="list__item"
              v-for="(item, index) in sportsSectionList"
              :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="separator"></div>
    <div class="leisure__row leisure__row--right">
      <div class="leisure__content-container">
        <h2>{{ swimmingSectionTitle }}</h2>
        <p class="paragraph"
          v-for="(paragraph, index) in swimmingSectionContent"
          :key="index">
          {{ paragraph }}
        </p>
        <ul class="list" v-if="Array.isArray(swimmingSectionList)">
          <li class="list__item"
              v-for="(item, index) in swimmingSectionList"
              :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="leisure__image-container">
        <div class="leisure__image">
          <slider class="leisure__slider" :images="swimmingSectionSlider"></slider>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="leisure__row leisure__row--left">
      <div class="leisure__image-container">
        <div class="leisure__image">
          <slider class="leisure__slider" :images="animationSectionSlider"></slider>
        </div>
      </div>
      <div class="leisure__content-container">
        <h2>{{ animationSectionTitle }}</h2>
        <p class="paragraph"
          v-for="(paragraph, index) in animationSectionContent"
          :key="index">
          {{ paragraph }}
        </p>
        <ul class="list" v-if="Array.isArray(animationSectionList)">
          <li class="list__item"
              v-for="(item, index) in animationSectionList"
              :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from '@/components/core/Slider';

  export default {
    name: 'l-leisure',
    metaInfo() {
      return {
        title: this.title,
      };
    },

    computed: {
      title() {
        return this.$i18n.t('leisure.meta.title');
      },
      sportsSectionTitle() {
        return this.$i18n.t('leisure.sections.sports.title');
      },
      sportsSectionContent() {
        return this.$i18n.t('leisure.sections.sports.content');
      },
      sportsSectionList() {
        return this.$i18n.t('leisure.sections.sports.list');
      },
      sportsSectionSlider() {
        return this.$i18n.t('leisure.sections.sports.slider');
      },
      swimmingSectionTitle() {
        return this.$i18n.t('leisure.sections.swimming.title');
      },
      swimmingSectionContent() {
        return this.$i18n.t('leisure.sections.swimming.content');
      },
      swimmingSectionList() {
        return this.$i18n.t('leisure.sections.swimming.list');
      },
      swimmingSectionSlider() {
        return this.$i18n.t('leisure.sections.swimming.slider');
      },
      animationSectionTitle() {
        return this.$i18n.t('leisure.sections.animation.title');
      },
      animationSectionContent() {
        return this.$i18n.t('leisure.sections.animation.content');
      },
      animationSectionList() {
        return this.$i18n.t('leisure.sections.animation.list');
      },
      animationSectionSlider() {
        return this.$i18n.t('leisure.sections.animation.slider');
      },
    },

    components: {
      Slider,
    },
  };
</script>

<style scoped>
  .leisure {
    padding: 0 25px;
  }

  .leisure__row {
    display: flex;
    margin: 100px 0;
  }

  .leisure__row:first-of-type {
    margin-top: 35px;
  }

  .leisure__row:last-of-type {
    margin-bottom: 35px;
  }

  .leisure__image-container,
  .leisure__content-container {
    flex-basis: 50%;
  }

  .leisure__image-container {
    display: flex;
    align-items: center;
  }

  .leisure__row--left .leisure__image-container  {
    padding-right: 35px;
  }

  .leisure__row--right .leisure__image-container  {
    padding-left: 35px;
  }

  .leisure__row--right .leisure__content-container {
    padding: 35px 0;
  }

  .leisure__row--left .leisure__content-container {
    padding-left: 35px;
  }

  .leisure__row--right .leisure__content-container {
    padding-right: 35px;
  }

  .leisure__image {
    position: relative;
    width: 100%;
    height: 500px;
  }

  .leisure__slider {
    position: absolute;
    height: 500px;
  }

  .leisure__row--left .leisure__slider {
    right: 0;
  }

  .leisure__row--right .leisure__slider {
    left: 0;
  }

  @media (max-width: 960px) {
    .leisure__row {
      margin: 0;
    }

    .leisure__row.leisure__row--left {
      flex-direction: column;
    }

    .leisure__row.leisure__row--right {
      flex-direction: column-reverse;
    }

    .leisure__image-container {
      margin-bottom: 35px;
    }

    .leisure__row--left .leisure__image-container {
      padding-right: 0;
    }

    .leisure__row--right .leisure__image-container {
      padding-left: 0;
    }

    .leisure__image {
      height: auto;
    }

    .leisure__slider {
      position: initial;
      height: auto;
    }

    .leisure__row--left .leisure__content-container {
      padding-left: 0;
    }

    .leisure__row--right .leisure__content-container {
      padding: 0;
    }
  }

  @media (max-width: 600px) {
    .leisure {
      padding: 0 10px;
    }
  }
</style>
