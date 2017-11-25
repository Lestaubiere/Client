<template>
  <div class="people-select">
    <div class="people-select__inputs">
      <span class="datepicker__container" v-for="(value, index) in people" :key="index">
        <span class="datepicker__remove" v-if="index !== 0" @click.prevent="() => handleRemoveClick(index)">
          <svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="11" x2="11" y2="1" stroke="#999999" stroke-width="2"/>
              <line x1="1" y1="1" x2="11" y2="11" stroke="#999999" stroke-width="2"/>
          </svg>
        </span>
        <datepicker
          class="datepicker"
          :value="value"
          @input="(value) => handleDateChange(index, value)"
          :disabled="disabled"
          :fullMonthName="true"
          :language="lang"
          format="dd MMMM yyyy"
          :mondayFirst="true"
          initialView="year"
        />
      </span>
      <button class="people-select__button button" :disabled="people.length >= 8" @click.prevent="handleAddClick">Voeg een persoon toe</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Datepicker from 'vuejs-datepicker';

  import { CLOSING_DATE } from '@/config/config';

  export default {
    name: 'l-people-select',

    data() {
      return {
        disabled: {
          from: CLOSING_DATE,
        },
      };
    },

    props: {
      required: {
        type: Boolean,
        required: true,
      },
    },

    computed: {
      ...mapState({
        numberOfPeople: state => state.booking.numberOfPeople,
        people: state => state.booking.people,
        lang: state => state.i18n.lang,
      }),
    },

    methods: {
      handleAddClick() {
        this.addPerson();
      },

      handleRemoveClick(index) {
        this.removePerson(index);
      },

      handleDateChange(index, value) {
        this.setPerson([index, value]);
      },

      ...mapActions({
        setPerson: 'setPerson',
        addPerson: 'addPerson',
        removePerson: 'removePerson',
      }),
    },

    components: {
      Datepicker,
    },
  };
</script>

<style scoped>
  .people-select {
    flex-grow: 1;
  }

  .people-select__container {
    display: flex;
    margin-bottom: 25px;
  }

  .input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .people-select__inputs {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
  }

  .datepicker__container {
    position: relative;
    flex-basis: calc(100% / 3 - 10px);
    flex-grow: 0;
    margin: 0 5px 15px;
  }

  .datepicker__remove {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
    font-size: 0;
    cursor: pointer;
  }

  .datepicker__remove svg {
    width: 12px;
    height: 12px;
  }

  .people-select__button {
    height: 40px;
    flex-basis: calc(100% / 3 - 10px);
    margin: 0 5px 15px;
    padding: 10px 20px;
    font-size: .8rem;
    line-height: .8rem;
    transition: background-color .2s ease;
    cursor: pointer;
  }

  .people-select__button:disabled {
    background-color: rgba(0, 0, 0, .4);
    cursor: default;
  }

  @media (max-width: 800px) {
    .datepicker__container {
      flex-basis: calc(100% / 2 - 10px);
    }

    .people-select__button {
      flex-basis: calc(100% / 2 - 10px);
    }
  }

  @media (max-width: 600px) {
    .datepicker__container {
      flex-basis: calc(100% - 10px);
    }

    .people-select__button {
      flex-basis: calc(100% - 10px);
    }
  }
</style>
