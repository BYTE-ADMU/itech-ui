import axios from 'axios';

const articlesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    SORT: '?_sort=published_at',
    articles: [],
    // article: [],
    comments: []
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
          // commit('SET_ARTICLE', article);
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

    addComment({ state, commit, dispatch }, newComment) {
      // Start: temporarily add comment while waiting update to server
      let temporaryCommentsArray = state.comments;
      temporaryCommentsArray.push(newComment)
      commit('SET_COMMENTS', temporaryCommentsArray);
      // End: temporarily add comment while waiting update to server

      // Start: Send Request to server and wait response 
      axios.post(`${state.API_URL}/comments`, newComment).then(() => {
        axios.get(`${state.API_URL}/comments`).then(getCommentsResponse => {
          // console.log("getComments", getCommentsResponse.data)
          commit('SET_COMMENTS', getCommentsResponse.data);
          return getCommentsResponse.data;
        }).catch(getCommentsResponseError => console.log(getCommentsResponseError))
      }).catch(addCommentsResponseError => console.log(addCommentsResponseError))
      // End: Send Request to server and wait response 
    },

    updateComments({ state, commit }, newComments) {
      commit('SET_COMMENTS', newComments);
    },

  },

  // to handle mutations
  mutations: {
    // Start:Articles
    SET_ARTICLES: (state, articles) => state.articles = articles,
    // SET_ARTICLE: (state, article) => state.article = article,
    // End:Articles

    // Start:Comments
    SET_COMMENTS: (state, comments) => state.comments = comments,
    // End:Comments

  }
}

export default articlesStore;