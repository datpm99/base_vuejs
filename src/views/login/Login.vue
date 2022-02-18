<template>
  <v-app>
    <v-main class="bg-color align-center">
      <v-container class="justify-center d-flex">
        <v-card class="d-flex rounded-lg">
          <!-- Image background -->
          <div class="pa-1 white div-img">
            <img
              src="https://cdn.pixabay.com/photo/2021/10/19/17/51/road-6724201_960_720.jpg"
              alt="Image Login"
              width="416"
              height="592"
              class="img-res hidden-sm-and-down"
            />
          </div>

          <!-- Form Login -->
          <div class="div-form">
            <div class="div-form-child">
              <!-- Icon change lang -->
              <div class="div-lang">
                <v-menu
                  bottom
                  left
                  min-width="200px"
                  rounded
                  offset-y
                  origin="top right"
                  transition="scale-transition"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn icon x-large v-on="on">
                      <img :src="langImg" alt="vn" width="30" height="30" />
                    </v-btn>
                  </template>

                  <!-- Item menu -->
                  <v-card>
                    <v-list class="py-0">
                      <div v-for="(lang, index) in langs" :key="`lang${index}`">
                        <v-list-item
                          class="justify-center"
                          @click="changeLang(lang.value)"
                        >
                          <v-list-item-icon>
                            <img
                              :src="lang.icon"
                              alt="lang"
                              width="30"
                              height="30"
                            />
                          </v-list-item-icon>
                          <v-list-item-title>
                            <span class="body-1 mt-1">{{ $t(lang.text) }}</span>
                          </v-list-item-title>
                        </v-list-item>
                        <v-divider />
                      </div>
                    </v-list>
                  </v-card>
                </v-menu>
              </div>

              <!-- Form Login -->
              <p class="text-welcome mb-0">{{ $t("welcomeBack") }}</p>
              <p class="text-title mb-0">{{ $t("loginAccount") }}</p>

              <validation-observer
                ref="observer"
                tag="form"
                @submit.prevent="onLogin"
              >
                <p class="mt-4 mb-3 text-label">{{ $t("username") }}</p>
                <validation-provider
                  rules="required"
                  v-slot="{ errors }"
                  :name="$t('username')"
                >
                  <v-text-field
                    :placeholder="$t('enterUsername')"
                    prepend-inner-icon="mdi-account"
                    outlined
                    dense
                    v-model="username"
                    :error-messages="errors"
                  />
                </validation-provider>

                <p class="mb-3 text-label">{{ $t("password") }}</p>
                <validation-provider
                  :rules="rulePassword"
                  v-slot="{ errors }"
                  :name="$t('password')"
                >
                  <v-text-field
                    prepend-inner-icon="mdi-lock"
                    :placeholder="$t('enterPassword')"
                    outlined
                    dense
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    :error-messages="errors"
                    @click:append="showPass = !showPass"
                    v-model="password"
                  />
                </validation-provider>
                <v-btn block elevation="2" color="success" type="submit">
                  {{ $t("login") }}
                </v-btn>
              </validation-observer>
            </div>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import rules from "@/mixins/rules";
import { localize } from "vee-validate";
import moment from "moment";

export default {
  data() {
    return {
      username: "",
      password: "",
      showPass: false,
      langs: [
        {
          icon: require("../../assets/langs/vn.png"),
          text: "vietnamese",
          value: "vi",
        },
        {
          icon: require("../../assets/langs/us.png"),
          text: "english",
          value: "en",
        },
      ],
      langCode: "vi",
      langImg: require("../../assets/langs/vn.png"),
      listLangImg: {
        vi: require("../../assets/langs/vn.png"),
        en: require("../../assets/langs/us.png"),
      },
    };
  },

  created() {
    const langCode = localStorage.getItem("LANGUAGE");
    localize(langCode);
    this.langCode = langCode;
  },

  mixins: [rules],

  methods: {
    async onLogin() {
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        const expDate = moment().add(3000, "seconds").format();
        localStorage.setItem("TOKEN", "TOKEN");
        localStorage.setItem("TOKEN_EXP", expDate);
        localStorage.setItem("USERNAME", this.username);
        this.$router.push("/");
      }
    },

    changeLang(lang) {
      this.$refs.observer.reset();
      this.$root.$i18n.locale = lang;
      localize(lang);
      this.langCode = lang;
      this.langImg = this.listLangImg[lang];
      localStorage.setItem("LANGUAGE", lang);
    },
  },
};
</script>

<style scoped>
.bg-color {
  background: #e5e5e5;
}
.img-res {
  object-fit: cover;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.div-img {
  width: 420px;
  height: 600px;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.div-form {
  width: 420px;
  height: 600px;
  background-color: white;
  position: relative;
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
.div-lang {
  position: absolute;
  top: 0;
  right: 0;
}
</style>