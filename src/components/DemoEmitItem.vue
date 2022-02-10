<template>
  <div :class="['city-item', { isCompleted: city.value }]">
    <input type="checkbox" v-model="city.value" />
    {{ city.name }}
    <button @click="deleteCity">Delete</button>
  </div>
</template>

<script>
export default {
  name: "DemoEmitItem",
  props: ["city"],
  methods: {
    deleteCity() {
      this.$emit("deleteCity", this.city, "delete");
    },
  },
};
</script>

<style scoped>
.city-item {
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.isCompleted {
  text-decoration: line-through;
}
</style>