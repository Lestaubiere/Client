<template>
  <div class="prices container">
    <div class="prices__section">
      <h2>{{ pitchSectionTitle }}</h2>
      <l-price-table :header="pitchSectionTableHeader" :rows="pitchSectionTableRows" />
      <div class="prices__list-container">
        <ul class="list">
          <li class="list__item"
              v-for="(item, index) in pitchSectionList"
              :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="prices__action-container"
          v-for="(action, index) in pitchSectionActions"
          :key="index">
        <router-link v-if="action.page"
                      class="button"
                      :to="`${action.page}`" >
          {{ action.title }}
        </router-link>
      </div>
    </div>
    <div class="separator"></div>
    <div class="prices__section">
      <h2>{{ mobilhomeSectionTitle }}</h2>
      <l-price-table :header="mobilhomeSectionTableHeader" :rows="mobilhomeSectionTableRows" />
      <div class="prices__list-container">
        <ul class="list">
          <li class="list__item"
              v-for="(item, index) in mobilhomeSectionList"
              :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="prices__paragraph-container">
        <p class="paragraph"
          v-for="(paragraph, index) in mobilhomeSectionContent"
          :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="prices__action-container"
          v-for="(action, index) in mobilhomeSectionActions"
          :key="index">
        <router-link v-if="action.page"
                      class="button"
                      :to="`${action.page}`" >
          {{ action.title }}
        </router-link>
      </div>
    </div>
    <div class="separator"></div>
    <div class="prices__section">
      <h2>{{ availabilitiesSectionTitle }}</h2>
      <!-- <p class="paragraph prices__section-subtitle">{{ availabilitiesSectionSubtitle }}</p> -->
      <l-availabilities-table :header="availabilitiesSectionTableHeader" :rows="availabilitiesSectionTableRows" />
    </div>
  </div>
</template>

<script>
  import LPriceTable from '@/components/core/PriceTable';
  import LAvailabilitiesTable from '@/components/core/AvailabilitiesTable';

  export default {
    name: 'l-prices',

    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('prices.meta.title');
      },
      pitchSectionTitle() {
        return this.$i18n.t('prices.sections.pitch.title');
      },
      pitchSectionList() {
        return this.$i18n.t('prices.sections.pitch.list');
      },
      pitchSectionActions() {
        return this.$i18n.t('prices.sections.pitch.actions');
      },
      pitchSectionTableHeader() {
        return this.$i18n.t('prices.sections.pitch.table.header');
      },
      pitchSectionTableRows() {
        return this.$i18n.t('prices.sections.pitch.table.rows');
      },
      mobilhomeSectionTitle() {
        return this.$i18n.t('prices.sections.mobilhome.title');
      },
      mobilhomeSectionList() {
        return this.$i18n.t('prices.sections.mobilhome.list');
      },
      mobilhomeSectionContent() {
        return this.$i18n.t('prices.sections.mobilhome.content');
      },
      mobilhomeSectionActions() {
        return this.$i18n.t('prices.sections.mobilhome.actions');
      },
      mobilhomeSectionTableHeader() {
        return this.$i18n.t('prices.sections.mobilhome.table.header');
      },
      mobilhomeSectionTableRows() {
        return this.$i18n.t('prices.sections.mobilhome.table.rows');
      },
      availabilitiesSectionTitle() {
        return this.$i18n.t('prices.sections.availabilities.title');
      },
      availabilitiesSectionSubtitle() {
        return this.$i18n.t('prices.sections.availabilities.subtitle');
      },
      availabilitiesSectionTableHeader() {
        return this.$i18n.t('prices.sections.availabilities.table.header');
      },
      availabilitiesSectionTableRows() {
        return this.$i18n.t('prices.sections.availabilities.table.rows');
      },
    },

    components: {
      LPriceTable,
      LAvailabilitiesTable,
    },
  };
</script>

<style scoped>
  .prices {
    padding: 0 25px;
  }

  .prices__list-container,
  .prices__paragraph-container {
    margin: 35px 0;
  }

  .prices__paragraph-container {
    font-weight: bold;
    text-align: center;
  }

  .prices__action-container {
    max-width: 800px;
    margin: 35px auto;
    text-align: center;
  }

  .prices__section-subtitle {
    color: #F44336;
  }

  @media (max-width: 600px) {
    .prices {
      padding: 0 10px;
    }
  }
</style>
