import axios from 'axios';

const categoriesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    categories: []
  }),

  // to handle state
  getters: {},

  //to handle actions
  actions: {
    getCategories({ state, commit }) {
      axios.get(`${state.API_URL}/topics`)
        .then(response => {
          commit('SET_CATEGORIES', response.data)
        })
    }
  },

  // to handle mutations
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
  }
}

export default categoriesStore;
