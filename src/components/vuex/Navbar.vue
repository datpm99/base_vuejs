<template>
  <div class="navbar">
    <h1 class="text-h4 blue--text">Vuex App Todos</h1>

    <v-row class="mt-4" justify="center">
      <v-col cols="12" md="3" v-show="isAuthenticated">
        <h3 class="text-h5 success--text pl-4">
          Total Tasks:&nbsp;
          <v-fade-transition leave-absolute>
            <span :key="`tasks-${todos.length}`">
              {{ todos.length }}
            </span>
          </v-fade-transition>
        </h3>
      </v-col>

      <v-col cols="12" md="2">
        <v-btn @click="loginOrLogout" :color="getColorBtnLogin()">
          {{ getTextBtnLogin() }}
        </v-btn>
      </v-col>
    </v-row>

    <v-divider class="mt-4"></v-divider>
    <v-row class="my-1 align-center" justify="center"  v-show="isAuthenticated">
      <strong class="mx-4 info--text text--darken-2 mr-8">
        Remaining: {{ todos.length - doneTodos.length }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 success--text text--darken-2">
        Completed: {{ doneTodos.length }}
      </strong>

      <v-progress-circular
        :value="progress"
        class="ml-14"
        :size="40"
        color="teal"
      >
        {{ progress }}
      </v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["todos", "isAuthenticated", "doneTodos", "progress"]),
  },
  methods: {
    loginOrLogout() {
      this.$store.commit("TOGGLE_AUTH");
    },

    getTextBtnLogin() {
      if (this.isAuthenticated) return "Logout";
      return "Login";
    },

    getColorBtnLogin() {
      if (this.isAuthenticated) return "error";
      return "primary";
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 10px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>