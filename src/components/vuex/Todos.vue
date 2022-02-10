<template>
  <div class="todo-list">
    <ul v-if="auth.isAuthenticated">
      <li v-for="(todo,index) in todos" :key="`${todo.title}-${index}`">
        {{ todo.title }}
      </li>
    </ul>
    <p v-else style="text-align: center">Not authorired</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Todos",
  computed: mapState(["todos", "auth"]),
};
</script>

<style scoped>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}
.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}
</style>