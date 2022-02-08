<template>
  <div>
    <h1>Demo Watchers</h1>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  name: "DemoWatchers",
  data() {
    return {
      name: "datpm",
    };
  },

  watch: {
    name(newValue, oldValue) {
      console.log("name change");
      console.log(newValue);
      console.log(oldValue);
    },
  },
};
</script>

<style>
</style>