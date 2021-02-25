import axios from 'axios';

const categoriesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    categories: []
  }),

  // to handle state
  getters: {
    allCategories: (state) => state.categories,
  },

  //to handle actions
  actions: {
    async getCategories({ state, commit }) {
      await axios.get(`${state.API_URL}/categories`)
        .then(response => {
          commit('SET_CATEGORIES', response.data)
        })
    }
  },

  // to handle mutations
  mutations: {
    SET_CATEGORIES: (state, categories) => state.categories = categories,
  }
}

export default categoriesStore;