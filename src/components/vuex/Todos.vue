<template>
  <div class="todo-list">
    <v-text-field
      v-model="task"
      label="Add new task"
      solo
      @keydown.enter="addTodo"
      class="mt-4"
      v-show="isAuthenticated"
      ref="inputTask"
    >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="task" @click="addTodo"> mdi-plus-circle </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <v-card v-if="isAuthenticated">
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in todos">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.completed"
                :color="(task.completed && 'grey') || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="(task.completed && 'grey--text') || 'black--text'"
                    class="ml-4"
                    v-text="task.title"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>
            <v-btn @click="DELETE_TODO(task.id)" class="mr-10 error">delete</v-btn>

            <v-scroll-x-transition>
              <v-icon v-show="task.completed" color="success"> mdi-check </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>

    <p v-else class="not-auth">Not authorired</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Todos",
  data() {
    return {
      task: null,
    };
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
    ...mapMutations(["DELETE_TODO", "ADD_TODO"]),

    addTodo() {
      if (this.task === null) {
        alert("Bạn chưa nhập công việc!");
      } else {
        const randomId = Math.floor(Math.random() * 100000 + 1);
        this.ADD_TODO({ id: randomId, title: this.task, completed: false });
        this.task = null;
        console.log(this.$refs.inputTask.value);
        this.$refs.inputTask.blur();
      }
    },

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