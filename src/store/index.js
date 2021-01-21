import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        API_URL: 'https://calm-everglades-39473.herokuapp.com',
        token: '',
        user: {},
        isAuthenticated: false,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
        toggleAuthenticated(state) {
            state.isAuthenticated != state.isAuthenticated;
        }
    },
    actions: {
        async login ({state, commit}, {email, password}) {
            let data = {}

            try {
                const response = await axios.post(`${state.API_URL}/auth/local`, {
                    identifier: email,
                    password: password,
                });

                data = response.data;

                commit('setToken', data.jwt);
                commit('setUser', data.user);
                commit('toggleAuthenticated');

                // this.$router.push('/dashboard') doesn't work
            } catch(e) {
                console.log(e)
            }
        }
    },
    modules: {
    },
});

export default store;