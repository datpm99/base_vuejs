<template>
  <div v-show="isAuthenticated">
    <p class="progress-bar">Progress: {{ progress }}%</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProgressBar",
  computed: {
    ...mapGetters(["progress", "isAuthenticated"]),
  },
};
</script>

<style scoped>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>