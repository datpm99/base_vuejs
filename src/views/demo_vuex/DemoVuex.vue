<template>
  <v-container>
    <Header />
    <Todos />
  </v-container>
</template>

<script>
import Header from "./components/Header";
import Todos from "./components/Todos.vue";

export default {
  name: "DemoVuex",
  components: {
    Header,
    Todos,
  },
};
</script>