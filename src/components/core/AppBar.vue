<template>
  <v-app-bar app color="blue">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558"
      alt="Image vue"
      width="50"
      height="40"
    />
    <v-toolbar-title class="white--text">Demo Vue</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu bottom min-width="200px" rounded offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon x-large v-on="on">
          <v-avatar size="48">
            <img
              src="https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_960_720.jpg"
              alt="avatar"
              class="img-cover"
            />
          </v-avatar>
        </v-btn>
      </template>

      <v-card>
        <v-list-item-content class="justify-center pb-0">
          <div class="mx-auto text-center">
            <v-avatar size="48">
              <img
                src="https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_960_720.jpg"
                alt="avatar"
                class="img-cover"
              />
            </v-avatar>
            <h4 class="mt-1">{{ getUserName }}</h4>
            <p class="text-caption">@{{ getUserName }}</p>
            <v-divider />

            <v-list class="py-0">
              <div v-for="(item, i) in menuAccount" :key="`menuAcc-${i}`">
                <v-list-item @click="onMenuAccount(item.type)">
                  <v-list-item-icon>
                    <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title class="d-flex align-center">
                    <span class="body-1 mt-1">{{ item.name }}</span>
                  </v-list-item-title>
                </v-list-item>
                <v-divider v-show="i != menuAccount.length - 1" />
              </div>
            </v-list>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
    <div class="mr-1"></div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBarView",

  data() {
    return {
      menuAccount: [
        {
          icon: "mdi-account",
          name: "Account",
          type: 1,
        },
        {
          icon: "mdi-logout",
          name: "Logout",
          type: 2,
        },
      ],
    };
  },

  computed: {
    getUserName() {
      const userName = localStorage.getItem("USERNAME");
      return userName;
    },
  },

  methods: {
    onMenuAccount(type) {
      switch (type) {
        case 1:
          this.onAccount();
          break;
        case 2:
          this.onLogout();
          break;
        case 3:
          break;
        default:
          console.log("Sorry");
      }
    },

    onAccount() {},

    onLogout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style src="@/styles/app.scss" lang="scss" scoped>
</style>