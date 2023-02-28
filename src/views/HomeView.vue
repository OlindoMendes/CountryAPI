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
    <div class="select">
      <select name="region" id="region-id" v-model="selectedRegion">
        <option value="">Filter by Region</option>
        <option :value="region" v-for="region in regions" :key="region">
          {{ region }}
        </option>
      </select>
    </div>
  </div>

  <div class="tileGrid">
    <div
      class="countryTile"
      v-for="country in searchedCountry"
      :key="country.id"
    >
      <router-link
        :to="{ name: 'country-detail', params: { name: country.name } }"
        class="linkTile"
      >
        <img :src="country.flag" alt="Country Flag" class="flag" />
        <div class="text">
          <h5>{{ country.name }}</h5>
          <p><span>Population: </span>{{ country.population }}</p>
          <p><span>Region: </span> {{ country.region }}</p>
          <p><span>Capital: </span> {{ country.region }}</p>
        </div></router-link
      >
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
      selectedRegion: "",
      regions: [],
    };
  },
  created() {
    this.loadCountries();
  },
  mounted() {
    this.getRegions();
  },

  computed: {
    ...mapGetters({
      countries: "getCountries",
    }),
    searchedCountry() {
      if (this.search) {
        return this.countries.filter((country) =>
          country.name.toLowerCase().match(this.search.toLowerCase())
        );
      } else if (this.selectedRegion) {
        return this.countries.filter(
          (country) => country.region === this.selectedRegion
        );
      } else {
        return this.countries;
      }
    },
  },
  methods: {
    ...mapActions({
      loadCountries: "fetchCountry",
    }),
    getRegions() {
      const allRegions = this.countries.map((country) => country.region);

      const idealRegions = [...new Set(allRegions)];

      this.regions = idealRegions;
    },
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
  text-align: left;
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

.select {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 200px;
  height: 50px;
  text-align: center;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: var(--background-color-secondary);
  float: right;
  margin: -80px 80px;
}

select,
input {
  padding: 10px;
  border: none;
  width: 250px;
  outline: none;
  background: var(--background-color-secondary);
  color: var(--text-primary-color);
}
input::placeholder {
  color: var(--text-primary-color);
}
</style>
