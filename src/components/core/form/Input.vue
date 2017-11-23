<template>
  <div class="input__container">
    <label>
      <div class="input__label-container">
        <p class="input__label">{{ input.label }}</p>
        <span v-if="input.required" class="input__required">*</span>
      </div>
      <div class="input__item">
        <l-text :name="input.name" :required="input.required" :action="input.action" v-if="input.type === TYPE_TEXT" />
        <l-people-select :required="input.required" v-if="input.type === TYPE_PEOPLE" />
        <l-number :name="input.name" :required="input.required" :action="input.action" v-if="input.type === TYPE_NUMBER" />
        <l-email :name="input.name" :required="input.required" :action="input.action" v-if="input.type === TYPE_EMAIL" />
        <l-select :name="input.name" :required="input.required" :action="input.action" :options="input.options" v-if="input.type === TYPE_SELECT" />
        <l-date :name="input.name" :required="input.required" :action="input.action" v-if="input.type === TYPE_DATE" />
        <l-textarea :name="input.name" :required="input.required" :action="input.action" v-if="input.type === TYPE_TEXTAREA" />
      </div>
    </label>
  </div>
</template>

<script>
  import { TYPE_TEXT, TYPE_NUMBER, TYPE_EMAIL, TYPE_SELECT, TYPE_DATE, TYPE_TEXTAREA, TYPE_PEOPLE } from '@/config/config';

  import LText from '@/components/core/form/Text';
  import LNumber from '@/components/core/form/Number';
  import LEmail from '@/components/core/form/Email';
  import LSelect from '@/components/core/form/Select';
  import LDate from '@/components/core/form/Date';
  import LTextarea from '@/components/core/form/Textarea';
  import LPeopleSelect from '@/components/core/form/PeopleSelect';

  export default {
    name: 'l-input',

    props: {
      input: {
        type: Object,
        required: true,
      },
    },

    computed: {
      TYPE_TEXT() {
        return TYPE_TEXT;
      },
      TYPE_NUMBER() {
        return TYPE_NUMBER;
      },
      TYPE_EMAIL() {
        return TYPE_EMAIL;
      },
      TYPE_SELECT() {
        return TYPE_SELECT;
      },
      TYPE_DATE() {
        return TYPE_DATE;
      },
      TYPE_TEXTAREA() {
        return TYPE_TEXTAREA;
      },
      TYPE_PEOPLE() {
        return TYPE_PEOPLE;
      },
    },

    components: {
      LText,
      LNumber,
      LEmail,
      LSelect,
      LDate,
      LTextarea,
      LPeopleSelect,
    },
  };
</script>

<style scoped>
  .input__container {
    margin: 0 15px;
  }

  .input__label-container {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .input__label {
    font-weight: bold;
  }

  .input__item {
    display: flex;
  }

  .input__required {
    margin-left: 10px;
    color: #d9237f;
  }
</style>
