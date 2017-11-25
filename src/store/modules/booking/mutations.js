import { ERROR_500 } from '@/config/config';

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

const mutations = {
  [REQUEST_BOOKING_SUBMIT](state) {
    state.loading = true;
    state.error = null;
    state.valid = false;
  },
  [FETCHED_BOOKING_SUBMIT_SUCCESS](state) {
    state.loading = false;
    state.valid = true;
    state.title = '';
    state.name = '';
    state.address = '';
    state.zipCode = '';
    state.city = '';
    state.country = '';
    state.email = '';
    state.phoneNumber = '';
    state.people = [''];
    state.numberOfPets = 0;
    state.equipment = '';
    state.electricity = '';
    state.dateOfArrival = '';
    state.dateOfDeparture = '';
    state.comment = '';
  },
  [FETCHED_BOOKING_SUBMIT_ERROR](state) {
    state.loading = false;
    state.error = ERROR_500;
  },
  [SET_BOOKING_TITLE](state, title) {
    state.title = title;
  },
  [SET_BOOKING_NAME](state, name) {
    state.name = name;
  },
  [SET_BOOKING_ADDRESS](state, address) {
    state.address = address;
  },
  [SET_BOOKING_ZIP_CODE](state, zipCode) {
    state.zipCode = zipCode;
  },
  [SET_BOOKING_CITY](state, city) {
    state.city = city;
  },
  [SET_BOOKING_COUNTRY](state, country) {
    state.country = country;
  },
  [SET_BOOKING_EMAIL](state, email) {
    state.email = email;
  },
  [SET_BOOKING_PHONE_NUMBER](state, phoneNumber) {
    state.phoneNumber = phoneNumber;
  },
  [SET_PERSON](state, [index, person]) {
    state.people[index] = person;
  },
  [ADD_PERSON](state) {
    state.people = [...state.people, ''];
  },
  [REMOVE_PERSON](state, index) {
    state.people = state.people.filter((person, i) => i !== index);
  },
  [SET_BOOKING_NUMBER_OF_PETS](state, numberOfPets) {
    state.numberOfPets = numberOfPets;
  },
  [SET_BOOKING_EQUIPMENT](state, equipment) {
    state.equipment = equipment;
  },
  [SET_BOOKING_ELECTRICITY](state, electricity) {
    state.electricity = electricity;
  },
  [SET_BOOKING_DATE_OF_ARRIVAL](state, dateOfArrival) {
    state.dateOfArrival = dateOfArrival;
  },
  [SET_BOOKING_DATE_OF_DEPARTURE](state, dateOfDeparture) {
    state.dateOfDeparture = dateOfDeparture;
  },
  [SET_BOOKING_COMMENT](state, comment) {
    state.comment = comment;
  },
};

export default mutations;
