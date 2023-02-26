<template>
  <div class="home">
    <div class="searchBar">
      <div class="searchContainer">
        <i class="fas fa-search searchIcon"></i>
        <input
          class="searchInput"
          type="text"
          v-model="search"
          aria-label="Search for a country..."
          placeholder="Search for a country..."
        />
       
      </div>
    </div>
    <!-- API response data -->
    <div class="tileGrid">
      <div
        class="countryTile"
        v-for="country in searchedCountry"
        :key="country.id"
      >
      <router-link 
          :to="{ name: 'country-detail', params: {country: country.name }}" 
          class="linkTile"
        >
        <img :src="country.flag" alt="Country Flag" class="flag" />
        <div class="text">
          <h5>{{ country.name }}</h5>
          <p><span>Population: </span>{{ country.population }}</p>
          <p><span>Region: </span> {{ country.region }}</p>
          <p><span>Capital: </span> {{ country.region }}</p>
        </div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.loadCountries();
  },

  computed: {
    ...mapGetters({
      countries: "getCountries",
    }),
    searchedCountry() {
      const result = this.countries.filter((country) => {
        return country.name.toLowerCase().match(this.search.toLowerCase());
      });
      console.log("result", result);
      return result;
    },
  },
  methods: {
    ...mapActions({
      loadCountries: "fetchCountry",
    }),
  },
};
</script>

<style scoped>
.home {
  background-color: #f9f9f9;
}

/* Search bar styles */
.searchBar {
  padding: 35px 75px;
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}
.searchContainer {
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  width: 500px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.searchInput {
  border: none;
  font-size: 14px;
  font-family: "Nunito Sans", sans-serif;
  width: 420px;
  outline: none;
}

.searchIcon {
  font-size: 16px;
  color: #848484;
  padding-right: 30px;
}



.tileGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px 50px 0;
  margin: 0 auto;
  max-width: 1450px;
}


.linkTile {
  display: inline-block;
  width: 300px;
  height: 365px;
  text-decoration: none;
  color: inherit;
}

.countryTile {
  display: inline-block;
  background-color: #fff;
  width: 300px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin: 0 25px 80px;
  text-decoration: none;
  color: inherit;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;
}

.flag {
  height: 180px;
  width: 300px;
  border-radius: 3px 3px 0 0;
}



@media (max-width: 875px) {
  .tileGrid {
    justify-content: center;
    padding-left: 50px;
  }
  .searchBar {
    flex-direction: column;
    padding: 25px 15px;
  }
  .searchContainer {
    width: inherit;
  }
  .dropdownDiv {
    margin-top: 40px;
  }
}
</style>
