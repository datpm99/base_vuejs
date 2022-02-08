<template>
  <div>
    <p>sum of number: {{ numberTotal }}</p>
  </div>
</template>

<script>
export default {
  name: "DemoComputed",
  data() {
    return {
      numbers: [1, 2, 3],
    };
  },
  computed: {
    numberTotal() {
      return this.numbers.reduce((sum, val) => sum + val);
    },
  },
};
</script>

<style>
</style>