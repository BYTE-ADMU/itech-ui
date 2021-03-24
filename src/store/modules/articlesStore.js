import axios from 'axios';

const articlesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    SORT: '?_sort=published_at',
    articles: [],
    comments: [],
    article: []
  }),

  // to handle state
  getters: {
    allArticles: (state) => state.articles,
  },

  //to handle actions
  actions: {
    getArticles({ state, commit }) {
      axios.get(`${state.API_URL}/articles${state.SORT}`).then(response => {
        commit('SET_ARTICLES', response.data);
        return response.data;
      }).catch(error => console.log(error))
    },

    getArticle({ state, commit }, id) {
      for (const article of state.articles) {
        if (article.id === id) {
          commit('SET_ARTICLE', article);
          return article;
        }
      }
    },

    getComments({ state, commit }) {
      axios.get(`${state.API_URL}/comments`).then(response => {
        commit('SET_COMMENTS', response.data);
        return response.data;
      }).catch(error => console.log(error))
    },

    addComment({ state, commit }, newComment) {
      axios.post(`${state.API_URL}/comments`, newComment).then(response => {
        commit('SET_COMMENTS', response.data);
      }).catch(error => console.log(error))
    },

    updateComments({ state, commit }, newComments) {
      commit('SET_COMMENTS', newComments);
    },

  },

  // to handle mutations
  mutations: {
    // Start:Articles
    SET_ARTICLES: (state, articles) => state.articles = articles,
    SET_ARTICLE: (state, article) => state.article = article,
    // End:Articles

    // Start:Comments
    SET_COMMENTS: (state, comments) => state.comments = comments,
    // End:Comments

  }
}

export default articlesStore;