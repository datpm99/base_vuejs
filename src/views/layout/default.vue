<template>
  <v-app>
    <AppBar />
    <Main />
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/core/AppBar";
import Main from "@/components/core/Main";
import Footer from "@/components/core/Footer";
export default {
  name: "LayoutDefault",

  components: {
    AppBar,
    Main,
    Footer,
  },
};
</script>

<style>
</style>