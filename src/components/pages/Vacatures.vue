<template>
  <div class="vacatures container">
    <div class="vacatures__section">
      <h2>{{ title }}</h2>
      <div class="vacatures__content-container">
        <p class="paragraph"
            v-for="(paragraph, index) in vacaturesContentOne"
            :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="vacatures__list-container">
        <ul class="list">
          <li class="list__item"
              v-for="(item, index) in vacaturesList"
              :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="vacatures__content-container">
        <p class="paragraph"
            v-for="(paragraph, index) in vacaturesContentTwo"
            :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'l-vacatures',
    metaInfo() {
      return {
        title: this.title,
      };
    },

    computed: {
      title() {
        return this.$i18n.t('vacatures.meta.title');
      },
      vacaturesContentOne() {
        return this.$i18n.t('vacatures.contentOne');
      },
      vacaturesList() {
        return this.$i18n.t('vacatures.list');
      },
      vacaturesContentTwo() {
        return this.$i18n.t('vacatures.contentTwo');
      },
      ...mapState({
        lang: state => state.i18n.lang,
      }),
    },
  };
</script>

<style scoped>
  .vacatures {
    padding: 0 25px;
  }

  .vacatures__content-container {
    margin: 25px 0;
  }

  @media (max-width: 600px) {
    .vacatures {
      padding: 0 10px;
    }
  }
</style>
