<template>
  <div>
    <h3>Demo slot</h3>
    <DemoSlotModal>
      <template v-slot:body>
        <label>Email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="passowrd" name="password" />
        <label>Re-enter password</label>
        <input type="passowrd" name="password" />
      </template>
      <template v-slot:footer>
        <button>Login</button>
        <button>Cancel</button>
      </template>
    </DemoSlotModal>
    <hr class="solid" />
  </div>
</template>

<script>
import DemoSlotModal from "./DemoSlotModal.vue";
export default {
  name: "DemoSlot",
  components: {
    DemoSlotModal,
  },
};
</script>

<style>
</style>