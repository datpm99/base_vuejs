<template>
  <div class="status-bar">
    <p>Done</p>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StatusBar",
  computed: {
    todos() {
      const temp = this.$store.state.todos.filter(
        (item) => item.completed == true
      );
      return temp;
    },
  },
};
</script>

<style scoped>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>