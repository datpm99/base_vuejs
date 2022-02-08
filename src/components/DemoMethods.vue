<template>
  <div>
    <p>Status: {{ statusFromId(status) }}</p>

    <p v-for="(number, index) in numberPositive(numbers)" :key="index">
      {{ number }}
    </p>
  </div>
</template>

<script>
export default {
  name: "DemoMethods",
  data() {
    return {
      status: 1,
      numbers: [-1, 0, 5, 3, -6, 1],
    };
  },
  methods: {
    statusFromId(id) {
      const status = {
        0: "zero",
        1: "one",
        2: "two",
      }[id];
      return status || "Unknown status: " + id;
    },

    numberPositive(numbers) {
      return numbers.filter((number) => number >= 0);
    },
  },
};
</script>

<style>
</style>