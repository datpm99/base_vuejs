<template>
  <v-container>
    <h3>DemoFor</h3>
    <div v-for="(city, index) in citys" :key="index">
      <span>{{ city.name }}</span>
    </div>
    <v-row class="mt-5">
      <v-col cols="12" sm="6" md="2" xs="12">
        <v-text-field
          label="City"
          outlined
          dense
          ref="inputCity"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn color="primary" @click="methodPush">Push</v-btn>
        <v-btn class="ml-4" color="primary" @click="methodPop">Pop</v-btn>
        <v-btn class="ml-4" color="primary" @click="methodShift">Shift</v-btn>
         <v-btn class="ml-4" color="primary" @click="methodUnShift">unShift</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DemoFor",
  data() {
    return {
      citys: [
        { id: 1, name: "London" },
        { id: 2, name: "NewYork" },
        { id: 3, name: "Tokyo" },
      ],
    };
  },
  methods: {
    methodPush() {
      const nameCity =
        this.$refs.inputCity.$el.getElementsByTagName("input")[0].value;
      this.citys.push({ id: 4, name: nameCity });
      this.$refs.inputCity.$el.getElementsByTagName("input")[0].value = "";
    },

    methodPop() {
      //remove last item of list.
      this.citys.pop();
    },

    methodShift() {
      //remove first item of list.
      this.citys.shift();
    },

    methodUnShift() {
      //add item in begining of list.
      // unshift(element0)
      // unshift(element0, element1)
      // unshift(element0, element1, ... , elementN)
      const city = { id: 5, name: "Paris" };
      this.citys.unshift(city);
    },
  },
};
</script>

<style scoped>
input {
  color: #2c3e50;
  border: 1px solid red;
}
</style>