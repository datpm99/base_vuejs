<template>
  <div>
    <h3>Demo Props</h3>
    <p>{{ name }}</p>
    <hr class="solid" />
  </div>
</template>

<script>
export default {
  name: "DemoProps",
  props: {
    name: String,
  },
};
</script>

<style>
</style>