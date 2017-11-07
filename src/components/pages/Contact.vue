<template>
  <div class="contact container">
    <l-map />
    <div class="separator"></div>
    <div class="contact__section">
      <div class="contact__info">
        <h2>{{ title }}</h2>
        <div class="contact__info-container">
          <div class="contact__info-item">
            <p class="contact__info-label">{{ address }}</p>
            <div class="contact__info-value-container">
              <p class="contact__info-value">Camping Lestaubière</p>
              <p class="contact__info-value">Pont Saint-Mamet</p>
              <p class="contact__info-value">24140, Douville</p>
              <p class="contact__info-value">France</p>
            </div>
          </div>
          <div class="contact__info-item">
            <p class="contact__info-label">{{ contact }}</p>
            <div class="contact__info-value-container">
              <p class="contact__info-value"><a href="tel:+33553829815">+33 5 53 82 98 15</a></p>
              <p class="contact__info-value"><a href="tel:+33682282397">+33 6 82 28 23 97</a></p>
              <p class="contact__info-value"><a href="mailto:lestaubiere@gmail.com">lestaubiere@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact__form">
        <l-contact-form />
      </div>
    </div>
  </div>
</template>

<script>
  import LMap from '@/components/core/Map';
  import LContactForm from '@/components/core/ContactForm';

  export default {
    name: 'l-contact',

    metaInfo() {
      return {
        title: this.metaTitle,
      };
    },

    computed: {
      metaTitle() {
        return this.$i18n.t('contact.meta.title');
      },
      title() {
        return this.$i18n.t('contact.form.title');
      },
      address() {
        return this.$i18n.t('contact.form.address');
      },
      contact() {
        return this.$i18n.t('contact.form.contact');
      },
    },

    components: {
      LMap,
      LContactForm,
    },
  };
</script>

<style scoped>
  .contact {
    padding: 0 25px;
  }

  .contact__section {
    display: flex;
  }

  .contact__info,
  .contact__form {
    flex-basis: 50%;
  }

  .contact__info-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .contact__info-item:not(:last-of-type) {
    margin-bottom: 30px;
  }

  .contact__info-label {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .contact__info-value {
    margin-bottom: 10px;
  }

  .contact__info-value a {
    color: #d9237f;
  }

  @media (max-width: 960px) {
    .contact__section {
      flex-direction: column;
    }

    .contact__info {
      text-align: center;
      margin-bottom: 50px;
    }

    h2::after {
      left: calc(50% - 35px / 2);
    }
  }

  @media (max-width: 600px) {
    .contact {
      padding: 0 10px;
    }
  }
</style>
