import axios from "axios";
// export default {
//     state: {
//         todos: [],
//     },

//     getters: {
//         todos: state => state.todos,

//         doneTodos(state) {
//             return state.todos.filter(item => item.completed == true);
//         },

//         progress(state, getters) {
//             const doneTodo = getters.doneTodos.length;
//             return Math.round((doneTodo / state.todos.length) * 100);
//         },
//     },

//     //hoat dong dong bo.
//     mutations: {

//         MARK_COMPLETE(state, todoId) {
//             state.todos.map(todo => {
//                 if (todo.id === todoId) todo.completed = !todo.completed;
//                 return todo
//             });
//         },

//         DELETE_TODO(state, todoId) {
//             state.todos = state.todos.filter(item => item.id !== todoId);
//         },

//         ADD_TODO(state, newTodo) {
//             state.todos.unshift(newTodo);
//         },

//         SET_TODOS(state, todos) {
//             state.todos = todos;
//         }
//     },

//     //hoat dong bat dong bo.
//     actions: {
//         deleteTodo({ commit }, todoId) {
//             commit('DELETE_TODO', todoId);
//         },

//         addTodo({ commit }, newTodo) {
//             commit('ADD_TODO', newTodo);
//         },

//         async getTodos({ commit }) {
//             try {
//                 const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
//                 commit("SET_TODOS", response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//     }
// }

export default {
    state: {
        todos: [],
    },

    getters: {
        todos: state => state.todos,

        doneTodos(state) {
            return state.todos.filter(todo => todo.completed === true);
        },

        progress(state, getters) {
            const doneTodo = getters.doneTodos.length;
            return Math.round((doneTodo / state.todos.length) * 100);
        }
    },

    mutations: {
        MARK_COMPLETE(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed;
                return todo
            });
        },

        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        },

        ADD_TODO(state, newTodo) {
            state.todos.push(newTodo);
        },

        SET_TODOS(state, todos) {
            state.todos = todos;
        }

    },

    actions: {

        async getTodos({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
                commit("SET_TODOS", response.data);
            } catch (error) {
                console.log(error);

            }
        },

    },
}