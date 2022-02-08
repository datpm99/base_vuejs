<template>
  <div id="app">
    <DemoMethods />
  </div>
</template>

<script>
import DemoMethods from "./components/DemoMethods.vue";

export default {
  name: "App",
  components: {
    DemoMethods,
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
