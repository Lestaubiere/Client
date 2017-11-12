import moment from 'moment';

import { LESATUBIERE_API_URL } from '@/config/config';

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
  SET_BOOKING_NUMBER_OF_PEOPLE,
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

    const data = new FormData();
    data.append('title', title);
    data.append('name', name);
    data.append('address', address);
    data.append('zip_code', zipCode);
    data.append('city', city);
    data.append('country', country);
    data.append('email', email);
    data.append('phone_number', phoneNumber);
    data.append('number_pets', numberOfPets);
    data.append('equipment', equipment);
    data.append('electricity', electricity);
    data.append('date_arrival', moment(dateOfArrival).format('DD-MM-YYYY'));
    data.append('date_departure', moment(dateOfDeparture).format('DD-MM-YYYY'));
    data.append('comment', comment);
    people.forEach((person) => {
      data.append('people[]', moment(person).format('DD-MM-YYYY'));
    });

    fetch(`${LESATUBIERE_API_URL}/booking`, { method: 'POST', body: data })
      .then((response) => {
        console.log(response);
        switch (response.status) {
          case 200:
            commit(FETCHED_BOOKING_SUBMIT_SUCCESS);
            break;
          case 500:
            commit(FETCHED_BOOKING_SUBMIT_ERROR);
            break;
          default:
            commit(FETCHED_BOOKING_SUBMIT_ERROR);
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

  setBookingNumberOfPeople({ commit }, numberOfPeople) {
    commit(SET_BOOKING_NUMBER_OF_PEOPLE, numberOfPeople);
  },

  setPerson({ commit }, [index, person]) {
    commit(SET_PERSON, [index, person]);
  },

  addPerson({ commit }, person) {
    commit(ADD_PERSON, person);
  },

  removePerson({ commit }, person) {
    commit(REMOVE_PERSON, person);
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
