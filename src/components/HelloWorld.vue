<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <div class="pa-7 secondary text-no-wrap rounded-pill">
              rounded-pill
            </div>
          </v-col>

          <v-col cols="12" md="3" class="text-center">
            <div
              class="pa-7 secondary rounded-circle d-inline-block elevation-10"
            ></div>
            <div>.rounded-circle</div>
          </v-col>

          <v-col cols="12" md="3">
            <div
              class="pa-7 rounded-lg rounded-t-0 red lighten-4 hidden-sm-and-up"
            ></div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
.div-red {
  width: 100px;
  height: 100px;
  color: red;
  background-color: coral;
  margin: 10px;
  display: inline-flex;
}
.p-red {
  text-overflow: unset;
  display: inline;
}
</style>
