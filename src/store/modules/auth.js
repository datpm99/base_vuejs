export default {
    state: {
        auth: {
            isAuthenticated: false,
        }
    },

    getters: {
        isAuthenticated: state => state.auth.isAuthenticated,
    },

    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated;
        }
    },

    actions: {}
}