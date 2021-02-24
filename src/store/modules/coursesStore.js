import axios from 'axios';

const coursesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    courses: []
  }),

  // to handle state
  getters: {},

  //to handle actions
  actions: {
    getCourses({ state, commit }) {
      axios.get(`${state.API_URL}/courses`)
        .then(response => {
          commit('SET_COURSES', response.data)
        })
    }
  },

  // to handle mutations
  mutations: {
    SET_COURSES(state, courses) {
      state.courses = courses
    },
  }
}

export default coursesStore;
