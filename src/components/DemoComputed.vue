<template>
  <div>
    <h3>Demo Computed</h3>
    <p>sum of number: {{ numberTotal }}</p>
    <hr class="solid" />
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