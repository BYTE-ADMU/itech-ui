import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        API_URL: 'https://calm-everglades-39473.herokuapp.com',
        token: '',
        user: {},
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        login({state, commit}, username, password) {
            const { data } = await axios.post(`${state.API_URL}/auth/local`, {
                identifier: username,
                password: password,
            });

            commit('setToken', data.jwt);
            commit('setUser', data.user);
        }
    },
    modules: {
    },
});

export default store;