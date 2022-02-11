<template>
  <div class="todo-list">
    <TodoForm v-show="isAuthenticated" />

    <v-text-field v-model="task" label="Add new task" solo @keydown.enter="create">
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="newTask" @click="create"> mdi-plus-circle </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <ul v-if="isAuthenticated">
      <li
        v-for="(todo, index) in todos"
        :key="`${todo.title}-${index}`"
        :class="{ completed: todo.completed }"
      >
        {{ todo.title }}
        <v-btn @click="DELETE_TODO(todo.id)">delete</v-btn>
        <input
          type="checkbox"
          :checked="todo.completed"
          @click="changeCheckBox(todo.id)"
        />
      </li>
    </ul>
    <p v-else class="not-auth">Not authorired</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import TodoForm from "./TodoForm.vue";

export default {
  name: "Todos",
  data() {
    return {
      task: "",
    };
  },
  components: {
    TodoForm,
  },
  computed: {
    ...mapGetters(["isAuthenticated", "todos"]),
  },

  created() {
    this.getTodos();
  },

  methods: {
    changeCheckBox(todoId) {
      this.$store.commit("MARK_COMPLETE", todoId);
    },
    ...mapMutations(["DELETE_TODO"]),

    // deleteTodo(todoId) {
    //   this.$store.dispatch("deleteTodo", todoId);
    // },
    ...mapActions(["deleteTodo", "getTodos"]),
  },
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
.not-auth {
  text-align: center;
  margin-top: 100px;
}
.todo-list li input[type="checkbox"] {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
  float: right;
}
.todo-list li.completed {
  background: rgb(119, 218, 243);
}
.todo-list li button:hover {
  cursor: pointer;
  background: red;
  color: white;
}
</style>