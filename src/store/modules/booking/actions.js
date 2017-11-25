import moment from 'moment';

import { LESATUBIERE_API_URL, ERROR_500 } from '@/config/config';

import {
  REQUEST_BOOKING_SUBMIT,
  FETCHED_BOOKING_SUBMIT_SUCCESS,
  FETCHED_BOOKING_SUBMIT_ERROR,
  SET_BOOKING_TITLE,
  SET_BOOKING_NAME,
  SET_BOOKING_ADDRESS,
  SET_BOOKING_ZIP_CODE,
  SET_BOOKING_CITY,
  SET_BOOKING_COUNTRY,
  SET_BOOKING_EMAIL,
  SET_BOOKING_PHONE_NUMBER,
  SET_PERSON,
  ADD_PERSON,
  REMOVE_PERSON,
  SET_BOOKING_NUMBER_OF_PETS,
  SET_BOOKING_EQUIPMENT,
  SET_BOOKING_ELECTRICITY,
  SET_BOOKING_DATE_OF_ARRIVAL,
  SET_BOOKING_DATE_OF_DEPARTURE,
  SET_BOOKING_COMMENT,
} from './mutation-types';

const actions = {
  sendBooking({ commit }, [
    title,
    name,
    address,
    zipCode,
    city,
    country,
    email,
    phoneNumber,
    people,
    numberOfPets,
    equipment,
    electricity,
    dateOfArrival,
    dateOfDeparture,
    comment]) {
    commit(REQUEST_BOOKING_SUBMIT);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('name', name);
    formData.append('address', address);
    formData.append('zip_code', zipCode);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('number_pets', numberOfPets);
    formData.append('equipment', equipment);
    formData.append('electricity', electricity);
    formData.append('date_arrival', moment(dateOfArrival).format('DD-MM-YYYY'));
    formData.append('date_departure', moment(dateOfDeparture).format('DD-MM-YYYY'));
    formData.append('comment', comment);
    people.forEach((person) => {
      formData.append('people[]', moment(person).format('DD-MM-YYYY'));
    });

    fetch(`${LESATUBIERE_API_URL}/booking`, { method: 'POST', body: formData })
      .then((response) => {
        if (response.status === 200) {
          response.json().then(() => {
            commit(FETCHED_BOOKING_SUBMIT_SUCCESS);
          });
        } else {
          response.json().then((data) => {
            commit(FETCHED_BOOKING_SUBMIT_ERROR, data.error || ERROR_500);
          });
        }
      });
  },

  setBookingTitle({ commit }, title) {
    commit(SET_BOOKING_TITLE, title);
  },

  setBookingName({ commit }, name) {
    commit(SET_BOOKING_NAME, name);
  },

  setBookingAddress({ commit }, address) {
    commit(SET_BOOKING_ADDRESS, address);
  },

  setBookingZipCode({ commit }, zipCode) {
    commit(SET_BOOKING_ZIP_CODE, zipCode);
  },

  setBookingCity({ commit }, city) {
    commit(SET_BOOKING_CITY, city);
  },

  setBookingCountry({ commit }, country) {
    commit(SET_BOOKING_COUNTRY, country);
  },

  setBookingEmail({ commit }, email) {
    commit(SET_BOOKING_EMAIL, email);
  },

  setBookingPhoneNumber({ commit }, phoneNumber) {
    commit(SET_BOOKING_PHONE_NUMBER, phoneNumber);
  },

  setPerson({ commit }, [index, person]) {
    commit(SET_PERSON, [index, person]);
  },

  addPerson({ commit }) {
    commit(ADD_PERSON);
  },

  removePerson({ commit }, index) {
    commit(REMOVE_PERSON, index);
  },

  setBookingNumberOfPets({ commit }, numberOfPets) {
    commit(SET_BOOKING_NUMBER_OF_PETS, numberOfPets);
  },

  setBookingEquipment({ commit }, equipment) {
    commit(SET_BOOKING_EQUIPMENT, equipment);
  },

  setBookingElectricity({ commit }, electricity) {
    commit(SET_BOOKING_ELECTRICITY, electricity);
  },

  setBookingDateOfArrival({ commit }, dateOfArrival) {
    commit(SET_BOOKING_DATE_OF_ARRIVAL, dateOfArrival);
  },

  setBookingDateOfDeparture({ commit }, dateOfDeparture) {
    commit(SET_BOOKING_DATE_OF_DEPARTURE, dateOfDeparture);
  },

  setBookingComment({ commit }, comment) {
    commit(SET_BOOKING_COMMENT, comment);
  },
};

export default actions;
