import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    countries: null,
  },
  getters: {
    getCountries(state){
      return state.countries
    }
  },
  mutations: {
    SET_COUNTRY(state, payload){
      state.countries = payload
    }
  },
  actions: {
    async fetchCountry( {commit} ){
      
      const responseData = await axios
      .get('https://restcountries.com/v2/all')
      .then(response => (this.countryInfo = response.data))
      .catch(error => (this.error = error ))
      



      

    commit('SET_COUNTRY', responseData)

    
  },
}
})
