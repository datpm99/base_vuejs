<template>
  <div id="app">
    <DemoMethods />
    <DemoComputed />
    <DemoWatchers />
  </div>
</template>

<script>
import DemoMethods from "./components/DemoMethods.vue";
import DemoComputed from "./components/DemoComputed.vue";
import DemoWatchers from "./components/DemoWatchers.vue";

export default {
  name: "App",
  components: {
    DemoMethods,
    DemoComputed,
    DemoWatchers,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
