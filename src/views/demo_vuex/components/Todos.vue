<template>
  <div>
    <v-text-field
      v-model="task"
      label="Add new task"
      solo
      @keydown.enter="addTodo"
      class="mt-4"
      ref="inputTask"
    >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="task" @click="addTodo"> mdi-plus-circle </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <v-card>
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in todos">
          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.completed"
                :color="(task.completed && 'success') || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="(task.completed && 'green--text') || 'black--text'"
                    class="ml-4"
                    v-text="task.title"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>
            <v-btn @click="DELETE_TODO(task.id)" class="mr-10 error">
              delete
            </v-btn>

            <v-scroll-x-transition>
              <v-icon v-show="task.completed" color="success">
                mdi-check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
          <v-divider :key="`divider-${i}`" v-show="i != todos.length - 1" />
        </template>
      </v-slide-y-transition>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "TodosVuex",
  data() {
    return {
      task: null,
    };
  },

  computed: {
    ...mapGetters(["todos"]),
  },

  created() {
    this.getTodos();
  },

  methods: {
    // changeCheckBox(todoId) {
    //   this.$store.commit("MARK_COMPLETE", todoId);
    // },
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