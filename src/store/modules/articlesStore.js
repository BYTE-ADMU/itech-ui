import axios from 'axios';

const articlesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    articles: []
  }),

  // to handle state
  getters: {
    allArticles: (state) => state.articles,
  },

  //to handle actions
  actions: {
    async getArticles({ state, commit }) {
      await axios.get(`${state.API_URL}/articles`)
        .then(response => {
          commit('SET_ARTICLES', response.data)
        })
    }
  },

  // to handle mutations
  mutations: {
    SET_ARTICLES: (state, articles) => state.articles = articles,
  }
}

export default articlesStore;