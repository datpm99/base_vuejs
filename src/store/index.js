import Vue from 'vue'
import Vuex from 'vuex'

//Import modules.
import auth from "./modules/auth";
import todo from "./modules/todo";

Vue.use(Vuex)

const storeData = {
    modules: {
        auth,
        todo,
    }
}

export default new Vuex.Store(storeData);

