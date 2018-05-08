<template>
  <div class="booking-form">
    <form @submit.prevent="handleSubmit">
      <div class="booking-form__sections">
        <l-booking-form-section
          v-for="(section, index) in sections"
          :key="index"
          :section="section"
        />
      </div>
      <p class="paragraph booking-form__conditions">
        {{ conditions[0] }}
        <router-link :to="$t('menu.bookingMentions.path')">{{ conditions[1] }}</router-link>
        {{ conditions[2] }}
        <router-link :to="$t('menu.privacy.path')">{{ conditions[3] }}</router-link>
        {{ conditions[4] }}
      </p>
      <div class="booking-form__actions">
        <div class="booking-form__loader">
          <clip-loader :color="'#d9237f'" :size="'25px'" v-if="loading"></clip-loader>
        </div>
        <input class="booking-form__submit" type="submit" :value="button" :disabled="isDisabled" />
      </div>
    </form>
    <div class="booking-form__messages" v-if="error || valid">
      <p class="booking-form__valid" v-if="valid">{{ validMessage }}</p>
      <p class="booking-form__error" v-if="error === ERROR_500">{{ errorMessage }}</p>
      <p class="booking-form__error" v-if="error === INCOMPLETE_FORM">{{ incompleteFormMessage }}</p>
      <p class="booking-form__error" v-if="error === MAIL_FAILURE">{{ mailFailureMessage }}</p>
      <p class="booking-form__error" v-if="error === DEPARTURE_BEFORE_ARRIVAL">{{ departureBeforeArrivalMessage }}</p>
      <p class="booking-form__error" v-if="error === NO_PEOPLE">{{ noPeopleMessage }}</p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import ClipLoader from 'vue-spinner/src/ClipLoader';

  import { ERROR_500, INCOMPLETE_FORM, MAIL_FAILURE, DEPARTURE_BEFORE_ARRIVAL, NO_PEOPLE } from '@/config/config';

  import LBookingFormSection from '@/components/core/BookingFormSection';

  export default {
    name: 'l-booking-form',

    computed: {
      ...mapState({
        loading: state => state.booking.loading,
        title: state => state.booking.title,
        name: state => state.booking.name,
        address: state => state.booking.address,
        zipCode: state => state.booking.zipCode,
        city: state => state.booking.city,
        country: state => state.booking.country,
        email: state => state.booking.email,
        phoneNumber: state => state.booking.phoneNumber,
        people: state => state.booking.people,
        numberOfPets: state => state.booking.numberOfPets,
        equipment: state => state.booking.equipment,
        electricity: state => state.booking.electricity,
        dateOfArrival: state => state.booking.dateOfArrival,
        dateOfDeparture: state => state.booking.dateOfDeparture,
        comment: state => state.booking.comment,
        valid: state => state.booking.valid,
        error: state => state.booking.error,
      }),
      ERROR_500() {
        return ERROR_500;
      },
      INCOMPLETE_FORM() {
        return INCOMPLETE_FORM;
      },
      MAIL_FAILURE() {
        return MAIL_FAILURE;
      },
      DEPARTURE_BEFORE_ARRIVAL() {
        return DEPARTURE_BEFORE_ARRIVAL;
      },
      NO_PEOPLE() {
        return NO_PEOPLE;
      },
      isDisabled() {
        return this.title.length === 0 ||
               this.name.length === 0 ||
               this.address.length === 0 ||
               this.zipCode.length === 0 ||
               this.city.length === 0 ||
               this.country.length === 0 ||
               this.email.length === 0 ||
               this.phoneNumber.length === 0 ||
               this.people.length === 0 ||
               this.people[0] === '' ||
               this.equipment.length === 0 ||
               ((this.equipment !== 'mobilhome' || this.equipment !== 'villatent') && this.electricity.length === 0) ||
               this.dateOfArrival.length === 0 ||
               this.dateOfDeparture.length === 0 ||
               this.loading;
      },
      sections() {
        return this.$i18n.t('booking.form.sections');
      },
      conditions() {
        return this.$i18n.t('booking.form.conditions').split(/\{(.*?)\}/g);
      },
      button() {
        return this.$i18n.t('booking.form.button');
      },
      validMessage() {
        return this.$i18n.t('booking.form.messages.valid');
      },
      errorMessage() {
        return this.$i18n.t('booking.form.messages.ERROR_500');
      },
      incompleteFormMessage() {
        return this.$i18n.t('booking.form.messages.INCOMPLETE_FORM');
      },
      mailFailureMessage() {
        return this.$i18n.t('booking.form.messages.MAIL_FAILURE');
      },
      departureBeforeArrivalMessage() {
        return this.$i18n.t('booking.form.messages.DEPARTURE_BEFORE_ARRIVAL');
      },
      noPeopleMessage() {
        return this.$i18n.t('booking.form.messages.NO_PEOPLE');
      },
    },

    methods: {
      handleSubmit() {
        this.sendBooking([
          this.title,
          this.name,
          this.address,
          this.zipCode,
          this.city,
          this.country,
          this.email,
          this.phoneNumber,
          this.people,
          this.numberOfPets,
          this.equipment,
          this.electricity,
          this.dateOfArrival,
          this.dateOfDeparture,
          this.comment,
        ]);
      },

      ...mapActions({
        sendBooking: 'sendBooking',
      }),
    },

    components: {
      ClipLoader,
      LBookingFormSection,
    },
  };
</script>

<style scoped>
  .booking-form {
    max-width: 800px;
    margin: 0 auto;
  }

  .booking-form__item {
    display: flex;
    margin-bottom: 25px;
  }

  .booking-form__actions {
    display: flex;
  }

  .booking-form__input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .booking-form__required {
    margin: 5px 0 0 10px;
    color: #d9237f;
  }

  .booking-form__conditions {
    margin-bottom: 25px;
  }

  .booking-form__conditions a {
    color: #D9237F;
    text-decoration: none;
  }

  .booking-form__conditions a:hover {
    text-decoration: underline;
  }

  .booking-form__submit {
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

  .booking-form__submit:hover {
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 16px 0 rgba(0, 0, 0, 0.12);
  }

  .booking-form__submit:disabled {
    background-color: rgba(0, 0, 0, .4);
    cursor: default;
  }

  .booking-form__loader {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .booking-form__error,
  .booking-form__valid {
    margin-top: 25px;
    padding: 10px 25px;
    color: #ffffff;
    line-height: 22px;
    border-radius: 3px;
  }

  .booking-form__error {
    background-color: #B71C1C;
  }

  .booking-form__valid {
    background-color: #78bf45;
  }

  @media (max-width: 800px) {

  }

  @media (max-width: 600px) {
    .booking-form__actions {
      flex-direction: column-reverse;
    }

    .booking-form__submit {
      display: block;
      margin-left: 0;
      text-align: center;
    }

    .booking-form__loader {
      margin: 10px 0 0;
      justify-content: center;
    }

    .booking-form__submit {
      margin-right: 0;
    }
  }
</style>
