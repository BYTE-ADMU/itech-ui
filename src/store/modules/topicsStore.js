import axios from 'axios';

const topicsStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    SORT: '?_sort=published_at',
    topics: []
  }),

  // to handle state
  getters: {},

  //to handle actions
  actions: {
    getTopics({ state, commit }) {
      axios.get(`${state.API_URL}/topics${state.SORT}`).then(response => {
        commit('SET_TOPICS', response.data);
        return response.data;
      })
    }
  },

  // to handle mutations
  mutations: {
    SET_TOPICS(state, topics) {
      state.topics = topics
    },
  }
}

export default topicsStore;
