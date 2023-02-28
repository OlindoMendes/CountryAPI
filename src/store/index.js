import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    countries: [],
    countryDetails: null,
  },
  getters: {
    getCountries(state) {
      return state.countries;
    },
    getCountryDetails(state) {
      return state.countryDetails;
    },
  },
  mutations: {
    SET_COUNTRY(state, payload) {
      state.countries = payload;
    },
    SET_COUNTRY_DETAILS(state, payload) {
      state.countryDetails = payload;
    },
  },
  actions: {
    async fetchCountry({ commit }) {
      const responseData = await axios
        .get("https://restcountries.com/v2/all")
        .then((response) => response.data)
        .catch((error) => error);

      commit("SET_COUNTRY", responseData);
    },
    async fetchCountryDetails({ commit }, countryName) {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName} `
        );
        commit("SET_COUNTRY_DETAILS", response.data[0]);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
