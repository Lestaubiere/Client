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
          {{ paragraph.replace(/\{(mail)\}/g, '') }}
          <a v-if="paragraph.match(/\{(mail)\}/g)" class="vacatures__link" href="mailto:lestaubiere@gmail.com">lestaubiere@gmail.com</a>
        </p>
      </div>
      <div class="vacatures__image">
        <img src="../../../static/img/vacature/Vacature.jpg" alt="Animation at Camping Lestaubière">
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

  .vacatures__image {
    max-width: 650px;
    margin: 50px auto 0;
  }

  .vacatures__image img {
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }

  .vacatures__link {
    color: #D9237F;
    text-decoration: none;
  }

  .vacatures__link:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .vacatures {
      padding: 0 10px;
    }
  }
</style>
