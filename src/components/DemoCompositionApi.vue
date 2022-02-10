<template>
  <div>
    <h3>Demo Composition Api</h3>
    <!-- <p v-show="modalVisible">Text show</p>
    <button @click="openModal">show</button>
    <button @click="closeModal">hide</button> -->
    <hr class="doted" />
  </div>
</template>

<script>
import useChangeVisible from "@/compositionApis/useChangeVisible.js";
export default {
  name: "DemoCompositionApi",

  setup() {
    const { modalVisible, openModal, closeModal } = useChangeVisible();
    return { modalVisible, openModal, closeModal };
  },
};
</script>

<style>
</style>