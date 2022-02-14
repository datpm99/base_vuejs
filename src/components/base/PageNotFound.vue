<template>
  <v-container>
    <v-row justify="center">
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/416/499/non_2x/404-error-and-page-not-found-illustration-vector.jpg"
        alt="Page Not Found"
        width="600"
        height="400"
        class="res-Img"
      />
    </v-row>

    <v-row justify="center">
      <v-btn
        dark
        class="rounded-pill pa-5"
        elevation="3"
        color="pink lighten-2"
      >
        <router-link to="/" class="text-decoration-none white--text">
          GO BACK HOME
        </router-link>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.res-Img {
  max-width: 100%;
  height: auto;
}
</style>