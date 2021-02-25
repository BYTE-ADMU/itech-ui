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
        savedArticles: [],
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
        toggleAuthenticated(state) {
            state.isAuthenticated = true;
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
                
                alert("Logged In!");
                data = response.data;
                
                try {
                    const response = await axios.get(`${state.API_URL}/user-informations`);
                    const profiles = response.data;
                    const myProfile = profiles.filter(profile => profile.email == email);

                    if (myProfile.length == 0) {
                        try {
                            const res = await axios.post(`${state.API_URL}/user-informations`, {
                                email,
                                course: 'BYTE',
                                school_id_number: password,
                                username: '',
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    }
                } catch (e) {
                    console.log(e);
                }

                commit('setToken', data.jwt);
                commit('setUser', data.user);
                commit('toggleAuthenticated');

            } catch(e) {
                console.log(e)
            }
        },
        async register({state, commit}, {username, email, password}) {
            axios
                .post(`${state.API_URL}/auth/local/register`, {
                    username,
                    email,
                    password,
                })
                .then(response => {
                    commit('setUser', response.data.user);
                    commit('setToken', response.data.jwt);
                    commit('toggleAuthenticated');
                })
                .catch(error => {
                    // Handle error.
                    console.log('An error occurred:', error.response);
                });
        }
    },
    modules: {
    },
});

export default store;