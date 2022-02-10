DemoSlot<template>
  <div>
    <h3>Demo Emit</h3>
    <DemoEmitItem
      v-for="(city, index) in citys"
      :key="index"
      :city="city"
      @deleteCity="deleteCity"
    />

    <p>Send Function</p>
    <DemoFunctionItem
      v-for="(country, index) in countrys"
      :key="index + 10"
      :country="country"
      :deleteCountry="deleteCountry"
    />
    <hr class="solid" />
  </div>
</template>

<script>
import DemoEmitItem from "./DemoEmitItem.vue";
import DemoFunctionItem from "./DemoFunctionItem.vue";

export default {
  name: "DemoEmit",
  components: {
    DemoEmitItem,
    DemoFunctionItem,
  },
  data() {
    return {
      citys: [
        { id: 1, name: "London", value: true },
        { id: 2, name: "NewYork", value: false },
        { id: 3, name: "Tokyo", value: false },
      ],
      countrys: [
        { id: 4, name: "UK" },
        { id: 5, name: "USA" },
        { id: 6, name: "Japan" },
      ],
    };
  },
  methods: {
    deleteCity(city, msg) {
      console.log("city: ", city.name);
      this.citys = this.citys.filter((item) => item.id !== city.id);
      console.log(msg + " success!");
    },

    deleteCountry(country) {
      this.countrys = this.countrys.filter((item) => item.id != country.id);
    },
  },
};
</script>

<style scoped>
</style>