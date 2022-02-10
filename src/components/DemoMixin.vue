<template>
  <div>
    <h3>Demo mixin</h3>
    <p v-show="modalVisible">modalVisible</p>
    <button @click="openModal">Open</button>
    <button @click="closeModal">Close</button>
    <hr class="solid" />
  </div>
</template>


<script>
import modalVisibleMixin from "@/mixins/modalVisible.js";
export default {
  name: "DemoMixin",
  mixins: [modalVisibleMixin],
};
</script>

<style>
</style>