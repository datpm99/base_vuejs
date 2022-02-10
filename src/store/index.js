import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [
            { id: 1, title: "Viec 1", completed: false },
            { id: 2, title: "Viec 2", completed: false },
            { id: 3, title: "Viec 3", completed: false },
        ],
        auth: {
            isAuthenticated: false,
        }
    }
}

export default new Vuex.Store(storeData);

