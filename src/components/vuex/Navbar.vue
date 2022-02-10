<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Total todo: {{ totalTodos }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    totalTodos() {
      return this.$store.state.todos.length;
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