<template>
  <div>
    <h3>Demo Filters</h3>
    <p>{{ name | capitalize }}</p>
    <hr class="solid" />
  </div>
</template>

<script>
export default {
  name: "DemoFilters",
  data() {
    return {
      name: "datpm",
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
</style>