<template>
  <v-main class="color-bg align-center">
    <v-container class="justify-center d-flex">
      <img
        src="https://cdn.pixabay.com/photo/2021/10/19/17/51/road-6724201_960_720.jpg"
        alt="Image Login"
        width="420"
        height="600"
        class="res-img hidden-sm-and-down"
      />
      <div class="div-form">
        <div class="div-form-child">
          <p class="text-welcome mb-0">Welcome back</p>
          <p class="text-title mb-0">Login to your account</p>

          <validation-observer ref="observer" v-slot="{ invalid }">
            <form novalidate @submit.prevent="login">
              <p class="mt-4 mb-3 text-label">Username</p>
              <validation-provider
                rules="required"
                v-slot="{ errors }"
                name="Username"
              >
                <v-text-field
                  placeholder="Enter Username"
                  prepend-inner-icon="mdi-account"
                  outlined
                  dense
                  v-model="username"
                  :error-messages="errors"
                />
              </validation-provider>

              <p class="mb-3 text-label">Password</p>
              <validation-provider
                :rules="rulePassword"
                v-slot="{ errors }"
                name="Password"
              >
                <v-text-field
                  prepend-inner-icon="mdi-lock"
                  placeholder="Enter Password"
                  outlined
                  dense
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPass ? 'text' : 'password'"
                  :error-messages="errors"
                  @click:append="showPass = !showPass"
                  v-model="password"
                />
              </validation-provider>
              <v-btn
                block
                :disabled="invalid"
                elevation="2"
                color="success"
                type="submit"
              >
                Login
              </v-btn>
            </form>
          </validation-observer>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import rules from "@/mixins/rules";

export default {
  data() {
    return {
      username: "",
      password: "",
      showPass: false,
    };
  },
  mixins: [rules],
  methods: {
    onLogin() {
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>

<style scoped>
.color-bg {
  background: #e5e5e5;
}
.res-img {
  object-fit: cover;
}
.div-form {
  width: 420px;
  height: 600px;
  background-color: white;
  /* Center vertically and horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-form-child {
  margin: 50px;
}
.text-welcome {
  line-height: 19px;
  color: #2d3748;
}
.text-title {
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #1a202c;
}
.text-label {
  line-height: 19px;
  color: #4a5568;
}
</style>