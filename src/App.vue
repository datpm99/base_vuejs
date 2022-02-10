<template>
  <div id="app">
    <DemoMethods />
    <DemoComputed />
    <DemoWatchers />
    <DemoFilters />
    <DemoProps name="demo props" />
    <DemoRef />
    <DemoEmit />
    <DemoSlot />
    <DemoMixin />
    <DemoCompositionApi />
    <DemoApi />
    <DemoKeyBroad />
  </div>
</template>

<script>
import DemoMethods from "./components/DemoMethods.vue";
import DemoComputed from "./components/DemoComputed.vue";
import DemoWatchers from "./components/DemoWatchers.vue";
import DemoFilters from "./components/DemoFilters.vue";
import DemoProps from "./components/DemoProps.vue";
import DemoRef from "./components/DemoRef.vue";
import DemoEmit from "./components/DemoEmit.vue";
import DemoSlot from "./components/DemoSlot.vue";
import DemoMixin from "./components/DemoMixin.vue";
import DemoCompositionApi from "./components/DemoCompositionApi.vue";
import DemoApi from "./components/DemoApi.vue";
import DemoKeyBroad from "./components/DemoKeyBroad.vue";

export default {
  name: "App",
  components: {
    DemoMethods,
    DemoComputed,
    DemoWatchers,
    DemoFilters,
    DemoProps,
    DemoRef,
    DemoEmit,
    DemoSlot,
    DemoMixin,
    DemoCompositionApi,
    DemoApi,
    DemoKeyBroad,
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
hr.solid {
  border-top: 1px solid #bbb;
}
</style>
