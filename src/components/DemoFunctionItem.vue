<template>
  <div>
    <span>{{ country.name }}</span>
    <button @click="deleteCountry(country)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "DemoFunctionItem",
  props: ["country", "deleteCountry"],
};
</script>

<style>
</style>