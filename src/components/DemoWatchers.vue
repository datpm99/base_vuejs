<template>
  <div>
    <h3>Demo Watchers</h3>
    <input type="text" v-model="name" />
    <input type="text" v-model="citys.name" />
    <input type="text" v-model="countrys.name" />
    <hr class="solid" />
  </div>
</template>

<script>
export default {
  name: "DemoWatchers",
  data() {
    return {
      name: "datpm",
      citys: {
        name: "London",
      },
      countrys: {
        name: "USA",
      },
    };
  },

  watch: {
    name(newValue, oldValue) {
      console.log("name change");
      console.log(newValue);
      console.log(oldValue);
    },

    "citys.name"(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },

    countrys: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>