<template>
  <div>
    <div class="input__container" v-if="input.type === TYPE_TEXT">
      <l-text :name="input.name" :placeholder="input.placeholder" :required="input.required" :action="input.action" />
      <span v-if="input.required" class="input__required">*</span>
    </div>
    <div class="input__container" v-if="input.type === TYPE_NUMBER">
      <l-number :name="input.name" :placeholder="input.placeholder" :required="input.required" :action="input.action" />
      <span v-if="input.required" class="input__required">*</span>
    </div>
    <div class="input__container" v-if="input.type === TYPE_EMAIL">
      <l-email :name="input.name" :placeholder="input.placeholder" :required="input.required" :action="input.action" />
      <span v-if="input.required" class="input__required">*</span>
    </div>
    <div class="input__container" v-if="input.type === TYPE_SELECT">
      <l-select :name="input.name" :placeholder="input.placeholder" :required="input.required" :action="input.action" :options="input.options" />
      <span v-if="input.required" class="input__required">*</span>
    </div>
    <div class="input__container" v-if="input.type === TYPE_DATE">
      <l-date :name="input.name" :placeholder="input.placeholder" :required="input.required" :action="input.action" />
      <span v-if="input.required" class="input__required">*</span>
    </div>
    <div class="input__container" v-if="input.type === TYPE_TEXTAREA">
      <l-textarea :name="input.name" :placeholder="input.placeholder" :required="input.required" :action="input.action" />
      <span v-if="input.required" class="input__required">*</span>
    </div>
    <div class="input__container" v-if="input.type === TYPE_PEOPLE">
      <l-people-select :placeholder="input.placeholder" :required="input.required" />
      <span v-if="input.required" class="input__required">*</span>
    </div>
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
    display: flex;
    margin-bottom: 25px;
  }

  .input__required {
    margin: 5px 0 0 10px;
    color: #d9237f;
  }
</style>
