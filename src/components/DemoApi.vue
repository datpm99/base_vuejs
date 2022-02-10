<template>
  <div>
    <h3>Demo Api</h3>
    <div v-for="(todo, index) in todos" :key="index">
      <p>{{ todo.title }}</p>
    </div>
    <hr class="doted" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DemoApi",
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => (this.todos = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>