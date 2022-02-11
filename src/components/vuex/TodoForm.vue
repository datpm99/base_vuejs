<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" v-model="title" />
      <v-btn type="submit" class="btn-add">Add</v-btn>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
    };
  },

  methods: {
    ...mapMutations(["ADD_TODO"]),

    onSubmit(event) {
      event.preventDefault();
      const randomId = Math.floor(Math.random() * 100000 + 1);
      this.ADD_TODO({ id: randomId, title: this.title, completed: false });
      this.title = "";
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  width: 100%;
  color: #000;
  padding: 10px;
  margin: 6px;
  border: 1px solid black;
}

form {
  padding: 10px;
}

.btn-add {
  margin: 10px auto;
  padding: 10px;
  border: 0;
  display: block;
}
</style>