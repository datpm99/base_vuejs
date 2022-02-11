<template>
  <div class="status-bar" v-show="isAuthenticated">
    <p>Done</p>
    <ul>
      <li v-for="(todo, index) in doneTodos" :key="index">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StatusBar",
  computed: {
    ...mapGetters(["doneTodos", "isAuthenticated"]),
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