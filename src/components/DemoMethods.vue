<template>
  <div>
    <h3>Demo Methods</h3>
    <p>Status: {{ statusFromId(status) }}</p>

    <p v-for="(number, index) in numberPositive(numbers)" :key="index">
      {{ number }}
    </p>

    <p>The sum of the positive numbers is: {{ getPositiveNumbersSum() }}</p>
    <hr class="solid" />
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

    getPositiveNumbersSum() {
      return this.numberPositive(this.numbers).reduce((sum, val) => sum + val);
    },
  },
};
</script>

<style scoped>
</style>