<template>
  <div>
    <h3>Demo Ref</h3>
    <input type="text" ref="myInput" />
    <button @click="logRef">Get Ref</button>
    <hr class="solid" />
  </div>
</template>

<script>
export default {
  name: "DemoRef",
  methods: {
    logRef() {
      console.log(this.$refs.myInput);
      console.log(this.$refs.myInput.type);
      console.log(this.$refs.myInput.value);
    },
  },
};
</script>

<style>
</style>