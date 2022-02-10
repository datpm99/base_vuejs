<template>
  <div>
    <h3>Demo Key Broad</h3>
    <input type="text" @keyup.enter="keyBroad" />
    <hr class="doted" />
  </div>
</template>

<script>
//https://vi.vuejs.org/v2/guide/events.html#Key-modifier
export default {
  name: "DemoKeyBroad",
  data() {
    return {
      a: 0,
      b: 0,
    };
  },
  methods: {
    keyBroad() {
      alert("Hello");
    },
  },
};
</script>

<style>
</style>