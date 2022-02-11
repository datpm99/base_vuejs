<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li v-if="isAuthenticated">
        Total todo: {{ todos.length }}
        <v-btn @click="loginOrLogout">Logout</v-btn>
      </li>
      <li v-else><v-btn @click="loginOrLogout">Login</v-btn></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["todos", "isAuthenticated"]),
  },
  methods: {
    loginOrLogout() {
      this.$store.commit("TOGGLE_AUTH");
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>