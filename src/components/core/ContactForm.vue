<template>
  <div class="contact-form">
    <div class="contact-form__messages" v-if="error || valid">
      <p class="contact-form__valid" v-if="valid">{{ validMessage }}</p>
      <p class="contact-form__error" v-if="error === ERROR_500">{{ errorMessage }}</p>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="contact-form__item">
        <input class="contact-form__input" v-model="name" type="text" :placeholder="namePlaceholder" required />
        <span class="contact-form__required">*</span>
      </div>
      <div class="contact-form__item">
        <input class="contact-form__input" v-model="email" type="email" :placeholder="emailPlaceholder" required />
        <span class="contact-form__required">*</span>
      </div>
      <div class="contact-form__item">
        <textarea class="contact-form__input" v-model="message" cols="30" rows="10" :placeholder="messagePlaceholder" required />
        <span class="contact-form__required">*</span>
      </div>
      <div class="contact-form__actions">
        <div class="contact-form__loader">
          <clip-loader :color="'#d9237f'" :size="'25px'" v-if="loading"></clip-loader>
        </div>
        <input class="contact-form__submit" type="submit" :value="button" :disabled="isDisabled" />
      </div>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import ClipLoader from 'vue-spinner/src/ClipLoader';

  import { ERROR_500 } from '@/config/config';

  export default {
    name: 'l-contact-form',

    beforeDestroy() {
      this.resetContactForm();
    },

    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },

    computed: {
      ...mapState({
        loading: state => state.contact.loading,
        valid: state => state.contact.valid,
        error: state => state.contact.error,
      }),
      ERROR_500() {
        return ERROR_500;
      },
      isDisabled() {
        return this.name.length === 0 || this.email.length === 0 || this.message.length === 0;
      },
      namePlaceholder() {
        return this.$i18n.t('contact.form.placeholders.name');
      },
      emailPlaceholder() {
        return this.$i18n.t('contact.form.placeholders.email');
      },
      messagePlaceholder() {
        return this.$i18n.t('contact.form.placeholders.message');
      },
      button() {
        return this.$i18n.t('contact.form.button');
      },
      validMessage() {
        return this.$i18n.t('contact.form.messages.valid');
      },
      errorMessage() {
        return this.$i18n.t('contact.form.messages.error');
      },
    },

    methods: {
      handleSubmit() {
        this.sendContactInformation([this.name, this.email, this.message]);
      },
      ...mapActions({
        sendContactInformation: 'sendContactInformation',
        resetContactForm: 'resetContactForm',
      }),
    },

    components: {
      ClipLoader,
    },
  };
</script>

<style scoped>
  .contact-form {
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-form__item {
    display: flex;
    margin-bottom: 25px;
  }

  .contact-form__actions {
    display: flex;
  }

  .contact-form__input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .contact-form__required {
    margin: 5px 0 0 10px;
    color: #d9237f;
  }

  .contact-form__submit {
    display: flex;
    align-items: center;
    margin: 0 20px;
    padding: 10px 25px;
    background-color: #d9237f;
    color: #ffffff;
    text-decoration: none;
    border-radius: 3px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: .2s ease;
  }

  .contact-form__submit:hover {
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 16px 0 rgba(0, 0, 0, 0.12);
  }

  .contact-form__submit:disabled {
    background-color: rgba(0, 0, 0, .4);
    cursor: default;
  }

  .contact-form__loader {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .contact-form__error,
  .contact-form__valid {
    margin-bottom: 25px;
    padding: 10px 25px;
    color: #ffffff;
    line-height: 22px;
    border-radius: 3px;
  }

  .contact-form__error {
    background-color: #B71C1C;
  }

  .contact-form__valid {
    background-color: #78bf45;
  }

  @media (max-width: 600px) {
    .contact-form__actions {
      flex-direction: column-reverse;
    }

    .contact-form__submit {
      display: block;
      margin-left: 0;
      text-align: center;
    }

    .contact-form__loader {
      margin: 10px 0 0;
      justify-content: center;
    }
  }
</style>
