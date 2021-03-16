import axios from 'axios';

const userStore = {
  namespaced: true,
  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    token: '',
    user: {},
    isAuthenticated: false,
    savedArticles: [],
    userSearch: "",
    isOpenSearchDropdown: false,
  }),

  // to handle state
  getters: {},

  //to handle actions
  actions: {
    async login({ state, commit }, { email, password }) {
      let data = {}

      try {
        // console.log(`${state.API_URL}/auth/local`);
        const response = await axios.post(`${state.API_URL}/auth/local`, {
          identifier: email,
          password: password,
        });

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

      } catch (e) {
        console.log(e)
      }
    },
    async register({ state, commit }, { username, email, password }) {
      axios
        .post(`${state.API_URL}/auth/local/register`, {
          username,
          email,
          password,
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
    },
    async infoReg({ state, commit }, { email, course, username }) {
      try {
        const res = await axios.post(`${state.API_URL}/user-informations`, {
          email,
          course,
          username,
        });
        // console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
    async logout({ state, commit }) {
      commit('toggleLogout');
    },

    updateUserSearch({ state, commit }, value) {
      commit('setUserSearch', value);
    },

    updateIsOpenSearchDropdown({ state, commit }, value) {
      commit('setIsOpenSearchDropdown', value);
    }

  },

  // to handle mutations
  mutations: {
    setToken(state, token) {
      state.token = token
    },

    setUser(state, user) {
      state.user = user
    },

    toggleAuthenticated(state) {
      state.isAuthenticated = true
    },

    toggleLogout(state) {
      state.isAuthenticated = false;
    },

    setUserSearch(state, value) {
      state.userSearch = value
    },

    setIsOpenSearchDropdown(state, value) {
      state.isOpenSearchDropdown = value
    },


  }
}

export default userStore;