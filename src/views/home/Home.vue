<template>
  <v-app>
    <v-main>
      <Navbar />
      <Todos />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/vuex/Navbar";
import Todos from "@/components/vuex/Todos";

export default {
  name: "Home",
  components: {
    Navbar,
    Todos,
  },
};
</script>

<style>
</style>