<template>
  <div>
    <p class="progress-bar">Progress: {{ progress }}%</p>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  computed: {
    progress() {
      const numCompleted = this.$store.state.todos.filter(
        (todo) => todo.completed == true
      ).length;
      const numTodos = this.$store.state.todos.length;
      return Math.round((numCompleted / numTodos) * 100);
    },
  },
};
</script>

<style scoped>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>