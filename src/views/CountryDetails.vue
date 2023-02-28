<template>
  <div class="main">
    <div class="back" @click="this.$router.go(-1)">
      <figure class="back-arrow">
        <img src="@/assets/back-arrow.svg" alt="back-to-home" />
      </figure>
      <h4>Back</h4>
    </div>

    <div class="countryTile">
      <figure>
        <img
          :src="singleCountry?.flags?.svg"
          :alt="singleCountry.flags.alt"
          class="flag"
        />
      </figure>
      <div class="country-details">
        <h1>{{ singleCountry.name?.common }}</h1>
        <div>
          <b-list-group>
            <b-list-group-item
              ><strong> Population </strong>:
              {{ singleCountry.population }}</b-list-group-item
            >
            <b-list-group-item
              ><strong> Region </strong>:
              {{ singleCountry.region }}</b-list-group-item
            >
            <b-list-group-item
              ><strong> Sub Region </strong>:
              {{ singleCountry.subregion }}</b-list-group-item
            >
            <b-list-group-item
              ><strong> Capital(s)</strong>:
              <span v-for="capital in singleCountry.capital" :key="capital">
                {{ capital }},</span
              ></b-list-group-item
            >
            <b-list-group-item
              ><strong>Currencies</strong>:
              <span v-for="currency in singleCountry.currencies" :key="currency"
                >{{ currency.name }},</span
              ></b-list-group-item
            >
            <b-list-group-item
              ><strong>Languages</strong>:
              <span v-for="language in singleCountry.languages" :key="language"
                >{{ language }},</span
              ></b-list-group-item
            >
            <b-list-group-item
              ><strong>Border Countries</strong>:
              <span v-for="border in singleCountry.borders" :key="border">
                {{ border }}{{ "," + "  " }}</span
              ></b-list-group-item
            >
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "singleView",
  data: () => ({
    // country: "",
  }),
  created() {
    const countryName = this.$route.params.name;
    this.getSingleCountry(countryName);
  },
  computed: {
    ...mapGetters({
      singleCountry: "getCountryDetails",
    }),
  },
  methods: {
    ...mapActions({
      getSingleCountry: "fetchCountryDetails",
    }),
  },
};
</script>
<style scoped>
.main {
  padding: 40px 60px;
  background: var(--background-color-primary);
  color: var(--text-primary-color);
}

.flag {
  top: 0px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
}
figure {
  width: 600px;
}
figure img {
  width: 100%;
}
.info {
  width: 600px;
}
.info p {
  margin-bottom: 20px;
}
.back {
  cursor: pointer;
  display: flex;
  gap: 0 10px;
  margin-bottom: 40px;
  border-radius: 6px;
  background: var(--background-color-secondary);
  width: max-content;
  padding: 5px 10px;
}
h1 {
  margin-bottom: 50px;
}
.upperInfo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.lowerInfo {
  margin-top: 50px;
}
.back-arrow {
  width: 20px;
  height: 20px;
}

.countryTile {
  display: flex;
  padding-top: 70px;
}
.countryTile {
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;
}

.country-details {
  text-align: left;
  min-width: 400px;
  max-width: 650px;
  margin: 5px;
  width: 100%;
  padding-left: 40px;
}
.listDiv {
  display: flex;
}
.country-details ul {
  list-style: none;
  text-align: left;
  line-height: 20px;
  padding-left: 0;
  margin: 0 auto 0 0;
}
.country-details ul:last-child {
  margin: 0 0 0 auto;
}
@media only screen and (max-width: 600px) {
  .main {
    padding: 40px 28px;
  }
  .container {
    flex-direction: column;
  }
  .back {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
    border-radius: 2px;
    width: 104px;
    margin-bottom: 64px;
    justify-content: center;
    padding: 6px;
    background: var(--background-color-secondary);
  }
  figure {
    max-width: 320px;
  }
  .info {
    width: 100%;
  }
  .upperInfo {
    display: block;
  }
}
</style>
